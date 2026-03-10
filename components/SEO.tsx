import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
};

const SITE_NAME = "Find Me an Internship";

const upsertMetaTag = (name: string, content: string, attribute: "name" | "property" = "name") => {
  let tag = document.head.querySelector(`meta[${attribute}='${name}']`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

export default function SEO({ title, description, keywords, path = "/" }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    upsertMetaTag("description", description);
    upsertMetaTag("robots", "index, follow, max-image-preview:large");

    if (keywords) {
      upsertMetaTag("keywords", keywords);
    }

    const absoluteUrl = `${window.location.origin}${path}`;

    let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = absoluteUrl;

    upsertMetaTag("og:type", "website", "property");
    upsertMetaTag("og:site_name", SITE_NAME, "property");
    upsertMetaTag("og:title", fullTitle, "property");
    upsertMetaTag("og:description", description, "property");
    upsertMetaTag("og:url", absoluteUrl, "property");

    upsertMetaTag("twitter:card", "summary_large_image");
    upsertMetaTag("twitter:title", fullTitle);
    upsertMetaTag("twitter:description", description);
  }, [description, keywords, path, title]);

  return null;
}
