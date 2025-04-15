import { Genre } from '../types';

export type Language = 'KR' | 'EN';
export type GameId = 'dice-blast';

type TranslationType = {
  header: {
    title: string;
    subtitle: string;
  };
  genres: Record<Genre, string>;
  updateHistory: string;
  navigation: {
    home: string;
    profile: string;
  };
  profile: {
    about: {
      title: string;
      content: string;
    };
    techStack: {
      title: string;
      categories: {
        gameDev: string;
        gameDesign: string;
        uiuxDesign: string;
      };
    };
    career: {
      title: string;
      positions: {
        freelance: string;
        studio: string;
      };
      projects: {
        diceBlast: string;
        portfolio: string;
        mobileDev: string;
        gameDesign: string;
      };
      data: Array<{
        year: string;
        company: string;
        projects: string[];
      }>;
    };
    jobTitle: string;
  };
  game: {
    notFound: string;
    loading: string;
    externalLinks: {
      playStore: string;
      steam: string;
      itch: string;
    };
    titles: Record<GameId, string>;
  };
};

const common = {
  header: {
    title: { KR: 'ovov games', EN: 'ovov games' },
    subtitle: { KR: '다운로드 없는 무료 웹 게임', EN: 'download-free web games' }
  },
  genres: {
    puzzle: { KR: '퍼즐', EN: 'Puzzle' },
    action: { KR: '액션', EN: 'Action' },
    strategy: { KR: '전략', EN: 'Strategy' },
    rpg: { KR: 'RPG', EN: 'RPG' }
  },
  updateHistory: { KR: '업데이트 내역', EN: 'Update History' },
  navigation: {
    home: { KR: 'HOME', EN: 'HOME' },
    profile: { KR: 'PROFILE', EN: 'PROFILE' }
  }
};

const PROJECTS = {
  DICE_BLAST: {
    KR: '[Dice Blast] 개발',
    EN: '[Dice Blast] Development'
  },
  KPPP: {
    KR: '프로듀서 패스파인더스 프로그램 참가',
    EN: 'Krafton Producer Pathfinders Program'
  },
  CAFE_FOREST: {
    KR: '[카페 포레스트] 개발',
    EN: '[Cafe Forest] Development'
  },
  JUMP_HOVER: {
    KR: '[???] 개발',
    EN: '[???] Development'
  },
  CHUCHU_BURGER: {
    KR: '[???] 개발',
    EN: '[???] Development'
  }
};

const POSITIONS = {
  OVOV: {
    KR: 'ovov games',
    EN: 'ovov games'
  },
  NEXON: {
    KR: '넥슨',
    EN: 'Nexon'
  }, 
  KRAFTON: {
    KR: '크래프톤',
    EN: 'Krafton'
  },
  STUDIO17: {
    KR: '스튜디오17 (인디)',
    EN: 'Studio17 (Indie)'
  }
};

const profile = {
  jobTitle: { KR: '게임 개발자 & 기획자', EN: 'Game Developer & Designer' },
  about: {
    title: { KR: '소개', EN: 'About' },
    content: { 
      KR: `이것저것 만들기 좋아하는 호기심 많은 게임 개발자입니다.
게임에 진심인 분들과의 네트워킹은 언제든 환영입니다. 편하게 말 걸어주세요! :>`,
      EN: `I am a game developer who loves to create things.
I am always open to networking with people who are passionate about games.
Please feel free to talk to me! :>`
    }
  },
  techStack: {
    title: { KR: '기술 스택', EN: 'Tech Stack' },
    categories: {
      gameDev: { KR: '게임 개발', EN: 'Game Development' },
      gameDesign: { KR: '게임 기획', EN: 'Game Design' },
      uiuxDesign: { KR: 'UI/UX 디자인', EN: 'UI/UX Design' }
    }
  },
  career: {
    title: { KR: '커리어', EN: 'Career' },
    data: {
      KR: [
        {
          year: '2025-Planning',
          company: POSITIONS.OVOV.KR,
          projects: [
            PROJECTS.DICE_BLAST.KR
          ]
        },
        {
          year: '2022-Present',
          company: POSITIONS.NEXON.KR,
          projects: [
            PROJECTS.JUMP_HOVER.KR,
            PROJECTS.CHUCHU_BURGER.KR
          ]
        },
        {
          year: '2022',
          company: POSITIONS.KRAFTON.KR,
          projects: [
            PROJECTS.KPPP.KR
          ]
        },
        {
          year: '2019-2022',
          company: POSITIONS.STUDIO17.KR,
          projects: [
            PROJECTS.CAFE_FOREST.KR
          ]
        }
      ],
      EN: [
        {
          year: '2025-Planning',
          company: POSITIONS.OVOV.EN,
          projects: [
            PROJECTS.DICE_BLAST.EN
          ]
        },
        {
          year: '2022-Present',
          company: POSITIONS.NEXON.EN,
          projects: [
            PROJECTS.JUMP_HOVER.EN,
            PROJECTS.CHUCHU_BURGER.EN
          ]
        },
        {
          year: '2022',
          company: POSITIONS.KRAFTON.EN,
          projects: [
            PROJECTS.KPPP.EN
          ]
        },
        {
          year: '2019-2022',
          company: POSITIONS.STUDIO17.EN,
          projects: [
            PROJECTS.CAFE_FOREST.EN
          ]
        }
      ]
    }
  }
};

const game = {
  notFound: { KR: '게임을 찾을 수 없습니다.', EN: 'Game not found' },
  loading: { KR: '로딩 중...', EN: 'Loading...' },
  externalLinks: {
    playStore: { KR: 'Play Store', EN: 'Play Store' },
    steam: { KR: 'Steam', EN: 'Steam' },
    itch: { KR: 'itch.io', EN: 'itch.io' }
  },
  titles: {
    'dice-blast': { KR: 'Dice Blast', EN: 'Dice Blast' }
  }
};

const getTranslation = (obj: any, lang: Language) => {
  if (typeof obj === 'object' && obj !== null) {
    if (obj.KR !== undefined && obj.EN !== undefined) {
      return obj[lang];
    }
    const result: any = {};
    for (const key in obj) {
      result[key] = getTranslation(obj[key], lang);
    }
    return result;
  }
  return obj;
};

const createTranslations = (lang: Language) => {
  const result: any = {};
  result.header = getTranslation(common.header, lang);
  result.genres = getTranslation(common.genres, lang);
  result.updateHistory = getTranslation(common.updateHistory, lang);
  result.navigation = getTranslation(common.navigation, lang);
  result.profile = getTranslation(profile, lang);
  result.game = getTranslation(game, lang);
  return result as TranslationType;
};

export const translations: Record<Language, TranslationType> = {
  KR: createTranslations('KR'),
  EN: createTranslations('EN')
}; 