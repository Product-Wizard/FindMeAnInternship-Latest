import { useState } from "react";
import { GraduationCap, Building2, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import Logo from "@/assets/logo.png";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const NavItem = ({ to, label }: { to: string; label: string }) => {
    const isActive =
      location.pathname === to ||
      (to !== "/" && location.pathname.startsWith(to));
    return (
      <Link
        to={to}
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium transition-colors ${
          isActive
            ? "text-brand-teal font-bold"
            : "text-slate-600 hover:text-brand-teal"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className='sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* <div className='w-screen mx-auto overflow-hidden px-4 sm:px-6 lg:px-8'> */}
        <div className='flex justify-between h-20 items-center'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2 group'>
            <div className='relative w-10 h-10 flex items-center justify-center bg-brand-teal/10 rounded-lg group-hover:bg-brand-teal/20 transition-colors'>
              <GraduationCap className='w-6 h-6 text-brand-dark absolute -top-1 -left-1' />
              <Building2 className='w-6 h-6 text-brand-teal absolute bottom-0 right-0' />
            </div>
            <div className='flex flex-col items-start leading-none'>
              <span className='font-bold text-brand-dark text-lg tracking-tight'>
                FindMeAn
              </span>
              <span className='font-bold text-brand-teal text-lg tracking-tight'>
                Internship
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className='hide show-nav-bar gap-8 items-center'>
            <NavItem to='/' label='Home' />
            {/* <NavItem to='/impact' label='Our Impact' /> */}
            <NavItem to='/jobs' label='Find Opportunities' />
            <NavItem to='/resources' label='Resources & Blog' />
            <Link
              to='/involved'
              className='bg-brand-dark hover:bg-brand-teal text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md'
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='text-slate-600 p-2'
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white border-b border-slate-200 p-4 space-y-4 flex flex-col'>
          <NavItem to='/' label='Home' />
          {/* <NavItem to='/impact' label='Our Impact' /> */}
          <NavItem to='/jobs' label='Find Opportunities' />
          <NavItem to='/resources' label='Resources & Blog' />
          <NavItem to='/involved' label='Get Involved' />
        </div>
      )}
    </nav>
  );
};
export default Navbar;
