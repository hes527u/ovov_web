'use client';

import { GameItem, genreStyles } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations, GameId } from '@/app/i18n/translations';

export default function GameCard({ game }: { game: GameItem }) {
  const { language } = useLanguage();
  const t = translations[language];
  const genreStyle = genreStyles[game.genre];

  return (
    <Link 
      href={`/games/${game.id}`} 
      className="block transition-transform hover:scale-[1.02]"
      scroll={true}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md h-[360px]">
        {/* 썸네일 영역 */}
        <div className="relative h-40 sm:h-44 lg:h-48 bg-gray-200">
          <Image
            src={game.thumbnailUrl}
            alt={t.game.titles[game.id as GameId]}
            fill
            className="object-cover"
          />
        </div>
        
        {/* 콘텐츠 영역 */}
        <div className="p-3 sm:p-4">
          {/* 장르 태그 */}
          <span className={`inline-block px-2 py-1 text-xs sm:text-sm rounded-md ${genreStyle.bg} ${genreStyle.text} mb-2`}>
            {t.genres[game.genre]}
          </span>
          
          {/* 제목 */}
          <h2 className="text-lg sm:text-xl font-bold mb-2 text-black">{t.game.titles[game.id as GameId]}</h2>
          
          {/* 설명 */}
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
            {game.descriptions[language]}
          </p>
        </div>
      </div>
    </Link>
  );
} 