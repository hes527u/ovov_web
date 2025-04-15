import { NextResponse } from 'next/server';
import { games } from '@/app/data/games';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const gameId = context.params.id;
    const game = games.find((game) => game.id === gameId);

    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error('Error fetching game:', error);
    return NextResponse.json({ error: '게임을 찾을 수 없습니다.' }, { status: 404 });
  }
} 