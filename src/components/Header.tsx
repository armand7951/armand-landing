import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';
import { Profile } from '../types';

interface HeaderProps {
  profile: Profile;
  onOpenShare: () => void;
}

export default function Header({ profile, onOpenShare }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <span className="font-display tracking-widest text-sm font-semibold uppercase text-zinc-900">
            ARMAND
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-900"></span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium text-zinc-500">
          <a href="#gather-taiwan" className="hover:text-zinc-900 transition-colors">
            聚落台灣
          </a>
          <a href="#pikt-ag" className="hover:text-zinc-900 transition-colors">
            PikTag 平台
          </a>
          <a href="#dayinup" className="hover:text-zinc-900 transition-colors">
            天天向上
          </a>
          <button
            onClick={onOpenShare}
            className="hover:text-zinc-900 transition-colors cursor-pointer"
          >
            數位名片
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`mailto:${profile.email}`}
            className="flex items-center space-x-2 bg-zinc-900 text-white text-xs px-4 py-2 rounded-full font-medium hover:bg-zinc-800 transition-colors"
          >
            <span>與我聯絡</span>
            <ArrowUpRight className="h-3 w-3" />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={onOpenShare}
            className="p-1 text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
            title="分享名片"
          >
            <motion.span whileTap={{ scale: 0.9 }}>
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-100 mr-2 text-zinc-700">
                名片
              </span>
            </motion.span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-zinc-600 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100 cursor-pointer"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4 text-sm font-medium text-zinc-600">
              <a
                href="#gather-taiwan"
                onClick={() => setIsOpen(false)}
                className="py-1 hover:text-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>聚落台灣 (Gather Taiwan)</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400" />
              </a>
              <a
                href="#pikt-ag"
                onClick={() => setIsOpen(false)}
                className="py-1 hover:text-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>PikTag 數據平台</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400" />
              </a>
              <a
                href="#dayinup"
                onClick={() => setIsOpen(false)}
                className="py-1 hover:text-zinc-950 transition-colors flex items-center justify-between"
              >
                <span>天天向上成長社群</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400" />
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenShare();
                }}
                className="py-1 text-left hover:text-zinc-950 transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>數位名片 / 聯絡資訊</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400" />
              </button>
              <div className="pt-2 border-t border-zinc-100">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center space-x-2 bg-zinc-900 text-white text-sm py-2.5 rounded-xl font-medium"
                >
                  <Mail className="h-4 w-4" />
                  <span>發送電子郵件</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
