import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';
import { Star, Shield, Heart, Award, ChevronLeft, ChevronRight, Check, Medal } from 'lucide-react';
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
    name: 'John D.',
    location: 'California',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'The entire experience was incredible. Our puppy is healthy, well-socialized, and exactly what we were looking for.',
    rating: 4
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
    rating: 3
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
    rating: 4
  },
  {
    name: 'Lisa P.',
    location: 'Washington',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: 'The ongoing support after bringing our puppy home has been fantastic. They really treat you like family.',
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
              className="bg-slate-800 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-colors"
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
              Micro American Bully breeder in LA with ABKC Micro American Bully puppies available for sale as well as stud service.
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
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-slate-700 hover:bg-slate-600 transition-colors"
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
                  <p className="font-semibold">The Johnson Family</p>
                  <p className="text-sm opacity-90">With Zeus, 2 years old</p>
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
                  <p className="font-semibold">Park Adventures</p>
                  <p className="text-sm opacity-90">Diamond's first picnic</p>
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
                  <p className="font-semibold">Birthday Fun</p>
                  <p className="text-sm opacity-90">Max turns 1!</p>
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
                  <p className="font-semibold">Training Day</p>
                  <p className="text-sm opacity-90">Luna's progress</p>
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
                  <p className="font-semibold">Beach Day</p>
                  <p className="text-sm opacity-90">Thor's first swim</p>
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
                  <p className="font-semibold">Graduation Day</p>
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
                  <p className="text-sm opacity-90">Atlas's special day</p>
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
            <Link to="/available-puppies" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
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

      {/* Footer Navigation */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Elite Bullies</h3>
              <p className="text-slate-400 leading-relaxed">
                Premium American Bully breeder committed to excellence in breeding and raising exceptional companions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/puppies" className="text-slate-400 hover:text-white transition-colors">Available Puppies</Link>
                </li>
                <li>
                  <Link to="/mission" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
                </li>
               
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/puppies" className="text-slate-400 hover:text-white transition-colors">Puppy Sales</Link>
                </li>
                <li>
                  <Link to="/studs" className="text-slate-400 hover:text-white transition-colors">Stud Services</Link>
                </li>
               
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-slate-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-slate-400">2324454445</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-slate-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-slate-400">elitebullies@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-slate-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-slate-400">Los Angeles, CA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Elite Bullies. All rights reserved.
              </p>
           
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}