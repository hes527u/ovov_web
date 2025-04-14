import { NextRequest, NextResponse } from 'next/server';
import { games } from '@/app/data/games';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const game = games.find((g) => g.id === params.id);

  if (!game) {
    return NextResponse.json({ error: 'Game not found' }, { status: 404 });
  }

  return NextResponse.json(game);
} 