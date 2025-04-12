'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 