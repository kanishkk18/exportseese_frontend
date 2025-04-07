import React,{useEffect} from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

const ConsultationCard: React.FC = () => {
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", {
        "theme": "dark",
        "hideEventTypeDetails": false,
        "layout": "month_view",
        // Removed unsupported "style" property
      });
    })();
  }, []);
    
  

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
      <div className="grid md:grid-cols-2">
        <div className="p-8 md:p-10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-md">
          <h2 className="text-3xl font-medium text-gray-800 dark:text-white mb-6">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Ready to navigate the complexities of global trade? Contact our expert team today.
          </p>
          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 border border-blue-200 dark:border-blue-700/50">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-1">Our Address</h4>
                <p className="text-gray-500 dark:text-gray-400">B-217,218,219,Logix Technova, Sec-132, Noida-201301</p>
              </div>
            </div>
            <div className="flex items-start group">
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40 border border-purple-200 dark:border-purple-700/50">
                <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-1">Email Us</h4>
                <p className="text-gray-500 dark:text-gray-400">hello@exportseese.com</p>
              </div>
            </div>
            <div className="flex items-start group">
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800/40 border border-green-200 dark:border-green-700/50">
                <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-1">Call Us</h4>
                <p className="text-gray-500 dark:text-gray-400">+91 9220452221</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-indigo-900 flex flex-col justify-center">
          <h2 className="text-3xl font-medium text-white mb-6">Ready to Grow?</h2>
          <p className="text-white/80 mb-8">
            Discover how Exportseese can help your business thrive in the global marketplace.
          </p>
          <Button 
            data-cal-namespace="30min"
            data-cal-link="exportseese/30min"
            
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className="transition-all duration-300 z-50 ease-in-out transform hover:scale-105 active:scale-95 bg-amber-500 hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500 text-white dark:text-gray-900 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 border-2 border-amber-400/50 dark:border-amber-300/50"
          > 
            <Calendar className="h-4 w-4" />
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ConsultationCard;
