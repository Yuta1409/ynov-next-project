import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6 text-center">Bienvenue sur Notre Site</h1>
          <p className="text-xl mb-8 text-center max-w-2xl">Votre destination pour des événements incroyables</p>
          <div className="flex gap-4">
            <Link href="/events" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition">Voir les événements</Link>
            <Link href="/about" className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition">En savoir plus</Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto my-8 p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Derniers Événements</h2>
            <p>Découvrez les événements à venir et réservez vos places dès maintenant.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">À Propos</h2>
            <p>En savoir plus sur notre mission et notre équipe.</p>
            <Link href="/about" className="mt-4 inline-block px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">En savoir plus</Link>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2023 Notre Site. Tous droits réservés.</p>
      </footer>
    </div>
  );
}