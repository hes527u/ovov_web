import { Genre } from '../types';

export type Language = 'KR' | 'EN';

type TranslationType = {
  header: {
    title: string;
    subtitle: string;
  };
  genres: Record<Genre, string>;
};

export const translations: Record<Language, TranslationType> = {
  KR: {
    header: {
      title: 'ovov games',
      subtitle: '다운로드 없는 무료 웹 게임',
    },
    genres: {
      puzzle: '퍼즐',
      action: '액션',
      strategy: '전략',
      rpg: 'RPG',
    },
  },
  EN: {
    header: {
      title: 'ovov games',
      subtitle: 'download-free web games',
    },
    genres: {
      puzzle: 'Puzzle',
      action: 'Action',
      strategy: 'Strategy',
      rpg: 'RPG',
    },
  },
}; 