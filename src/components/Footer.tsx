import { Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className="flex items-center mb-4 md:mb-0"
          >
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Powercom Engineering. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}