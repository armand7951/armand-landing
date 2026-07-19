import { Profile } from '../types';

interface FooterProps {
  profile: Profile;
}

export default function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 text-zinc-500 py-12 md:py-16 text-xs">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Top Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-zinc-200/60">
          <div>
            <h4 className="text-zinc-800 font-semibold mb-3.5">旗下品牌</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://gathertaiwan.com" target="_blank" rel="noopener" className="hover:text-zinc-900 transition-colors">
                  Gather Taiwan (聚落台灣)
                </a>
              </li>
              <li>
                <a href="https://pikt.ag" target="_blank" rel="noopener" className="hover:text-zinc-900 transition-colors">
                  PikTag (數據平台)
                </a>
              </li>
              <li>
                <a href="https://dayinup.com" target="_blank" rel="noopener" className="hover:text-zinc-900 transition-colors">
                  DayInUp (自律社群)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-800 font-semibold mb-3.5">聯絡管道</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-zinc-900 transition-colors">
                  電子郵件 (Email)
                </a>
              </li>
              <li>
                <a href="https://gathertaiwan.com" target="_blank" rel="noopener" className="hover:text-zinc-900 transition-colors">
                  合作洽談
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h4 className="text-zinc-800 font-semibold mb-3.5">設計理念</h4>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              這座個人網站承襲 Apple 的極簡美學，融合流暢微交互與數位名片體驗。透過最純粹、直覺的視覺語彙，希望能讓你快速與我的空間、產品以及自律成長社群產生連結。
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-zinc-400">
              Copyright © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-zinc-400/80 mt-1">
              由極簡美學與 React + Tailwind 提供支持。
            </p>
          </div>

          <div className="flex items-center space-x-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
              Armand Personal Server Online
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
