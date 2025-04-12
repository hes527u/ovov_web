'use client';

import GameCard from '@/app/components/GameCard';
import { GameItem, Genre } from '@/app/types';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/i18n/translations';

// 임시 데이터
const games: GameItem[] = [
  {
    id: "dice_blast",
    order: 1,
    title: "Dice Blast",
    descriptions: {
      KR: "주사위를 합치고 터트려보세요! 간단하지만 중독성 있는 퍼즐 게임이 여러분을 즐겁게 할 거예요.",
      EN: "Conjoin dices and blast them, you can make it! A simple yet addictive puzzle game that will keep you entertained for hours."
    },
    genre: "puzzle" as Genre,
    thumbnailUrl: "/next.svg"
  },
  {
    id: "color_match",
    order: 2,
    title: "Color Match",
    descriptions: {
      KR: "신나는 퍼즐 어드벤처에서 색상을 맞춰보세요. 비슷한 색상을 연결하여 놀라운 조합을 만들어보세요!",
      EN: "Match colors in this exciting puzzle adventure. Connect similar colors and create amazing combinations!"
    },
    genre: "puzzle" as Genre,
    thumbnailUrl: "/vercel.svg"
  },
  {
    id: "space_runner",
    order: 3,
    title: "Space Runner",
    descriptions: {
      KR: "우주를 달리며 장애물을 피하고 파워업 아이템을 모으세요. 빠른 템포의 액션 게임입니다.",
      EN: "Run through space, avoid obstacles and collect power-ups in this fast-paced action game."
    },
    genre: "action" as Genre,
    thumbnailUrl: "/globe.svg"
  },
  {
    id: "mind_tactics",
    order: 4,
    title: "Mind Tactics",
    descriptions: {
      KR: "전략적 사고가 필요한 게임입니다. 움직임을 계획하고 상대방을 능가해보세요.",
      EN: "Strategic thinking game that challenges your mind. Plan your moves and outsmart your opponents."
    },
    genre: "strategy" as Genre,
    thumbnailUrl: "/file.svg"
  }
].sort((a, b) => a.order - b.order);  // order 기준으로 정렬

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 헤더 영역 */}
      <div className="relative h-80 bg-gray-300">
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

      {/* 메인 콘텐츠 영역 */}
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
