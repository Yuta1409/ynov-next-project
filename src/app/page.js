import { Navbar } from './components/Navbar';
import { Hero } from "./components/Hero";
import { SectionTitle } from "./components/SectionTitle";
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section className="relative py-16 bg-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-indigo-500 clip-square animate-bounce"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-green-500 clip-circle animate-spin"></div>
          <div className="absolute bottom-1/4 right-1/2 w-16 h-16 bg-blue-500 clip-square animate-ping"></div>
        </div>
        <div className="relative z-10">
          <SectionTitle
            preTitle="Avantages de notre événement"
            title="Pourquoi participer à notre concert"
            className="text-white"
          >
            Notre concert offre une expérience unique avec des performances en direct de vos artistes préférés. Rejoignez-nous pour une soirée inoubliable remplie de musique et de divertissement.
          </SectionTitle>
        </div>
      </section>

      <section className="relative py-16 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-10 right-10 w-24 h-24 bg-indigo-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-green-500 rounded-full animate-spin"></div>
          <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
        </div>
        <div className="relative z-10">
          <SectionTitle
            preTitle="Découvrez nos artistes"
            title="Rencontrez les artistes qui se produiront"
            className="text-white"
          >
            Cette section met en avant les artistes qui se produiront lors de notre événement. Apprenez-en plus sur eux et préparez-vous à une expérience musicale inoubliable.
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 shadow-md rounded-lg p-8 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Artiste 1</h3>
              <p>Artiste 1 est connu pour ses performances énergiques et ses hits qui font danser les foules.</p>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-8 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Artiste 2</h3>
              <p>Artiste 2 apporte une touche unique avec son style musical innovant et ses paroles inspirantes.</p>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-8 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Artiste 3</h3>
              <p>Artiste 3 est une légende de la musique, avec des décennies de succès et une présence scénique incroyable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-purple-500 clip-circle animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-indigo-500 clip-square animate-bounce"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-green-500 clip-circle animate-spin"></div>
          <div className="absolute bottom-1/4 right-1/2 w-16 h-16 bg-blue-500 clip-square animate-ping"></div>
        </div>
        <div className="relative z-10">
          <SectionTitle
            preTitle="Témoignages"
            title="Voici ce que nos participants disent"
            className="text-white"
          >
            Les témoignages sont un excellent moyen d'augmenter la confiance et la notoriété de la marque. Utilisez cette section pour mettre en avant les avis de vos participants.
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 shadow-md rounded-lg p-8 mb-8 text-white">
              <img src="/img/user1.jpg" alt="Jean Dupont" className="w-16 h-16 rounded-full mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Jean Dupont</h3>
              <p>C'était une expérience incroyable ! La musique était fantastique et l'ambiance était électrique.</p>
            </div>
            <div className="bg-gray-900 shadow-md rounded-lg p-8 mb-8 text-white">
              <img src="/img/user2.jpg" alt="Marie Curie" className="w-16 h-16 rounded-full mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Marie Curie</h3>
              <p>J'ai adoré chaque moment du concert. Les artistes étaient incroyables et l'organisation était parfaite.</p>
            </div>
            <div className="bg-gray-900 shadow-md rounded-lg p-8 mb-8 text-white">
              <img src="/img/user3.jpg" alt="Albert Einstein" className="w-16 h-16 rounded-full mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Albert Einstein</h3>
              <p>Un événement à ne pas manquer ! J'ai passé un moment inoubliable avec mes amis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-10 right-10 w-24 h-24 bg-indigo-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-green-500 rounded-full animate-spin"></div>
          <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
        </div>
        <div className="relative z-10">
          <SectionTitle preTitle="FAQ" title="Questions Fréquemment Posées" className="text-white">
            Répondez aux questions possibles de vos participants ici, cela augmentera le taux de conversion ainsi que les demandes de support ou de chat.
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 shadow-md rounded-lg p-8 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Quelle est la date de l'événement ?</h3>
              <p>L'événement aura lieu le 25 décembre 2025.</p>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-8 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Où se déroule l'événement ?</h3>
              <p>L'événement se déroulera au Stade de France, Paris.</p>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-8 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Comment puis-je acheter des billets ?</h3>
              <p>Vous pouvez acheter des billets en ligne sur notre site web ou dans les points de vente autorisés.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}