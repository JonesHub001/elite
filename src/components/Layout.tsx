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

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}