import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';
import { Star, Shield, Heart, Award, ChevronLeft, ChevronRight, Check, Medal, Facebook, Instagram } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BackToTop from '../components/BackToTop';

// Import your images here
import heroImage from '../assets/images/hero-bg.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import f1 from '../assets/images/Ft1.jpg'
import f2 from '../assets/images/Ft2.jpg'
import f3 from '../assets/images/Ft3.jpg'
import p1 from '../assets/images/happyFam/1.jpg'
import p2 from '../assets/images/happyFam/2.jpg'
import p3 from '../assets/images/happyFam/3.jpg'
import p4 from '../assets/images/happyFam/4.jpg'
import p5 from '../assets/images/happyFam/5.jpg'
import p6 from '../assets/images/happyFam/6.jpg'
import p7 from '../assets/images/happyFam/7.jpg'
import p8 from '../assets/images/happyFam/8.jpg'
import p9 from '../assets/images/happyFam/9.jpg'
import p10 from '../assets/images/happyFam/10.jpg'
import p11 from '../assets/images/happyFam/11.jpg'
import p12 from '../assets/images/happyFam/12.jpg'



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
    name: 'Sarah M.',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'Elite Bullies is the premier Micro Bully breeder in the Pacific Northwest. Our puppy is healthy, well-socialized, and exactly what we were looking for.',
    rating: 5
  },
  {
    name: 'Michael R.',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'The shipping process to California was smooth and professional. Our Micro Bully arrived healthy and happy. Best cross-country breeder experience!',
    rating: 5
  },
  {
    name: 'Emily W.',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'Even from the East Coast, the entire process was seamless. Elite Bullies handled everything professionally, from ABKC registration to safe shipping.',
    rating: 5
  },
  {
    name: 'David K.',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'Found Elite Bullies while searching for top breeders nationwide. The health testing and shipping to Florida exceeded our expectations!',
    rating: 5
  },
  {
    name: 'Lisa P.',
    location: 'Houston, TX',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'The best Micro American Bully breeder we found after searching across Texas. Worth choosing Elite Bullies for their quality and service.',
    rating: 5
  },
  {
    name: 'John D.',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'Excellent experience shipping our puppy to Illinois. Elite Bullies provides nationwide service without compromising on quality or care.',
    rating: 5
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

export default function Home() {
  useEffect(() => {
    fadeInElements();
  }, []);

  return (
    <div className="animate-fadeIn">
      <BackToTop />
      {/* Hero Section */}
      <div 
        className="relative h-[700px] bg-cover bg-center fade-in opacity-0 transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">
              Elite American Bully Puppies
            </h1>
            <p className="text-2xl mb-10 leading-relaxed">
              Breeding exceptional American Bullies with perfect temperament, 
              outstanding health, and superior genetics.
            </p>
            <Link
              to="/puppies"
              className="bg-slate-800 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-colors hover:scale-105 hover:shadow-lg"
            >
              View Available Puppies
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in opacity-0 transition-all duration-1000">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Welcome to Elite Bully Productions</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-10"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Premier Micro American Bully breeder in Washington State with ABKC Micro American Bully puppies available for sale as well as stud service.
            </p>
          </div>

          {/* Video Showcase Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative rounded-2xl overflow-hidden shadow-xl fade-in opacity-0 transition-all duration-1000">
              <div className="aspect-w-16 aspect-h-9 bg-slate-100">
                <video
                  className="w-full h-full object-cover"
                  src={heroVideo}
                  title="Elite Bullies Puppy Showcase"
                  muted
                  autoPlay
                  loop
                  playsInline
                  controls={false}
                ></video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-xl shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Experience Elite Bullies</h3>
                <p className="text-slate-600 mb-8 text-lg">
                  Watch our puppies in action and see the joy they bring. Our video showcase highlights:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Playful interactions with their littermates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Early socialization and training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Their loving temperaments and personalities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Daily care and enrichment activities</span>
                  </li>
                </ul>
                <div className="mt-10">
                  <Link
                    to="/puppies"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-slate-800 hover:bg-slate-700 transition-colors hover:scale-105 hover:shadow-lg"
                  >
                    View Available Puppies
                    <ChevronRight className="ml-2 h-6 w-6" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                  <Star className="h-10 w-10 text-amber-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 text-lg">Quality Assured</h4>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                  <Heart className="h-10 w-10 text-rose-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 text-lg">Raised with Love</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
            <div className="space-y-8 fade-in opacity-0 transition-all duration-1000">
              <div className="bg-slate-50 p-10 rounded-xl border border-slate-100">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Our Breeding Philosophy</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Health, structure, and temperament come first and foremost when choosing mating pairs. We specialize in producing only the finest ABKC registered Micro Bullies with:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Rare coat colors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Small and compact structure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Affectionate personalities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-100 p-10 rounded-xl border border-slate-200">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Quality Assurance</h3>
                <p className="text-slate-700 text-lg mb-6">
                  We achieve our goal of producing quality Micro American Bullies through:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Rigorous health and genetic testing</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Selective breeding practices</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-slate-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">World-class breeding program standards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-xl border border-slate-100">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Our Vision</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our vision is to provide homes with lifelong companions. To actualize this vision we established our world class breeding program with the highest standards to ensure the absolute best circumstances for all of our puppies and adopting families.
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6"></div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our ethical practices and high standards combined with our deep love and respect for this breed really sets our puppies apart.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                  <Award className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 text-lg">ABKC Registered</h4>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                  <Medal className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 text-lg">Premium Quality</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in opacity-0 transition-all duration-1000">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Choose Elite Bullies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-10 rounded-xl shadow-md transform transition-all duration-500 hover:scale-[1.02] fade-in opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <service.icon className="h-14 w-14 text-slate-600 mb-6 transform transition-transform duration-500 hover:scale-110" />
                <h3 className="text-xl font-semibold mb-4 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Puppies */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-20 fade-in opacity-0 transition-all duration-1000">
            American Bully Puppies for Sale and Planned Breedings
          </h2>
          
          <div className="max-w-4xl mx-auto mb-20 space-y-8 text-slate-700">
            <div className="fade-in opacity-0 transition-all duration-1000">
              <p className="leading-relaxed text-lg">
                From my loving arms to yours, an Elite Bully baby comes home with a veterinarians exam, first set of vaccinations, microchip, multiple deworming, written sales contract with health guarantee, and lifetime breeders support. Elite Bully puppies are raised in home and know nothing but love and compassion from their birth until they come home to you.
              </p>
              
              <div className="bg-slate-50 p-10 rounded-xl border border-slate-100">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Our Breeding Methods</h3>
                <p className="mb-6 text-lg">
                  I practice Early Neurological Stimulation. This a method of stimulating the nervous systems and firmly believe this method encourages a stable temperament. When done properly puppies have shown to have stronger heart beats, improved cardiovascular performance, stronger adrenal glands and more tolerance to stress.
                </p>
                <p className="text-lg">
                  I take pride in offering my puppies high quality care, a clean environment with lots of simulation, enrichment and with lots of love. I also included the "Rule of 7" method and have adopted "Puppy Culture" into our breeding program. Puppies are fed high quality puppy food and a human-grade cooked diet that meets their nutritional needs.
                </p>
              </div>

              <div className="bg-slate-100 p-10 rounded-xl border border-slate-200">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Lifetime Support</h3>
                <p className="text-lg">
                  Unlike other breeders, we are in it for the long run and provide support and counsel even after my puppies leave my care and join their families. And I truly look forward to updates from my puppy families throughout their life.
                </p>
              </div>

              <div className="bg-amber-50 p-10 rounded-xl border border-amber-100">
                <h3 className="text-2xl font-semibold text-amber-900 mb-6">Puppy Placement Policy</h3>
                <p className="mb-6 text-lg text-amber-800">
                  I know my puppy owners like to take preference in colors and genders, but we ask for you to keep an open mind in allowing me to help match you and your family with the best fit puppy. Matching puppies based on their temperament, personality, drive and needs is so very important to ensuring puppies are adopted by people they're compatible with.
                </p>
                <p className="text-lg text-amber-800">
                  Most ethical breeders adopt this practice as this ensures our dogs and puppies are less likely to be returned and adopting from an ethical breeder reduces the risk of them being abandoned.
                </p>
              </div>

              <div className="bg-rose-50 p-10 rounded-xl border border-rose-100">
                <h3 className="text-2xl font-semibold text-rose-900 mb-6">Important Notice</h3>
                <ul className="list-disc pl-8 space-y-3 text-lg text-rose-800">
                  <li>I ALWAYS prefer pet homes, with spay/neuter contracts.</li>
                  <li>I retain the right to refuse sale to anyone for any reason.</li>
                  <li>Puppies are placed in homes on a "best fit" basis, NOT first come first serve.</li>
                  <li>No puppy will be held or reserved until a deposit, puppy application, and signed sales contract is received by Elite Bullies.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8">Featured Puppies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  id: 1,
                  name: 'Tri Merle',
                  image: f1,
                  details: 'Male • 12 weeks • Blue'
                },
                {
                  id: 2,
                  name: 'Crystal',
                  image: f2,
                  details: 'Female • 10 weeks • Merle • Blue Eyes'
                },
                {
                  id: 3,
                  name: 'Titan',
                  image: f3,
                  details: 'Male • 11 weeks • Brown • Pocket'
                }
              ].map((puppy, index) => (
                <div 
                  key={puppy.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-700 hover:scale-[1.02] fade-in opacity-0"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <img
                    src={puppy.image}
                    alt={puppy.name}
                    className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">{puppy.name}</h3>
                    <p className="text-slate-600 text-lg">
                      {puppy.details}
                    </p>
                    <Link
                      to="/puppies"
                      className="mt-6 inline-block text-slate-600 font-semibold hover:text-slate-800 transition-all duration-300 hover:translate-x-2"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-20 fade-in opacity-0 transition-all duration-1000">
            What Our Clients Say
          </h2>
          <div className="relative fade-in opacity-0 transition-all duration-1000">
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
                <div key={index} className="px-6">
                  <div className="bg-white p-8 rounded-xl shadow-md h-full transform transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg text-slate-800">{testimonial.name}</h3>
                        <p className="text-slate-600">{testimonial.location}</p>
                      </div>
                      <div className="flex ml-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Nationwide Shipping Section */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Nationwide Puppy Shipping Available</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We safely ship our American Bully puppies to all 50 states. Our proven shipping process ensures your puppy arrives healthy and happy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                region: "West Coast",
                states: "CA, OR, WA, NV",
                shipping: "Next-day shipping available",
                cities: "Los Angeles, San Francisco, Seattle, Portland, Las Vegas"
              },
              {
                region: "East Coast",
                states: "NY, NJ, MA, FL, GA",
                shipping: "2-day shipping available",
                cities: "New York City, Boston, Miami, Atlanta, Philadelphia"
              },
              {
                region: "Central States",
                states: "TX, IL, OH, MI, CO",
                shipping: "2-day shipping available",
                cities: "Houston, Chicago, Detroit, Denver, Columbus"
              },
              {
                region: "Other Regions",
                states: "All other states",
                shipping: "2-3 day shipping available",
                cities: "Contact us for specific shipping details"
              }
            ].map((region, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{region.region}</h3>
                <ul className="space-y-2 text-slate-600">
                  <li><strong>States:</strong> {region.states}</li>
                  <li><strong>Shipping:</strong> {region.shipping}</li>
                  <li><strong>Major Cities:</strong> {region.cities}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Shipping Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                <span>Professional pet shipping service with climate-controlled vehicles</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                <span>Health certificate and travel documentation provided</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                <span>Real-time tracking and updates throughout shipping</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                <span>Dedicated support team monitoring each shipment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Client Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Happy Families</h2>
            <p className="mt-4 text-lg text-slate-600">Our puppies bringing joy to their forever homes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large Images */}
            <div className="relative col-span-2 row-span-2 group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p1}
                alt="Happy family with their bully"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Rocky driving home from the vet</p>
                  <p className="text-sm opacity-90"> 4 months old</p>
                </div>
              </div>
            </div>

            {/* Medium Images */}
            <div className="relative row-span-2 group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p2}
                alt="Child playing with puppy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Sarah & Rocky</p>
                  <p className="text-sm opacity-90">Best friends forever</p>
                </div>
              </div>
            </div>

            {/* Small Images */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p3}
                alt="Family picnic with dog"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Home Adventures</p>
                  <p className="text-sm opacity-90">Drake's first day at home</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p4}
                alt="Birthday celebration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold"> Meet up Fun</p>
                  <p className="text-sm opacity-90">Max meets his new best friend!</p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p5}
                alt="Training session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Lovely Day</p>
                  <p className="text-sm opacity-90">Drake making this couple so happy</p>
                </div>
              </div>
            </div>

            <div className="relative col-span-2 row-span-2 group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p6}
                alt="Family portrait with dog"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">The Miller Family</p>
                  <p className="text-sm opacity-90">With Storm, our gentle giant</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p7}
                alt="Beach day"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Good Day</p>
                  <p className="text-sm opacity-90">Thor's daddy and his best friend</p>
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="relative row-span-2 group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p8}
                alt="Holiday celebration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Holiday Joy</p>
                  <p className="text-sm opacity-90">Ruby's first Christmas</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                  src={p9}
                alt="Graduation day"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Homecoming Day</p>
                  <p className="text-sm opacity-90">King's training success</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                    src={p10}
                alt="Park playtime"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Park Fun</p>
                  <p className="text-sm opacity-90">Bella making friends</p>
                </div>
              </div>
            </div>

            {/* Adding 11th image */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p11}
                alt="Family celebration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Family Moments</p>
                  <p className="text-sm opacity-90">Max's special day</p>
                </div>
              </div>
            </div>

            {/* Adding 12th image */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={p12}
                alt="Outdoor adventure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Adventure Time</p>
                  <p className="text-sm opacity-90">Shadow exploring nature</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Join our growing family of happy pet owners</p>
            <Link to="/puppies" className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-700 hover:scale-105 hover:shadow-lg">
              Find Your Perfect Puppy
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in opacity-0 transition-all duration-1000">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Stay Connected</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Sign up with your email address today to be among the first to know about exciting new litters, available puppies, comprehensive stud services, a variety of available dogs, and all the wonderful things that we are doing here at Elite Bullies. Your subscription will ensure that you stay informed and connected with our community.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
}