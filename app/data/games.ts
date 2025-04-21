import { GameItem } from '../types';

export const games: GameItem[] = [
  {
    id: 'dice-blast',
    order: 1,
    title: 'Dice Blast',
    descriptions: {
      KR: '인접한 숫자의 주사위를 이어붙여 점수를 얻는 게임입니다. 한 줄을 모두 채우면 줄이 파괴됩니다!',
      EN: 'Place dice on the grid. Only consecutive numbers can be placed next to each other. Fill an entire line to blast the dice!'
    },
    genre: 'puzzle',
    thumbnailUrl: '/games/dice-blast/thumbnail.png',
    contentUrl: '/unity-games/dice-blast',
    contentType: 'game',
    // externalLinks: {
      // playStore: 'https://play.google.com/store/apps/details?id=com.playovov.diceblast',
      // steam: 'https://store.steampowered.com/app/diceblast',
      // itch: 'https://playovov.itch.io/dice-blast'
    // },
    metadata: {
      title: 'Dice Blast',
      description: 'Connect adjacent dice numbers to score points. Destroy lines by filling them all!'
    }
  }
]; 