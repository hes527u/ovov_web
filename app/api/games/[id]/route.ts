import { NextResponse } from 'next/server';
import { games } from '@/app/data/games';

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: RouteParams) {
  const game = games.find((g) => g.id === params.id);

  if (!game) {
    return NextResponse.json({ error: 'Game not found' }, { status: 404 });
  }

  return NextResponse.json(game);
} 