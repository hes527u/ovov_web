'use client';

import GameCard from '@/app/components/GameCard';
import { GameItem } from '@/app/types';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/i18n/translations';
import { useEffect, useState } from 'react';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [games, setGames] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games');
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        const data = await response.json();
        setGames(data.sort((a: GameItem, b: GameItem) => a.order - b.order));
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 헤더 영역 */}
      <div className="relative h-80 bg-gray-200">
        {/* 이미지 영역 (배경으로 설정) */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300">
          {/* 이미지는 여기에 추가하시면 됩니다:
              <Image
                src="/header-image.jpg"
                alt="OVOV Games Header"
                fill
                className="object-cover"
              /> 
          */}
        </div>
        
        {/* 텍스트 영역 */}
        <div className="relative container mx-auto max-w-5xl px-4 h-full flex flex-col justify-end pb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-1">
            {t.header.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700">
            {t.header.subtitle}
          </p>
        </div>
      </div>

      {/* 게임 카드 영역 */}
      <div className="container mx-auto max-w-5xl px-4 py-8">
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
