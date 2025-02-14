"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ConfirmationPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');

  return (
    <div>
      <Navbar />
      <main className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 clip-square animate-pulse"></div>
          <div className="absolute top-10 right-10 w-24 h-24 bg-indigo-500 clip-square animate-bounce"></div>
          <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-green-500 clip-square animate-spin"></div>
          <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-blue-500 clip-square animate-ping"></div>
        </div>
        <div className="relative z-10 w-full max-w-lg p-6 border rounded-lg shadow-lg bg-gray-800 text-white text-center">
          <h1 className="text-4xl font-bold mb-8">Félicitations ! 🎉🎊</h1>
          <p className="text-xl mb-4">Votre réservation pour l'événement {eventId} a bien été enregistrée.</p>
          <p className="text-lg">Nous avons hâte de vous voir à l'événement !</p>
          <div className="mt-8">
            <button
              onClick={() => router.push('/')}
              className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConfirmationPage;