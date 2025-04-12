export type Genre = 'puzzle' | 'action' | 'strategy' | 'rpg';

export interface GameItem {
  id: string;          // 게임의 고유 식별자 (예: 'dice_blast')
  order: number;       // 정렬 순서
  title: string;
  descriptions: {
    KR: string;
    EN: string;
  };
  genre: Genre;
  thumbnailUrl: string;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export const genreStyles: Record<Genre, { bg: string; text: string }> = {
  puzzle: { bg: 'bg-pink-100', text: 'text-pink-800' },
  action: { bg: 'bg-red-100', text: 'text-red-800' },
  strategy: { bg: 'bg-blue-100', text: 'text-blue-800' },
  rpg: { bg: 'bg-purple-100', text: 'text-purple-800' },
}; 