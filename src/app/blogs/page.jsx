"use client"

import { useEffect, useState } from "react";
import { blogPosts } from "../../data/blogPost";
import Hero from "../../components/ui/blogHero";
import FeaturedPosts from "../../components/ui/FeaturedPosts";
// import RecentPosts from "../../components/ui/RecentPosts";
import Footer from "../../components/ui/footer";
import {Navbar} from "../../components/ui/Navbar"
import {Ripple} from "../../components/ui/ripple"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Index = () => {
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="min-h-screen flex flex-col md:pt-16">
    <Navbar/>
    <div className="relative flex h-[700px]  md:h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
       <section className="py-20 ">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Welcome to <span className="text-blue-600">ExpoBlog</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                "Discover the latest insights, strategies, and best practices in export-import consultancy. Written by experts, for businesses looking to expand globally."
                </p>
                <div className="flex justify-center space-x-4">
                <Button
  variant="default"
  className="text-white px-8 py-4 rounded-lg hover:bg-blog-darkPurple transition-colors"
  onClick={() => document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" })}
>
  Explore Articles
</Button>
                 <a href={process.env.YOUTUBE_CHANNEL}>
                  <Button 
  variant="outline"
>
  Visit YouTube Channel
</Button>
</a>
                </div>
              </div>
            </section>
          
      <Ripple/>
    </div>
    
    <div id="blogs">
  <FeaturedPosts posts={blogPosts} />
</div>
      {/* <RecentPosts posts={blogPosts} /> */}
     <Footer/>
    </div>
  );
};

export default Index;
