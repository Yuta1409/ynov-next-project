import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Section des pages principales */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Pages principales</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-indigo-600">Home</a></li>
                            <li><a href="/events" className="hover:text-indigo-600">Events</a></li>
                        </ul>
                    </div>

                    {/* Section des informations de contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
                        <p>Téléphone : <a href="tel:+33123456789" className="text-indigo-600 hover:underline">+33 1 23 45 67 89</a></p>
                        <p>Email : <a href="mailto:eventmaster@contact.com" className="text-indigo-600 hover:underline">contact@monprojet.com</a></p>
                    </div>

                    {/* Section des réseaux sociaux */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/img/twitter.svg" alt="Twitter" width={24} height={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/img/instagram.svg" alt="Instagram" width={24} height={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/img/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section des droits réservés */}
                <div className="mt-10">
                    <p>&copy; {new Date().getFullYear()} EventMaster. Tous droits réservés.</p>
                    <div className="flex flex-wrap justify-center gap-5 mt-4">
                        <div className="pt-2 text-gray-400">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js Logo" width={40} height={18} />
                        </div>
                        <div className="text-gray-400">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" width={40} height={18} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;