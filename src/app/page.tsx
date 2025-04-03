"use client";

import React, {useState} from "react";
import { 
    ArrowRight,  
    Shield, 
    Zap, 
    Code2, 
    Server,
    FileCheck,
    SmileIcon,
    Building2,
    Trophy,
    Package,
    ClipboardCheck
  } from 'lucide-react';
  import VideoPlayer from '@/components/ui/hover-video-player';
  import MainCarousel from '@/components/ui/main-carousel';
  import { HoverEffect } from "@/components/ui/card-hover-effect";
  import TextGenerationEffect from "@/components/ui/text-generation-effect";
  import Footer from "@/components/ui/footer"
  import HeroVideoDialog from "@/components/ui/HeroVideoDialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SchemeGrid from '@/components/ui/schemegrid';
import { Navbar } from "@/components/ui/Navbar";
import { Badge } from "@/components/ui/badge";
import { ChevronRight,  CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Truck, Plane, Ship, Box } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import {Testimonials} from "@/components/ui/testimonials"
import { useRouter } from "next/navigation";
  
const HomePage = () => {
  const router = useRouter();

  // Removed duplicate declaration of getSignInUrl
  const getSignInUrl = () => {
    return process.env.CUSTOM_SIGN_URL || "https://exportsee.vercel.app/";
  };


 const projects = [

    {
      title: "EXPORT FUNDING",
      description:
        "Export funding, also known as export finance, is a method of providing financial support to businesses engaged in international trade. ",
     
    },
    {
      title: "MANPOWER & STAFFING SERVICES",
      description:
        "Manpower and staffing services are specialized business solutions that help organizations meet their workforce needs by providing skilled personnel for various roles and projects.",
      
    },
    {
      title: "COMPLIANCE ASSURANCE",
      description:
        "Compliance assurance is a systematic approach organizations implement to ensure adherence to external regulations, internal policies, and industry standards.",
      
    },
    {
      title: "REGULATORY AFFAIRS",
      description:
        "Regulatory Affairs (RA) is a critical profession that ensures organizations adhere to regulatory compliance across various industries, particularly in healthcare, pharmaceuticals, and medical devices.",
      
    },
    {
      title: "BUSINESS DEVELOPMENT",
      description:
        "Business development is a strategic process aimed at creating long-term value for an organization through the identification and cultivation of new opportunities, markets, and relationships.",
      
    },
    {
      title: "BRANDING & MARKETING",
      description:
        " Branding and marketing are two interconnected but distinct concepts that play crucial roles in building and promoting a business.",
      
    },
    {
      title: "PROCUREMENT & VENDOR MANAGEMENT",
      description:
        "Procurement and vendor management are interconnected processes that play a crucial role in organizational success by ensuring efficient sourcing of goods and services and maintaining effective relationships with suppliers.",
      
    },
    {
      title: "QUALITY CONTROL & INSPECTION",
      description:
        "Quality Control and Inspection are critical processes in manufacturing and production that ensure products meet specified standards and customer expectations.",
      
    },
    {
      title: "RISK MITIGATION",
      description:
        "Risk mitigation is a strategic process aimed at identifying, assessing, and reducing potential threats to an organization’s operations, assets, and objectives. ",
      
    },
    {
      title: "GOVERNMENT SCHEMES",
      description:
        "The Indian government has introduced several new schemes and initiatives in recent years, focusing on various sectors of development.",
      
    },
    {
      title: "END TO END TRANSPORTATION",
      description:
        "End-to-end transportation refers to the comprehensive management of the entire logistics process, from the point of origin to the final destination",
      
    },
    {
      title: "CUSTOM & PORT CLEARANCE SUPPORT",
      description:
        "Custom and port clearance support services are essential for businesses engaged in international trade, ensuring smooth import and export operations.",
      
    },
   
  ];

  const slideData = [
    // Existing entries
    {
      title: "AGRICULTURE & FOOD PRODUCTS",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/be/93/1b/be931b33e2eb94298174c9075e707f1b.jpg",
      url: "https://apeda.gov.in/",
    },
    {
      title: "PHARMACEUTICALS & HEALTHCARE EQUIPMENTS",
      button: "Explore More ",
      src: "https://www.sattva.co.in/wp-content/uploads/2022/12/Untitled-1200-%C3%97-630-px-1024x538.png",
      url: "https://pharmexcil.com/",
    },
    {
      title: "APPARELS",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/b1/0b/24/b10b24863ac3f7848a885c41dfb670cb.jpg",
      url: "https://aepcindia.com/",
    },
    {
      title: "MOBILE & ELECTRONIC DEVICES",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/cb/1b/f3/cb1bf3947559941e38f070b8f60aca44.jpg",
      url: "https://medepc.org/",
    },
    {
      title: "OILS & SEED PRODUCTS",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/51/9a/aa/519aaa6214fa854c420f9d873f649f05.jpg",
      url: "https://iopepc.org/",
    },
    {
      title: "SPORTS GOODS ",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/a7/c5/e3/a7c5e37d9520188e5e9a4cd422ce9ae3.jpg",
      url: "http://sportsgoodsindia.org/",
    },
    {
      title: "CHEMICALS & ALLIED PRODUCTS",
      button: "Explore More",
      src: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--ecc2b950-49c7-43f2-b20a-d75675d1c683/ey-lab-glassware-science-laboratory-research-and-development-concept.jpg?preferwebp=true&quality=85",
      url: "https://capexil.org/",
    },
    {
      title: "HANDICRAFT & HOME FURNISHING",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/30/93/3e/30933e810b8b0aa0bdfebcc7ac957dc8.jpg",
      url: "https://www.epch.in/",
    },
    {
      title: "METAL, WOODER PRODUCTS & KITCHENWARE ",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/f9/3d/72/f93d72a0a1d18e28a82cbea283963609.jpg",
      url: "https://eepcindia.org",
    },
    
    // New entries with placeholder images
    
   
    {
      title: "COSMETICS & DYES",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/0f/5d/a9/0f5da98f94a33fdfade3546d578ca461.jpg",
      url: "http://chemexcil.in/",
    },
    {
      title: "CARPET",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/96/43/d8/9643d8b6fdcc5bd9d4bae9f388aebc8b.jpg",
      url: "http://cepc.co.in/",
    },
    {
      title: "CASHEW",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/78/05/4e/78054eaf3e7f91130763aea3dcfb48fc.jpg",
      url: "http://www.cashewindia.org/",
    },
    {
      title: "COFFEE",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/7e/9d/43/7e9d43ddbd965040be08ca045d21b0e4.jpg",
      url: "https://coffeeboard.gov.in/",
    },
    // {
    //   title: "COIR PRODUCTS",
    //   button: "Explore More",
    //   src: "https://i.pinimg.com/736x/b7/e3/68/b7e368073384263345c90e7ec30c15e8.jpg",
    //   url: "https://coirboard.gov.in/",
    // },
    {
      title: "LEATHER PRODUCTS",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/c1/65/d0/c165d09e99cb3cc204ac9b34948598f5.jpg",
      url: "https://leatherindia.org/",
    },
    {
      title: "ENGINEERING",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/c2/94/68/c29468c51b4bac762741202c46bc88ae.jpg",
      url: "https://eepcindia.org/",
    },
    
    {
      title: "HANDLOOM",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/f4/c4/3c/f4c43cd02794709f565d65d40a83d66b.jpg",
      url: "https://www.hepcindia.com/",
    },
    
    {
      title: "SILK",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/82/6a/bf/826abf374cf8ed323516c5d853bd1109.jpg",
      url: "http://www.theindiansilkexportpromotioncouncil.com/",
    },
    {
      title: "JUTE",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/c3/ec/91/c3ec91294a91084294b280de54bef46f.jpg",
      url: "https://jpdepc.org/",
    },
    {
      title: "MARINE",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/25/02/53/2502530922af1e8d8a6c91a2b6362557.jpg",
      url: "https://mpeda.gov.in/",
    },
    {
      title: "RUBBER",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/85/95/cf/8595cfe70cd7c161cebe2527946c9bbb.jpg",
      url: "https://rubberboard.gov.in",
    },
    {
      title: "POWE LOOM",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/0d/e2/2e/0de22e6592c82eb9931e76e8b3a9889d.jpg",
      url: "https://www.pdexcil.org/",
    },
    {
      title: "PROJECTS",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/45/d5/fa/45d5fa69447a7dcefb6d9eb847900bd9.jpg",
      url: "https://www.projectexports.com/",
    },
    {
      title: "SERVICES EXPORT",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/c7/69/8c/c7698c788ac6152dbe17f064b2779f8e.jpg",
      url: "https://www.servicesepc.org/",
    },
    {
      title: "SHELLAC & FOREST PRODUCTS",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/77/be/c9/77bec9f0862aa677db7ba4ae09395663.jpg",
      url: "https://www.shefexil.org/",
    },
    {
      title: "SPICES",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/55/87/3f/55873f7ef64a1561ba780c2fba25b721.jpg",
      url: "https://www.indianspices.com/",
    },
    {
      title: "COTTON TEXTILES",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/f6/21/44/f621441f418e7e81691d87892299dcab.jpg",
      url: "https://texprocil.org/",
    },
    {
      title: "PLASTICS",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/d5/4e/7a/d54e7acc0b6f06978d46aa8812bf8a01.jpg",
      url: "https://www.plexconcil.org/",
    },
    {
      title: "SYNTHETIC RAYON",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/5e/d0/98/5ed098b67dbee116fec1e7282f9fb822.jpg",
      url: "https://www.matexil.org/",
    },
    {
      title: "TEA",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/84/be/30/84be3089a3dada088daa76eab5d01b98.jpg",
      url: "https://www.teaboard.gov.in/",
    },
    {
      title: "TOBACCO",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/d6/4f/36/d64f367a8804288497b874b43a9a5fdf.jpg",
      url: "https://tobaccoboard.com/",
    },
    {
      title: "WOOL & WOLLENS",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/da/c0/1d/dac01d63f7daabb93304172b820d7adf.jpg",
      url: "https://wwepcindia.com/",
    },
    {
      title: "GEMS & JEWELLERY",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/18/15/e4/1815e484f9d0ed6bf7d735cf27f6e138.jpg",
      url: "https://gjepc.org/",
    },
    
  ];

  const steps = [
    {
      id: 1,
      title: "Order Processing",
      description: "Recognize your logistic needs and professional consultation",
      icon: ClipboardCheck,
      delay: 0
    },
    {
      id: 2,
      title: "Warehousing",
      description: "Secure warehousing for your products before shipping",
      icon: Package,
      delay: 200
    },
    {
      id: 3,
      title: "Order Tracking",
      description: "Real-time tracking technology for complete visibility",
      icon: Truck,
      delay: 400
    },
    {
      id: 4,
      title: "Product Delivery",
      description: "Timely and secure delivery to your specified destination",
      icon: CheckCircle,
      delay: 600
    }
  ];

  const services = [
    {
      id: 1,
      title: "Warehousing",
      icon: Box,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      delay: 0
    },
    {
      id: 2,
      title: "Air Freight",
      icon: Plane,
      image: "https://i.pinimg.com/736x/ff/7b/d2/ff7bd291704e0f3fb2b9feab4a958a83.jpg",
      delay: 100
    },
    {
      id: 3,
      title: "Ocean Freight",
      icon: Ship,
      image: "https://i.pinimg.com/736x/3a/57/73/3a57735207190cfbe9d91608b5a82a6c.jpg",
      delay: 200
    },
    {
      id: 4,
      title: "Road Freight",
      icon: Truck,
      image: "https://i.pinimg.com/736x/91/e7/f5/91e7f55838f120fd209b0c87dc2d229c.jpg",
      delay: 300
    },
  ];

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  
    return (
        <div className="min-h-screen dark:bg-black dark:text-white ">
      
     
      <div className=" absolute top-5 left-0 right-0 z-50">
     <Navbar/>
</div>

<Carousel className="">
  <CarouselContent className="border-b border-gray-200 dark:border-neutral-800 flex max-h-fit md:items-center ">
    <CarouselItem className=" pt-28 bg-gradient-to-l from-[#e4d446] to-[#d59d04] dark:bg-gradient-to-l dark:from-transparent dark:to-transparent "> 
      <header className="container  mx-auto px-4 sm:px-8 pt-4 sm:pt-6 flex  justify-center items-center flex-col md:flex-row">
  {/* Text Content */}
  <div className="max-w-5xl mx-auto mb-8 md:mb-0 p-4 md:p-6 order-1 md:order-none">
    <Badge className="mb-2 bg-blue-500 inline-block text-white font-semibld py-1 px-3 rounded-full text-md border border-blue-500/50 backdrop-blur-sm ">Exportseese - Trust & Profit</Badge>
    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-bl dark:from-white from-black/55 to-blue-500 bg-clip-text text-transparent">
      EXPORT IMPORT{" "}
      <span className="block md:inline">CONSULTANT &</span>
      <span className="block">BUYING HOUSE</span>
    </h1>
    
    <p className="text-black dark:text-gray-400 text-base md:text-lg mb-6 md:mb-8">
      <span className="block mb-2">
        To support buyers and sellers in finding right partner for multiple products
      </span>
      <span className="block mb-2">
        Managing compliance for companies related to DGFT & CUSTOM
      </span>
      <span className="block">
        International Logistic & freight forwarding services.
      </span>
    </p>

    <a
      href={getSignInUrl()}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 md:px-6 md:py-2 rounded-full text-base md:text-lg font-medium inline-flex items-center gap-2 transition-all hover:gap-3"
    >
      Try it free <ArrowRight size={20} />
    </a>
  </div>

  {/* Hero Image */}
  <div className="relative  w-full md:w-auto order-0 md:order-none">
    <div className="absolute inset-0 bg-gradient-blur"></div>
    <div className="aspect-video w-full max-w-3xl  mx-auto">
      <VideoPlayer />
    </div>
  </div>
</header>
</CarouselItem>
    <CarouselItem> 
      <div className="relative md:flex pt-20  bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="container mx-auto my-auto  px-4 md:pl-10 relative z-10">
        <div className="max-w-3xl">
        <Badge className="mb-2 bg-blue-500 inline-block text-white font-semibld py-1 px-3 rounded-full text-md border border-blue-500/50 backdrop-blur-sm ">Exportseese - Trust & Profit</Badge>

          <h1 className="text-4xl md:text-6xl font-black dark:text-gray-100 text-gray-900 mb-4">
          EXPORT IMPORT CONSULTANT &
BUYING HOUSE

          </h1>
          <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8">
      <span className="block mb-2">
        To support buyers and sellers in finding right partner for multiple products
      </span>
      <span className="block mb-2">
        Managing compliance for companies related to DGFT & CUSTOM
      </span>
      <span className="block">
        International Logistic & freight forwarding services.
      </span>
    </p>
    <a
      href={getSignInUrl()}
      className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1 md:px-6 md:py-2 rounded-full text-base md:text-lg font-medium inline-flex items-center gap-2 transition-all hover:gap-3"
    >
      Try it free <ArrowRight size={20} />
    </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full opacity-10 select-none pointer-events-none">
        <div className="text-[30rem] font-black text-gray-800 absolute -right-10 -top-20 -rotate-12">E</div>
      </div>
      <div className="">
        <SchemeGrid/>
      </div>
    </div>
</CarouselItem>
    <CarouselItem>
    <section className="relative px-10 min-h-screen  flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="https://cdn.pixabay.com/video/2019/06/07/24255-341474048_large.mp4"
          loop
          playsInline
          autoPlay
          muted
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
     
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kargon-dark/70 to-kargon-blue/30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 text-center md:text-left">
        <div className="max-w-3xl ">
        <Badge className="mb-2 bg-blue-500 inline-block text-white font-semibld py-2 px-3 rounded-lg text-md border border-blue-500/50 backdrop-blur-sm ">Exportseese - Trust & Profit</Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transport your<br />cargo everywhere
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-lg">
            Reliable and efficient logistics solutions tailored to your business needs.
          </p>
          <Link href={getSignInUrl()}>
            <Button variant="default" className=" hover:bg-red-500/90 text-white rounded-md px-6 py-6 text-lg flex items-center gap-2">
              GET STARTED
              <ChevronRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
            
      <div className="py-6">
     <HeroVideoDialog
       className=""
       animationStyle="left-in-right-out"
       videoSrc="https://www.youtube.com/embed/38vGOQlTIE8?si=al0kAvxa8354D9wY"
       thumbnailSrc="#"
       thumbnailAlt="Hero Video"
     />
   </div>

      <div className="relative flex justify-center items-center overflow-hidden w-full h-full pb-16">
      {/* <div className="md:max-w-[26rem] md:w-full hidden md:block  md:absolute left-20 ">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-[25.9rem] rounded-lg shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i.pinimg.com/736x/ea/20/88/ea2088c5e57b46ac921e129a49b15e46.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.pinimg.com/736x/1e/d0/d4/1ed0d47c5174794d97d5cf4ffe8e759a.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.pinimg.com/736x/1e/d0/d4/1ed0d47c5174794d97d5cf4ffe8e759a.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500",
        )}
      >
        <div className="text relative">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">PFA PRODUCTS </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
          Reach out to government website for more details
          </p>
        </div>
      </div>
    </div> */}
      <MainCarousel slides={slideData} />
    </div>

   
     
    <section className="container mx-auto px-4 md:px-20 pb-12">
    <div className="flex flex-col py-10 text-center items-center space-y-3">
    <TextGenerationEffect
text="ONE OF THE LEADING BUSINESS CONSULTANTS IN INDIA"
  className="md:text-3xl font-semibold text-center"
  delay={50}
  animationFrom={{ opacity: 0, y: 50 }} // Changed to Framer Motion-friendly syntax
  animationTo={{ opacity: 1, y: 0 }}
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>

   
<TextGenerationEffect
  text="Our business consulting services at a glance"
  className="md:text-3xl font-semibold text-center"
  delay={50}
  animationFrom={{ opacity: 0, y: 50 }} // Changed to Framer Motion-friendly syntax
  animationTo={{ opacity: 1, y: 0 }}
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>

</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              company: "TechCorp",
              image: "https://media.istockphoto.com/id/1454531939/photo/aerial-top-view-containers-ship-cargo-business-commercial-trade-logistic-and-transportation.jpg?s=612x612&w=0&k=20&c=7dc26jnLMMs3elOwGXa-04p8qeMRKBNoCVD3aff7kuE=",
              quote: "EXPORT IMPORT COMPLIANCE REGISTRATION ",
              author: "Exportseese offer specialized services in registration for MSME, Export-Import License, GST, Shop & Establishment, Labour Laws, Income Tax and other regulatory compliances. "
            },
            {
              company: "DataFlow",
              image: "https://ascgroup8.wordpress.com/wp-content/uploads/2025/01/image-2.png",
              quote: "AEO Certification",
              author: "Exportseese facilitate exporters in acquiring Authorized Economic Operator Certificate under various categories AEO-T1, AEO-T2, AEO-T3 & AEO-LO based on their services. "
            },
            {
              company: "CloudScale",
              image: "https://www.eprconnect.in/assets/images/pages/otherservice/img-service.png",
              quote: "BUYING HOUSE SERVICES",
              author: "Exportseese helps buyers in finding sellers of various products by negotiating, documentation, sampling, order, shipment, DGFT and logistic services."
            }
            
          ].map((testimonial, index) => (
            <div onClick={(e) => router.push(getSignInUrl())} key={index} className="bg-gray-900 rounded-xl overflow-hidden">
              <img 
                src={testimonial.image} 
                alt={testimonial.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <p className="text-sm text-gray-400">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/*       <section className="py-20 md:px-16 px-4 bg-[#efefef] dark:bg-[#181818]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">grow transport.</h2>
              <div className="w-16 h-1 bg-kargon-red mb-6"></div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-kargon-red shrink-0 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">We're trusted! How has our company grown so fast?</h3>
                    <p className="text-gray-600">We've built trust through consistent delivery, reliability, and exceptional customer service.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-kargon-red shrink-0 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">We deliver on time, with safety as a central focus</h3>
                    <p className="text-gray-600">Our rigorous safety protocols ensure your cargo arrives on time without compromising security.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button onClick={(e) => router.push("#services")} variant="outline" className="bg-red-500 hover:bg-kargon-red/90 text-white rounded-md">
                  OUR SERVICES
                </Button>
                <Button onClick={(e) => router.push("/pricing")} variant="outline" className="border-red-500 text-kargon-red hover:bg-kargon-red/10">
                  EXPLORE PLANS
                </Button>
              </div>
            </ScrollAnimation>
          </div>
          <div className="order-1 lg:order-2">
            <ScrollAnimation delay={200} className="relative">
              <img
                src="https://preview--echoing-site-template-26.lovable.app/lovable-uploads/1e21aeaa-540f-4dde-8a28-4ab829e83c16.png"
                alt="Container Port"
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: '400px' }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-yellow-500 p-6 rounded-lg shadow-lg">
                <div className="text-5xl font-bold text-kargon-red">10M+</div>
                <div className="font-medium">Successful Deliveries</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section> */}

    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation className="text-center mb-12">
             <TextGenerationEffect
  text="Our Services Options"
  className="md:text-3xl font-semibold text-center"
  delay={50}
  animationFrom={{ opacity: 0, y: 50 }} // Changed to Framer Motion-friendly syntax
  animationTo={{ opacity: 1, y: 0 }}
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>
             <TextGenerationEffect
  text=" We provide comprehensive logistics solutions tailored to meet your specific needs."
  className="md:text-3xl font-semibold text-center"
  delay={50}
  animationFrom={{ opacity: 0, y: 50 }} // Changed to Framer Motion-friendly syntax
  animationTo={{ opacity: 1, y: 0 }}
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>

        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ScrollAnimation key={service.id} delay={service.delay}>
              <div className="service-card group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="service-card-overlay">
                  <div className="service-card-icon">
                    <service.icon className="text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <a href="#" className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>

    <div className="w-full  mx-auto px-4 md:px-16 text-center mt-10" id="services">
      <div className="flex flex-col text-center items-center space-y-3">
    
    <TextGenerationEffect
  text="BOUQUET OF OUR SPECIALIZED EXPORT – IMPORT SERVICES"
  className="md:text-3xl font-semibold text-center"
  delay={50}
  animationFrom={{ opacity: 0, y: 50 }} // Changed to Framer Motion-friendly syntax
  animationTo={{ opacity: 1, y: 0 }}
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>
    <TextGenerationEffect
  text="Offered Services"
  className="md:text-3xl font-semibold text-center"
  delay={50}
  animationFrom={{ opacity: 0, y: 50 }} // Changed to Framer Motion-friendly syntax
  animationTo={{ opacity: 1, y: 0 }}
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>
</div>
    
    <div className="" >
      <HoverEffect items={projects} className=""  />
      </div>
    </div>

    <section className="container mx-auto px-4 pb-4 text-center ">
        <div className="dark:bg-gradient-to-b dark:from-blue-900/60 dark:to-transparent border-l border-b border-r bg-gradient-to-b from-neutral-900 to-transparent  rounded-2xl p-12">
          <h2 className="text-2xl  md:text-4xl font-bold max-w-5xl mx-auto text-center text-white  mb-8">We make represantation and appear on your behalf before</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {[
                     { icon: <Zap className="text-blue-400" />, title: "Commissioner of Customs", desc: "" },
                     { icon: <Shield className="text-blue-400" />, title: "Commissioner of Customs Appeal", desc: "" },
                     { icon: <Code2 className="text-blue-400" />, title: "Additional commissioner of DGFT", desc: "" },
                     { icon: <Server className="text-blue-400" />, title: "Director General of DGFT", desc: "" },
                     { icon: <Zap className="text-blue-400" />, title: "Principal commissioner of GST", desc: "" },
                     { icon: <Shield className="text-blue-400" />, title: "CESTAT", desc: "" },
                     { icon: <Code2 className="text-blue-400" />, title: "Courts and Tribunals", desc: "" },
                     { icon: <Server className="text-blue-400" />, title: "Central Board of Indirect Taxes and Customs", desc: "" }
                   ].map((feature, index) => (
                    <div 
                    key={index} 
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-start"
                  >                       <div className="mb-4">{feature.icon}</div>
                       <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                       <p className="text-gray-400">{feature.desc}</p>
                     </div>
                   ))}
                 </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-neutral-900 mt-4">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-kargon-red font-medium text-sm uppercase tracking-wider">OUR PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Logistics workflow</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <ScrollAnimation key={step.id} delay={step.delay} className="text-center">
              <div className="relative mb-6 mx-auto w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center">
                {step.id > 1 && (
                  <div className="absolute right-full top-1/2 w-full h-0.5 bg-gray-200"></div>
                )}
                <step.icon size={36} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>


{/*       <section className="relative py-20 ">
  <div className="absolute inset-0 z-0">
    <img
      src="https://i.pinimg.com/736x/f0/89/7c/f0897cab31ba87e41835eaeea71dfd16.jpg"
      alt="Logistics Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">Our goals <span className="text-blue-500">in numbers</span></h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
      <ScrollAnimation className="bg-white/20 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-8 text-center" delay={0}>
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full">
            <FileCheck className="text-green-500 h-12 w-12" />
          </div>
        </div>
        <div className="text-5xl font-bold  mb-2 flex items-center justify-center">
          <NumberTicker value={100000} startValue={40000} delay={0} />
          <p>+</p>
        </div>
        <div className="text-lg font-medium text-white/80">Deliveries Completed</div>
      </ScrollAnimation>
      
      <ScrollAnimation className="bg-white/20 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-8 text-center" delay={200}>
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full">
            <SmileIcon className="text-red-500 h-12 w-12" />
          </div>
        </div>
        <div className="text-5xl font-bold  mb-2 flex items-center justify-center">
          <NumberTicker value={8700} startValue={0} delay={0.2} />
          <p>+</p>
        </div>
        <div className="text-lg font-medium text-white/80">Happy Clients</div>
      </ScrollAnimation>
      
      <ScrollAnimation className="bg-white/20 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-8 text-center" delay={400}>
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full">
            <Building2 className="text-blue-500 h-12 w-12" />
          </div>
        </div>
        <div className="text-5xl font-bold text-white mb-2">
          <NumberTicker value={10} startValue={0} delay={0.4} />
        </div>
        <div className="text-lg font-medium text-white/80">Worldwide Offices</div>
      </ScrollAnimation>
      
      <ScrollAnimation className="bg-white/20 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-8 text-center" delay={600}>
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full">
            <Trophy className="text-yellow-500 h-12 w-12" />
          </div>
        </div>
        <div className="text-5xl font-bold text-white mb-2">
          <NumberTicker value={200} startValue={0} delay={0.6} />
        </div>
        <div className="text-lg font-medium text-white/80">Awards Won</div>
      </ScrollAnimation>
    </div>
  </div>
</section> */}

<Testimonials/>

      <div className="md:mx-10 sm:px-6 lg:px-8 ">
      <div className="relative isolate overflow-hidden  px-6 py-20 text-center dark:border-neutral-700 sm:rounded-3xl sm:border  sm:px-16 sm:shadow-sm">
      <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-0 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.9"
          ></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#3b82f6" />
              <stop offset={1} stopColor="#1d4ed8" />
            </radialGradient>
          </defs>
        </svg>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight  sm:text-4xl">
          Start using Exportseese Now!
        </h2>
        <h3 className="mx-auto mt-6 max-w-xl md:text-lg leading-8 text-muted-foreground">
        EXPORTSEESE OFFERS REPRESENTATION AND APPEARANCE ON BEHALF OF OUR CUSTOMERS BEFORE 
        </h3>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <a href={getSignInUrl()} 
 className="bg-blue-500 dark:bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-full text-lg font-medium inline-flex items-center gap-2 transition-all hover:gap-3">
            Start Free Trial <ArrowRight size={20} />
          </a>
        </div>
        {/* gradient svg */}
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.9"
          ></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#3b82f6" />
              <stop offset={1} stopColor="#1d4ed8" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>

   

<Footer/>
    </div>
    );
};

export default HomePage;
