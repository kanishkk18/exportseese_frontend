"use client";

import React, { useState } from 'react';
import { Check, X} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "next-themes";
import PlanCard from '@/components/ui/PlanCard';
import PaymentModal from '@/components/ui/PaymentModal';
import { Navbar } from '@/components/ui/Navbar';
import Footer from '@/components/ui/footer';


const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    toast({
      title: "Payment Successful",
      description: `You have successfully subscribed to the ${selectedPlan} plan.`,
      duration: 5000,
    });
    setIsModalOpen(false);
  };

  const handlePaymentCancel = () => {
    setIsModalOpen(false);
  };

    // Define plan data
  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: 9999,
      description: "Essential services for business registration and compliance",
      features: [
        "Company Registration",
        "Permanent Account Number",
        "Tax Deduction & Collection Account",
        "MSME Registration",
        "GST Registration",
        "Import Export Code",
        "Digital Signature Certificate",
        "AD Code Registration",
        "Icegate Registration",
      ],
      popular: false,
    },
    {
      id: "executive",
      name: "Executive Plan",
      price: 14999,
      description: "Advanced services with additional business support",
      features: [
        "Company Registration",
        "Permanent Account Number",
        "Tax Deduction & Collection Account",
        "MSME Registration",
        "GST Registration",
        "Import Export Code",
        "Digital Signature Certificate",
        "AD Code Registration",
        "Icegate Registration",
        "RCMC Certificate",
        "Online Business Promotion Support",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: 0, // Contact us for pricing
      description: "Comprehensive package with all services included",
      features: [
        "All Executive Plan Features",
        "Documentation Services",
        "Advance Documents",
        "Collection Documents",
        "LC Documents",
        "Banking Support",
        "Dry Containers",
        "FCL Clearance",
        "LCL Clearance",
        "Late Gate Service",
        "Change of Destination",
        "Insurance Charges",
        "ECGC Charges",
        "Claiming Government Incentives",
        "X-Ray Fees",
        "Forklift Charges",
        "Sampling Charges",
        "Inspection Certificate",
        "Sorting Services",
        "Labor Services",
      ],
      popular: false,
      contactUs: true,
    },
  ];

  // Feature comparison for the comparison table
  const comparisonFeatures = [
    "Company Registration",
    "GST Registration",
    "Digital Signature Certificate",
    "Import Export Code",
    "Documentation Services",
    "Banking Support",
    "Online Promotion",
    "RCMC Certificate",
    "Insurance Services",
    "Labor Services",
  ];

  return (
    <div className="">
      <Navbar/>
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-blue-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
       
        
        <div className="text-center mb-12 mt-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Charge Packages</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the right package for your business needs
            <span className="block text-sm italic mt-1">(GST & govt. charges extra as applicable)</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {plans.map((plan) => (
            <PlanCard 
              key={plan.id}
              plan={plan}
              onSelect={() => handlePlanSelect(plan.name)}
            />
          ))}
        </div>

        <div className="mt-24 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Plan Comparison</h2>
          <div className="overflow-x-auto max-w-6xl mx-auto shadow-lg rounded-xl">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Feature
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Basic
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-blue-500 dark:text-blue-400 uppercase tracking-wider">
                        Executive
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {feature}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {["Company Registration", "GST Registration", "Digital Signature Certificate", "Import Export Code"].includes(feature) ? (
                            <Check className="inline-block text-green-500 dark:text-green-400" size={20} />
                          ) : (
                            <X className="inline-block text-red-500 dark:text-red-400" size={20} />
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {["Company Registration", "GST Registration", "Digital Signature Certificate", "Import Export Code", "Online Promotion", "RCMC Certificate"].includes(feature) ? (
                            <Check className="inline-block text-green-500 dark:text-green-400" size={20} />
                          ) : (
                            <X className="inline-block text-red-500 dark:text-red-400" size={20} />
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <Check className="inline-block text-green-500 dark:text-green-400" size={20} />
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">
                        Price
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-gray-900 dark:text-white">
                        ₹9,999
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-blue-600 dark:text-blue-400">
                        ₹14,999
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-gray-900 dark:text-white">
                        Contact Us
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {isModalOpen && selectedPlan && (
        <PaymentModal
          planName={selectedPlan}
          amount={selectedPlan === "Premium Plan" ? "Contact Us" : selectedPlan === "Executive Plan" ? "₹14,999" : "₹9,999"}
          onClose={handlePaymentCancel}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default Index;
