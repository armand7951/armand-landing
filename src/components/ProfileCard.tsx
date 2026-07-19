import { motion } from 'motion/react';
import { MapPin, Mail, Sparkles, Building2, Users, ArrowDown, Share2 } from 'lucide-react';
import { Profile } from '../types';

interface ProfileCardProps {
  profile: Profile;
  onOpenShare: () => void;
}

export default function ProfileCard({ profile, onOpenShare }: ProfileCardProps) {
  return (
    <section className="relative w-full py-16 md:py-24 bg-zinc-50 border-b border-zinc-100 overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 space-y-8 md:space-y-0">
          
          {/* Avatar Area with Elegant Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-amber-500 rounded-full blur-md opacity-20 animate-pulse"></div>
            <div className="relative p-1.5 rounded-full bg-white border border-zinc-150/80 shadow-md">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover bg-zinc-100 shadow-inner"
                onError={(e) => {
                  // Fallback avatar if loading gets blocked
                  (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${profile.name}`;
                }}
              />
            </div>
            
            {/* Status indicator pill */}
            <div className="absolute bottom-1.5 right-1.5 bg-zinc-900 border border-zinc-850 text-white rounded-full p-2 shadow-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-orange-400" />
            </div>
          </motion.div>

          {/* Text and Bio Info */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Location Tag */}
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium mb-4">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                <span>{profile.location}</span>
              </div>

              {/* Title & Name */}
              <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                我是 <span className="text-zinc-900">{profile.name}</span>
              </h1>
              <p className="font-display text-lg md:text-xl font-medium text-zinc-500 mt-2">
                {profile.title}
              </p>

              {/* Bio block */}
              <p className="text-zinc-700 text-sm md:text-base leading-relaxed mt-6 max-w-xl">
                {profile.bio}
              </p>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mt-3 max-w-xl">
                {profile.secondaryBio}
              </p>
            </motion.div>

            {/* Tags / Skills Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-6"
            >
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-zinc-100/80 text-zinc-600 text-[11px] font-medium border border-zinc-200/50"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Interactive action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-8"
            >
              <button
                onClick={onOpenShare}
                className="flex items-center space-x-2 bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold px-5 py-3 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <Share2 className="h-4 w-4" />
                <span>取得我的數位名片</span>
              </button>

              <a
                href="#projects-showcase"
                className="flex items-center space-x-1.5 bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 border border-zinc-200 text-xs font-medium px-5 py-3 rounded-full transition-all"
              >
                <span>探索我的品牌與項目</span>
                <ArrowDown className="h-3.5 w-3.5 text-zinc-400" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
