const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Jason Stanley Yoman",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Your Full Stack Web 3 Developer",
    bio: "Let's build the future of DeFi together.",
    email: "jasonstanleyyoman@gmail.com",
    linkedin: "jasonstanleyyoman",
    github: "yoms07",
    instagram: "",
  },
  projects: [
    {
      name: `Wraffle (WIP)`,
      href: "https://raffle-fe-sand.vercel.app/browse",
    },
    {
      name: "Web3Tools (WIP)",
      href: "https://web3tools.dev",
    },
    {
      name: "Yapp",
      href: "https://yapp.ink",
    },

  ],
  // blog setting (required)
  blog: {
    title: "Jason's Personal Blog",
    description: "welcome to Jason's Personal Blog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
