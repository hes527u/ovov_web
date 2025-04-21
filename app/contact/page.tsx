'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
      <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-6">
          {t.description}
        </p>
        
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-gray-700 font-medium">{t.email.label}:</span>
          <a 
            href={`mailto:${t.email.address}`}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {t.email.address}
          </a>
        </div>

        <p className="text-gray-600">
          {t.response}
        </p>
      </div>
    </div>
  );
} 