import React from 'react';
import { Check, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from '@/lib/utils';



interface PlanProps {
  plan: {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
    contactUs?: boolean;
  };
  onSelect: () => void;
}

const PlanCard: React.FC<PlanProps> = ({ plan, onSelect }) => {
  return (
    <Card className={cn(
      "relative flex flex-col p-6 border-2 hover:border-blue-400 rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg",
     
    )}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-blue-500  dark:bg-blue-400 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
          Popular
        </div>
      )}
      
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">{plan.name}</h3>
        <div className="mt-3 mb-4">
          {plan.contactUs ? (
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-50">CONTACT US</span>
          ) : (
            <>
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">₹{plan.price.toLocaleString('en-IN')}</span>
              <span className="text-gray-600 dark:text-gray-400">/one time</span>
            </>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
      </div>
      
      <div className="flex-grow mb-6">
        <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-3">Included services:</h4>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-1">
                <Check size={16} />
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        className={cn(
          "mt-auto flex items-center justify-center gap-2 w-full transition-all",
          plan.popular 
            ? "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-gray-600 text-white" 
            : "bg-blue-500 hover:bg-gray-900 dark:bg-blue-600 dark:hover:bg-gray-600 text-white"
        )}
        onClick={onSelect}
      >
        <CreditCard size={18} />
        {plan.contactUs ? "Contact Us" : "Select Plan"}
      </Button>
    </Card>
  );
};

export default PlanCard;
