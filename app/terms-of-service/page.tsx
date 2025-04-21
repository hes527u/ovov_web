'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function TermsOfService() {
  const { language } = useLanguage();
  const t = translations[language].termsOfService;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
      <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.application.title}</h2>
          <p className="text-gray-600">
            {t.sections.application.content}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.usage.title}</h2>
          <p className="text-gray-600">
            {t.sections.usage.content}
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>{t.sections.usage.items.privacy}</li>
            <li>{t.sections.usage.items.interference}</li>
            <li>{t.sections.usage.items.copyright}</li>
            <li>{t.sections.usage.items.illegal}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.intellectualProperty.title}</h2>
          <p className="text-gray-600">
            {t.sections.intellectualProperty.content}
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>{t.sections.intellectualProperty.items.copy}</li>
            <li>{t.sections.intellectualProperty.items.modification}</li>
            <li>{t.sections.intellectualProperty.items.commercial}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.changes.title}</h2>
          <p className="text-gray-600">
            {t.sections.changes.content}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.liability.title}</h2>
          <p className="text-gray-600">
            {t.sections.liability.content}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.sections.modification.title}</h2>
          <p className="text-gray-600">
            {t.sections.modification.content}
          </p>
        </section>
      </div>
    </div>
  );
} 