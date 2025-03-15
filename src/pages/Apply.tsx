import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import BackToTop from '../components/BackToTop';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
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
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BackToTop />
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Elite Bullies Puppy Buyer Application & Agreement</h1>
            <p className="text-lg text-gray-600">
              Thank you for your interest in an Elite Bullies puppy!
            </p>
          </div>
        </div>
      </div>

      {/* Agreement Section */}
      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-6">Purchase Agreement Terms</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Deposit and Payment</h3>
                  <ul className="list-disc pl-5 space-y-2 text-blue-800">
                    <li>Non-refundable deposit of $500 required upon approval</li>
                    <li>Remaining balance due prior to pickup or delivery</li>
                    <li>Puppy prices range from $1,500 - $5,000 USD depending on selection</li>
                    <li>We accept bank transfer/deposit, Apple Pay, Cash App, Venmo, and PayPal</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Puppy Details</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>All puppies will be micro/pocket size when full grown (dam and sire both under 13")</li>
                    <li>Full health and vaccine record from our vet provided</li>
                    <li>Consistent deworming schedule maintained</li>
                    <li>First series of shots included</li>
                    <li>Health clearance from veterinarian</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Buyer Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-yellow-800">
                    <li>Must respond to approval notification within 24 hours</li>
                    <li>Understand and be prepared for American Bully care requirements</li>
                    <li>Have adequate budget for essential care needs</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Pickup & Delivery</h3>
                  <ul className="list-disc pl-5 space-y-2 text-green-800">
                    <li>Available for pickup in LA state</li>
                    <li>Worldwide delivery available (additional cost)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">Important Notes</h3>
                  <ul className="list-disc pl-5 space-y-2 text-red-800">
                    <li>No holds without secured deposit</li>
                    <li>Deposit is non-refundable</li>
                    <li>Full payment required by 8 weeks</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  By proceeding with this application, you acknowledge that you have read, understood, and agree to all terms outlined above. 
                  This ensures we can place all of our puppies in the best homes and that you are prepared for this commitment.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Application Form</h2>
          <div className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
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
                        className="w-full px-4 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-6">Address</h2>
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
                          className="w-full px-4 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience & Living Situation */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-6">Experience & Living Situation</h2>
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
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Home Type
                        </label>
                        <select
                          name="homeType"
                          value={formData.homeType}
                          onChange={handleInputChange}
                          required
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
                </div>

                {/* Additional Information */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-6">Additional Information</h2>
                  <div className="grid grid-cols-1 gap-6">
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
                        className="w-full px-4 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Gender
                      </label>
                      <select
                        name="preferredGender"
                        value={formData.preferredGender}
                        onChange={handleInputChange}
                        required
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
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-6">Terms and Conditions</h2>
                  <div className="space-y-4">
                    <div className="text-gray-600">
                      <p className="mb-4">By submitting this application, you agree to:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Provide accurate and truthful information</li>
                        <li>Allow us to verify the information provided</li>
                        <li>Understand that submission does not guarantee approval</li>
                        <li>Accept our health guarantee and return policy</li>
                        <li>Maintain regular veterinary care for the puppy</li>
                      </ul>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        I agree to the terms and conditions
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className={`btn-primary transition-all duration-200 ${
                      !formData.agreeToTerms 
                        ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400' 
                        : ''
                    }`}
                    disabled={!formData.agreeToTerms}
                  >
                    {formData.agreeToTerms ? 'Submit Application' : 'Accept Terms to Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}