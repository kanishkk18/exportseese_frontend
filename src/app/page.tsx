"use client";

import React, {useState} from "react";
import { 
    ArrowRight,  
    Shield, 
    Zap, 
    Code2, 
    Server
  } from 'lucide-react';
  import VideoPlayer from '@/components/ui/hover-video-player';
  import MainCarousel from '@/components/ui/main-carousel';
  import { HoverEffect } from "@/components/ui/card-hover-effect";
  import TextGenerationEffect from "@/components/ui/text-generation-effect";
  import Footer from "@/components/ui/footer"
  // import TopNavbar from "@/components/ui/TopNavbar";
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
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge";


  
const HomePage = () => {

  // Removed duplicate declaration of getSignInUrl
  const getSignInUrl = () => {
    return process.env.CUSTOM_SIGN_URL || "https://exporteese.vercel.app/";
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
      title: "GEMS & JEWELLERY",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/18/15/e4/1815e484f9d0ed6bf7d735cf27f6e138.jpg",
      url: "https://gjepc.org/",
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
      url: "",
    },
    
    // New entries with placeholder images
    {
      title: "AGRICULTURE & FOOD PRODUCTS",
      button: "Explore More",
      src: "https://i.pinimg.com/736x/be/93/1b/be931b33e2eb94298174c9075e707f1b.jpg",
      url: "https://apeda.gov.in/",
    },
   
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
    
  ];

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  
    return (
        <div className="min-h-screen dark:bg-black dark:text-white ">
      
      {/* <TopNavbar/> */}
      <div className=" absolute top-5 left-0 right-0 z-50">
     <Navbar/>
</div>

<Carousel >
  <CarouselContent className="border-b border-gray-200 dark:border-neutral-800 flex max-h-fit md:items-center bg-gradient-to-l from-[#e4d446] to-[#d59d04] dark:bg-gradient-to-l dark:from-transparent dark:to-transparent ">
    <CarouselItem className=" pt-20  "> 
      <header className="container  mx-auto px-4 sm:px-8 pt-4 sm:pt-6 flex  justify-center items-center flex-col md:flex-row">
  {/* Text Content */}
  <div className="max-w-5xl mx-auto mb-8 md:mb-0 p-4 md:p-6 order-1 md:order-none">
    <Badge className="mb-2 inline-block text-blue-500 font-medium py-1 px-3 rounded-full text-sm border border-blue-500/50 backdrop-blur-sm bg-secondary/10">Exportseese - trust & profit</Badge>
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
      className="bg-blue-600 hover:bg-blue-700 px-4 py-1 md:px-6 md:py-2 rounded-full text-base md:text-lg font-medium inline-flex items-center gap-2 transition-all hover:gap-3"
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
      className="bg-blue-600 hover:bg-blue-700 px-4 py-1 md:px-6 md:py-2 rounded-full text-base md:text-lg font-medium inline-flex items-center gap-2 transition-all hover:gap-3"
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
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
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

    <div className="w-full  mx-auto px-4 md:px-16 text-center mt-10">
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
    
    <div className="" id="services">
      <HoverEffect items={projects} className=""  />
      </div>
    </div>

    <section className="container mx-auto px-4 pb-4 text-center">
        <div className="dark:bg-gradient-to-b dark:from-blue-900/60 dark:to-transparent bg-gradient-to-b from-neutral-900 to-transparent  rounded-2xl p-12">
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

      <div className="md:mx-10 sm:px-6 lg:px-8 ">
      <div className="relative isolate overflow-hidden  px-6 py-20 text-center dark:border-neutral-700 sm:rounded-3xl sm:border  sm:px-16 sm:shadow-sm">
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