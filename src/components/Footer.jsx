import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faLinkedin,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <hr className="border-inherit border-slate-800" />
            <footer className="text-white py-8 lg:py-5">
                <div className="container mx-auto flex flex-col lg:flex-row-reverse lg:justify-evenly items-center">
                    <div className="flex space-x-4 max-lg:mb-4 lg:mb-2">
                        <a
                            href="https://www.instagram.com/_Codersclub_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl md:text-4xl lg:text-5xl hover:text-gray-500 transition duration-300"
                        >
                            <FontAwesomeIcon className="lg:w-10 lg:h-10" icon={faInstagram} style={{ color: '#E1306C' }} />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl md:text-4xl lg:text-5xl hover:text-gray-500 transition duration-300"
                        >
                            <FontAwesomeIcon className="lg:w-10 lg:h-10" icon={faTwitter} style={{ color: '#1DA1F2' }} />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl md:text-4xl lg:text-5xl hover:text-gray-500 transition duration-300"
                        >
                            <FontAwesomeIcon className="lg:w-10 lg:h-10" icon={faLinkedin} style={{ color: '#0077B5' }} />
                        </a>
                        <a
                            href="https://chat.whatsapp.com/DQoTTIM9wae2qn93rCzwBR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl md:text-4xl lg:text-5xl hover:text-gray-500 transition duration-300"
                        >
                            <FontAwesomeIcon className="lg:w-10 lg:h-10" icon={faWhatsapp} style={{ color: '#25D366' }} />
                        </a>
                    </div>
                    <p className="text-md md:text-lg lg:text-xl text-gray-500 max-lg:mb-4">
                        Built with ❤️ by Durgesh Keshri
                    </p>
                    <p className="text-md md:text-lg lg:text-xl">&copy; 2024 Coder's Club. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
