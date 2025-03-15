import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Award, CheckCircle, Check } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';

const healthTests = [
  'Hip Evaluation',
  'Elbow Evaluation',
  'Cardiac Examination',
  'Patella Certification',
  'DNA Health Panel',
  'Regular Veterinary Check-ups'
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

export default function Mission() {
  useEffect(() => {
    fadeInElements();
  }, []);

  return (
    <div className="animate-fadeIn">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-lg text-gray-600">
              Dedicated to breeding exceptional American Bullies while prioritizing health,
              temperament, and adherence to breed standards.
            </p>
          </div>
        </div>
      </div>

      {/* Breeding Philosophy */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Breeding Philosophy</h2>
              <p className="text-gray-600 mb-6">
                Our breeding program is built on three fundamental pillars: health, temperament,
                and conformation. We believe in producing American Bullies that not only meet
                but exceed breed standards while maintaining excellent health and temperament.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Health First</h3>
                    <p className="text-gray-600">
                      All our breeding dogs undergo comprehensive health testing and are carefully
                      selected to maintain genetic diversity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Temperament Focused</h3>
                    <p className="text-gray-600">
                      We prioritize breeding dogs with stable, friendly temperaments to ensure
                      our puppies make excellent family companions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Quality Standards</h3>
                    <p className="text-gray-600">
                      Our breeding program adheres to strict quality standards, producing
                      puppies that exemplify the best traits of the American Bully breed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Health Testing</h2>
              <p className="text-gray-600 mb-6">
                We maintain rigorous health testing protocols for all our breeding dogs.
                This commitment to health testing helps ensure the well-being of our
                puppies and the future of the breed.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Required Health Tests</h3>
                <div className="grid grid-cols-1 gap-3">
                  {healthTests.map((test, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-lg text-gray-600 mb-8">
              We are committed to supporting our puppy families throughout their journey.
              From the moment you bring your puppy home, we're here to provide guidance,
              answer questions, and ensure your success as an American Bully owner.
            </p>
            <Link
              to="/apply"
              className="btn-primary"
            >
              Apply to Adopt
            </Link>
          </div>
        </div>
      </div>

      <NewsletterForm />
    </div>
  );
}