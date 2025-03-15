import React, { useState } from 'react';
import { subscribeToNewsletter } from '../lib/supabase';

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await subscribeToNewsletter({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email
      });

      if (error) throw error;

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '' });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for updates on available puppies and breeding news.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="px-4 py-2 rounded text-gray-900"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
              disabled={status === 'loading'}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-4 py-2 rounded text-gray-900"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
              disabled={status === 'loading'}
            />
            <div className="md:col-span-1 flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-4 py-2 rounded-l text-gray-900"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className={`bg-white text-blue-600 px-6 py-2 rounded-r font-semibold transition-colors
                  ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </div>
          {status === 'success' && (
            <p className="mt-4 text-green-300 text-center">
              Thank you for subscribing! You'll receive updates about our puppies and breeding program.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-300 text-center">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}