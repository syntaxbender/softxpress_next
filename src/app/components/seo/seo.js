import config from "@/app/configs/seo"

const Seo = (navObj) => {
  return {
    title: navObj.seo?.title ?
      `${navObj.seo.title} | ${config.siteName}`
      :
      `${navObj.title} | ${config.siteName}`,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
    authors: [{ name: navObj.seo?.author || config.defaultAuthor, url: navObj.seo?.authorUrl || config.defaultAuthorUrl }],
    // viewport: config.defaultViewPort,
    alternates: {
      canonical: navObj.link ? `${config.siteRootUrl}${navObj.link}` : config.siteRootUrl,
    },
    description: navObj.seo?.description || `${config.defaultDescription}`,
    openGraph: {
      title: navObj.title ? `${navObj.title} | ${config.siteName}` : config.siteName,
      description: navObj.seo?.description || `${config.defaultDescription}`,
      url: navObj.link ? `${config.siteRootUrl}${navObj.link}` : config.siteRootUrl,
      siteName: config.siteName,
      type: navObj.seo?.type || `${config.defaultType}`,
      locale: config.locale,
      images: navObj.seo?.openGraph?.image?.url ? [{
        url: navObj.seo?.openGraph.image.url || null,
        width: navObj.seo?.openGraph.image.width || null,
        height: navObj.seo?.openGraph.image.height || null,
        alt: navObj.seo?.openGraph.image.alt || null,
      }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: navObj.title ? `${navObj.title} | ${config.siteName}` : config.siteName,
      description: navObj.seo?.description || `${config.defaultDescription}`,
      images: navObj.seo?.openGraph?.image?.url ? [{ url: navObj.seo?.openGraph.image.url }] : [],
    },
    robots: navObj.seo?.robots || `${config.defaultRobots}`,
  }
}

export default Seo
