'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [currentLanguage, setCurrentLanguage] = useState('KR');

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 왼쪽 카테고리 */}
          <div className="flex space-x-8">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-600">
              HOME
            </Link>
            <Link href="/profile" className="text-xl font-bold text-gray-900 hover:text-gray-600">
              PROFILE
            </Link>
          </div>

          {/* 오른쪽 언어 선택 */}
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentLanguage('EN')}
              className={`text-sm ${currentLanguage === 'EN' ? 'text-yellow-500' : 'text-gray-500'}`}
            >
              EN
            </button>
            <button
              onClick={() => setCurrentLanguage('KR')}
              className={`text-sm ${currentLanguage === 'KR' ? 'text-yellow-500' : 'text-gray-500'}`}
            >
              KR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 