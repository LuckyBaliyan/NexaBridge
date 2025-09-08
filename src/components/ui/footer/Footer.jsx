import { FaTwitter, FaLinkedin, } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logof.jpg"
              alt="Punjab Govt Logo"
              className="w-26 h-26 rounded-full"
            />
            <h2 className="text-base font-bold text-[var(--Highlight)]">Punjab Govt · Initiative <span>NexaBridge</span></h2>
          </div>
          <p className="mt-4 text-sm leading-tight text-white">
            Connecting alumni, fostering community, and empowering success.
          </p>
        </div>

       
        <div className="md:ml-14">
          <h3 className="font-semibold text-[var(--Accent)] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--Accent)] mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-semibold text-[var(--Accent)] mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NexaBridge. All rights reserved. A Punjab Govt. Initiative.
      </div>
    </footer>
  );
}
