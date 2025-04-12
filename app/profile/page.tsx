'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/i18n/translations';
import Image from 'next/image';

export default function Profile() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 프로필 헤더 */}
      <div className="relative h-60 bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300">
          {/* 배경 이미지는 추후 추가 */}
        </div>
      </div>

      {/* 프로필 콘텐츠 */}
      <div className="container mx-auto max-w-4xl px-4">
        {/* 프로필 카드 */}
        <div className="relative -mt-20 bg-white rounded-lg shadow-lg p-6 mb-8">
          {/* 프로필 이미지 */}
          <div className="absolute -top-16 left-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-gray-200">
              {/* 프로필 이미지는 추후 추가 */}
            </div>
          </div>

          {/* 프로필 정보 */}
          <div className="ml-40 pt-2">
            <h1 className="text-3xl font-bold text-gray-900">은성</h1>
            <p className="text-gray-600 mt-2">Game Developer & Designer</p>
          </div>
        </div>

        {/* 소개 섹션 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
          <p className="text-gray-600">
            {language === 'KR' 
              ? '게임 개발과 디자인을 좋아하는 개발자입니다. 사용자 경험을 중심으로 재미있고 몰입감 있는 게임을 만들기 위해 노력하고 있습니다.'
              : 'A developer who loves game development and design. Striving to create fun and immersive games with a focus on user experience.'}
          </p>
        </div>

        {/* 기술 스택 섹션 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Frontend</h3>
              <p className="text-gray-600 mt-1">React, Next.js, TypeScript</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Game Dev</h3>
              <p className="text-gray-600 mt-1">Unity, C#</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Design</h3>
              <p className="text-gray-600 mt-1">Figma, Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 