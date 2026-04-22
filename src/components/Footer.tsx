import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import Link from "next/link";
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
        </div>
      </div>

      <div>
        <h4 className='text-white font-bold mb-4'>Quick Links</h4>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/' className='hover:text-brand-teal'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/jobs' className='hover:text-brand-teal'>
              Browse Internships
            </Link>
          </li>
          <li>
            <Link href='/resources' className='hover:text-brand-teal'>
              Resources
            </Link>
          </li>
          <li>
            <Link href='/involved#volunteer' className='hover:text-brand-teal'>
              Volunteer
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className='text-white font-bold mb-4'>Contact</h4>
        <div className='flex items-center gap-2 text-sm mb-2'>
          <Mail className='w-4 h-4' />
          <span>info@findmeaninternship.com</span>
        </div>
      </div>
    </div>
    <div className='max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-700 text-center text-xs'>
      © 2026 Find Me an Internship. All rights reserved.
    </div>
  </footer>
);

export default Footer;
