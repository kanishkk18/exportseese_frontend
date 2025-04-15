import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import  Link  from "next/link";
import { ModeToggle } from "./theme-toggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      document.body.style.overflow = "hidden";
      document.addEventListener("click", closeMenu);
      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("click", closeMenu);
      };
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Plans" },
    { href: "/aboutUs", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "#", label: "Logistics" },
    { href: "/contact", label: "Contact Us" },
  ];

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  const getSignInUrl = () => {
    return process.env.CUSTOM_SIGN_URL || "https://exportsee.vercel.app/";
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <div className="bg-blue-500 py-3 px-4 md:flex space-y-2 justify-center text-center md:justify-between items-center w-full gap-4">
              {/* Left Section */}
              <p className='text-md text-white font-semibold'>
                Consultant | Buying House | Logistics
              </p>
            
              {/* Center Contact Section */}
              <div className="md:flex justify-center gap-4 font-bold">
                <a 
                  href="tel:+919220452221" 
                  className="text-white font-bold hover:underline"
                >
                  +91 92204 52221
                </a>
                |
                <a 
                  href="mailto:hello@exportseese.com" 
                  className="text-white font-bold hover:underline"
                >
                  hello@exportseese.com
                </a>
              </div>
            
              {/* Right Social Links */}
              <div className="flex justify-center gap-4">
                <a href="https://www.youtube.com/@exportseese" className="text-white hover:text-blue-200 transition-colors">
                  <BsYoutube className='h-6 w-6' />
                </a>
                <a href="https://www.instagram.com/exportseese/" className="text-white hover:text-blue-200 transition-colors">
                  <BsInstagram className='h-5 w-5' />
                </a>
                <a href="https://www.linkedin.com/in/exports-eese-595a6235b/" className="text-white hover:text-blue-200 transition-colors">
                  <BsLinkedin className='h-5 w-5' />
                </a>
                <a href="https://www.facebook.com/exportseese" className="text-white hover:text-blue-200 transition-colors">
                  <FaFacebook className='h-5 w-5' />
                </a>
                <a href="https://x.com/exportseese" className="text-white hover:text-blue-200 transition-colors">
                  <BsTwitter className='h-5 w-5' />
                </a>
              </div>
            </div>
    <nav
      className={` left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 text-black dark:text-white"
          : "bg-transparent py-5 "
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="inline-block">
            <img
              src="https://res.cloudinary.com/dna3hwzre/image/upload/v1741499065/473408572_1590238345196986_2661325784945347044_n_ii9ax7.jpg"
              className="h-10 w-10 md:h-14 md:w-14 rounded-md object-cover shadow-md transition-transform duration-300 hover:scale-105"
              alt="Logo"
              loading="eager"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 lg:space-x-2 items-center ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link px-3 ${
                activeLink === link.href
                  ? "text-primary font-semibold"
                  : " hover:text-primary"
              }`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="ml-2">
            <ModeToggle />
          </div>
          
          <Link
              href={getSignInUrl()} 
            className="premium-button ml-2 px-10"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden z-50 p-2"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground animate-fade-in" />
          ) : (
            <Menu className="h-6 w-6 text-foreground animate-fade-in" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center
          transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center space-y-8 w-full px-12">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-menu-link text-2xl font-medium 
                ${isMenuOpen ? `animate-slide-in [animation-delay:${index * 50}ms]` : ""}
                ${activeLink === link.href ? "text-primary" : ""}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4">
              <ModeToggle />
            </div>
            
            <Link
              
              href={getSignInUrl()} 
              className="premium-button mt-6 py-3 px-10 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
