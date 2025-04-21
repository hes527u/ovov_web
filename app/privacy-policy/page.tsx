'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const t = translations[language].privacyPolicy;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
      <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.collection.title}</h2>
          <p className="text-gray-600">
            {t.sections.collection.content}
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>{t.sections.collection.items.gameplay}</li>
            <li>{t.sections.collection.items.advertising}</li>
          </ul>
          <p className="text-gray-600 mt-4 italic">
            {t.sections.collection.note}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.analytics.title}</h2>
          <p className="text-gray-600">
            {t.sections.analytics.content}
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>{t.sections.analytics.items.gameplay}</li>
            <li>{t.sections.analytics.items.device}</li>
            <li>{t.sections.analytics.items.performance}</li>
          </ul>
          <p className="text-gray-600 mt-2">
            {t.sections.analytics.purpose}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.advertising.title}</h2>
          <p className="text-gray-600">
            {t.sections.advertising.content}
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>{t.sections.advertising.items.cookies}</li>
            <li>{t.sections.advertising.items.device}</li>
            <li>{t.sections.advertising.items.location}</li>
          </ul>
          <p className="text-gray-600 mt-2">
            {t.sections.advertising.purpose}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.purpose.title}</h2>
          <p className="text-gray-600">
            {t.sections.purpose.content}
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>{t.sections.purpose.items.service}</li>
            <li>{t.sections.purpose.items.support}</li>
            <li>{t.sections.purpose.items.improvement}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.retention.title}</h2>
          <p className="text-gray-600">
            {t.sections.retention.content}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.destruction.title}</h2>
          <p className="text-gray-600">
            {t.sections.destruction.content}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.contact.title}</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {t.sections.contact.content}
          </p>
        </section>
      </div>
    </div>
  );
} 