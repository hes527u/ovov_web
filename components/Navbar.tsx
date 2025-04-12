'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../app/contexts/LanguageContext';
import { translations, Language } from '../app/i18n/translations';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 왼쪽 카테고리 */}
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className={`text-xl font-bold ${pathname === '/' ? 'text-black' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              HOME
            </Link>
            <Link 
              href="/profile" 
              className={`text-xl font-bold ${pathname === '/profile' ? 'text-black' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              PROFILE
            </Link>
          </div>

          {/* 오른쪽 언어 선택 */}
          <div className="flex space-x-4">
            <button
              onClick={() => setLanguage('EN')}
              className={`text-sm ${language === 'EN' ? 'text-yellow-500' : 'text-gray-500'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('KR')}
              className={`text-sm ${language === 'KR' ? 'text-yellow-500' : 'text-gray-500'}`}
            >
              KR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 