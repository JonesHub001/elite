import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Elite Bullies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-600">
                Please read this privacy policy carefully. By accessing or using our website, you agree to be bound by the terms and conditions of this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Physical address</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Non-Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited</li>
                <li>Time spent on website</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Process your puppy applications</li>
                <li>Communicate with you about our services</li>
                <li>Send you updates about available puppies</li>
                <li>Process payments and transactions</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Payment processors for secure transactions</li>
                <li>Shipping companies for puppy delivery</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Encryption of sensitive data</li>
                <li>Secure servers and firewalls</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
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