// pages/refund-policy.js
import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Refund Policy</h1>
      <p className="text-gray-600 mb-8">Effective Date: 01-03-2025</p>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          This policy ensures that both the company and its customers are clear about their rights and responsibilities in the refund process.
        </p>
      </section>

      {/* Section 1: Scope of Refund */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Scope of Refund</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Services Eligible for Refund</h3>
          <p className="text-gray-600 leading-relaxed">
            Specify the types of Services that can be claimed for refund.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Non-Refundable Items</h3>
          <p className="text-gray-600 leading-relaxed">
            Mention Services that are non-refundable, such as custom-made packages or Services specified in the contract as non-refundable.
          </p>
        </div>
      </section>

      {/* Section 2: Timeframe for Refunds */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Timeframe for Refunds</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Refund Window</h3>
          <p className="text-gray-600 leading-relaxed">
            Clearly state the timeframe within which refunds must be made (e.g., 30 days from receipt of Services).
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Inspection Period</h3>
          <p className="text-gray-600 leading-relaxed">
            Mention any inspection period to identify defects or issues with the Services.
          </p>
        </div>
      </section>

      {/* Section 3: Conditions for Refunds */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Conditions for Refunds</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Documentation</h3>
          <p className="text-gray-600 leading-relaxed">
            The buyer must provide proof of purchase and payment with a written explanation of the breach in the agreement if applicable.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Refund Costs</h3>
          <p className="text-gray-600 leading-relaxed">
            Specify who bears the cost of refund expenses (e.g., buyer or seller).
          </p>
        </div>
      </section>

      {/* Section 4: Process for Refunds */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Process for Refunds</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Refund Request</h3>
          <p className="text-gray-600 leading-relaxed">
            Buyers must submit a refund request, typically in writing or through an online platform, within the allowed timeframe.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Refund Approval</h3>
          <p className="text-gray-600 leading-relaxed">
            The company will review the refund request and either approve or deny it based on the stated criteria.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Refund/Replacement</h3>
          <p className="text-gray-600 leading-relaxed">
            After the refund is approved, the company will offer a refund or replacement, depending on the situation.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Refund Period</h3>
          <p className="text-gray-600 leading-relaxed">
            All refunds would be processed within 30-45 days of approval of refund.
          </p>
        </div>
      </section>

      {/* Section 5: International Considerations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. International Considerations</h2>
        <p className="text-gray-600 leading-relaxed">
          Specify if the buyer is responsible for any import/export duties, taxes, levies, government charges, or customs fees associated with the refund.
        </p>
      </section>

      {/* Section 6: Restocking Fees */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Restocking Fees</h2>
        <p className="text-gray-600 leading-relaxed">
          Some companies charge a restocking fee for refunded Services, which should be clearly stated in the policy.
        </p>
      </section>

      {/* Section 7: Warranty & Damaged Services */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Warranty & Damaged Services</h2>
        <p className="text-gray-600 leading-relaxed">
          Provide details on Services warranties and how customers should handle warranty claims.
        </p>
      </section>

      {/* Section 8: Customer Support */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Customer Support</h2>
        <p className="text-gray-600 leading-relaxed">
          Provide clear contact information (email, phone, etc.) for customers to reach out with any refund-related inquiries.
        </p>
      </section>

      {/* Section 9: Closure of Account */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Closure of Account</h2>
        <p className="text-gray-600 leading-relaxed">
          If eligible for a refund, it is necessary for you to request a refund prior to account closure. You may elect to close your account with us at any time, but upon account closure, you will no longer be eligible for a refund as otherwise permitted under this Refund Policy.
        </p>
      </section>

      {/* Section 10: Extent of Refund */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Extent of Refund</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Website Services</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Build Fee: 30% cancellation fee when in progress, 70% cancellation fee when site design is delivered for review. Non-refundable once the first revision is completed or after 30 days of the date of the transaction.</li>
            <li>Hosting: Eligible for a refund as defined in the "Standard Refund Terms" stated above.</li>
            <li>Logo Design: 40% cancellation fee when in progress, non-refundable once artwork is delivered or within 30 days of the date of the transaction.</li>
            <li>Website Makeover Services: 30% cancellation fee when in progress, 70% cancellation fee when site design is delivered for review, non-refundable once complete.</li>
            <li>Website Care and Marketing Services: If you purchase Website Care or Marketing Services and the plan has been used during the billing period, your subscription is non-refundable.</li>
            <li>Marketing Services Premium: Marketing Services that are included in a bundle with Website Design Services will be closed and ineligible for a refund after 6 weeks of no customer contact.</li>
            <li>SEO Services: A 12-month commitment; in order to receive the best results, you are expected to use the Services for the entire 12-month term.</li>
          </ul>
        </div>
      </section>

      {/* Section 11: Services Not Eligible for Refunds */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Services Not Eligible for Refunds</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Appraisals (Express and Certified Appraisals are non-refundable if the customer already applied the credit).</li>
          <li>Auctions Memberships</li>
          <li>Cloud Servers</li>
          <li>Configuration Add-Ons</li>
          <li>Merchant Accounts</li>
          <li>Office Max Bundles</li>
          <li>Premium Plan</li>
          <li>Redemption Fees</li>
          <li>Transfers (if successful)</li>
        </ul>
      </section>
    </div>
  );
};

export default RefundPolicy;