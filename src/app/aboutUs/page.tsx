"use client"

import React,{ useEffect } from "react";
import  Footer  from "@/components/ui/footer";
import { 
  Briefcase, 
  Globe, 
  Users, 
  Shield, 
  TrendingUp, 
  Award,
  CheckCircle,
  BarChart,
  ChevronRight,
  ArrowRight,
  Clock,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/ui/Navbar";
import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";


const AboutUs = () => {

  
        useEffect(()=>{
          (async function () {
          const cal = await getCalApi({"namespace":"15min"});
          cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
          })();
        }, [])

        const getSignInUrl = () => {
          return process.env.CUSTOM_SIGN_URL || "https://exporteese.vercel.app/";
        };

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      
      {/* Hero Section with Angled Gradient */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 -skew-y-6 origin-top-right transform-gpu -translate-y-36 md:-translate-y-64 z-0"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Business Excellence <br />
                <span className="text-secondary">Since 2004</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl">
                Exportseese delivers expert consulting services for companies 
                navigating the complexities of international trade.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group">
                  Our Services
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                </Link>
                <Link href="/contact">
                <Button size="lg" variant="destructive" className=" text-secondary-foreground hover:bg-secondary/90 group">
                 Contact Us
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
      <div className="absolute -inset-2 bg-secondary/30 blur-3xl rounded-full"></div>
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl">
        <div className="flex items-center mb-6">
          <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
          <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
        </div>
        <div className="space-y-5">
          <div className="h-10 bg-white/20 rounded-md w-full flex items-center justify-center text-white font-bold text-xl">
            Global Import & Export Solutions
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 bg-white/20 rounded-md flex items-center justify-center overflow-hidden shadow-md">
              <img src="https://i.pinimg.com/736x/aa/5a/9a/aa5a9a523f49ad0ddcf0ae613b32a476.jpg" alt="Import Export" className="h-full w-full object-cover" />
            </div>
            <div className="h-32 bg-white/20 rounded-md flex items-center justify-center overflow-hidden shadow-md">
              <img src="https://i.pinimg.com/736x/f3/ca/c5/f3cac5aca87b0b2fb27c6771603a395d.jpg" alt="Import Export" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="h-14 bg-secondary/40 rounded-md w-3/4 flex items-center justify-center text-white font-semibold text-lg shadow-md">
            Reliable, Fast & Cost-Effective
          </div>
          <div className="h-10 bg-yellow-400/70 rounded-md w-5/6 flex items-center justify-center text-white text-sm shadow-sm">
            Seamless customs clearance & documentation
          </div>
          <div className="h-10 bg-blue-400/70 rounded-md w-4/6 flex items-center justify-center text-white text-sm shadow-sm">
            Competitive pricing with global reach
          </div>
        </div>
        <div className="absolute -bottom-8 -right-8 h-28 w-28 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg">
          EST.<br />2004
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>

      {/* About Section with Curved Design */}
      <section id="about" className="py-24 bg-background relative overflow-hidden px-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h6 className="text-sm uppercase tracking-wider text-primary mb-3 font-semibold">Our Story</h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Over Two Decades of Excellence
            </h2>
            <div className="h-1 w-20 dark:bg-blue-500 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg mb-6 text-foreground/80">
                Exportseese (Eternal e services) was established in 2004 with a vision to provide comprehensive 
                business consulting services to companies involved in the import and export of goods and services.
              </p>
              <p className="text-lg mb-6 text-foreground/80">
                For nearly two decades, we have been a trusted partner to businesses worldwide, helping them 
                navigate the complexities of international trade, regulatory compliance, and global supply chain management.
              </p>
              <p className="text-lg text-foreground/80">
                Our team of experts brings together diverse skillsets across customs regulations, freight logistics, 
                finance, technology, human resources, and international business development to provide holistic 
                solutions that drive our clients' success.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-xl"></div>
                <div className="relative space-y-6">
                  {[
                    { year: 2004, text: "Founded as a small consulting firm focused on export documentation" },
                    { year: 2008, text: "Expanded services to include freight forwarding and logistics" },
                    { year: 2012, text: "Opened international offices to better serve global clients" },
                    { year: 2016, text: "Integrated technology solutions to streamline export-import processes" },
                    { year: 2020, text: "Launched comprehensive digital platform for international trade" },
                    { year: "Today", text: "Trusted partner to hundreds of businesses across the globe" }
                  ].map((item, index) => (
                    <div key={index} className="flex group cursor-default">
                      <div className="mr-4 flex flex-col items-center">
                        <div className=" rounded-full bg-yellow-300 dark:bg-blue-500 flex items-center justify-center text-secondary-foreground font-bold group-hover:scale-110 transition-transform">
                          <Clock className="h-10 w-10 p-2" />
                        </div>
                        {index !== 5 && <div className="h-full w-0.5 dark:bg-yellow-300 bg-blue-500"></div>}
                      </div>
                      <div className="pb-6">
                        <div className="text-xl font-bold text-primary">{item.year}</div>
                        <p className="text-foreground/70">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Grid Layout and Hover Effects */}
      <section id="services" className="py-24 bg-muted relative">
        <div className="absolute top-0 inset-x-0 h-24 bg-background" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'}}></div>
        <div className="container mx-auto px-4 pt-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h6 className="text-sm uppercase tracking-wider text-primary mb-3 font-semibold">What We Offer</h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Comprehensive Services
            </h2>
            <div className="h-1 w-20 dark:bg-blue-500 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Briefcase className="h-12 w-12 dark:text-blue-500 text-yellow-400" />, 
                title: "Custom Documentation Support", 
                description: "Expert assistance with customs clearance, documentation, and regulatory compliance for smooth movement of goods across borders."
              },
              { 
                icon: <Globe className="h-12 w-12 dark:text-blue-500 text-yellow-400" />, 
                title: "Freight Forwarding", 
                description: "Comprehensive logistics solutions including air, sea, and land transportation, warehousing, and distribution services."
              },
              { 
                icon: <BarChart className="h-12 w-12 dark:text-blue-500 text-yellow-400" />, 
                title: "Accounting & Finance", 
                description: "Financial advisory services including trade finance, currency risk management, and accounting for international businesses."
              },
              { 
                icon: <Shield className="h-12 w-12 dark:text-blue-500 text-yellow-400" />, 
                title: "Technology Solutions", 
                description: "Digital transformation services and technology solutions to optimize and automate export-import operations."
              },
              { 
                icon: <Users className="h-12 w-12 dark:text-blue-500 text-yellow-400" />, 
                title: "HR Consulting", 
                description: "Human resource management solutions for international businesses, including talent acquisition and development."
              },
              { 
                icon: <TrendingUp className="h-12 w-12 dark:text-blue-500 text-yellow-400" />, 
                title: "Business Development", 
                description: "Strategic guidance for international market entry, partner identification, and business growth in global markets."
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card border-none overflow-hidden group hover:shadow-lg transition-all">
                <div className="h-1 dark:bg-blue-500 bg-yellow-400 w-full group-hover:h-2 transition-all"></div>
                <div className="p-8">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                  <Link href={getSignInUrl()} className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-background" style={{clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'}}></div>
      </section>

      {/* Expertise Section with Alternating Layout */}
      <section id="expertise" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h6 className="text-sm uppercase tracking-wider text-primary mb-3 font-semibold">Why Choose Us</h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Specialized Expertise
            </h2>
            <div className="h-1 w-20 dark:bg-blue-500 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: "Custom Documentation Support",
                    description: "Our team includes certified customs brokers with decades of experience in handling complex customs procedures and documentation."
                  },
                  {
                    title: "Freight Forwarding",
                    description: "We have built a global network of logistics partners to ensure efficient movement of goods across all major trade routes."
                  },
                  {
                    title: "Financial Management",
                    description: "Our finance team specializes in international trade finance, tax compliance, and foreign exchange risk management."
                  },
                  {
                    title: "Technology Integration",
                    description: "We leverage cutting-edge technologies to automate and streamline international trade operations for our clients."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="mt-1 mr-4 h-6 w-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="overflow-hidden bg-primary/5 border-none shadow-md">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Why Choose Us?</h3>
                  <div className="space-y-6">
                    {[
                      { icon: <Award className="h-8 w-8 dark:text-blue-500 text-yellow-400" />, text: "Nearly two decades of industry experience" },
                      { icon: <Users className="h-8 w-8 dark:text-blue-500 text-yellow-400" />, text: "Diverse team of specialized experts" },
                      { icon: <Globe className="h-8 w-8 dark:text-blue-500 text-yellow-400" />, text: "Global presence and local knowledge" },
                      { icon: <TrendingUp className="h-8 w-8 dark:text-blue-500 text-yellow-400" />, text: "Proven track record of client success" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-4 rounded-lg bg-background/50 hover:bg-background transition-colors">
                        <div className="mr-4">{item.icon}</div>
                        <p className="font-medium text-foreground">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Card Design */}
      <section id="contact" className="py-24 bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-24 bg-background" style={{clipPath: 'polygon(0 0, 50% 100%, 100% 0, 0 0)'}}></div>
        <div className="container mx-auto px-4 relative">
          <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-primary-foreground to-primary-foreground/90">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Get in Touch</h2>
                <p className="text-primary/80 mb-8">
                  Ready to navigate the complexities of global trade? Contact our expert team today.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-secondary mr-4 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Our Address</h4>
                      <p className="text-primary/70">B-217,218,219,Logix Technova, Sec-132, Noida-201301</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-secondary mr-4 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email Us</h4>
                      <p className="text-primary/70"> hello@exportseese.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-secondary mr-4 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Call Us</h4>
                      <p className="text-primary/70">+91 9220452221</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to Grow?</h2>
                <p className="text-white/80 mb-8">
                  Discover how Exportseese can help your business thrive in the global marketplace.
                </p>
               
                <Button 
      // onClick={() => setIsContactModalOpen(true)}
      data-cal-namespace="15min"
	  data-cal-link="kanishkkb18/15min"
    data-cal-config='{"layout":"month_view"}'
      className="bg-yellow-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg"
    >
       Schedule a Consultation
    </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
