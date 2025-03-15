import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';
import { Star, Shield, Heart, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images here
// Example:
// import heroImage from '../assets/images/hero-background.jpg';
// import puppy1 from '../assets/images/puppy1.jpg';
// Add more imports as needed

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
    // Update the image path to your local image:
    // image: testimonial1,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', // Replace with your image
    content: 'The entire experience was incredible. Our puppy is healthy, well-socialized, and exactly what we were looking for.',
    rating: 5
  },
  {
    name: 'Sarah M.',
    location: 'Texas',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'Elite Bullies went above and beyond in helping us find our perfect companion. Highly recommended!',
    rating: 5
  },
  {
    name: 'Michael R.',
    location: 'Florida',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'The attention to detail in breeding and raising these puppies is outstanding. Our bully is not just beautiful but also has an amazing temperament.',
    rating: 5
  },
  {
    name: 'Emily W.',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'From the first contact to bringing our puppy home, the process was smooth and professional. They truly care about their dogs.',
    rating: 5
  },
  {
    name: 'David K.',
    location: 'Arizona',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'The health testing and guarantees gave us peace of mind. Our puppy is perfect in every way!',
    rating: 5
  },
  {
    name: 'Lisa P.',
    location: 'Washington',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'The ongoing support after bringing our puppy home has been fantastic. They really treat you like family.',
    rating: 5
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          // Update with your hero image:
          // backgroundImage: `url(${heroImage})`
          backgroundImage: 'url(https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3)' // Replace with your image
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
            {[
              // Replace with your puppy data
              {
                id: 1,
                name: 'Blue Steel',
                // image: puppy1,
                image: 'https://images.unsplash.com/photo-1583511655826-05700442b327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', // Replace with your image
                details: 'Male • 12 weeks • Blue'
              },
              // Add more puppies...
            ].map((puppy) => (
              <div key={puppy.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={puppy.image}
                  alt={puppy.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{puppy.name}</h3>
                  <p className="text-gray-600">
                    {puppy.details}
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
          <div className="relative">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={5000}
              pauseOnHover={true}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]}
              className="testimonials-slider"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
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
                      <div className="flex ml-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Client Gallery */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Happy Families with Their Bullies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                url: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                caption: 'Max with his new family'
              },
              {
                url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                caption: 'Luna enjoying the park'
              },
              {
                url: 'https://images.unsplash.com/photo-1583337426008-2fef51aa2cc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                caption: 'Rocky at home'
              },
              {
                url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                caption: 'Bella with her new toys'
              },
              {
                url: 'https://images.unsplash.com/photo-1583511666407-5f06533f2113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                caption: 'Zeus on his first walk'
              },
              {
                url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                caption: 'Daisy playing in the yard'
              },
              {
                url: 'https://images.unsplash.com/photo-1583511666407-5f06533f2113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                caption: 'Duke with his best friend'
              },
              {
                url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                caption: 'Milo at the beach'
              },
              {
                url: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                caption: 'Ruby celebrating her birthday'
              }
            ].map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                  <p className="text-sm text-center">{image.caption}</p>
                </div>
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