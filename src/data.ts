import { Profile, Project } from './types';

export const profileData: Profile = {
  name: "Armand",
  title: "Entrepreneur, Product Maker & Community Builder",
  location: "Taipei, Taiwan",
  bio: "一位專注於建立連結、打造數位產品，並推動創作者社群成長的創業者與開發者。深信「連結人與人」能創造出無限的可能性。",
  secondaryBio: "我喜愛簡約的設計、直覺的產品體驗，以及健康、充滿自律與成長的每日生活。目前致力於經營共同空間、數據分析工具，以及全台最活躍的創作者成長社群。",
  avatarUrl: "https://lh3.googleusercontent.com/d/1AMkl_wmR6k_QCqk_ZVJY1VmBu37nEza4",
  email: "Armand7951@gmail.com",
  skills: [
    "Community Building",
    "Product Strategy",
    "Full-Stack Dev",
    "UI/UX Design",
    "Digital Marketing",
    "Space Operations"
  ],
  socials: [
    {
      platform: "Company",
      url: "https://gathertaiwan.com/",
      icon: "Building2"
    },
    {
      platform: "Product",
      url: "https://pikt.ag/",
      icon: "Sparkles"
    },
    {
      platform: "Community",
      url: "https://dayinup.com/",
      icon: "Users2"
    },
    {
      platform: "Email",
      url: "mailto:Armand7951@gmail.com",
      icon: "Mail"
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: "gather-taiwan",
    title: "Gather Taiwan | 聚落台灣",
    subtitle: "人際網絡與實體空間的完美交會點",
    description: "Gather Taiwan 致力於打造一個匯聚創意、科技與文化工作者的優質共同工作空間與交流聚落。我們不只是提供一個座位，更建立了一個強大的在地與國際人脈網路，讓創作者與創業者能在這裡找到夥伴、獲得靈感、並加速事業成長。",
    url: "https://gathertaiwan.com/",
    role: "Founder / Space Operator",
    tags: ["實體空間", "社群連結", "商務聚落", "創業加速"],
    type: "company",
    themeColor: "from-zinc-900 to-zinc-800",
    textColor: "text-white",
    features: [
      "精心設計、激發靈感的實體共同工作空間",
      "定期舉辦高規格產業沙龍、跨界交流會與創作者聚會",
      "串連在地與國際創業者資源，搭建商務合作橋樑"
    ]
  },
  {
    id: "pikt-ag",
    title: "PikTag | 創作者標籤與數據平台",
    subtitle: "用數據與連結，點亮社群行銷的未來",
    description: "PikTag 是一個為創作者與品牌打造的智慧合作標籤與影響力數據平台。幫助品牌精準發現、比對並追蹤在 Instagram, Threads 等社群上的熱門創作者與合作標籤成效，讓每一份創意合作都有真實數據做後盾，創造可衡量的高額行銷回報。",
    url: "https://pikt.ag/",
    role: "Product Founder",
    tags: ["SaaS 產品", "數據分析", "社群行銷", "創作者經濟"],
    type: "product",
    themeColor: "from-orange-500 to-amber-600",
    textColor: "text-white",
    features: [
      "智慧標籤分析：追蹤社群趨勢與熱門互動話題",
      "創作者影響力評估：精準過濾、推薦最契合品牌的 KOL",
      "一鍵生成行銷成效報告，讓數據成果一目了然"
    ]
  },
  {
    id: "dayinup",
    title: "DayInUp | 天天向上成長社群",
    subtitle: "每日自律，與最優秀的人一同進化",
    description: "DayInUp 是台灣最活躍的自由工作者、創作者與遠距工作者「每日自律成長社群」。我們透過每日習慣養成、打卡挑戰、資源共享與線上小聚，將孤單的個人奮鬥轉化為集體前進的強大動力，一起在自由的路上保持紀律、實現自我。",
    url: "https://dayinup.com/",
    role: "Community Builder",
    tags: ["每日自律", "遠距工作", "打卡挑戰", "線上小聚"],
    type: "community",
    themeColor: "from-blue-600 to-indigo-700",
    textColor: "text-white",
    features: [
      "自律打卡系統：用挑戰和夥伴機制告別拖延症",
      "創作者乾貨庫：分享最新的遠距接案與行銷心法",
      "溫暖的交流氛圍：聚集全台熱愛生活與自由的自律靈魂"
    ]
  }
];
