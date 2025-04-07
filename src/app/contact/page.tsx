// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// // import ContactModal from "@/components/ui/ContactModal";
// // import Link from 'next/link';
// // import { Menu, X } from 'lucide-react';
// import { getCalApi } from "@calcom/embed-react";
// import { Navbar } from "@/components/ui/Navbar";
// import { Card } from "@/components/ui/card";
// import { Mail, MapPin, Phone } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"


// const Index = () => {
//   // const [isContactModalOpen, setIsContactModalOpen] = useState(false);
//   //     const [isMenuOpen, setIsMenuOpen] = useState(false);

//       useEffect(()=>{
//         (async function () {
//         const cal = await getCalApi({"namespace":"15min"});
//         cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
//         })();
//       }, [])
  

//   return (
//     <div className="">
//       <Navbar/>
//                 <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50">
//   {/* Background Video */}
//   <video 
//     autoPlay 
//     loop 
//     muted 
//     playsInline 
//     className="absolute top-0 left-0 w-full h-full object-cover"
//   >
//     <source src="https://cdn.pixabay.com/video/2024/03/08/203404-921381913_large.mp4" type="video/mp4" />
   
//   </video>

//   {/* Overlay to improve readability */}
//   <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

//   {/* Content */}
//   <div className="relative text-center max-w-2xl px-4">
//     <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Our Service</h1>
//     <p className="text-xl text-gray-200 mb-8">We're here to help with all your needs. Reach out to us today!</p>

    
//     <Dialog>
//   <DialogTrigger>
//   <Button 
//       // // onClick={() => setIsContactModalOpen(true)}
//       // data-cal-namespace="15min"
//       // data-cal-link="kanishkkb18/15min"
//       //     data-cal-config='{"layout":"month_view"}'
//       className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg"
//     >
//       Contact Us
//     </Button>

//   </DialogTrigger>
//   <DialogContent className="max-w-4xl mx-auto">
//     <DialogHeader>
//       <DialogTitle></DialogTitle>
//     </DialogHeader>
//     <section id="contact" className="py-24 bg-primary relative">
//         <div className="absolute top-0 inset-x-0 h-24 bg-background" style={{clipPath: 'polygon(0 0, 50% 100%, 100% 0, 0 0)'}}></div>
//         <div className="container mx-auto px-4 relative">
//           <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
//             <div className="grid md:grid-cols-2">
//               <div className="p-8 md:p-12 bg-gradient-to-br from-primary-foreground to-primary-foreground/90">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Get in Touch</h2>
//                 <p className="text-primary/80 mb-8">
//                   Ready to navigate the complexities of global trade? Contact our expert team today.
//                 </p>
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <MapPin className="h-6 w-6 text-secondary mr-4 shrink-0" />
//                     <div>
//                       <h4 className="font-semibold text-primary mb-1">Our Address</h4>
//                       <p className="text-primary/70">162, KONARK APPARTMENT, POCKET-4, KALKAJI EXTENSION, DELHI-110019</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <Mail className="h-6 w-6 text-secondary mr-4 shrink-0" />
//                     <div>
//                       <h4 className="font-semibold text-primary mb-1">Email Us</h4>
//                       <p className="text-primary/70"> hello@exportseese.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <Phone className="h-6 w-6 text-secondary mr-4 shrink-0" />
//                     <div>
//                       <h4 className="font-semibold text-primary mb-1">Call Us</h4>
//                       <p className="text-primary/70">+91 9220452221</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-8 md:p-12 flex flex-col justify-center">
//                 <h2 className="text-3xl font-bold mb-6 text-white">Ready to Grow?</h2>
//                 <p className="text-white/80 mb-8">
//                   Discover how Exportseese can help your business thrive in the global marketplace.
//                 </p>
               
//                 <Button 
//       // onClick={() => setIsContactModalOpen(true)}
//       data-cal-namespace="15min"
// 	  data-cal-link="kanishkkb18/15min"
//     data-cal-config='{"layout":"month_view"}'
//       className="bg-yellow-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg"
//     >
//        Schedule a Consultation
//     </Button>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </section>
//   </DialogContent>
// </Dialog>


   
//   </div>
// </div>

//     </div>
//   );
// };

// export default Index;

"use client";

import React, { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Navbar } from "@/components/ui/Navbar";
import ConsultationCard from "@/components/ui/ConsultationCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Mail, MapPin, Phone} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [open, setOpen] = useState(false);

  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"30min"});
		cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

  // Parallax effect for hero section
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="text-white">
      <Navbar />
      </div>
      {/* Hero Section */}
      <section className="hero-video-container relative flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          style={{
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})`,
          }}
        >
          <source
            src="https://cdn.pixabay.com/video/2024/03/08/203404-921381913_large.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <div className="space-y-2 animate-fade-in">
            <span className="inline-block text-blue-500 font-medium py-1 px-3 rounded-full text-sm border border-blue-500/50 backdrop-blur-sm bg-secondary/10">
              Global Trade Solutions
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 text-white leading-tight text-balance">
              Expanding Your Business <br /><span className="text-blue-500">Across Borders</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              We're here to help navigate the complexities of international trade. 
              Let our experts guide your business to global success.
            </p>
          </div>
          
          <div className="flex flex-col  sm:flex-row gap-4 mt-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 rounded-lg text-white hover:bg-secondary/90 px-8 py-6 text-lg button-effect">
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
                <DialogHeader>
                  <DialogTitle className="sr-only">Contact</DialogTitle>
                </DialogHeader>
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
           onClick={() => setOpen(false)}
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
    </Card>              </DialogContent>
            </Dialog>
            
            <Button
              variant="outline"
              className=" text-white border-none bg-black rounded-lg hover:text-white hover:bg-white/10 px-8 py-6 text-lg button-effect"
              data-cal-namespace="30min"
	  data-cal-link="exportseese/30min"
    
	  data-cal-config='{"layout":"month_view","theme":"dark"}'
            >
              Schedule Now <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in scroll-indicator" style={{ animationDelay: "600ms" }}>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white/60 hover:text-white border border-white/20 backdrop-blur-md bg-white/5 rounded-full h-12 w-12"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Index;
