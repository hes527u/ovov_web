import { Metadata } from 'next';
import { GameItem } from '@/app/types';

export const metadata: Metadata = {
  title: '게임 상세',
  description: '게임 상세 정보를 확인하세요',
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function GamePage({ params }: PageProps) {
  const resolvedParams = await params;
  const gameId = resolvedParams.id;

  // 임시 데이터 (실제로는 API에서 가져올 예정)
  const game: GameItem = {
    id: gameId,
    order: 1,
    title: "Sample Game",
    descriptions: {
      KR: "샘플 게임 설명",
      EN: "Sample game description"
    },
    genre: "puzzle",
    thumbnailUrl: "/next.svg",
    metadata: {
      title: "Sample Game",
      description: "Sample game description"
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
        <p className="text-gray-600">{game.descriptions.KR}</p>
      </div>
    </div>
  );
} 