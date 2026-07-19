import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Building2, Users, ArrowUpRight, ChevronRight, Share2, Mail } from 'lucide-react';
import { profileData, projectsData } from './data';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import ProjectCard from './components/ProjectCard';
import InteractiveShare from './components/InteractiveShare';
import Footer from './components/Footer';

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Navigation Header */}
      <Header profile={profileData} onOpenShare={() => setIsShareOpen(true)} />

      {/* Main Content Area */}
      <main>
        {/* Profile / Hero Section */}
        <ProfileCard profile={profileData} onOpenShare={() => setIsShareOpen(true)} />

        {/* Section: Brands and Ventures */}
        <section id="projects-showcase" className="max-w-4xl mx-auto px-6 py-20">
          <div className="mb-14 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              我的事業與經營項目
            </h2>
            <p className="text-zinc-500 text-sm md:text-base mt-2 max-w-xl">
              從實體空間凝聚、AI 與社群大數據分析、到線上遠距自律成長社群。
            </p>
          </div>

          {/* Vertical Stack of Large Apple-Style Feature Cards */}
          <div className="space-y-12">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Dynamic Highlight Banner: Inspired by Apple's Keynote Slides */}
        <section className="bg-zinc-950 text-white py-16 md:py-24 relative overflow-hidden">
          {/* Decorative ambient gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-orange-500/20 to-transparent rounded-full blur-3xl opacity-60"></div>
          
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-[10px] font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="h-3.5 w-3.5 text-orange-400" />
              <span>Let's collaborate</span>
            </span>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              尋求跨界合作與產品火花？
            </h2>
            
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10">
              無論你是空間尋求者、創作者、品牌方，還是想參與每日的高效自律打卡，我都非常樂意與你聊聊，開啟全新的成長篇章。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${profileData.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-white text-zinc-950 hover:bg-zinc-100 font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-md"
              >
                <Mail className="h-4.5 w-4.5 text-zinc-800" />
                <span>發送電子郵件與我聯絡</span>
              </motion.a>

              <button
                onClick={() => setIsShareOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-800 font-semibold text-sm px-7 py-3.5 rounded-full transition-all cursor-pointer"
              >
                <Share2 className="h-4.5 w-4.5 text-zinc-400" />
                <span>取得我的數位名片卡</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer profile={profileData} />

      {/* Floating Apple Pass Wallet Widget */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsShareOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full p-4 shadow-xl border border-zinc-800 flex items-center justify-center group cursor-pointer"
        title="開啟我的數位名片"
      >
        <Share2 className="h-5 w-5 text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-24 group-hover:ml-2 transition-all duration-300 ease-out text-xs font-semibold whitespace-nowrap">
          取得名片
        </span>
      </motion.button>

      {/* Interactive Digital Business Card Modal */}
      <AnimatePresence>
        {isShareOpen && (
          <InteractiveShare
            profile={profileData}
            isOpen={isShareOpen}
            onClose={() => setIsShareOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

