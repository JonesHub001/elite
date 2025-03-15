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
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800',
      'https://images.unsplash.com/photo-1583511655826-05700442b327?w=800',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800'
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
      'https://images.unsplash.com/photo-1583337130420-cbcc8e12de0d?w=800',
      'https://images.unsplash.com/photo-1583511666407-5f06533f2113?w=800',
      'https://images.unsplash.com/photo-1583337130423-937f96eef0a9?w=800'
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
          <div className="space-y-16">
            {pastLitters.map((litter) => (
              <div key={litter.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{litter.date} Litter</h2>
                    <div className="text-gray-600 mb-4">
                      <p><strong>Sire:</strong> {litter.parents.sire}</p>
                      <p><strong>Dam:</strong> {litter.parents.dam}</p>
                    </div>
                    <p className="text-gray-600">{litter.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {litter.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${litter.date} Litter - Photo ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewsletterForm />
    </div>
  );
}