export default function GamePage({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Game ID: {params.id}</h1>
        {/* 여기에 게임 상세 내용이 들어갈 예정입니다 */}
      </div>
    </div>
  );
} 