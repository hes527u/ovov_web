export interface GameItem {
  id: string;
  order: number;
  title: string;
  descriptions: {
    KR: string;
    EN: string;
  };
  genre: string;
  thumbnailUrl: string;
  contentUrl: string;
  contentType: string;
  externalLinks?: {
    playStore?: string;
    steam?: string;
    itch?: string;
  };
  metadata: {
    title: string;
    description: string;
  };
} 