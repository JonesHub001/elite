import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Check } from 'lucide-react';
import BackToTop from '../components/BackToTop';
import { submitPuppyApplication } from '../lib/supabase';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  experience: string;
  currentPets: string;
  homeType: string;
  yard: string;
  familySize: string;
  workSchedule: string;
  preferredGender: string;
  comments: string;
  agreeToTerms: boolean;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  experience: '',
  currentPets: '',
  homeType: '',
  yard: '',
  familySize: '',
  workSchedule: '',
  preferredGender: '',
  comments: '',
  agreeToTerms: false,
};

export default function Apply() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatPhoneNumber = (phone: string): string => {
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    
    // Add +1 if it's a 10-digit US number
    if (cleaned.length === 10) {
      return `+1${cleaned}`;
    }
    
    // If it already has a country code (more than 10 digits), just return the cleaned number
    return cleaned.length > 10 ? `+${cleaned}` : cleaned;
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+?1?\d{9,15}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Format the phone number
    const formattedPhone = formatPhoneNumber(formData.phone);

    // Validate the phone number
    if (!validatePhoneNumber(formattedPhone)) {
      setError('Please enter a valid phone number (e.g., 1234567890 or +11234567890)');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error: submitError } = await submitPuppyApplication({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formattedPhone, // Use the formatted phone number
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        home_type: formData.homeType as 'house' | 'apartment' | 'condo' | 'other',
        yard_type: formData.yard as 'fenced' | 'unfenced' | 'none',
        previous_experience: formData.experience as 'first' | 'some' | 'experienced' | 'professional',
        current_pets: formData.currentPets,
        family_size: formData.familySize,
        work_schedule: formData.workSchedule,
        preferred_gender: formData.preferredGender as 'male' | 'female' | 'either',
        comments: formData.comments,
        agreed_to_terms: formData.agreeToTerms
      });

      if (submitError) throw submitError;
      setSubmitted(true);
    } catch (error) {
      console.error('Application submission error:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit application. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'phone') {
      // Only allow digits, plus sign, and spaces for phone numbers
      const sanitizedValue = value.replace(/[^\d\s+]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: sanitizedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }));
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[600px] flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-auto text-center p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your interest in our puppies. We'll review your application
            and contact you within 2-3 business days.
          </p>
          <div className="space-y-4">
            <Link 
              to="/application-status" 
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Check Application Status
            </Link>
            <Link 
              to="/" 
              className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <BackToTop />
      <div className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Puppy Application</h1>
            <p className="text-lg text-slate-600">
              Please fill out this application carefully. This helps us ensure our puppies go to the best possible homes.
            </p>
            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                {error}
              </div>
            )}
          </div>

          {/* Agreement Section */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Elite Bullies Puppy Buyer Application & Agreement</h2>
            <div className="prose prose-slate max-w-none">
              <p className="mb-6">Thank you for your interest in an Elite Bullies puppy!</p>
              <p className="mb-6">Please read the following contract thoroughly. By proceeding with this application, you agree to the following terms:</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p>After you are approved as a buyer, you are responsible to pay the non-refundable $1000 deposit and the remaining balance will be due prior to pick up or delivery.</p>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p>The puppy will not be put on hold without the deposit secured and signed contract.</p>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p>You understand the needs of American Bullies and are prepared to have a budget for the essential steps in owning one of these puppies.</p>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p>All our puppies will be of micro/pocket size when full grown (dam and sire both under 13").</p>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p>We accept most forms of payment (cash, bank transfer/deposit, apple pay, cash app, Venmo and PayPal).</p>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Puppies can be picked up in person or we can arrange delivery, worldwide (for additional cost).</p>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p>All pups will come with a full health and vaccine record from our vet. They will have been dewormed on a consistent schedule, come with their first series of shots and a cleared health sign off from the vet.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Important Financial Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-blue-900">
                  <li>Puppy prices range from $2500-$7000 USD depending on the puppy selected.</li>
                  <li>A non-refundable deposit of $800 is required to secure your puppy pick.</li>
                  <li>You must respond to being approved within 24 hours or we will move on to our next approved buyer.</li>
                  <li>The remaining balance is due at 8 weeks.</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="text-amber-900">
                  Thank you for taking the time to fill out this application. This will ensure we can place all of our puppies in the best homes and that you are prepared for this commitment. We appreciate your interest in our puppies!
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-slate-50/80 rounded-xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="e.g., 1234567890 or +11234567890"
                    pattern="[0-9+\s]*"
                    title="Please enter only numbers, spaces, or + symbol"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Enter numbers only, with or without country code (e.g., 1234567890 or +11234567890)
                  </p>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-rose-50/50 rounded-xl p-6 shadow-sm border border-rose-100/50">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">Address Information</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Home Environment */}
            <div className="bg-amber-50/40 rounded-xl p-6 shadow-sm border border-amber-100/40">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">Home Environment</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Home Type
                  </label>
                  <select
                    name="homeType"
                    value={formData.homeType}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="">Select...</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Yard Type
                  </label>
                  <select
                    name="yard"
                    value={formData.yard}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="">Select...</option>
                    <option value="fenced">Fenced yard</option>
                    <option value="unfenced">Unfenced yard</option>
                    <option value="none">No yard</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Experience & Plans */}
            <div className="bg-blue-50/30 rounded-xl p-6 shadow-sm border border-blue-100/30">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">Experience & Plans</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Previous Dog Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="">Select...</option>
                    <option value="first">First-time owner</option>
                    <option value="some">Some experience</option>
                    <option value="experienced">Experienced owner</option>
                    <option value="professional">Professional/Breeder</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Pets
                  </label>
                  <textarea
                    name="currentPets"
                    value={formData.currentPets}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                    rows={3}
                    placeholder="Please list any current pets..."
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Family Size
                  </label>
                  <input
                    type="text"
                    name="familySize"
                    value={formData.familySize}
                    onChange={handleInputChange}
                    placeholder="Number of adults/children in household"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Schedule
                  </label>
                  <input
                    type="text"
                    name="workSchedule"
                    value={formData.workSchedule}
                    onChange={handleInputChange}
                    placeholder="Typical work hours"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Veterinary Information */}
            <div className="bg-emerald-50/30 rounded-xl p-6 shadow-sm border border-emerald-100/30">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">Veterinary Information</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Gender
                  </label>
                  <select
                    name="preferredGender"
                    value={formData.preferredGender}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="either">No preference</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Comments
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                    rows={4}
                    placeholder="Any additional information you'd like to share..."
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* References */}
            <div className="bg-purple-50/20 rounded-xl p-6 shadow-sm border border-purple-100/20">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">References</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                  <label htmlFor="agreeToTerms" className="ml-3 text-gray-700">
                    I confirm that all information provided is accurate and complete. I understand that any 
                    misrepresentation may result in my application being rejected.
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={!formData.agreeToTerms || isSubmitting}
                className={`px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300
                  ${formData.agreeToTerms && !isSubmitting
                    ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-lg' 
                    : 'bg-gray-400 cursor-not-allowed'
                  }`}
              >
                {isSubmitting 
                  ? 'Submitting...' 
                  : formData.agreeToTerms 
                    ? 'Submit Application' 
                    : 'Please Accept Terms to Submit'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}