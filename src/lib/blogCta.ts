export type BlogTopic = "timeline" | "trema" | "video";

const topicSubjects: Record<BlogTopic, string> = {
  timeline: "Poizvedba: Poročna časovnica in termin",
  trema: "Poizvedba: Predporočno fotkanje / sproščene fotografije",
  video: "Poizvedba: Poročni video paketi",
};

const topicIntros: Record<BlogTopic, string> = {
  timeline: "Zanima me pomoč pri sestavljanju poročne časovnice.",
  trema: "Zanima me predporočno fotkanje in sproščen pristop k fotografiranju.",
  video: "Zanima me razpoložljivost in ponudba poročnih video paketov.",
};

/**
 * Build a mailto: link that prefills the inquiry topic and records
 * the blog post as the lead source in the email body.
 */
export function buildBlogMailto(topic: BlogTopic, source: string, extra?: string) {
  const subject = encodeURIComponent(topicSubjects[topic]);
  const bodyLines = [
    topicIntros[topic],
    "",
    extra ?? "",
    "—",
    `Vir: blog članek ${source}`,
    `Tema: ${topic}`,
  ].filter(Boolean);
  const body = encodeURIComponent(bodyLines.join("\n"));
  return `mailto:info@proflipp.com?subject=${subject}&body=${body}`;
}
