import React from 'react';

const TermsConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Terms & Conditions</h1>
      <p className="text-gray-600 mb-8">Effective Date: 01-03-2025</p>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Welcome to Exportseese (ETERNAL E SERVICES). These Terms & Conditions govern your use of our global trade platform and related services (collectively, the "Services"). By accessing or using our Services, you agree to comply with and be bound by these terms. If you do not agree, please do not use our Services.
        </p>
      </section>

      {/* Section 1: Acceptance of Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Acceptance of Terms</h2>
        <p className="text-gray-600 leading-relaxed">
          By using our Services, you confirm that you are at least 16 years old and agree to these Terms & Conditions. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
        </p>
      </section>

      {/* Section 2: Services Provided */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Services Provided</h2>
        <p className="text-gray-600 leading-relaxed">
          Exportseese provides a platform for international trade, including but not limited to facilitating transactions, logistics, trade finance, and compliance with export/import regulations. We reserve the right to modify or discontinue any part of the Services at any time.
        </p>
      </section>

      {/* Section 3: User Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. User Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Provide accurate and complete information during registration.</li>
          <li>Comply with all applicable laws and regulations.</li>
          <li>Do not use the Services for illegal or unauthorized purposes.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
        </ul>
      </section>

      {/* Section 4: Prohibited Activities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Prohibited Activities</h2>
        <p className="text-gray-600 leading-relaxed">
          You are prohibited from:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Engaging in fraudulent or deceptive practices.</li>
          <li>Uploading or transmitting malicious software.</li>
          <li>Violating intellectual property rights.</li>
          <li>Interfering with the operation of the Services.</li>
        </ul>
      </section>

      {/* Section 5: Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Intellectual Property</h2>
        <p className="text-gray-600 leading-relaxed">
          All content, trademarks, and intellectual property on the platform are owned by Exportseese or its licensors. You may not use, reproduce, or distribute any content without prior written permission.
        </p>
      </section>

      {/* Section 6: Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed">
          Exportseese shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services. Our total liability for any claim shall not exceed the amount paid by you for the Services in the last 12 months.
        </p>
      </section>

      {/* Section 7: Termination */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Termination</h2>
        <p className="text-gray-600 leading-relaxed">
          We may terminate or suspend your access to the Services at any time, with or without notice, for any reason, including violation of these terms. You may also terminate your account at any time by contacting us.
        </p>
      </section>

      {/* Section 8: Governing Law */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Governing Law</h2>
        <p className="text-gray-600 leading-relaxed">
          These Terms & Conditions are governed by the laws of India. Any disputes arising from these terms shall be resolved exclusively in the courts of Delhi.
        </p>
      </section>

      {/* Section 9: Changes to Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Changes to Terms</h2>
        <p className="text-gray-600 leading-relaxed">
          We may update these Terms & Conditions from time to time. Material changes will be notified via email or through our platform 30 days before taking effect. Your continued use of the Services constitutes acceptance of the updated terms.
        </p>
      </section>

      {/* Section 10: Contact Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Contact Information</h2>
        <p className="text-gray-600 leading-relaxed">
          If you have any questions about these Terms & Conditions, please contact us at:
        </p>
        <p className="text-gray-600 leading-relaxed">
          <strong>Email:</strong> support@exportseese.com<br />
          <strong>Address:</strong> 162, KONARK APPARTMENT, POCKET-4, KALKAJI EXTENSION, DELHI-110019
        </p>
      </section>
    </div>
  );
};

export default TermsConditions;