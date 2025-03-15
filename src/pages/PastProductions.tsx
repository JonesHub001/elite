import React from 'react';
import NewsletterForm from '../components/NewsletterForm';

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
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800'
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
      'https://images.unsplash.com/photo-1583337130420-cbcc8e12de0d?w=800'
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
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800'
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
      'https://images.unsplash.com/photo-1583511655826-05700442b327?w=800'
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
      'https://images.unsplash.com/photo-1583337426008-2fef51aa2cc4?w=800'
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
      'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=800'
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
      'https://images.unsplash.com/photo-1583337130423-937f96eef0a9?w=800'
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
      'https://images.unsplash.com/photo-1583511666407-5f06533f2113?w=800'
    ]
  }
];

export default function PastProductions() {
  return (
    <div>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Past Productions</h1>
            <p className="text-lg text-gray-600">
              Take a look at our previous litters and the exceptional puppies we've produced.
              Our breeding program focuses on health, temperament, and conformation excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pastLitters.map((litter) => (
              <div key={litter.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <img
                  src={litter.images[0]}
                  alt={`${litter.date} Litter`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">{litter.date} Litter</h2>
                  <div className="text-sm text-gray-600 mb-2">
                    <p><strong>Sire:</strong> {litter.parents.sire}</p>
                    <p><strong>Dam:</strong> {litter.parents.dam}</p>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{litter.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 py-12 mb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-800 mb-4">
            Elite Bully puppies go very quickly, so reach out to reserve your furever friend or to ask any questions.
          </p>
          <div className="bg-white rounded-lg shadow-sm p-6 inline-block">
            <p className="text-gray-700 font-medium mb-2">MY ONLY PHONE NUMBER</p>
            <a 
              href="tel:2065367442" 
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              (206) 536-7442
            </a>
          </div>
        </div>
      </div>

      <NewsletterForm />
    </div>
  );
}