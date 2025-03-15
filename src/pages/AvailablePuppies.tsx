import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Star } from 'lucide-react';
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

const studs = [
  {
    id: '1',
    name: 'Champion Zeus',
    title: 'Grand Champion',
    age: '3 years',
    color: 'Blue Tri',
    weight: '120 lbs',
    height: '22 inches',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800',
    achievements: [
      'Grand Champion Title 2023',
      'Best in Show - American Bully Kennel Club 2022',
      'Multiple Best of Breed wins'
    ],
    healthTests: [
      'OFA Hip: Good',
      'OFA Elbow: Normal',
      'Cardiac: Clear',
      'DM: Clear'
    ],
    description: 'Zeus is our premier stud, known for producing exceptional puppies with great structure and temperament. His offspring have won multiple championships and make wonderful family companions.',
    studFee: '$2,500',
    offspring: [
      {
        image: 'https://images.unsplash.com/photo-1583511655826-05700442b327?w=500',
        caption: 'Blue Steel - 8 months'
      },
      {
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500',
        caption: 'Royal Flush - 1 year'
      },
      {
        image: 'https://images.unsplash.com/photo-1583337426008-2fef51aa2cc4?w=500',
        caption: 'Diamond - 6 months'
      }
    ]
  },
  {
    id: '2',
    name: 'King Atlas',
    title: 'International Champion',
    age: '4 years',
    color: 'Champagne',
    weight: '110 lbs',
    height: '21 inches',
    image: 'https://images.unsplash.com/photo-1583337130420-cbcc8e12de0d?w=800',
    achievements: [
      'International Champion 2023',
      'European Winner 2022',
      'Multiple Best in Class wins'
    ],
    healthTests: [
      'OFA Hip: Excellent',
      'OFA Elbow: Normal',
      'Cardiac: Clear',
      'DM: Clear'
    ],
    description: 'Atlas is known for producing compact, muscular puppies with excellent bone structure and loving temperaments. His offspring are highly sought after for both show and companion homes.',
    studFee: '$3,000',
    offspring: [
      {
        image: 'https://images.unsplash.com/photo-1583511666407-5f06533f2113?w=500',
        caption: 'Thunder - 1 year'
      },
      {
        image: 'https://images.unsplash.com/photo-1583337130423-937f96eef0a9?w=500',
        caption: 'Storm - 9 months'
      },
      {
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500',
        caption: 'Lightning - 7 months'
      }
    ]
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Stud Service</h2>
            <p className="text-lg text-gray-600">
              We offer stud service to approved females. Our studs are health tested and proven producers.
              Contact us to discuss your breeding goals and check availability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 mt-12">
            {studs.map((stud) => (
              <div key={stud.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Stud Information */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold">{stud.name}</h3>
                      <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {stud.title}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-700">Details</h4>
                        <dl className="mt-2 space-y-1">
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Age:</dt>
                            <dd>{stud.age}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Color:</dt>
                            <dd>{stud.color}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Weight:</dt>
                            <dd>{stud.weight}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Height:</dt>
                            <dd>{stud.height}</dd>
                          </div>
                        </dl>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Health Testing</h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          {stud.healthTests.map((test, index) => (
                            <li key={index} className="text-gray-600">{test}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Achievements</h4>
                      <ul className="space-y-1">
                        {stud.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-2" />
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-gray-600 mb-6">{stud.description}</p>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-600">Stud Fee:</span>
                        <span className="ml-2 text-lg font-bold text-blue-600">{stud.studFee}</span>
                      </div>
                      <a
                        href="mailto:info@elitebullies.com"
                        className="btn-primary"
                      >
                        Inquire About Breeding
                      </a>
                    </div>
                  </div>

                  {/* Stud Image and Offspring Gallery */}
                  <div className="p-6 bg-gray-50">
                    <img
                      src={stud.image}
                      alt={stud.name}
                      className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
                    />
                    
                    <h4 className="font-semibold text-gray-700 mb-4">Notable Offspring</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {stud.offspring.map((pup, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={pup.image}
                            alt={pup.caption}
                            className="w-full h-32 object-cover rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 rounded-b-lg">
                            <p className="text-xs text-center">{pup.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All breeding pairs are carefully selected to maintain the highest standards of the breed.
              Health testing and temperament evaluation required for all females.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Contact Us for More Information
            </Link>
          </div>
        </div>
      </div>

      <NewsletterForm />
    </div>
  );
}