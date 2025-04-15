import { NextResponse, NextRequest } from 'next/server';
import { games } from '@/app/data/games';

type RouteContext = {
  params: Promise<{ id: string }>
}

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;
    const game = games.find((game) => game.id === id);

    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error('Error fetching game:', error);
    return NextResponse.json({ error: '게임을 찾을 수 없습니다.' }, { status: 404 });
  }
}