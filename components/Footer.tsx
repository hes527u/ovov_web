'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiTistory } from 'react-icons/si';
import { useLanguage } from '../app/contexts/LanguageContext';
import { translations } from '../app/i18n/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="w-full" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4 flex justify-center items-center space-x-8">
          <Link 
            href="https://hes527u.tistory.com" 
            target="_blank"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <SiTistory className="w-5 h-5" />
          </Link>
          <Link 
            href="https://github.com/hes527u" 
            target="_blank"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link 
            href="https://x.com/ovoveuni" 
            target="_blank"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaSquareXTwitter className="w-5 h-5" />
          </Link>
          <Link 
            href="https://www.instagram.com/ovoveuni/" 
            target="_blank"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/%EC%84%B1%EC%9D%80-%ED%97%88-11658233b/" 
            target="_blank"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
        </div>
        <div className="py-2 flex justify-center items-center space-x-6">
          <Link 
            href="/privacy-policy" 
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            {t.privacyPolicy}
          </Link>
          <Link 
            href="/terms-of-service" 
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            {t.termsOfService}
          </Link>
          <Link 
            href="/contact" 
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            {t.contact}
          </Link>
        </div>
        <div className="pb-8 text-center">
          <p className="text-sm text-gray-400">© 2025 ovoveuni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 