import { useState } from 'react';
import {  ChevronDown, ArrowRight, Mail } from 'lucide-react';
import { BsTelephone } from 'react-icons/bs';
import { FaAddressBook } from 'react-icons/fa';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PrivacyPolicy from './privacypolicy';
import  Link  from "next/link";
import RefundPolicy from './refundPolicy';
import Terms from "./terms"


function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: 'Trust & Profit',
      content:
        'Exportseese believe in building trust through transparent communication among parties and regular updates on latest developments on every stage of business. Increase in trust brings repeat orders by customers resulting in more profits. Exportseese through its multi-dimensional advertising and marketing campaigns create new business opportunities for sellers helping them in finding new customers. ',
    },
    {
      title: 'Regulatory Compliance Navigation',
      content:
        'Exportseese with its team of experts actively manage compliance by adhering to all relevant laws, regulations and industry standards required for free export import business.  ',
    },
    {
      title: 'Risk Mitigation',
      content:
        'Exporteeese by assessing potential compliance risks and prioritizing areas requiring attention, implements necessary controls and risk mitigation mechanism to to reduce or eliminate those risks.',
    },
    {
      title: 'Cost Optimization',
      content:
        'Exportseese supports customers in identifying areas of unnecessary spending by analyzing expenditure patterns, vendor management and implementing strategies to reduce costs, improve processes while maintaining quality and operational efficiency. ',
    },
    {
      title: 'Trade Agreements & Documentation',
      content:
        'Exportseese understand the benefits of right trade agreements with complete document support to make import-export business and cost effective for longer business relationships. ',
    },
    {
      title: 'Manpower & Supply Chain Management',
      content:
        'Exportseese specialize in providing efficient processes for managing manpower engaged in complex supply chain management of international export import deal starting from point of origin to final destination through sea route  or airways. ',
    },
    {
      title: 'Government Schemes & Export Fundings ',
      content:
        'Exportseese keeps updating customers on latest schemes offered by various governments to promote export import business in multiple countries on regular basis. Since Funding has always been a challenge in such a huge volume transaction thus Exportseese provides banking-LC support and various channel network to exporters to avail funds required for delivery of orders. ',
    },
   
  ];

  const getSignInUrl = () => {
    return process.env.CUSTOM_SIGN_URL || "https://exporteese.vercel.app/";
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
    <div className="min-h-[70vh] bg-transparent p-6 lg:p-12">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Frequently asked questions
            </h1>
            <p className="text-lg text-muted-foreground pb-6">
              Contact us via support if you have any more questions.
            </p>
            <Link href="/contact"  className=" bg-blue-500 p-2 rounded-xl">
              Contact us
            </Link>
          </div>
          <div className="">
            {items.map((item, index) => (
              <div key={index} className="w-full my-3">
              <button
                onClick={() => toggleAccordion(index)}
               className="[box-shadow:0_-10px_40px_-15px_rgba(0,0,0,0.05)_inset] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] darK:[border:1px_solid_rgba(255,255,255,.1)]   rounded-xl py-4 px-6 flex justify-between items-center w-full"
                aria-expanded={openIndex === index}
                aria-controls={`content-${index}`}
              >
                <span className="text-black dark:text-white text-start font-medium">
                  {item.title}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`content-${index}`}
                role="region"
                aria-labelledby={`heading-${index}`}
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-4 py-3 text-gray-600 dark:text-gray-300">
                  {item.content}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <section className="container px-2 mx-auto  text-center">
        <div className="bg-gradient-to-r from-blue-900 via-red-500 to-purple-900 rounded-t-3xl md:p-12 py-16 -z-10">
          
      {/* Footer */}
      <footer className="container  mx-auto px-4 py-12 rounded-2xl  bg-black/35">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
  {/* Brand Section */}
  <div className=''>

  <div className="flex items-center text-center pb-2 gap-2">
   <Link href="/" className="inline-block">
               <img
                 src="https://res.cloudinary.com/dna3hwzre/image/upload/v1741499065/473408572_1590238345196986_2661325784945347044_n_ii9ax7.jpg"
                 className="h-10 w-10 md:h-12 md:w-12 rounded-md object-cover shadow-md transition-transform duration-300 hover:scale-105"
                 alt="Logo"
                 loading="eager"
               />
             </Link>
    <h3 className="text-xl font-bold text-start text-white">Exportseese</h3>
    </div>
    <p className="text-gray-400 text-sm text-start">
      Explore modern way of exporting importing consultancy
    </p>
  </div>

  <div>
    <h3 className="text-xl text-white font-bold mb-4 text-start">Export-Import Associations</h3>
    <ul className="space-y-2 text-start text-sm text-white">
      <li><a href="https://www.indianimporterschambers.com/" className="hover:text-white transition-colors">Indian Importers Chambers</a></li>
      <li><a href="https://fieo.org/" className="hover:text-white transition-colors">Federation of Indian Export Organisations</a></li>
      <li><a href="https://www.iiaonline.in/importcommittee.aspx" className="hover:text-white transition-colors">Indian Industries Association</a></li>
      <li><a href="https://www.aiechamber.org/" className="hover:text-white transition-colors">All India Export Chamber</a></li>
      <li><a href="https://www.indiantradeportal.in/" className="hover:text-white transition-colors">Indian Trade Portal</a></li>
    </ul>
  </div>

  {/* Export-Import Authorities */}
  <div>
    <h3 className="text-xl text-white font-bold mb-4 text-start">Export-Import Authorities</h3>
    <ul className="space-y-2 text-start text-sm text-white">
      <li><a href="https://www.commerce.gov.in/" className="hover:text-white transition-colors">Ministry of Commerce & Trade</a></li>
      <li><a href="http://www.icegate.gov.in" className="hover:text-white transition-colors">Ministry of Finance</a></li>
      <li><a href="https://www.dgft.gov.in/cp/" className="hover:text-white transition-colors">Directorate General of Foreign Trade</a></li>
      <li><a href="https://niryat.gov.in/" className="hover:text-white transition-colors">NIRYAT</a></li>
      <li><a href="http://www.cbic.gov.in" className="hover:text-white transition-colors">CBIC</a></li>
      <li><a href="https://ppqs.gov.in/" className="hover:text-white transition-colors">Directorate of Plant Protection</a></li>
    </ul>
  </div>

  {/* Export Import Software */}
  <div>
    <h3 className="text-xl text-white font-bold mb-4 text-start">Export Import Software</h3>
    <ul className="space-y-2 text-start text-sm text-white" >
      <li><a href="http://www.softproapplication.com" className="hover:text-white transition-colors">Export EMS</a></li>
      <li><a href="https://www.expodite.in/" className="hover:text-white transition-colors">Expodite</a></li>
      <li><a href="https://www.bluelinkerp.com/" className="hover:text-white transition-colors">Blue Link ERP</a></li>
      <li><a href="https://viscosoftware.com/" className="hover:text-white transition-colors">VISCO</a></li>
      <li><a href="https://acctivate.com/" className="hover:text-white transition-colors">Acctivate</a></li>
      <li><a href="https://www.e2open.com/global-trade/" className="hover:text-white transition-colors">E2open's GTM</a></li>
    </ul>
  </div>

  {/* Top Custom House Agents */}
  <div>
    <h3 className="text-xl text-white font-bold mb-4 text-start">Top Custom House Agents</h3>
    <ul className="space-y-2 text-start text-sm text-white">
      <li><a href="https://continentalgroup.com/" className="hover:text-white transition-colors">Continental Carriers</a></li>
      <li><a href="https://falconfreight.com/contact/" className="hover:text-white transition-colors">Falcon 18 Imports</a></li>
      <li><a href="https://henkologistics.com/" className="hover:text-white transition-colors">Henko Logistics</a></li>
      <li><a href="https://seaironline.com/" className="hover:text-white transition-colors">Seair Logistics</a></li>
      <li><a href="https://svarvex.com/" className="hover:text-white transition-colors">Svarvex Logistics</a></li>
      <li><a href="https://www.awlindia.com/" className="hover:text-white transition-colors">AWL India</a></li>
    </ul>
  </div>
</div>

        <div className=" border-t border-gray-600 mt-8 text-start pt-8 md:flex md:flex-col justify-center items-center gap-2">
          <h1 className='font-bold text-2xl text-white'>News and updates</h1>
          <p className='text-white pb-1 font-semibold'>Sign up to the Design Engineers Weekly newsletter</p>
          <form action="" className='space-x-2 md:flex justify-center gap-2 items-center'>
          <input type="email" placeholder='Email ' className='rounded-xl border border-neutral-700 p-2 md:pe-16 bg-black/20'/>
          <Link  href={getSignInUrl()}  className="bg-white  text-black hover:bg-gray-100 px-2  py-2 rounded-xl text-md font-medium inline-flex items-center gap-2 transition-all hover:gap-3">
                     Sign Up <ArrowRight size={20} />
                   </Link>
        </form>
        </div>
      </footer>

      <div className=" mx-auto mt-2 px-4 py-4 rounded-2xl space-y-2 bg-black/35 md:flex justify-between items-center text-center">
     <p className='flex justify-center items-center gap-2 text-gray-300 text-sm '><BsTelephone  className='text-white text-lg'/> Mobile-9220452221</p>
    <p className='flex justify-center items-center gap-2 text-gray-300 text-sm '><FaAddressBook className='text-white md:h-6 md:w-6 h-10 w-10'/> ETERNAL E SERVICES-
      162, KONARK APPARTMENT, POCKET-4, KALKAJI EXTENSION, DELHI-110019</p> 
     <p className='flex justify-center items-center gap-2 text-gray-300 text-sm '><Mail className='text-white text-sm'/> Email- hello@exportseese.com</p>
      </div>

<div className="md:flex justify-between items-center mt-2">
      <Dialog>
      <DialogTrigger asChild>
      <DialogTitle>Terms & Conditions</DialogTitle>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[80vw] max-h-[90vh] overflow-auto">
      <DialogTitle></DialogTitle>
        <Terms/>
      </DialogContent>
    </Dialog>

 <div className="font-semi-bold md:flex text-center gap-2 justify-center items-center py-4"> <p> ETERNAL-E-SERVICES All Rights Reserved &copy; 2025</p>
      <Dialog>
      <DialogTrigger asChild>
      <DialogTitle>Privacy Policy</DialogTitle>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[80vw] max-h-[90vh] overflow-auto">
      <DialogTitle></DialogTitle>
        <PrivacyPolicy/>
      </DialogContent>
    </Dialog>

    
    </div><Dialog>
      <DialogTrigger asChild>
      <DialogTitle>Refund Policy</DialogTitle>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[80vw] max-h-[90vh] overflow-auto">
      <DialogTitle></DialogTitle>
        <RefundPolicy/>
      </DialogContent>
    </Dialog>
      </div>
      </div>
      
      </section>
    </div>
  );
}

export default Footer;