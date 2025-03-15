import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';
import type { Puppy } from '../types';

const availablePuppies: Puppy[] = [
  {
    id: '1',
    name: 'Blue Steel',
    images: [
      'https://images.unsplash.com/photo-1583511655826-05700442b327?w=800',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800',
      'https://images.unsplash.com/photo-1583511666407-5f06533f2113?w=800'
    ],
    parents: {
      sire: 'Champion Zeus',
      dam: 'Queen Victoria'
    },
    gender: 'Male',
    dateOfBirth: '2024-01-15',
    color: 'Blue',
    status: 'Available',
    description: 'Exceptional male puppy with perfect structure and temperament. Health tested and ready for his forever home.'
  },
  {
    id: '2',
    name: 'Ruby',
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800',
      'https://images.unsplash.com/photo-1583337130420-cbcc8e12de0d?w=800',
      'https://images.unsplash.com/photo-1583337130423-937f96eef0a9?w=800'
    ],
    parents: {
      sire: 'King Atlas',
      dam: 'Princess Luna'
    },
    gender: 'Female',
    dateOfBirth: '2024-01-20',
    color: 'Fawn',
    status: 'Reserved',
    description: 'Beautiful female with excellent confirmation and loving personality. From our champion bloodlines.'
  }
];

export default function AvailablePuppies() {
  return (
    <div>
      {/* Introduction */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Available Puppies</h1>
            <p className="text-lg text-gray-600 mb-8">
              Our puppies are bred with the utmost care and attention to health, temperament, and conformation. 
              Each puppy comes with a comprehensive health guarantee and lifetime support.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-sm">Health Tested Parents</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-sm">Champion Bloodlines</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Puppy Listings */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {availablePuppies.map((puppy) => (
              <div key={puppy.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{puppy.name}</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Details</h3>
                        <dl className="grid grid-cols-2 gap-2">
                          <dt className="text-gray-600">Gender:</dt>
                          <dd>{puppy.gender}</dd>
                          <dt className="text-gray-600">Date of Birth:</dt>
                          <dd>{new Date(puppy.dateOfBirth).toLocaleDateString()}</dd>
                          <dt className="text-gray-600">Color:</dt>
                          <dd>{puppy.color}</dd>
                          <dt className="text-gray-600">Status:</dt>
                          <dd>
                            <span className={`inline-block px-2 py-1 rounded text-sm ${
                              puppy.status === 'Available' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {puppy.status}
                            </span>
                          </dd>
                        </dl>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Parents</h3>
                        <dl className="grid grid-cols-2 gap-2">
                          <dt className="text-gray-600">Sire:</dt>
                          <dd>{puppy.parents.sire}</dd>
                          <dt className="text-gray-600">Dam:</dt>
                          <dd>{puppy.parents.dam}</dd>
                        </dl>
                      </div>
                      <p className="text-gray-600">{puppy.description}</p>
                      {puppy.status === 'Available' && (
                        <Link
                          to="/apply"
                          className="btn-primary inline-block mt-4"
                        >
                          Apply to Adopt
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {puppy.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${puppy.name} - Photo ${index + 1}`}
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

      {/* Stud Service */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stud Service</h2>
            <p className="text-lg text-gray-600 mb-8">
              We offer stud service to approved females. Our studs are health tested and proven producers.
              Contact us to discuss your breeding goals and check availability.
            </p>
            <a
              href="mailto:info@elitebullies.com"
              className="btn-primary"
            >
              Inquire About Stud Service
            </a>
          </div>
        </div>
      </div>

      <NewsletterForm />
    </div>
  );
}