import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Star, Phone, MessageSquare, Clock, Check, AlertCircle, Medal } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';
import type { Puppy } from '../types';
import av1 from '../assets/images/avpup1.jpg'
import av11 from '../assets/images/avpup11.jpg'
import av111 from '../assets/images/avpup111.jpg'
import av2 from '../assets/images/avpup2.jpg'
import av22 from '../assets/images/avpup22.jpg'
import av222 from '../assets/images/avpup222.jpg'
import av3 from '../assets/images/avpup3.jpg'
import av33 from '../assets/images/avpup33.jpg'
import av333 from '../assets/images/avpup333.jpg'
import av4 from '../assets/images/avpup4.jpg'
import av44 from '../assets/images/avpup44.jpg'
import av5 from '../assets/images/avpup5.jpg'
import av55 from '../assets/images/avpup55.jpg'
import stud1 from '../assets/images/stud1.jpeg'
import stud2 from '../assets/images/Stud2.jpg'
import o1 from '../assets/images/offspring/1.jpg'
import o2 from '../assets/images/offspring/2.jpg'
import o3 from '../assets/images/offspring/3.jpg'
import o4 from '../assets/images/offspring/4.jpg'
import o5 from '../assets/images/offspring/5.jpg'
import o6 from '../assets/images/offspring/6.jpg'


const availablePuppies: Puppy[] = [
  {
    id: '1',
    name: 'Blue Steel',
    images: [
      av1,
      av11,
      av111
    ],
    parents: {
      sire: 'Champion Zeus',
      dam: 'Queen Victoria'
    },
    gender: 'Male',
    dateOfBirth: '12-15-2024',
    color: 'Tri Merle',
    status: 'Available',
    description: 'Exceptional male puppy with perfect structure and temperament. Health tested and ready for his forever home.'
  },
  {
    id: '2',
    name: 'Ruby',
    images: [
      av2,
      av22,
      av222
    ],
    parents: {
      sire: 'King Atlas',
      dam: 'Princess Luna'
    },
    gender: 'Female',
    dateOfBirth: '01-23-2025',
    color: 'Fawn',
    status: 'Reserved',
    description: 'Beautiful female with excellent confirmation and loving personality. From our champion bloodlines.'
  },
  {
    id: '3',
    name: 'Thunder',
    images: [
      av3,
      av33,
      av333
    ],
    parents: {
      sire: 'Champion Zeus',
      dam: 'Crystal Ice'
    },
    gender: 'Male',
    dateOfBirth: '2025-03-01',
    color: 'Blue Tri',
    status: 'Available',
    description: 'Stunning male puppy with exceptional bone structure and a playful personality. Perfect show prospect.'
  },
  {
    id: '4',
    name: 'Diamond',
    images: [
      av4,
      av44
    ],
    parents: {
      sire: 'King Atlas',
      dam: 'Sapphire Dream'
    },
    gender: 'Female',
    dateOfBirth: '02-01-2025',
    color: 'Lilac',
    status: 'Available',
    description: 'Rare lilac female with perfect compact structure. Exceptional temperament and great with children.'
  },
  {
    id: '5',
    name: 'Rocky',
    images: [
      av5,
      av55
    ],
    parents: {
      sire: 'Royal Flash',
      dam: 'Queen Victoria'
    },
    gender: 'Male',
    dateOfBirth: '11-02-2025',
    color: 'Champagne',
    status: 'Reserved',
    description: 'Muscular male puppy with champion bloodlines. Reserved for an experienced show home.'
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
    image: stud1,
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
        image: o1,
        caption: '  Royal Steel - 3 months'
      },
      {
        image: o2,
        caption: 'Royal Flush - 3 months'
      },
      {
        image: o3,
        caption: 'Diamond Royal - 3 months'
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
    image: stud2,
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
        image: o4,
        caption: 'Thunder - 4 months'
      },
      {
        image: o5,
        caption: 'Storm - 3 months'
      },
      {
        image: o6,
        caption: 'Lightning - 7 months'
      }
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

export default function AvailablePuppies() {
  useEffect(() => {
    fadeInElements();
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Professional Header Banner */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Business Hours: 9AM - 6PM EST</span>
              </div>
              <div className="hidden md:flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>Preferred Contact: Text Message</span>
              </div>
            </div>
            <div className="flex items-center">
              <a href="sms:+1234567890" className="flex items-center hover:text-blue-100">
                <Phone className="h-4 w-4 mr-2" />
                <span>(123) 456-7890</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Available Puppies</h1>
            <p className="text-lg text-gray-600 mb-8">
              Our puppies are bred with the utmost care and attention to health, temperament, and conformation. 
              Each puppy comes with a comprehensive health guarantee and lifetime support.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-sm block text-center">Health Tested Parents</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-sm block text-center">Champion Bloodlines</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Check className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-sm block text-center">Health Guarantee</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Medal className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-sm block text-center">Show Quality</span>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h2 className="font-semibold text-blue-800 mb-2">Important Notice</h2>
              <p className="text-sm text-blue-600">
                We prioritize communication via text message for faster response. Please text us at (123) 456-7890 
                for inquiries about our puppies or stud services. We'll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Puppy Listings */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {availablePuppies.map((puppy) => (
              <div 
                key={puppy.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-blue-600">{puppy.name}</h2>
                      <span className={`ml-3 px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                        puppy.status === 'Available' 
                          ? 'bg-green-100 text-green-800 group-hover:bg-green-200' 
                          : 'bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200'
                      }`}>
                        {puppy.status}
                      </span>
                    </div>
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
                          className="btn-primary inline-block mt-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          Apply to Adopt
                        </Link>
                      )}
                    </div>
                  </div>
                  <div id='stud' className="grid grid-cols-1 gap-4 p-6 bg-gray-50">
                    {puppy.images.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                        <img
                          src={image}
                          alt={`${puppy.name} - Photo ${index + 1}`}
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stud Service */}
      <div  className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Elite Breeding Program</span>
            <h2 className="text-3xl font-bold mb-4">Championship Stud Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our studs are carefully selected champions with proven records of producing exceptional puppies. 
              All breeding pairs undergo comprehensive health testing and temperament evaluations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 mt-12">
            {studs.map((stud) => (
              <div key={stud.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
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
                      <div className="space-y-1">
                        <div>
                          <span className="text-sm text-gray-600">Stud Fee:</span>
                          <span className="ml-2 text-lg font-bold text-blue-600">{stud.studFee}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Reservation Fee:</span>
                          <span className="ml-2 text-blue-600 font-semibold">$500</span>
                          <span className="text-xs text-gray-500 block">Required to secure breeding date</span>
                        </div>
                      </div>
                      <a
                        href="mailto:topelitebullies@gmail.com"
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

          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Breeding Standards & Requirements</h3>
              <p className="text-gray-600 mb-6">
                To maintain the highest standards in our breeding program, we carefully evaluate all potential breeding pairs. 
                Female candidates must meet the following criteria:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Health Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Complete health testing documentation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Current veterinary examination</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Genetic testing clearances</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Breed Standards</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Meets breed conformation standards</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Excellent temperament evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Age requirements (2-5 years)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <p className="text-sm text-gray-500">
                  For detailed information about our breeding program and stud service requirements, 
                  please text us at (123) 456-7890
                </p>
                <div className="flex space-x-4">
                  <a
                    href="sms:+1234567890"
                    className="btn-primary flex items-center"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Text Us About Breeding
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterForm />
    </div>
  );
}