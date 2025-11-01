import { Helmet } from "react-helmet-async";

const SEOHead = ({ title, description, image, url }) => {
  const defaultTitle = "4-3-3 Media Network";
  const defaultDescription =
    "Your hub for Sports, Forex, Crypto, Films, Games, and News — all in one powerful media network.";
  const defaultImage = "/images/default-preview.jpg";
  const finalUrl = url || window.location.href;

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEOHead;