import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createOpenAI } from "npm:@ai-sdk/openai";
import { streamText } from "npm:ai";
import { createLovableAiGatewayRunIdFetch } from "../_shared/run-id.ts";

const PACKAGES = `
FLIPP MINI – 2h – regular 600 €, offer 480 € (−20 %). Intimate ceremony, short couple shoot, group photos, details.
FLIPP INTIMATE – 4h – regular 1200 €, offer 960 €. Ceremony, congratulations, reception, more couple portraits.
FLIPP LOVE STORY – 6h – regular 1900 €, offer 1520 €. From getting ready or guest arrival to start of party.
FLIPP SIGNATURE – 8h – regular 2100 €, offer 1680 € (most recommended). Getting ready, first look, ceremony, couple shoot, speeches/cake/first dance if within time, evening light.
FLIPP FULL STORY – 12h – regular 2800 €, offer 2240 €. Full day from getting ready to dancing/party.
All packages: one photographer, edited high-res photos, online gallery. Wedding Content Video is a paid add-on by agreement. Travel costs depend on location.`;

const LANG: Record<string, string> = { si: "Slovenian", en: "English", de: "German", hr: "Croatian" };
const NAMES = ["FLIPP MINI", "FLIPP INTIMATE", "FLIPP LOVE STORY", "FLIPP SIGNATURE", "FLIPP FULL STORY"];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

  try {
    const body = await req.json().catch(() => null);
    const date = String(body?.date ?? "").slice(0, 40);
    const duration = String(body?.duration ?? "").slice(0, 100);
    const wishes = String(body?.wishes ?? "").slice(0, 1500);
    const lang = LANG[body?.lang] ? body.lang : "si";
    if (!wishes.trim() && !duration.trim()) return json({ error: "Missing description" }, 400);

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "AI not configured" }, 500);

    const runIdFetch = createLovableAiGatewayRunIdFetch();
    const provider = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
      fetch: runIdFetch.fetch,
    });

    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      system: `You are a friendly wedding photography advisor for Proflipp. Recommend exactly ONE package from this list based on the couple's info:\n${PACKAGES}\nReply ONLY with json: {"package": "<exact package name>", "summary": "<1-2 sentences>", "reasons": ["<reason>", "<reason>", "<reason>"], "tip": "<one short practical tip, e.g. add-on or alternative>"}. 3-4 reasons. Write all text in ${LANG[lang]}. Never invent prices or services not listed.`,
      prompt: `Wedding date: ${date || "unknown"}\nDesired duration: ${duration || "unknown"}\nWishes: ${wishes || "-"}`,
      abortSignal: req.signal,
      providerOptions: {
        openai: {
          store: false,
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          include: ["reasoning.encrypted_content"],
        },
      },
    });

    let text: string;
    try {
      text = await result.text;
    } catch (e) {
      const status = (e as { statusCode?: number })?.statusCode ?? 500;
      const msg = status === 429 ? "Too many requests, try again shortly." : status === 402 ? "AI credits exhausted." : "AI request failed.";
      return json({ error: msg }, status);
    }
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return json({ error: "Empty AI response" }, 502);
    const parsed = JSON.parse(match[0]);
    if (!NAMES.includes(parsed.package)) parsed.package = NAMES.find((n) => text.includes(n)) ?? "FLIPP SIGNATURE";
    parsed.reasons = Array.isArray(parsed.reasons) ? parsed.reasons.slice(0, 4).map(String) : [];
    return json(parsed);
  } catch (e) {
    console.error(e);
    return json({ error: "Unexpected error" }, 500);
  }
});
