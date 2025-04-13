import { GameItem } from '../types';

export const games: GameItem[] = [
  {
    id: 'dice-blast',
    order: 1,
    title: 'Dice Blast',
    descriptions: {
      KR: '주사위를 던져서 점수를 얻는 게임입니다. 주사위의 숫자에 따라 다양한 효과가 발생합니다.',
      EN: 'A game where you roll dice to score points. Various effects occur depending on the dice numbers.'
    },
    genre: 'puzzle',
    thumbnailUrl: '/games/dice-blast/thumbnail.png',
    metadata: {
      title: 'Dice Blast',
      description: 'Roll dice and score points!'
    }
  }
]; 