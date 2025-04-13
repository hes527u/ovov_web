import { NextResponse } from 'next/server';
import { games } from '@/app/data/games';

export async function GET() {
  return NextResponse.json(games);
} 