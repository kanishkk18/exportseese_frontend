"use client"

import { useEffect, useState } from "react";
import { blogPosts } from "../../data/blogPost";
import Hero from "../../components/ui/blogHero";
import FeaturedPosts from "../../components/ui/FeaturedPosts";
import RecentPosts from "../../components/ui/RecentPosts";
import Footer from "../../components/ui/footer";
import {Navbar} from "../../components/ui/Navbar"
import {Ripple} from "../../components/ui/ripple"

const Index = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getSignInUrl = () => {
    return process.env.CUSTOM_SIGN_URL || "/https://exporteese.vercel.app/";
  };


  return (
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <div className="relative flex h-[500px] py-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Hero />
      <Ripple/>
    </div>
    
      <FeaturedPosts posts={blogPosts} />
      {/* <RecentPosts posts={blogPosts} /> */}
     <Footer/>
    </div>
  );
};

export default Index;
