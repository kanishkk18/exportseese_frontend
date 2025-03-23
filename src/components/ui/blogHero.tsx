import Link from "next/link";
import { Button } from "./button";

const Hero = () => {
    return (
      <section className="py-20 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <span className="text-blue-600">ExpoBlog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          "Discover the latest insights, strategies, and best practices in export-import consultancy. Written by experts, for businesses looking to expand globally."
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#blogs">
            <Button variant="default" className=" text-white px-8 py-4 rounded-lg hover:bg-blog-darkPurple transition-colors">
              Explore Articles
            </Button>
            </Link>
            <Button variant="outline" className="text-blog-purple border border-blog-purple px-6 py-3 rounded-lg hover:bg-blog-lightGray transition-colors">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  