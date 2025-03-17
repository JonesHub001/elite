import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint as Paw, Instagram, Facebook, Mail, Menu, X, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/puppies', label: 'Available Puppies' },
    { to: '/past-productions', label: 'Past Productions' },
    { to: '/mission', label: 'Our Mission' },
    { to: '/apply', label: 'Apply to Adopt' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Paw className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Elite Bullies</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/application-status"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <ClipboardCheck className="h-4 w-4" />
              Check Status
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={clsx('md:hidden', isOpen ? 'block' : 'hidden')}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/application-status"
            className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            <ClipboardCheck className="h-5 w-5" />
            Check Application Status
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Elite Bullies</h3>
            <p className="text-slate-400 mb-4">
              Premier Micro American Bully breeder in Seattle, Washington. ABKC registered puppies and professional stud services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/elitebullies" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/elitebullies" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="mailto:topelitebullies@gmail.com" className="text-slate-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/puppies" className="text-slate-400 hover:text-white">Available Puppies</Link></li>
              <li><Link to="/past-productions" className="text-slate-400 hover:text-white">Past Productions</Link></li>
              <li><Link to="/apply" className="text-slate-400 hover:text-white">Apply for a Puppy</Link></li>
              <li><Link to="/mission" className="text-slate-400 hover:text-white">Our Mission</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://abkcdogs.net" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">ABKC Registry</a></li>
              <li><a href="https://www.abkcdogs.net" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">ABKC Breed Standard</a></li>
              <li><a href="https://www.abkcdogs.net/breed2" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">AKC Breed Standard</a></li>
              <li><a href="https://bullymagazine.co/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">Bully King Magazine</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Seattle, Washington</li>
              {/* <li>Phone: (232) 445-4445</li> */}
              <li>Email: topelitebullies@gmail.com</li>
              <li>Hours: 9AM - 6PM PST</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Elite Bullies. All rights reserved.
            </p>
            <div className="flex space-x-4 md:justify-end text-sm text-slate-400">
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
              <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}