import React, { useState } from 'react';
import { getPuppyApplication } from '../lib/supabase';
import { CheckCircle, XCircle, Clock, Search, Loader2 } from 'lucide-react';
import { PuppyApplication } from '../types/supabase';

export default function ApplicationStatus() {
  const [email, setEmail] = useState('');
  const [applicationData, setApplicationData] = useState<PuppyApplication | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setApplicationData(null);
    setSearched(true);

    try {
      const { data, error } = await getPuppyApplication(email);
      if (error) throw error;
      if (!data) {
        setError('No application found with this email address. Please check your email and try again.');
      } else {
        setApplicationData(data);
      }
    } catch (err) {
      setError('An error occurred while checking your application status. Please try again later.');
      console.error('Application status check error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          icon: <Clock className="h-8 w-8 text-yellow-500" />,
          text: 'Under Review',
          description: 'Your application is currently being reviewed by our team.',
          color: 'text-yellow-700'
        };
      case 'approved':
        return {
          icon: <CheckCircle className="h-8 w-8 text-green-500" />,
          text: 'Approved',
          description: 'Congratulations! Your application has been approved.',
          color: 'text-green-700'
        };
      case 'rejected':
        return {
          icon: <XCircle className="h-8 w-8 text-red-500" />,
          text: 'Not Approved',
          description: 'Unfortunately, your application was not approved at this time.',
          color: 'text-red-700'
        };
      default:
        return {
          icon: <Clock className="h-8 w-8 text-gray-500" />,
          text: 'Unknown',
          description: 'Status unknown',
          color: 'text-gray-700'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Check Application Status</h1>
          <p className="mt-2 text-gray-600">
            Enter your email address to check the status of your puppy application
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-md text-white font-medium flex items-center gap-2 ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  Check Status
                </>
              )}
            </button>
          </form>
        </div>

        {error && searched && (
          <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-red-700">
            {error}
          </div>
        )}

        {applicationData && (
          <div className="bg-white rounded-lg shadow-sm p-6 animate-fadeIn">
            <div className="text-center mb-6">
              {getStatusDisplay(applicationData.status).icon}
              <h2 className={`text-xl font-semibold mt-2 ${getStatusDisplay(applicationData.status).color}`}>
                {getStatusDisplay(applicationData.status).text}
              </h2>
              <p className="text-gray-600 mt-1">
                {getStatusDisplay(applicationData.status).description}
              </p>
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Application Details</h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm text-gray-500">Name</dt>
                  <dd className="text-gray-900">{applicationData.first_name} {applicationData.last_name}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Email</dt>
                  <dd className="text-gray-900">{applicationData.email}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Phone</dt>
                  <dd className="text-gray-900">{applicationData.phone}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Submission Date</dt>
                  <dd className="text-gray-900">
                    {new Date(applicationData.created_at).toLocaleDateString()}
                  </dd>
                </div>
              </dl>
            </div>

            {applicationData.status === 'approved' && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Next Steps</h3>
                <ul className="list-disc list-inside text-green-700 space-y-2">
                  <li>Submit your deposit of $1000 within 24 hours to secure your puppy</li>
                  <li>Check your email for detailed payment instructions</li>
                  <li>Schedule a call with our team to discuss puppy selection</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 