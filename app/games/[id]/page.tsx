'use client';

import { GameItem, genreStyles } from '@/app/types';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/i18n/translations';
import { use } from 'react';
import { IoIosPricetag } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function GamePage({ params }: PageProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const resolvedParams = use(params);
  const [game, setGame] = useState<GameItem | null>(null);
  const [loading, setLoading] = useState(true);

  const unityConfig = {
    loaderUrl: `/unity-games/${resolvedParams.id}/Build/Build.loader.js`,
    dataUrl: `/unity-games/${resolvedParams.id}/Build/Build.data.unityweb`,
    frameworkUrl: `/unity-games/${resolvedParams.id}/Build/Build.framework.js.unityweb`,
    codeUrl: `/unity-games/${resolvedParams.id}/Build/Build.wasm.framework.unityweb`,
    streamingAssetsUrl: `StreamingAssets`,
    companyName: `OVOV`,
    productName: `Dice Blast`,
    productVersion: `1.0`,
  };

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext(unityConfig);

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

  // 임시 업데이트 내역
  const updateHistory = [
    {
      date: "2024-04-13",
      version: "0.0.1",
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
        <p className="text-xl text-gray-600">게임을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        {/* Unity 게임 화면 */}
        <div className="w-full h-[calc(100vh-12rem)] min-h-[400px] max-h-[800px] bg-transparent rounded-lg overflow-hidden mb-8 relative">
          <div className="absolute inset-0 top-[64px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-[1024px] mx-auto">
              <iframe
                src={`/unity-games/${resolvedParams.id}/index.html`}
                className="absolute bg-transparent"
                allow="fullscreen"
                style={{ 
                  border: 'none',
                  margin: 'auto',
                  padding: '0',
                  overflow: 'hidden',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  aspectRatio: 'auto'
                }}
                scrolling="no"
              />
            </div>
          </div>
        </div>

        {/* 게임 정보 */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold">{game.title}</h1>
            <span className={`inline-block px-3 py-1 text-sm rounded-md ${genreStyles[game.genre].bg} ${genreStyles[game.genre].text}`}>
              {translations[language].genres[game.genre]}
            </span>
          </div>
          <p className="text-gray-600 whitespace-pre-line">
            {game.descriptions[language]}
          </p>
        </div>

        {/* 업데이트 내역 */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4">{translations[language].updateHistory}</h2>
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