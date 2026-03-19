import { Navigate } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

// Redirect to wedding-photography-slovenia which has the packages
export default function WeddingPackages() {
  return (
    <>
      <SEOHead
        title="Wedding Photography Packages | Proflipp"
        description="Discover wedding photography packages for timeless and elegant memories."
        canonical="/wedding-photography-packages"
      />
      <Navigate to="/wedding-photography-slovenia" replace />
    </>
  );
}
