import { NextRequest, NextResponse } from 'next/server';
import { games } from '@/app/data/games';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const gameId = params.id;
    const game = games.find((game) => game.id === gameId);

    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    return NextResponse.json({ error: '게임을 찾을 수 없습니다.' }, { status: 404 });
  }
} 