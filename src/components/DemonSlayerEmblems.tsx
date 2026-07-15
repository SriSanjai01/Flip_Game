import React from "react";

export interface CharacterInfo {
  id: number;
  name: string;
  jpName: string;
  bgColor: string; // Pastel background gradient
  textColor: string;
  badgeBg: string;
}

export const characters: CharacterInfo[] = [
  { id: 1, name: "Tanjiro Kamado", jpName: "竈門 炭治郎", bgColor: "from-emerald-100 to-green-100", textColor: "text-emerald-800", badgeBg: "bg-emerald-200/60" },
  { id: 2, name: "Nezuko Kamado", jpName: "竈門 禰豆子", bgColor: "from-pink-100 to-rose-100", textColor: "text-rose-800", badgeBg: "bg-rose-200/60" },
  { id: 3, name: "Zenitsu Agatsuma", jpName: "我妻 善逸", bgColor: "from-amber-100 to-yellow-100", textColor: "text-amber-800", badgeBg: "bg-amber-200/60" },
  { id: 4, name: "Inosuke Hashibira", jpName: "嘴平 伊之助", bgColor: "from-sky-100 to-indigo-100", textColor: "text-indigo-800", badgeBg: "bg-indigo-200/60" },
  { id: 5, name: "Giyu Tomioka", jpName: "冨岡 義勇", bgColor: "from-cyan-100 to-blue-100", textColor: "text-cyan-800", badgeBg: "bg-cyan-200/60" },
  { id: 6, name: "Shinobu Kocho", jpName: "胡蝶 しのぶ", bgColor: "from-purple-100 to-indigo-50", textColor: "text-purple-800", badgeBg: "bg-purple-200/60" },
  { id: 7, name: "Kyojuro Rengoku", jpName: "煉獄 杏寿郎", bgColor: "from-orange-100 to-red-100", textColor: "text-red-800", badgeBg: "bg-orange-200/60" },
  { id: 8, name: "Tengen Uzui", jpName: "宇髄 天元", bgColor: "from-slate-100 to-blue-50", textColor: "text-slate-800", badgeBg: "bg-slate-200/60" },
  { id: 9, name: "Mitsuri Kanroji", jpName: "甘露寺 蜜璃", bgColor: "from-pink-50 to-emerald-50", textColor: "text-pink-800", badgeBg: "bg-pink-200/40" },
  { id: 10, name: "Muichiro Tokito", jpName: "時透 無一郎", bgColor: "from-teal-100 to-slate-100", textColor: "text-teal-800", badgeBg: "bg-teal-200/60" },
  { id: 11, name: "Obanai Iguro", jpName: "伊黒 小芭内", bgColor: "from-slate-100 to-zinc-200", textColor: "text-zinc-800", badgeBg: "bg-zinc-300/60" },
  { id: 12, name: "Sanemi Shinazugawa", jpName: "不死川 実弥", bgColor: "from-emerald-50 to-slate-100", textColor: "text-emerald-900", badgeBg: "bg-emerald-200/40" },
  { id: 13, name: "Gyomei Himejima", jpName: "悲鳴嶼 行冥", bgColor: "from-stone-200 to-slate-100", textColor: "text-stone-800", badgeBg: "bg-stone-300/60" },
  { id: 14, name: "Muzan Kibutsuji", jpName: "鬼舞辻 無惨", bgColor: "from-red-50 to-stone-200", textColor: "text-red-950", badgeBg: "bg-red-200/40" },
  { id: 15, name: "Kanao Tsuyuri", jpName: "栗花落 カナヲ", bgColor: "from-violet-100 to-fuchsia-100", textColor: "text-violet-800", badgeBg: "bg-violet-200/60" },
  { id: 16, name: "Genya Shinazugawa", jpName: "不死川 玄弥", bgColor: "from-purple-100 to-slate-200", textColor: "text-purple-900", badgeBg: "bg-purple-200/60" },
  { id: 17, name: "Tamayo", jpName: "珠世", bgColor: "from-purple-50 to-violet-100", textColor: "text-violet-950", badgeBg: "bg-violet-200/40" },
  { id: 18, name: "Yushiro", jpName: "愈史郎", bgColor: "from-lime-100 to-slate-100", textColor: "text-lime-800", badgeBg: "bg-lime-200/60" }
];

export const CharacterEmblem = ({ id, className = "w-12 h-12" }: { id: number; className?: string }) => {
  switch (id) {
    case 1: // Tanjiro
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="50" fill="#10b981" />
          <rect x="50" width="50" height="50" fill="#1e293b" />
          <rect y="50" width="50" height="50" fill="#1e293b" />
          <rect x="50" y="50" width="50" height="50" fill="#10b981" />
          <circle cx="50" cy="50" r="16" fill="#ef4444" stroke="#ffffff" strokeWidth="3" />
          <line x1="50" y1="50" x2="50" y2="28" stroke="#ffffff" strokeWidth="2" />
        </svg>
      );
    case 2: // Nezuko
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#fbcfe8" />
          <path d="M10 20 L50 40 L90 20" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
          <path d="M10 80 L50 60 L90 80" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
          <rect x="25" y="42" width="50" height="16" rx="8" fill="#10b981" stroke="#34d399" strokeWidth="3" />
          <rect x="35" y="47" width="30" height="6" fill="#047857" rx="3" />
          <path d="M25 50 H75" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      );
    case 3: // Zenitsu
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10 L30 10 L20 30 Z" fill="#ffffff" />
          <path d="M70 20 L90 20 L80 40 Z" fill="#ffffff" />
          <path d="M40 70 L60 70 L50 90 Z" fill="#ffffff" />
          <path d="M20 50 L50 15 L45 45 L80 40 L40 85 L48 55 Z" fill="#f59e0b" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      );
    case 4: // Inosuke
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="55" r="28" fill="#64748b" stroke="#ffffff" strokeWidth="3" />
          <ellipse cx="50" cy="62" rx="12" ry="7" fill="#fda4af" stroke="#f43f5e" strokeWidth="2" />
          <circle cx="45" cy="62" r="2.5" fill="#e11d48" />
          <circle cx="55" cy="62" r="2.5" fill="#e11d48" />
          <path d="M28 35 L42 45" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <path d="M72 35 L58 45" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <polygon points="32,62 15,80 32,70" fill="#38bdf8" />
          <polygon points="68,62 85,80 68,70" fill="#38bdf8" />
        </svg>
      );
    case 5: // Giyu
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 H50 V100 H0 Z" fill="#be123c" />
          <path d="M50 0 H100 V100 H50 Z" fill="#eab308" />
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#047857" opacity="0.8" />
          <path d="M20 70 Q50 30 80 70" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
          <path d="M30 80 Q50 50 70 80" stroke="#67e8f9" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 6: // Shinobu
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20 Q30 5 15 25 Q15 45 50 65 Q85 45 85 25 Q70 5 50 20 Z" fill="#a855f7" stroke="#ffffff" strokeWidth="3" />
          <path d="M50 30 Q35 15 25 30 Q25 45 50 60 Q75 45 75 30 Q65 15 50 30 Z" fill="#2dd4bf" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="50" cy="40" r="4" fill="#ffffff" />
          <line x1="50" y1="65" x2="50" y2="85" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 7: // Rengoku
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90 Q30 20 50 40 Q70 20 90 90 Z" fill="#f97316" />
          <path d="M25 90 Q40 40 50 55 Q60 40 75 90 Z" fill="#e11d48" />
          <path d="M38 90 Q45 60 50 70 Q55 60 62 90 Z" fill="#facc15" />
          <circle cx="50" cy="30" r="12" fill="#334155" stroke="#facc15" strokeWidth="4" />
          <path d="M43 30 H57" stroke="#facc15" strokeWidth="3" />
        </svg>
      );
    case 8: // Tengen
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#e2e8f0" />
          <path d="M50 15 L62 38 L87 42 L68 60 L73 85 L50 72 L27 85 L32 60 L13 42 L38 38 Z" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
          <circle cx="50" cy="50" r="8" fill="#ef4444" />
          <path d="M30 25 L40 30" stroke="#db2777" strokeWidth="4" strokeLinecap="round" />
          <path d="M70 25 L60 30" stroke="#db2777" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 9: // Mitsuri
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 35 C40 15 15 15 15 45 C15 70 50 90 50 90 C50 90 85 70 85 45 C85 15 60 15 50 35 Z" fill="#f472b6" stroke="#ffffff" strokeWidth="4" />
          <path d="M50 45 C43 30 25 30 25 50 C25 68 50 82 50 82 C50 82 75 68 75 50 C75 30 57 30 50 45 Z" fill="#4ade80" />
          <circle cx="35" cy="40" r="3" fill="#ffffff" />
          <circle cx="65" cy="40" r="3" fill="#ffffff" />
        </svg>
      );
    case 10: // Muichiro
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40 Q30 20 50 40 T90 40" stroke="#2dd4bf" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M10 60 Q30 40 50 60 T90 60" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="50" cy="50" r="18" fill="#14b8a6" stroke="#ffffff" strokeWidth="2.5" />
          <line x1="38" y1="50" x2="62" y2="50" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 11: // Obanai
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#1e293b" />
          <path d="M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100" stroke="#ffffff" strokeWidth="6" />
          <path d="M20 50 C25 25, 75 25, 80 50 C85 75, 15 75, 20 100" stroke="#f1f5f9" strokeWidth="10" fill="none" strokeLinecap="round" />
          <circle cx="40" cy="50" r="5" fill="#facc15" />
          <circle cx="60" cy="50" r="5" fill="#3b82f6" />
        </svg>
      );
    case 12: // Sanemi
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 C30 30 10 50 50 90 C90 50 70 30 50 10 Z" fill="none" stroke="#10b981" strokeWidth="4" />
          <path d="M25 45 Q50 15 75 45 Q50 75 25 45 Z" fill="none" stroke="#34d399" strokeWidth="3" />
          <path d="M35 50 L65 50 M50 35 L50 65" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M38 38 L62 62 M62 38 L38 62" stroke="#ef4444" strokeWidth="2" />
        </svg>
      );
    case 13: // Gyomei
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#78716c" />
          <circle cx="50" cy="50" r="28" stroke="#b91c1c" strokeWidth="6" fill="none" strokeDasharray="12 6" />
          <text x="50" y="56" fill="#ffffff" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="serif">南無</text>
        </svg>
      );
    case 14: // Muzan
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="32" fill="#000000" stroke="#dc2626" strokeWidth="4" />
          <path d="M25 50 Q50 30 75 50 Q50 70 25 50 Z" fill="#991b1b" />
          <line x1="50" y1="36" x2="50" y2="64" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="50" r="3" fill="#ffffff" />
          <path d="M10 80 Q50 65 90 80" stroke="#ffffff" strokeWidth="2" />
        </svg>
      );
    case 15: // Kanao
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="24" fill="#d97706" stroke="#f59e0b" strokeWidth="4" />
          <rect x="44" y="32" width="12" height="36" rx="4" fill="#ffffff" />
          <circle cx="50" cy="50" r="6" fill="#d97706" />
          <path d="M20 20 Q50 5 80 20" stroke="#f472b6" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="20" cy="20" r="4" fill="#ec4899" />
          <circle cx="80" cy="20" r="4" fill="#ec4899" />
        </svg>
      );
    case 16: // Genya
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#581c87" />
          <path d="M15 35 L85 65 M15 65 L85 35" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
          <circle cx="35" cy="50" r="12" fill="#334155" stroke="#ffffff" strokeWidth="2" />
          <circle cx="65" cy="50" r="12" fill="#334155" stroke="#ffffff" strokeWidth="2" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#ffffff" strokeWidth="3" />
        </svg>
      );
    case 17: // Tamayo
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20 Q80 20 80 50 Q80 80 50 80 Q20 80 20 50 Q20 20 50 20 Z" fill="#4c1d95" />
          <rect x="45" y="30" width="10" height="30" rx="2" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
          <path d="M40 25 H60" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="45" r="4" fill="#db2777" />
          <path d="M15 80 C35 70, 65 70, 85 80" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 18: // Yushiro
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="10" width="50" height="80" rx="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
          <ellipse cx="50" cy="45" rx="16" ry="10" fill="#ffffff" stroke="#000000" strokeWidth="2" />
          <circle cx="50" cy="45" r="5" fill="#a855f7" />
          <circle cx="50" cy="45" r="2" fill="#000000" />
          <line x1="30" y1="20" x2="45" y2="20" stroke="#ca8a04" strokeWidth="2" />
          <line x1="30" y1="75" x2="45" y2="75" stroke="#ca8a04" strokeWidth="2" />
          <line x1="70" y1="20" x2="55" y2="20" stroke="#ca8a04" strokeWidth="2" />
          <line x1="70" y1="75" x2="55" y2="75" stroke="#ca8a04" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
};
