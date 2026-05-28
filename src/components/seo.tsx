import { Helmet } from "react-helmet-async";

const SITE_NAME = "ZIMIH Wonder Co";
const BASE_URL = "https://zimihwonderco.co.za";
const DEFAULT_IMAGE = `${BASE_URL}/opengraph.jpg`;

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
};

export default function SEO({ title, description, canonical, image, type = "website", keywords }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const ogImage = image ?? DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
