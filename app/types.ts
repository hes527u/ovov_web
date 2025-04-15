export type GameContentType = 'game' | 'thumbnail' | 'video';

export type Genre = 'puzzle' | 'action' | 'strategy' | 'rpg' | string;

export type ExternalLinks = {
  playStore?: string;
  steam?: string;
  itch?: string;
};

export type GameItem = {
  id: string;
  order: number;
  title: string;
  descriptions: {
    KR: string;
    EN: string;
  };
  genre: Genre;
  thumbnailUrl: string;
  contentUrl: string;
  contentType: GameContentType;
  externalLinks?: ExternalLinks;
  metadata: {
    [key: string]: string;
  };
};

export const genreStyles: Record<Genre, { bg: string; text: string }> = {
  puzzle: { bg: 'bg-blue-100', text: 'text-blue-800' },
  action: { bg: 'bg-red-100', text: 'text-red-800' },
  strategy: { bg: 'bg-green-100', text: 'text-green-800' },
  rpg: { bg: 'bg-purple-100', text: 'text-purple-800' },
  // 기본값
  '': { bg: 'bg-gray-100', text: 'text-gray-800' }
};

export const genreTranslations: Record<Genre, { KR: string; EN: string }> = {
  puzzle: { KR: '퍼즐', EN: 'Puzzle' },
  action: { KR: '액션', EN: 'Action' },
  strategy: { KR: '전략', EN: 'Strategy' },
  rpg: { KR: 'RPG', EN: 'RPG' },
  // 기본값
  '': { KR: '기타', EN: 'Other' }
}; 