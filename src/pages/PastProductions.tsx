import React, { useEffect } from 'react';
import NewsletterForm from '../components/NewsletterForm';
import { MessageCircle, Phone } from 'lucide-react';
// import images
import p1 from '../assets/images/pastBEN.jpeg'
import p2 from '../assets/images/pastDAPHNE.png'
import p3 from '../assets/images/pastLotus.png'
import p4 from '../assets/images/pastPOPPY.png'
import p5 from '../assets/images/pastRUE.png'
import p6 from '../assets/images/pastZEN.jpeg'
import p7 from '../assets/images/past_ROMAN.png'
import p8 from '../assets/images/pups_and_woman.jpeg'
const pastLitters = [
  {
    id: '1',
    parents: {
      sire: 'Champion Zeus',
      dam: 'Queen Victoria'
    },
    date: 'Fall 2023',
    description: 'Exceptional litter producing multiple show quality puppies. All puppies placed in loving homes.',
    images: [
      p1
    ]
  },
  {
    id: '2',
    parents: {
      sire: 'King Atlas',
      dam: 'Princess Luna'
    },
    date: 'Summer 2023',
    description: 'Beautiful litter with excellent structure and temperament. Several puppies went on to become champions.',
    images: [
      p2
    ]
  },
  {
    id: '3',
    parents: {
      sire: 'Champion Zeus',
      dam: 'Diamond Rose'
    },
    date: 'Spring 2023',
    description: 'Outstanding litter featuring rare colors and exceptional bone structure. Perfect examples of the breed standard.',
    images: [
      p3
    ]
  },
  {
    id: '4',
    parents: {
      sire: 'King Atlas',
      dam: 'Ruby Star'
    },
    date: 'Winter 2023',
    description: 'Compact and muscular puppies with great temperaments. All placed in loving show homes.',
    images: [
      p4
    ]
  },
  {
    id: '5',
    parents: {
      sire: 'Champion Thunder',
      dam: 'Queen Victoria'
    },
    date: 'Fall 2022',
    description: 'Exceptional quality puppies with perfect head structure and amazing personalities.',
    images: [
      p5
    ]
  },
  {
    id: '6',
    parents: {
      sire: 'King Atlas',
      dam: 'Sapphire Dream'
    },
    date: 'Summer 2022',
    description: 'Beautiful blue and champagne puppies with excellent confirmation. Multiple show prospects.',
    images: [
      p6
    ]
  },
  {
    id: '7',
    parents: {
      sire: 'Champion Zeus',
      dam: 'Crystal Ice'
    },
    date: 'Spring 2022',
    description: 'Stunning tri-color puppies with perfect structure. Several went on to become champions.',
    images: [
      p7
    ]
  },
  {
    id: '8',
    parents: {
      sire: 'Royal Flash',
      dam: 'Princess Luna'
    },
    date: 'Winter 2022',
    description: 'Compact and well-built puppies with excellent temperaments. Perfect family companions.',
    images: [
      p8
    ]
  }
];

const fadeInElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('animate-fadeIn');
        (entry.target as HTMLElement).style.opacity = '1';
      }
    });
  }, { threshold: 0.1, rootMargin: '50px' });

  document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
  });
};

export default function PastProductions() {
  useEffect(() => {
    fadeInElements();
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-slate-50 py-24 fade-in opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-8">Past Productions</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              View our previous litters and the exceptional American Bullies we've produced.
            </p>
          </div>
        </div>
      </div>

      {/* Past Litters Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pastLitters.map((litter, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-[1.02] fade-in opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative aspect-w-1 aspect-h-1">
                  <img
                    src={litter.images[0]}
                    alt={`${litter.date} Litter`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">{litter.parents.sire} & {litter.parents.dam}</h3>
                  <p className="text-slate-600 text-sm mb-2">{litter.date}</p>
                  <p className="text-slate-700">{litter.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-50 py-24 fade-in opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Interested in Our Puppies?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Contact us to learn more about our upcoming litters and available puppies.
            </p>
            <a
              href="mailto:topelitebullies@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              <a href="mailto:topelitebullies@gmail.com">Email Us</a>
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 fade-in opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
}