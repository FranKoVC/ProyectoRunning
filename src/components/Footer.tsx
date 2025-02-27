import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mi Página. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;