import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-4 border-[#b07d67] shadow-md">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Coffee & Running Club
          </h3>
          <p className="text-gray-600">
            Connecting runners through the power of community and coffee.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/about" className="hover:text-gray-900">About</a></li>
              <li><a href="/benefits" className="hover:text-gray-900">Benefits</a></li>
              <li><a href="/plans" className="hover:text-gray-900">Plans</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Community</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/events" className="hover:text-gray-900">Events</a></li>
              <li><a href="/blog" className="hover:text-gray-900">Blog</a></li>
              <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Coffee & Running Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;