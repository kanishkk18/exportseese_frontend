// pages/privacy-policy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Effective Date: 01-03-2025</p>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Exportseese (ETERNAL E SERVICES) is committed to protecting the privacy of individuals who use our global trade platform and related services. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information when you use our Services, and your rights concerning that information.
        </p>
      </section>

      {/* Section 1: Information We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Information We Collect</h2>

        {/* Subsection 1.1 */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">1.1 Information You Provide</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Account Information: Full name, business email, company name, VAT number, business registration details</li>
            <li>Business Profile: Trade preferences, Services catalogs, shipping preferences, payment terms</li>
            <li>Transaction Data: Purchase orders, invoices, shipping documents, payment records</li>
            <li>Communication Records: Support tickets, chat logs, email correspondence</li>
          </ul>
        </div>

        {/* Subsection 1.2 */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">1.2 Automatically Collected Information</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Technical Data: IP address, browser type, device identifiers, operating system</li>
            <li>Usage Data: Pages visited, features used, session duration, clickstream data</li>
            <li>Location Data: Approximate geographic location derived from IP address</li>
          </ul>
        </div>

        {/* Subsection 1.3 */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">1.3 Information from Third Parties</h3>
          <p className="text-gray-600 leading-relaxed">
            We may receive information from business partners, trade associations, payment processors, publicly available business registries, and marketing/analytics providers.
          </p>
        </div>
      </section>

      {/* Section 2: Legal Basis for Processing (GDPR) */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Legal Basis for Processing (GDPR)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          For users in the European Economic Area (EEA), we process personal data under the following legal bases:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Performance of contract (Article 6(1)(b) GDPR)</li>
          <li>Legitimate business interests (Article 6(1)(f) GDPR)</li>
          <li>Compliance with legal obligations (Article 6(1)(c) GDPR)</li>
          <li>Consent (Article 6(1)(a) GDPR) where expressly provided</li>
        </ul>
      </section>

      {/* Add more sections as needed */}

      {/* Section 12: Contact Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">12. Contact Information</h2>
        <p className="text-gray-600 leading-relaxed">
          Data Controller: ETERNAL E SERVICES<br />
          Registered Office: 162, KONARK APPARTMENT, POCKET-4, KALKAJI EXTENSION, DELHI-110019<br />
          Data Protection Officer:{" "}
          <a
            href="mailto:compliance@exportseese.com"
            className="text-blue-500 hover:text-blue-600"
          >
            compliance@exportseese.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;