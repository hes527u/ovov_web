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
  footer: {
    privacyPolicy: string;
    termsOfService: string;
    contact: string;
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
    retry: string;
    externalLinks: {
      playStore: string;
      steam: string;
      itch: string;
    };
    titles: Record<GameId, string>;
  };
  privacyPolicy: {
    title: string;
    sections: {
      collection: {
        title: string;
        content: string;
        items: {
          gameplay: string;
          advertising: string;
        };
        note: string;
      };
      analytics: {
        title: string;
        content: string;
        items: {
          gameplay: string;
          device: string;
          performance: string;
        };
        purpose: string;
      };
      advertising: {
        title: string;
        content: string;
        items: {
          cookies: string;
          device: string;
          location: string;
        };
        purpose: string;
      };
      purpose: {
        title: string;
        content: string;
        items: {
          service: string;
          support: string;
          improvement: string;
        };
      };
      retention: {
        title: string;
        content: string;
      };
      destruction: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        content: string;
      };
    };
  };
  termsOfService: {
    title: string;
    sections: {
      application: {
        title: string;
        content: string;
      };
      usage: {
        title: string;
        content: string;
        items: {
          privacy: string;
          interference: string;
          copyright: string;
          illegal: string;
        };
      };
      intellectualProperty: {
        title: string;
        content: string;
        items: {
          copy: string;
          modification: string;
          commercial: string;
        };
      };
      changes: {
        title: string;
        content: string;
      };
      liability: {
        title: string;
        content: string;
      };
      modification: {
        title: string;
        content: string;
      };
    };
  };
  contact: {
    title: string;
    description: string;
    email: {
      label: string;
      address: string;
    };
    response: string;
  };
};

type TranslationValue = {
  KR: string;
  EN: string;
};

type TranslationObject = {
  [key: string]: TranslationValue | TranslationObject | { KR: unknown; EN: unknown };
};

const common: TranslationObject = {
  header: {
    title: { KR: 'play! ovov', EN: 'play! ovov' },
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
  },
  footer: {
    privacyPolicy: { KR: '개인정보처리방침', EN: 'Privacy Policy' },
    termsOfService: { KR: '이용약관', EN: 'Terms of Service' },
    contact: { KR: '문의하기', EN: 'Contact' }
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
    KR: '???',
    EN: '???'
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
    KR: '스튜디오17',
    EN: 'Studio17'
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
          year: 'Planning',
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
          year: 'Planning',
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
  retry: { KR: '잠시 후 다시 시도해주세요.', EN: 'Please try again later.' },
  externalLinks: {
    playStore: { KR: 'Play Store', EN: 'Play Store' },
    steam: { KR: 'Steam', EN: 'Steam' },
    itch: { KR: 'itch.io', EN: 'itch.io' }
  },
  titles: {
    'dice-blast': { KR: 'Dice Blast', EN: 'Dice Blast' }
  }
};

const privacyPolicy = {
  title: { KR: '개인정보처리방침', EN: 'Privacy Policy' },
  sections: {
    collection: {
      title: { KR: '1. 수집하는 개인정보 항목', EN: '1. Personal Information Collection' },
      content: { 
        KR: '현재 본 웹사이트는 다음과 같은 개인정보를 수집하고 있습니다:',
        EN: 'Currently, this website collects the following personal information:'
      },
      items: {
        gameplay: { 
          KR: '게임 플레이 데이터 (Unity Analytics를 통해 수집)',
          EN: 'Game play data (collected through Unity Analytics)'
        },
        advertising: {
          KR: '광고 관련 데이터 (Google AdSense를 통해 수집)',
          EN: 'Advertising-related data (collected through Google AdSense)'
        }
      },
      note: {
        KR: '참고: 이메일 주소, 이름, 연락처 등 개인 식별 정보는 현재 수집하지 않습니다. 향후 서비스 확장 시 수집이 필요한 경우, 별도의 동의 절차를 거쳐 수집할 예정입니다.',
        EN: 'Note: We currently do not collect personally identifiable information such as email addresses, names, or contact details. If collection becomes necessary for future service expansion, we will obtain separate consent before doing so.'
      }
    },
    analytics: {
      title: { KR: '2. 게임 플레이 데이터 수집', EN: '2. Game Play Data Collection' },
      content: {
        KR: '본 웹사이트는 Unity Analytics를 통해 다음과 같은 게임 플레이 데이터를 수집합니다:',
        EN: 'This website collects the following game play data through Unity Analytics:'
      },
      items: {
        gameplay: { 
          KR: '게임 플레이 시간, 레벨 진행 상황, 게임 내 행동 패턴 등',
          EN: 'Game play time, level progression, in-game behavior patterns, etc.'
        },
        device: {
          KR: '기기 정보 (기기 모델, 운영체제 버전 등)',
          EN: 'Device information (device model, operating system version, etc.)'
        },
        performance: {
          KR: '게임 성능 데이터 (프레임 레이트, 로딩 시간 등)',
          EN: 'Game performance data (frame rate, loading time, etc.)'
        }
      },
      purpose: {
        KR: '이러한 데이터는 게임 개선 및 사용자 경험 향상을 위해 사용됩니다.',
        EN: 'This data is used to improve the game and enhance user experience.'
      }
    },
    advertising: {
      title: { KR: '3. 광고 서비스', EN: '3. Advertising Services' },
      content: {
        KR: '본 웹사이트는 Google AdSense를 통해 광고를 제공합니다. Google AdSense는 다음과 같은 정보를 수집할 수 있습니다:',
        EN: 'This website provides advertisements through Google AdSense. Google AdSense may collect the following information:'
      },
      items: {
        cookies: {
          KR: '쿠키 및 유사 기술을 통한 방문 기록',
          EN: 'Visit history through cookies and similar technologies'
        },
        device: {
          KR: '기기 정보 및 브라우저 정보',
          EN: 'Device and browser information'
        },
        location: {
          KR: '대략적인 위치 정보',
          EN: 'Approximate location information'
        }
      },
      purpose: {
        KR: '이러한 정보는 사용자의 관심사에 맞는 광고를 제공하기 위해 사용됩니다. Google의 개인정보 처리방침은 https://policies.google.com/privacy 에서 확인할 수 있습니다.',
        EN: 'This information is used to provide advertisements relevant to your interests. You can view Google\'s Privacy Policy at https://policies.google.com/privacy.'
      }
    },
    purpose: {
      title: { KR: '4. 개인정보의 수집 및 이용목적', EN: '4. Purpose of Collection and Use' },
      content: { 
        KR: '수집된 개인정보는 다음의 목적을 위해 사용됩니다:',
        EN: 'The collected personal information is used for the following purposes:'
      },
      items: {
        service: { KR: '서비스 제공 및 운영', EN: 'Service provision and operation' },
        support: { KR: '고객 문의 응대', EN: 'Customer support' },
        improvement: { KR: '서비스 개선 및 개발', EN: 'Service improvement and development' }
      }
    },
    retention: {
      title: { KR: '5. 개인정보의 보유 및 이용기간', EN: '5. Retention Period' },
      content: { 
        KR: '수집된 개인정보는 수집 및 이용목적이 달성된 후에는 지체 없이 파기됩니다.',
        EN: 'Collected personal information is promptly destroyed after the purpose of collection and use is achieved.'
      }
    },
    destruction: {
      title: { KR: '6. 개인정보의 파기절차 및 방법', EN: '6. Destruction Procedure and Method' },
      content: { 
        KR: '전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.',
        EN: 'Personal information stored in electronic file format is deleted using technical methods that make the records unrecoverable.'
      }
    },
    contact: {
      title: { KR: '7. 개인정보 보호책임자', EN: '7. Privacy Officer' },
      content: { 
        KR: '개인정보 보호책임자: 허성은\n연락처: hes527u@gmail.com',
        EN: 'Privacy Officer: Seong-eun Heo\nContact: hes527u@gmail.com'
      }
    }
  }
};

const termsOfService = {
  title: { KR: '이용약관', EN: 'Terms of Service' },
  sections: {
    application: {
      title: { KR: '1. 약관의 적용', EN: '1. Application of Terms' },
      content: { 
        KR: '본 약관은 웹사이트 이용자에게 적용되며, 이용자는 본 약관에 동의함으로써 서비스를 이용할 수 있습니다.',
        EN: 'These terms apply to website users, and users can use the service by agreeing to these terms.'
      }
    },
    usage: {
      title: { KR: '2. 서비스 이용', EN: '2. Service Usage' },
      content: { 
        KR: '이용자는 서비스를 이용함에 있어 다음의 행위를 하여서는 안됩니다:',
        EN: 'Users must not engage in the following activities when using the service:'
      },
      items: {
        privacy: { KR: '타인의 개인정보를 무단으로 수집하는 행위', EN: 'Unauthorized collection of others\' personal information' },
        interference: { KR: '서비스의 운영을 방해하는 행위', EN: 'Interfering with service operation' },
        copyright: { KR: '타인의 지적재산권을 침해하는 행위', EN: 'Infringing on others\' intellectual property rights' },
        illegal: { KR: '기타 관련 법령에 위배되는 행위', EN: 'Other activities that violate relevant laws' }
      }
    },
    intellectualProperty: {
      title: { KR: '3. 지적재산권 보호', EN: '3. Intellectual Property Protection' },
      content: {
        KR: '본 웹사이트의 모든 게임과 콘텐츠는 저작권법에 의해 보호됩니다. 이용자는 다음의 행위를 하여서는 안됩니다:',
        EN: 'All games and content on this website are protected by copyright law. Users must not engage in the following activities:'
      },
      items: {
        copy: { 
          KR: '게임의 소스 코드, 에셋, 이미지 등을 무단으로 복제하거나 배포하는 행위',
          EN: 'Unauthorized copying or distribution of game source code, assets, images, etc.'
        },
        modification: {
          KR: '게임을 무단으로 수정, 변형, 리버스 엔지니어링하는 행위',
          EN: 'Unauthorized modification, alteration, or reverse engineering of games'
        },
        commercial: {
          KR: '게임을 상업적 목적으로 무단 사용하는 행위',
          EN: 'Unauthorized commercial use of games'
        }
      }
    },
    changes: {
      title: { KR: '4. 서비스의 변경 및 중단', EN: '4. Service Changes and Discontinuation' },
      content: { 
        KR: '서비스 제공자는 사전 고지 없이 서비스의 내용을 변경하거나 중단할 수 있습니다.',
        EN: 'The service provider may change or discontinue the service without prior notice.'
      }
    },
    liability: {
      title: { KR: '5. 책임의 한계', EN: '5. Limitation of Liability' },
      content: { 
        KR: '서비스 제공자는 서비스 이용과 관련하여 이용자에게 발생한 손해에 대하여 책임을 지지 않습니다.',
        EN: 'The service provider is not liable for any damages incurred by users in relation to service usage.'
      }
    },
    modification: {
      title: { KR: '6. 약관의 변경', EN: '6. Modification of Terms' },
      content: { 
        KR: '본 약관은 필요한 경우 변경될 수 있으며, 변경된 약관은 웹사이트에 게시함으로써 효력이 발생합니다.',
        EN: 'These terms may be modified when necessary, and modified terms take effect when posted on the website.'
      }
    }
  }
};

const contact = {
  title: { KR: '문의하기', EN: 'Contact' },
  description: {
    KR: '게임과 관련된 문의, 제안 또는 오류 제보는 아래 이메일로 연락주시기 바랍니다.',
    EN: 'For game-related inquiries, suggestions, or bug reports, please contact us via email below.'
  },
  email: {
    label: { KR: '이메일', EN: 'Email' },
    address: { KR: 'hes527u@gmail.com', EN: 'hes527u@gmail.com' }
  },
  response: {
    KR: '빠른 시일 내에 확인 후 답변드리겠습니다.',
    EN: 'We will review and respond to your message as soon as possible.'
  }
};

const getTranslation = (obj: unknown, lang: Language): unknown => {
  if (typeof obj === 'object' && obj !== null) {
    if ('KR' in obj && 'EN' in obj) {
      if (Array.isArray(obj[lang])) {
        return obj[lang];
      }
      return obj[lang];
    }
    const result: Record<string, unknown> = {};
    for (const key in obj as Record<string, unknown>) {
      result[key] = getTranslation((obj as Record<string, unknown>)[key], lang);
    }
    return result;
  }
  return obj;
};

const createTranslations = (lang: Language): TranslationType => {
  const result: Partial<TranslationType> = {};
  result.header = getTranslation(common.header, lang) as TranslationType['header'];
  result.genres = getTranslation(common.genres, lang) as TranslationType['genres'];
  result.updateHistory = getTranslation(common.updateHistory, lang) as string;
  result.navigation = getTranslation(common.navigation, lang) as TranslationType['navigation'];
  result.footer = getTranslation(common.footer, lang) as TranslationType['footer'];
  result.privacyPolicy = getTranslation(privacyPolicy, lang) as TranslationType['privacyPolicy'];
  result.termsOfService = getTranslation(termsOfService, lang) as TranslationType['termsOfService'];
  result.contact = getTranslation(contact, lang) as TranslationType['contact'];
  result.profile = getTranslation(profile, lang) as TranslationType['profile'];
  result.game = getTranslation(game, lang) as TranslationType['game'];
  return result as TranslationType;
};

export const translations: Record<Language, TranslationType> = {
  KR: createTranslations('KR'),
  EN: createTranslations('EN')
}; 