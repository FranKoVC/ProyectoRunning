import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#d6c6b8] text-gray-800 py-6  border-t-4 border-[#b07d67] shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm font-bold">&copy; {new Date().getFullYear()} Coffee & Running Club. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-600"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-gray-600"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-gray-600"><FaInstagram size={24} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

