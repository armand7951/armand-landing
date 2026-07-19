import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, ArrowUpRight, Building2, Sparkles, Users } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  key?: string;
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Select matching decorative icon for each project category
  const getCategoryIcon = () => {
    switch (project.type) {
      case 'company':
        return <Building2 className="h-5 w-5" />;
      case 'product':
        return <Sparkles className="h-5 w-5" />;
      case 'community':
        return <Users className="h-5 w-5" />;
    }
  };

  // Subtle border/accent coloring classes based on project
  const getAccentColor = () => {
    switch (project.id) {
      case 'gather-taiwan':
        return 'border-zinc-200 focus:ring-zinc-900 bg-zinc-50/50';
      case 'pikt-ag':
        return 'border-orange-200 focus:ring-orange-500 bg-orange-50/20';
      case 'dayinup':
        return 'border-blue-200 focus:ring-blue-600 bg-blue-50/20';
      default:
        return 'border-zinc-200';
    }
  };

  return (
    <motion.div
      id={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-3xl border p-8 md:p-12 transition-all shadow-sm hover:shadow-xl ${getAccentColor()}`}
    >
      {/* Absolute Background Accent for Products */}
      {project.id === 'pikt-ag' && (
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-60 h-60 bg-gradient-to-br from-orange-400/10 to-amber-500/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
      )}
      {project.id === 'dayinup' && (
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-60 h-60 bg-gradient-to-br from-blue-400/10 to-indigo-500/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
      )}

      {/* Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-white border border-zinc-150/80 shadow-sm text-zinc-800">
            {getCategoryIcon()}
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {project.role}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full bg-white border border-zinc-200/60 text-zinc-600 text-[10px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="mb-6">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
          {project.title}
        </h3>
        <p className="font-display text-sm font-semibold text-zinc-500 mt-1.5">
          {project.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
        {project.description}
      </p>

      {/* Bullet Features (Apple specification list layout) */}
      <div className="space-y-3 mb-10">
        <h4 className="text-[11px] uppercase tracking-widest font-bold text-zinc-400">重點特色 / Features</h4>
        <div className="grid md:grid-cols-2 gap-3.5">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-zinc-800 mt-0.5 flex-shrink-0" />
              <span className="text-zinc-700 text-xs md:text-sm leading-normal font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2 border-t border-zinc-100 flex items-center justify-between flex-wrap gap-4">
        <span className="text-[10px] font-mono text-zinc-400">
          官方網站: <span className="text-zinc-500 font-medium">{project.url.replace('https://', '')}</span>
        </span>
        
        <motion.a
          whileHover={{ x: 2, y: -2 }}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-white hover:bg-zinc-900 hover:text-white border border-zinc-300 hover:border-zinc-900 text-zinc-800 text-xs font-semibold px-5 py-3 rounded-full transition-all shadow-sm"
        >
          <span>立即前往探索</span>
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}
