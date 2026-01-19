import {
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => (
  <footer className='bg-brand-dark text-slate-300 py-12'>
    <div className='max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8'>
      <div>
        <h4 className='text-white font-bold text-lg mb-4'>
          FindMeAnInternship
        </h4>
        <p className='text-sm leading-relaxed mb-4'>
          Bridging the gap between ambitious students and forward-thinking
          organizations.
        </p>
        <div className='flex gap-4'>
          {/* <Facebook className='w-5 h-5 hover:text-brand-teal cursor-pointer' /> */}
          <a
            href='https://x.com/TheInternPost_'
            className='border-none no-underline'
            target='blank'
          >
            <Twitter className='w-5 h-5 hover:text-brand-teal cursor-pointer' />
          </a>
          <a
            href='https://wa.me/message/GQMOHAWMJBM6H1'
            className='border-none no-underline'
            target='blank'
          >
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            <FaWhatsapp className='w-5 h-5 hover:text-brand-teal cursor-pointer' />
          </a>
          <a
            href='http://www.linkedin.com/in/findmeaninternship'
            className='border-none no-underline'
            target='blank'
          >
            <Linkedin className='w-5 h-5 hover:text-brand-teal cursor-pointer' />
          </a>
          <a
            href='https://www.tiktok.com/@theinternpost_ng0'
            className='border-none no-underline'
            target='blank'
          >
            <FaTiktok className='w-5 h-5 hover:text-brand-teal cursor-pointer' />
          </a>
          {/* <Instagram className='w-5 h-5 hover:text-brand-teal cursor-pointer' /> */}
        </div>
      </div>

      <div>
        <h4 className='text-white font-bold mb-4'>Quick Links</h4>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link to='/' className='hover:text-brand-teal'>
              Home
            </Link>
          </li>
          {/* <li>
            <Link to='/impact' className='hover:text-brand-teal'>
              Our Impact
            </Link>
          </li> */}
          <li>
            <Link to='/jobs' className='hover:text-brand-teal'>
              Browse Internships
            </Link>
          </li>
          <li>
            <Link to='/resources' className='hover:text-brand-teal'>
              Resources
            </Link>
          </li>
        </ul>
      </div>

      {/* <div>
        <h4 className='text-white font-bold mb-4'>Resources</h4>
        <ul className='space-y-2 text-sm'>
          <li className='hover:text-brand-teal cursor-pointer'>
            Student Toolkit
          </li>
          <li className='hover:text-brand-teal cursor-pointer'>
            Employer Guide
          </li>
          <li className='hover:text-brand-teal cursor-pointer'>
            Resume Builder
          </li>
        </ul>
      </div> */}

      <div>
        <h4 className='text-white font-bold mb-4'>Contact</h4>
        <div className='flex items-center gap-2 text-sm mb-2'>
          <Mail className='w-4 h-4' />
          <span>info@findmeaninternship.com</span>
        </div>
        {/* <div className='flex items-center gap-2 text-sm'>
          <MapPin className='w-4 h-4' />
          <span>123 Opportunity Blvd, Tech City</span>
        </div> */}
      </div>
    </div>
    <div className='max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-700 text-center text-xs'>
      © 2026 Find Me an Internship. All rights reserved.
    </div>
  </footer>
);

export default Footer;
