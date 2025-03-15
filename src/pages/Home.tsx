import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';
import { Star, Shield, Heart, Award } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Health Guaranteed',
    description: 'All puppies come with comprehensive health guarantees and certifications.',
  },
  {
    icon: Heart,
    title: 'Expert Care',
    description: 'Raised in a loving home environment with early socialization.',
  },
  {
    icon: Award,
    title: 'Champion Bloodlines',
    description: 'Carefully selected breeding pairs from champion bloodlines.',
  },
];

const testimonials = [
  {
    name: 'John D.',
    location: 'California',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'The entire experience was incredible. Our puppy is healthy, well-socialized, and exactly what we were looking for.',
  },
  {
    name: 'Sarah M.',
    location: 'Texas',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'Elite Bullies went above and beyond in helping us find our perfect companion. Highly recommended!',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Elite American Bully Puppies
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Breeding exceptional American Bullies with perfect temperament, 
              outstanding health, and superior genetics.
            </p>
            <Link
              to="/puppies"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Available Puppies
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Elite Bullies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Puppies */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Puppies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((puppy) => (
              <div key={puppy} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1583511655826-05700442b327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`}
                  alt={`Puppy ${puppy}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Blue Steel</h3>
                  <p className="text-gray-600">
                    Male • 12 weeks • Blue
                  </p>
                  <Link
                    to="/puppies"
                    className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                  <Star className="h-5 w-5 text-yellow-400 ml-auto" />
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterForm />
    </div>
  );
}