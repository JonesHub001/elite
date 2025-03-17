import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using Elite Bullies' website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-600 mb-4">
                Elite Bullies provides the following services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Micro American Bully puppy sales</li>
                <li>Stud services</li>
                <li>Puppy applications and adoption process</li>
                <li>Nationwide shipping services</li>
                <li>Breeding consultation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Purchase and Payment Terms</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Puppy Purchases</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>All prices are in USD and subject to change without notice</li>
                <li>A non-refundable deposit is required to reserve a puppy</li>
                <li>Full payment must be received before puppy delivery</li>
                <li>Payment plans may be available with prior approval</li>
                <li>Shipping costs are additional and vary by location</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2 Stud Services</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Stud fees must be paid in advance</li>
                <li>Health testing requirements must be met</li>
                <li>Contracts must be signed before breeding</li>
                <li>Shipping arrangements are the responsibility of the owner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Health Guarantees</h2>
              <p className="text-gray-600 mb-4">
                Our puppies come with the following guarantees:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Health examination by licensed veterinarian</li>
                <li>Initial vaccinations and deworming</li>
                <li>Genetic health testing documentation</li>
                <li>Limited health guarantee for congenital defects</li>
                <li>Lifetime breeder support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Shipping and Delivery</h2>
              <p className="text-gray-600 mb-4">
                We provide nationwide shipping services with the following terms:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Professional pet shipping service</li>
                <li>Climate-controlled vehicles</li>
                <li>Health certificates and travel documentation</li>
                <li>Real-time tracking updates</li>
                <li>Dedicated support during shipping</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on this website, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Text, graphics, and images</li>
                <li>Logos and trademarks</li>
                <li>Photographs and videos</li>
                <li>Breeding information and documentation</li>
                <li>Website design and layout</li>
              </ul>
              <p className="text-gray-600">
                is the property of Elite Bullies and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Elite Bullies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or website notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-2 text-gray-600">
                <p>Email: topelitebullies@gmail.com</p>
                {/* <p>Phone: (232) 445-4445</p> */}
                <p>Address: Seattle, WA</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 