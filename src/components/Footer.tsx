
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-conference-blue text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">RCESAD-2025</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              International Conference on Recent Challenges in Engineering Science & Advanced Technology
            </p>
            <p className="text-gray-300 text-sm mt-4">
              7-8 March 2025 | Hybrid Mode
            </p>
            <div className="mt-6">
              <p className="text-sm text-white/80 italic">
                "The future is built on the flow of new ideas"
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#tracks" className="text-gray-300 hover:text-white transition-colors">
                  Tracks
                </a>
              </li>
              <li>
                <a href="#dates" className="text-gray-300 hover:text-white transition-colors">
                  Important Dates
                </a>
              </li>
              <li>
                <a href="#committee" className="text-gray-300 hover:text-white transition-colors">
                  Committee
                </a>
              </li>
              <li>
                <a href="#registration" className="text-gray-300 hover:text-white transition-colors">
                  Registration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Chameli Devi Group of Institutions, Indore, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@cdgi.edu.in" className="text-gray-300 hover:text-white">
                  info@cdgi.edu.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 XXXX-XXXXXX</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <img 
                src="/lovable-uploads/e671f055-5b9d-4f8a-9cfe-e7ffced6794f.png" 
                alt="IEEE logo" 
                className="h-10 bg-white p-1 rounded" 
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} RCESAD-2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
