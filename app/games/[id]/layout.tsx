'use client';

import { ReactNode } from 'react';

export default async function GameLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
} 