'use client';

import { GameItem, genreStyles, GameContentType, genreTranslations } from '@/app/types';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations, GameId } from '@/app/i18n/translations';
import { use } from 'react';
import { IoIosPricetag } from 'react-icons/io';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import YouTube from 'react-youtube';
import { FaGooglePlay, FaSteam } from 'react-icons/fa';
import { SiItchdotio } from 'react-icons/si';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function GamePage({ params }: PageProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const resolvedParams = use(params);
  const [game, setGame] = useState<GameItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`/api/games/${resolvedParams.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch game');
        }
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error('Error fetching game:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [resolvedParams.id]);

  // 언어 변경 감지
  useEffect(() => {
    if (!iframeLoading && game?.contentType === 'game') {
      const iframe = document.querySelector('iframe');
      if (iframe?.contentWindow) {
        const unityLanguage = language === 'KR' ? 'ko' : 'en';
        console.log('Language changed, sending to Unity:', unityLanguage);
        const message = {
          type: 'SET_LANGUAGE',
          language: unityLanguage
        };
        iframe.contentWindow.postMessage(message, 'https://dice-blast.netlify.app');
      }
    }
  }, [language, iframeLoading, game?.contentType]);

  const renderContent = (contentType: GameContentType) => {
    if (!game) return null;

    switch (contentType) {
      case 'game':
        return (
          <div className="relative w-full h-full">
            {iframeLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                  <p className="text-gray-600 mt-4">{t.game.loading}</p>
                </div>
              </div>
            )}
            {iframeError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <p className="text-red-600">{t.game.notFound}</p>
                  <p className="text-gray-600 text-sm mt-2">{t.game.retry}</p>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://${resolvedParams.id}.netlify.app`}
                className="w-full h-full border-0"
                allow="fullscreen"
                loading="lazy"
                onLoad={(e) => {
                  setIframeLoading(false);
                  const iframe = e.target as HTMLIFrameElement;
                  if (iframe.contentWindow) {
                    // 웹의 언어 코드를 Unity의 언어 코드로 변환
                    const unityLanguage = language === 'KR' ? 'ko' : 'en';
                    console.log('Sending language to Unity:', unityLanguage);
                    const message = {
                      type: 'SET_LANGUAGE',
                      language: unityLanguage
                    };
                    iframe.contentWindow.postMessage(message, 'https://dice-blast.netlify.app');
                  }
                }}
                onError={() => {
                  setIframeLoading(false);
                  setIframeError(true);
                }}
              />
            )}
          </div>
        );
      case 'thumbnail':
        return (
          <div className="relative w-full h-full">
            <Image
              src={game.contentUrl}
              alt={game.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        );
      case 'video':
        const videoId = game.contentUrl.split('v=')[1] || game.contentUrl.split('/').pop();
        return (
          <div className="relative w-full h-full">
            <YouTube
              videoId={videoId}
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0,
                  modestbranding: 1,
                  rel: 0
                }
              }}
              className="absolute inset-0"
            />
          </div>
        );
      default:
        return null;
    }
  };

  // 임시 업데이트 내역
  const updateHistory = [
    {
      date: "2025-04-21",
      version: "1.0.0",
      content: {
        KR: "게임 최초 출시",
        EN: "Initial game release"
      }
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">{t.game.notFound}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        {/* 컨텐츠 영역 */}
        <div className="w-full h-[calc(100vh-12rem)] min-h-[400px] max-h-[800px] bg-transparent rounded-lg overflow-hidden mb-2 relative">
          <div className="absolute inset-0 top-[64px] flex items-center justify-center">
            {renderContent(game.contentType)}
          </div>
        </div>

        {/* 게임 정보 */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold">{t.game.titles[game.id as GameId]}</h1>
            <span className={`inline-block px-3 py-1 text-sm rounded-md ${genreStyles[game.genre].bg} ${genreStyles[game.genre].text}`}>
              {genreTranslations[game.genre][language]}
            </span>
          </div>
          <p className="text-gray-600 whitespace-pre-line mb-6">
            {game.descriptions[language]}
          </p>
          {game.externalLinks && (
            <div className="flex gap-4">
              {game.externalLinks.playStore && (
                <a
                  href={game.externalLinks.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <FaGooglePlay className="text-xl" />
                  <span>{t.game.externalLinks.playStore}</span>
                </a>
              )}
              {game.externalLinks.steam && (
                <a
                  href={game.externalLinks.steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#171a21] text-white rounded-lg hover:bg-[#2a475e] transition-colors"
                >
                  <FaSteam className="text-xl" />
                  <span>{t.game.externalLinks.steam}</span>
                </a>
              )}
              {game.externalLinks.itch && (
                <a
                  href={game.externalLinks.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#fa5c5c] text-white rounded-lg hover:bg-[#ff4444] transition-colors"
                >
                  <SiItchdotio className="text-xl" />
                  <span>{t.game.externalLinks.itch}</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* 업데이트 내역 */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4">{t.updateHistory}</h2>
          <div className="space-y-4">
            {updateHistory.map((update, index) => (
              <div key={index} className="border-l-4 border-gray-300 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm text-gray-500">{update.date}</p>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-md border border-gray-300 bg-gray-50 text-gray-500">
                    <IoIosPricetag className="text-gray-400" />
                    v{update.version}
                  </span>
                </div>
                <p className="mt-1">{update.content[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 