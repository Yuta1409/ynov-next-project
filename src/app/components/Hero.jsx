import Image from "next/image";
import { Container } from "../components/Container";
import heroImg from "../../../public/img/hero.png";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 right-0 w-24 h-24 bg-indigo-500 rounded-full animate-bounce"></div>
                <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-green-500 rounded-full animate-spin"></div>
                <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
            </div>
            <Container className="relative z-10 flex flex-wrap">
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            Bienvenue chez Celebris
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            Celebris est votre partenaire de confiance pour l'organisation d'événements inoubliables. Que ce soit pour des concerts, des conférences ou des fêtes privées, nous nous occupons de tout pour que vous puissiez profiter pleinement de votre événement.
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                            <Link href="/events" legacyBehavior>
                                <a className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md">
                                    Voir nos événements
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="">
                        <Image
                            src={heroImg}
                            width="616"
                            height="617"
                            className={"object-cover"}
                            alt="Hero Illustration"
                            loading="eager"
                            placeholder="blur"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};