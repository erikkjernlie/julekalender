import { GledeKalender } from '../components/glede-kalender';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-100 to-green-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GledeKalender />
      </div>
      <div className="fixed bottom-0 left-0 w-full h-32 bg-repeat-x" style={{ backgroundImage: "url('/snowflakes.png')" }}></div>
    </main>
  );
}

