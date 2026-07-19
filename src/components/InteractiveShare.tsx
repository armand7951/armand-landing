import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, Copy, Download, X, ExternalLink, Share2, Smartphone, MessageCircle } from 'lucide-react';
import { Profile } from '../types';

interface InteractiveShareProps {
  profile: Profile;
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveShare({ profile, isOpen, onClose }: InteractiveShareProps) {
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Generate VCF contact card
  const handleDownloadVCard = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${profile.name}`,
      `N:${profile.name};;;;`,
      `EMAIL;TYPE=PREF,INTERNET:${profile.email}`,
      'ORG:Gather Taiwan',
      'TITLE:Entrepreneur & Community Builder',
      'URL:https://gathertaiwan.com/',
      'URL:https://pikt.ag/',
      'URL:https://dayinup.com/',
      'NOTE:創業者與社群建立者 - 聚落台灣 / PikTag / 天天向上成長社群',
      'END:VCARD'
    ].join('\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${profile.name}_Contact.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Dynamic QR code API for scanning
  const shareUrl = window.location.href || 'https://dayinup.com';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=18181b&data=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl border border-zinc-100"
      >
        {/* Background Accent Gradients */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 bg-zinc-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-36 h-36 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-zinc-50 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 pt-8 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-medium tracking-wider uppercase mb-5">
            <Smartphone className="h-3 w-3 text-zinc-500" />
            <span>Digital Pass</span>
          </div>

          {/* Pass Card Container */}
          <div className="w-full bg-zinc-900 text-white rounded-2xl p-5 mb-6 relative overflow-hidden shadow-lg">
            {/* Top Logo / Label */}
            <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3">
              <span className="font-display tracking-widest text-[10px] font-semibold text-zinc-400">ARMAND PASS</span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            </div>

            {/* Profile Brief */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover bg-zinc-800 border-2 border-zinc-700 shadow-inner"
                  onError={(e) => {
                    // Fallback avatar
                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${profile.name}`;
                  }}
                />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base leading-tight">{profile.name}</h3>
                <p className="text-[11px] text-zinc-400 font-medium mt-0.5">Entrepreneur & Maker</p>
                <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{profile.location}</p>
              </div>
            </div>

            {/* Details Table */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[10px] text-zinc-400 border-t border-zinc-800 pt-3">
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[8px]">公司 / Space</span>
                <span className="text-zinc-300 font-medium truncate block">Gather Taiwan</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[8px]">主要產品</span>
                <span className="text-zinc-300 font-medium truncate block">PikTag (pikt.ag)</span>
              </div>
              <div className="col-span-2">
                <span className="text-zinc-500 block uppercase tracking-wider text-[8px]">聯絡電子郵件</span>
                <span className="text-zinc-300 font-medium truncate block">{profile.email}</span>
              </div>
            </div>
          </div>

          {/* QR Code and Info */}
          <div className="flex flex-col items-center justify-center bg-zinc-50 rounded-2xl p-4 w-full border border-zinc-100 mb-6">
            <div className="relative w-36 h-36 bg-white rounded-xl p-2.5 shadow-sm border border-zinc-100 flex items-center justify-center">
              <img
                src={qrCodeUrl}
                alt="QR Code"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback in case QR API is offline
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <p className="text-[11px] text-zinc-500 mt-2.5 text-center px-4 leading-normal">
              掃描上方二維碼，即可在行動裝置上開啟此個人網站
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-2.5">
            <button
              onClick={handleDownloadVCard}
              className="w-full flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>將聯絡人加入手機 (Download vCard)</span>
            </button>

            <a
              href={profile.officialLineUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="加入我的官方 LINE（Demo，另開新分頁）"
              className="w-full flex items-center justify-center gap-2.5 bg-[#06C755] hover:bg-[#05b84d] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06C755] focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>加入我的官方 LINE</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] uppercase tracking-wider">
                Demo
              </span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center space-x-1.5 bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200 text-xs font-medium py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-600">已複製網址</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5 text-zinc-500" />
                    <span>複製網站網址</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center space-x-1.5 bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200 text-xs font-medium py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-600">已複製信箱</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-zinc-500" />
                    <span>複製 Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
