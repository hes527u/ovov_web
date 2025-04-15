'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/i18n/translations';
import Image from 'next/image';

export default function Profile() {
  const { language } = useLanguage();
  const t = translations[language];

  // 기술 스택 데이터
  const techStackData = [
    {
      category: t.profile.techStack.categories.gameDev,
      skills: ['Unity', 'C#', 'luaScript']
    },
    {
      category: t.profile.techStack.categories.gameDesign,
      skills: ['Notion', 'Excel']
    },
    {
      category: t.profile.techStack.categories.uiuxDesign,
      skills: ['Figma']
    }
  ];

  // 경력 데이터
  const careerData = t.profile.career.data;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 프로필 헤더 */}
      <div className="relative h-60 bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300">
          {/* 배경 이미지는 추후 추가 */}
        </div>
      </div>

      {/* 프로필 콘텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 pb-2">
        {/* 프로필 카드 */}
        <div className="relative -mt-20 bg-white rounded-lg shadow-lg p-6 mb-8">
          {/* 프로필 이미지 */}
          <div className="absolute -top-16 left-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-gray-200">
              <Image
                src="/profile/avatar.png"
                alt="Profile"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* 프로필 정보 */}
          <div className="ml-40 pt-2">
            <h1 className="text-3xl font-bold text-gray-900">은성 (Euni)</h1>
            <p className="text-gray-500 text-base">@ovoveuni</p>
            <p className="text-gray-600 mt-2">{t.profile.jobTitle}</p>
          </div>
        </div>

        {/* 소개 섹션 */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.profile.about.title}</h2>
          <p className="text-gray-600 whitespace-pre-line">{t.profile.about.content}</p>
        </div>

        {/* 기술 스택 섹션 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.profile.techStack.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {techStackData.map((stack, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">{stack.category}</h3>
                <p className="text-gray-600 mt-1">{stack.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 연보 섹션 */}
        <div className="bg-white rounded-lg shadow-lg p-6 pb-12 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.profile.career.title}</h2>
          <div className="relative space-y-8 pb-4">
            {/* 연속된 세로선 */}
            <div className="absolute left-[118px] top-[7px] h-[calc(100%-86px)] w-[2px] bg-gray-300"></div>
            
            {careerData.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex">
                  {/* 연도와 타임라인 점 컨테이너 */}
                  <div className="flex items-start w-[140px] shrink-0">
                    <div className="w-28 text-gray-900 font-medium pt-0.5 text-right pr-3">{item.year}</div>
                    <div className="relative pt-1.5">
                      <div className="w-[14px] h-[14px] rounded-full border-[3px] border-[#FF6B00] bg-white relative z-10"></div>
                    </div>
                  </div>

                  {/* 회사명과 프로젝트 컨테이너 */}
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 leading-7">{item.company}</h3>
                    <div className="text-gray-600 space-y-1">
                      {item.projects.map((project, projectIndex) => (
                        <p key={projectIndex}>- {project}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 