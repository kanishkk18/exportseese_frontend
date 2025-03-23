import React from 'react';
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import Link from "next/link";

const TopNavbar = () => {
    return (
        <div className="bg-blue-500 py-3 px-4 md:flex space-y-2 justify-center text-center md:justify-between items-center w-full gap-4">
        {/* Left Section */}
        <p className='text-md text-white font-semibold'>
          Consultancy | Logistics
        </p>
      
        {/* Center Contact Section */}
        <div className="md:flex justify-center gap-4">
          <a 
            href="tel:+919220452221" 
            className="text-white font-medium hover:underline"
          >
            +91 92204 52221
          </a>
          |
          <a 
            href="mailto:hello@exportseese.com" 
            className="text-white font-medium hover:underline"
          >
            hello@exportseese.com
          </a>
        </div>
      
        {/* Right Social Links */}
        <div className="flex justify-center gap-4">
          <Link href="#" className="text-white hover:text-blue-200 transition-colors">
            <BsYoutube className='h-6 w-6' />
          </Link>
          <Link href="#" className="text-white hover:text-blue-200 transition-colors">
            <BsInstagram className='h-5 w-5' />
          </Link>
          <Link href="#" className="text-white hover:text-blue-200 transition-colors">
            <BsLinkedin className='h-5 w-5' />
          </Link>
          <Link href="#" className="text-white hover:text-blue-200 transition-colors">
            <FaFacebook className='h-5 w-5' />
          </Link>
          <Link href="#" className="text-white hover:text-blue-200 transition-colors">
            <BsTwitter className='h-5 w-5' />
          </Link>
        </div>
      </div>
    );
};

export default TopNavbar;