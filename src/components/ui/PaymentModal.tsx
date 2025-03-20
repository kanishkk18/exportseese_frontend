import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { paytmCheckout } from '@/data/payment';

interface PaymentModalProps {
  planName: string;
  amount: string;
  onClose: () => void;
  onSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ 
  planName, 
  amount, 
  onClose, 
  onSuccess 
}) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Check if this is a "Contact Us" option
    if (amount === "Contact Us") {
      // For contact us, we'll just simulate success for now
      // In a real implementation, this would send an inquiry instead
      setTimeout(() => {
        setLoading(false);
        onSuccess();
      }, 1000);
      return;
    }

    try {
      // In a real implementation, this would call your backend
      // Here we're using a mock function
      const result = await paytmCheckout({
        customerInfo,
        amount: amount === "₹14,999" ? 14999 : 9999,
        planName
      });
      
      // Process result
      if (result.success) {
        onSuccess();
      } else {
        setError(result.message || 'Payment failed. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Complete Your Purchase</span>
           
          </DialogTitle>
          <DialogDescription>
            You are subscribing to the <span className="font-semibold">{planName}</span> for {amount}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              required 
              value={customerInfo.name} 
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="john@example.com" 
              required 
              value={customerInfo.email} 
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              name="phone" 
              placeholder="+91 9876543210" 
              required 
              value={customerInfo.phone} 
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input 
              id="company" 
              name="company" 
              placeholder="Your Company Ltd." 
              required 
              value={customerInfo.company} 
              onChange={handleInputChange}
            />
          </div>
          
          {error && <div className="text-red-500 text-sm">{error}</div>}
          
          <div className="flex justify-end pt-4">
            <Button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2" 
              disabled={loading}
            >
              {loading ? "Processing..." : (
                <>
                  <CreditCard size={18} />
                  {amount === "Contact Us" ? "Submit Inquiry" : "Proceed to Payment"}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;