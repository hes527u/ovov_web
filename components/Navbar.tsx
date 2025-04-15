'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { translations } from '@/app/i18n/translations';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [currentPath, setCurrentPath] = useState('/');
  const pathname = usePathname();
  const t = translations[language];

  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 왼쪽 카테고리 */}
          <div className="flex space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 text-xl font-bold ${
                currentPath === "/"
                  ? "text-[#FF6B00]"
                  : "text-gray-600 hover:text-[#FF6B00]"
              }`}
            >
              {t.navigation.home}
            </Link>
            <Link
              href="/profile"
              className={`px-3 py-2 text-xl font-bold ${
                currentPath === "/profile"
                  ? "text-[#FF6B00]"
                  : "text-gray-600 hover:text-[#FF6B00]"
              }`}
            >
              {t.navigation.profile}
            </Link>
          </div>

          {/* 오른쪽 언어 선택 */}
          <div className="flex space-x-4">
            <button
              onClick={() => setLanguage('EN')}
              className={`text-sm ${language === 'EN' ? 'text-yellow-500' : 'text-gray-500'} hover:text-yellow-400 transition-colors`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('KR')}
              className={`text-sm ${language === 'KR' ? 'text-yellow-500' : 'text-gray-500'} hover:text-yellow-400 transition-colors`}
            >
              KR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}