// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Develsopher's Blog",
  author: 'Develsopher',
  headerTitle: 'Develsopher',
  description: 'Frontend Developer Tech and Life Blog',
  language: 'ko-kr',
  theme: 'system', // system, dark or light
  siteUrl: 'https://develsopher.com',
  siteRepo: 'https://github.com/develsopher/develsopher-com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'jchae7184@gmail.com',
  github: 'https://github.com/develsopher',
  twitter: '#',
  rss: '/feed.xml',
  locale: 'ko-KR',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
