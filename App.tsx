import React, { useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, Building2, Briefcase, Users, ArrowRight, 
  Search, MapPin, CheckCircle2, HeartHandshake, TrendingUp,
  Menu, X, Facebook, Twitter, Linkedin, Instagram, Mail,
  Globe, Home, Laptop
} from 'lucide-react';
import { Job } from './types';
import { PlacementsChart, DiversityChart } from './components/ImpactCharts';
import { AICareerCoach } from './components/AICareerCoach';
import { JobSlider } from './components/JobSlider';
import { ResourcesPage } from './components/ResourcesPage';

// --- Components ---

// Navbar
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const NavItem = ({ to, label }: { to: string, label: string }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link
        to={to}
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium transition-colors ${
          isActive ? 'text-brand-teal font-bold' : 'text-slate-600 hover:text-brand-teal'
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-brand-teal/10 rounded-lg group-hover:bg-brand-teal/20 transition-colors">
              <GraduationCap className="w-6 h-6 text-brand-dark absolute -top-1 -left-1" />
              <Building2 className="w-6 h-6 text-brand-teal absolute bottom-0 right-0" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-bold text-brand-dark text-lg tracking-tight">FindMeAn</span>
              <span className="font-bold text-brand-teal text-lg tracking-tight">Internship</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <NavItem to="/" label="Home" />
            <NavItem to="/impact" label="Our Impact" />
            <NavItem to="/jobs" label="Find Opportunities" />
            <NavItem to="/resources" label="Resources & Blog" />
            <Link
              to="/involved"
              className="bg-brand-dark hover:bg-brand-teal text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 p-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4 flex flex-col">
          <NavItem to="/" label="Home" />
          <NavItem to="/impact" label="Our Impact" />
          <NavItem to="/jobs" label="Find Opportunities" />
          <NavItem to="/resources" label="Resources & Blog" />
          <NavItem to="/involved" label="Get Involved" />
        </div>
      )}
    </nav>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-brand-dark text-slate-300 py-12">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
      <div>
        <h4 className="text-white font-bold text-lg mb-4">FindMeAnInternship</h4>
        <p className="text-sm leading-relaxed mb-4">
          Bridging the gap between ambitious students and forward-thinking organizations.
        </p>
        <div className="flex gap-4">
          <Facebook className="w-5 h-5 hover:text-brand-teal cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-brand-teal cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:text-brand-teal cursor-pointer" />
          <Instagram className="w-5 h-5 hover:text-brand-teal cursor-pointer" />
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="hover:text-brand-teal">Home</Link></li>
          <li><Link to="/impact" className="hover:text-brand-teal">Our Impact</Link></li>
          <li><Link to="/jobs" className="hover:text-brand-teal">Browse Jobs</Link></li>
          <li><Link to="/resources" className="hover:text-brand-teal">Resources</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Resources</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-brand-teal cursor-pointer">Student Toolkit</li>
          <li className="hover:text-brand-teal cursor-pointer">Employer Guide</li>
          <li className="hover:text-brand-teal cursor-pointer">Resume Builder</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <div className="flex items-center gap-2 text-sm mb-2">
          <Mail className="w-4 h-4" />
          <span>hello@findmeaninternship.org</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4" />
          <span>123 Opportunity Blvd, Tech City</span>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-700 text-center text-xs">
      © 2024 Find Me an Internship. All rights reserved.
    </div>
  </footer>
);

// --- Pages ---

// Home Page
const HomePage = () => (
  <div className="flex flex-col">
    {/* Problem Section (Hero) */}
    <section className="relative bg-brand-dark text-white pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 skew-x-12 translate-x-20"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Youth Unemployment is at 28%. Let's fix it.</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Talent is everywhere.<br />
            <span className="text-brand-teal">Opportunity</span> is not.
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
            We exist to break the "no experience, no job" cycle. We connect driven students with organizations ready to nurture the next generation of leaders.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/jobs"
              className="bg-brand-teal hover:bg-brand-light text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
            >
              Find an Internship <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/involved"
              className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all inline-block text-center"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Solution Section (Process) */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Bridging Education to Employment</h2>
          <p className="text-slate-600">Our platform simplifies the connection process, ensuring quality matches for both students and companies.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-8 h-8 text-brand-teal" />,
              title: "1. Discover",
              desc: "Students browse curated opportunities that match their field of study and career aspirations."
            },
            {
              icon: <CheckCircle2 className="w-8 h-8 text-brand-teal" />,
              title: "2. Verify",
              desc: "We vet both candidates and companies to ensure a safe, productive, and educational environment."
            },
            {
              icon: <HeartHandshake className="w-8 h-8 text-brand-teal" />,
              title: "3. Connect",
              desc: "Seamless application process and support throughout the internship duration."
            }
          ].map((step, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-brand-dark group-hover:scale-110 transition-transform">{i + 1}</div>
              <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Proof Section (Social Proof) */}
    <section className="py-24 bg-brand-dark/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Real Impact, Real Stories</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-600 italic mb-4">"I applied to 50 jobs with no luck. Find Me an Internship connected me with a mentor and a 3-month role that turned into a full-time offer."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold">JS</div>
                  <div>
                    <div className="font-bold text-brand-dark">Sarah Jenkins</div>
                    <div className="text-xs text-slate-500">Marketing Intern @ TechFlow</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-600 italic mb-4">"As a small NGO, finding passionate help is hard. This platform brought us three incredible students who revamped our entire outreach strategy."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white font-bold">DL</div>
                  <div>
                    <div className="font-bold text-brand-dark">David Lee</div>
                    <div className="text-xs text-slate-500">Director @ GreenEarth NGO</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/impact" className="text-brand-teal font-bold hover:underline flex items-center gap-2">
                See our full impact report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-brand-teal text-white p-8 rounded-2xl flex flex-col justify-center text-center">
                <span className="text-4xl font-bold mb-2">500+</span>
                <span className="text-brand-teal-100">Students Placed</span>
             </div>
             <div className="bg-white text-brand-dark p-8 rounded-2xl flex flex-col justify-center text-center shadow-sm">
                <span className="text-4xl font-bold mb-2">85%</span>
                <span className="text-slate-500">Employment Rate</span>
             </div>
             <div className="bg-white text-brand-dark p-8 rounded-2xl flex flex-col justify-center text-center shadow-sm">
                <span className="text-4xl font-bold mb-2">120+</span>
                <span className="text-slate-500">Partner Orgs</span>
             </div>
             <div className="bg-brand-accent text-brand-dark p-8 rounded-2xl flex flex-col justify-center text-center">
                <span className="text-4xl font-bold mb-2">50k</span>
                <span className="opacity-80">Training Hours</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Job Board
const JobBoard = () => {
  const [activeTab, setActiveTab] = useState<'local' | 'generic' | 'international'>('local');

  const jobs: Job[] = [
    // Local (Ibadan)
    { id: '101', title: 'Campus Ambassador', company: 'UI Tech Hub', location: 'Ibadan, Nigeria', type: 'On-site', category: 'Marketing', postedDate: '1 day ago', description: 'Represent our brand at the University of Ibadan campus events.' },
    { id: '102', title: 'React.js Intern', company: 'Bodija Software', location: 'Ibadan, Nigeria', type: 'On-site', category: 'Tech', postedDate: '2 days ago', description: 'Assist with frontend development in our Bodija office.' },
    { id: '103', title: 'Admin Assistant', company: 'Ibadan Logistics', location: 'Ibadan, Nigeria', type: 'On-site', category: 'Admin', postedDate: '5 days ago', description: 'Manage daily operations at our Ring Road facility.' },
    { id: '104', title: 'Research Aide', company: 'IITA', location: 'Ibadan, Nigeria', type: 'On-site', category: 'Research', postedDate: '1 week ago', description: 'Data collection and field analysis support.' },
    
    // International
    { id: '201', title: 'Summer Analyst', company: 'Goldman Sachs', location: 'London, UK', type: 'On-site', category: 'Finance', postedDate: '3 days ago', description: 'Global markets internship program for international students.' },
    { id: '202', title: 'UX Research Assistant', company: 'Spotify', location: 'Stockholm, Sweden', type: 'Hybrid', category: 'Design', postedDate: '5 days ago', description: 'Help us understand user behavior across European markets.' },
    { id: '203', title: 'Software Engineer Intern', company: 'Google', location: 'Munich, Germany', type: 'On-site', category: 'Tech', postedDate: '2 days ago', description: 'Work on privacy and security engineering tools.' },
    
    // Generic/Remote
    { id: '301', title: 'Content Writer', company: 'BuzzMedia', location: 'Remote', type: 'Remote', category: 'Marketing', postedDate: 'Just now', description: 'Write engaging blog posts for our diverse clientele.' },
    { id: '302', title: 'Virtual Assistant', company: 'Global Corp', location: 'Remote', type: 'Remote', category: 'Admin', postedDate: '1 week ago', description: 'Manage schedules and emails for executives worldwide.' },
    { id: '303', title: 'Graphic Designer', company: 'CreativeFlow', location: 'Remote', type: 'Remote', category: 'Design', postedDate: '4 days ago', description: 'Create social media assets and branding kits.' },
    { id: '1', title: 'Social Media Intern', company: 'GrowthLabs', location: 'Remote', type: 'Remote', category: 'Marketing', postedDate: '2 days ago', description: 'Manage our Instagram and LinkedIn pages.' },
    { id: '2', title: 'Junior Frontend Dev', company: 'WebSolutions', location: 'New York, NY', type: 'Hybrid', category: 'Tech', postedDate: '1 day ago', description: 'Assist with React component building.' },
  ];

  const getFilteredJobs = () => {
    switch (activeTab) {
      case 'local':
        return jobs.filter(job => job.location.includes('Ibadan'));
      case 'international':
        // Rudimentary check for international: Not Remote and Not Ibadan and Not Nigeria (unless explicitly Ibadan)
        // For this demo, I'll filter by specific cities or exclude Remote/Ibadan
        return jobs.filter(job => 
          !job.location.includes('Ibadan') && 
          job.type !== 'Remote' &&
          (job.location.includes('UK') || job.location.includes('Sweden') || job.location.includes('Germany') || job.location.includes('NY'))
        );
      case 'generic':
        return jobs.filter(job => job.type === 'Remote' || job.category === 'Generic');
      default:
        return jobs;
    }
  };

  const sliderJobs = getFilteredJobs();

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Find Your Path</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you are looking for a local placement in Ibadan, a remote gig, or an international adventure, we have opportunities for you.
          </p>
        </div>

        {/* --- Featured Opportunities Slider Section --- */}
        <section className="mb-16">
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex bg-white p-1 rounded-full border border-slate-200 shadow-sm">
              <button 
                onClick={() => setActiveTab('local')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'local' 
                    ? 'bg-brand-teal text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Home className="w-4 h-4" /> Local (Ibadan)
              </button>
              <button 
                onClick={() => setActiveTab('generic')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'generic' 
                    ? 'bg-brand-teal text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Laptop className="w-4 h-4" /> Remote / Generic
              </button>
              <button 
                onClick={() => setActiveTab('international')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'international' 
                    ? 'bg-brand-teal text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Globe className="w-4 h-4" /> International
              </button>
            </div>
          </div>

          <JobSlider jobs={sliderJobs} />
        </section>

        {/* --- Main Job List & Filters --- */}
        <div className="border-t border-slate-200 pt-12">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark">All Opportunities</h3>
              <p className="text-sm text-slate-500">Browse all {jobs.length} open positions</p>
            </div>
            {/* Simple Sort/Filter Mockup */}
            <select className="bg-white border border-slate-200 rounded-lg text-sm p-2 outline-none">
              <option>Most Recent</option>
              <option>Relevance</option>
            </select>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                  <Search className="w-4 h-4" /> Filters
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Location Type</label>
                    <div className="space-y-2">
                      {['Remote', 'Hybrid', 'On-site'].map(t => (
                        <label key={t} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                          <input type="checkbox" className="rounded text-brand-teal focus:ring-brand-teal" />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Category</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg text-sm p-2 focus:ring-2 focus:ring-brand-teal outline-none">
                      <option>All Categories</option>
                      <option>Technology</option>
                      <option>Marketing</option>
                      <option>Non-Profit</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-teal/5 p-6 rounded-xl border border-brand-teal/20">
                <h3 className="font-bold text-brand-dark mb-2">Need a Resume Check?</h3>
                <p className="text-sm text-slate-600 mb-4">Our AI Career Coach can review your resume tips instantly.</p>
                <div className="text-brand-teal text-sm font-bold flex items-center gap-1">
                  Use the chat button <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Job List */}
            <div className="lg:col-span-3 space-y-4">
              {jobs.map(job => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-brand-teal/50 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-teal transition-colors">{job.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Building2 className="w-3 h-3" /> {job.company}
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <MapPin className="w-3 h-3" /> {job.location}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${job.type === 'Remote' ? 'bg-purple-100 text-purple-700' : 
                        job.type === 'Hybrid' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                      {job.type}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{job.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                    <span className="text-xs text-slate-400">Posted {job.postedDate}</span>
                    <button className="text-sm font-bold text-brand-teal hover:text-brand-dark">Apply Now &rarr;</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Impact Page
const ImpactPage = () => (
  <div className="min-h-screen bg-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">Measuring Our Impact</h2>
        <p className="text-xl text-slate-600">We believe in transparency. Here is how we are changing lives through internships.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <PlacementsChart />
        <DiversityChart />
      </div>

      <div className="bg-brand-dark rounded-3xl p-12 text-white overflow-hidden relative">
         <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Beyond the Numbers</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Statistics tell part of the story, but the real impact is in the confidence gained, the networks built, and the generational barriers broken. We focus on underserved communities where one internship can change a family's trajectory.
              </p>
              <ul className="space-y-4">
                 {[
                   "Mentorship programs included with every internship",
                   "Soft-skills workshops provided weekly",
                   "Post-internship job search support"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                     <span>{item}</span>
                   </li>
                 ))}
              </ul>
            </div>
            <div className="h-full min-h-[300px] bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 flex flex-col justify-center">
               <blockquote className="text-xl italic mb-6">
                 "This program didn't just find me a job. It taught me how to navigate the corporate world and believe in my own value."
               </blockquote>
               <cite className="not-italic">
                 <div className="font-bold text-brand-teal">Marcus Johnson</div>
                 <div className="text-sm text-slate-400">Alumni, Class of 2023</div>
               </cite>
            </div>
         </div>
      </div>
    </div>
  </div>
);

// Get Involved Page
const GetInvolvedPage = () => (
  <div className="min-h-screen bg-slate-50 py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Join the Movement</h2>
        <p className="text-slate-600">Whether you are a student looking for a break or a company looking for talent, we need you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Student Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
            <GraduationCap className="w-6 h-6 text-brand-teal" />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark mb-2">For Students</h3>
          <p className="text-slate-500 mb-6">Create a profile and start matching with top companies.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none" />
            <input type="email" placeholder="University Email" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none" />
            <select className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none text-slate-500">
              <option>Select Year of Study</option>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>
            <button className="w-full bg-brand-teal hover:bg-brand-dark text-white font-bold py-3 rounded-lg transition-colors">
              Sign Up as Student
            </button>
          </form>
        </div>

        {/* Organization Form */}
        <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-xl">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
            <Building2 className="w-6 h-6 text-brand-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-2">For Organizations</h3>
          <p className="text-slate-300 mb-6">Post jobs, manage candidates, and track your social impact.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Company Name" className="w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-white placeholder-slate-400" />
            <input type="email" placeholder="Work Email" className="w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-white placeholder-slate-400" />
            <select className="w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-slate-400">
              <option>Company Size</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>50+</option>
            </select>
            <button className="w-full bg-brand-accent hover:bg-brand-light text-brand-dark font-bold py-3 rounded-lg transition-colors">
              Become a Partner
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---
function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/jobs" element={<JobBoard />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/involved" element={<GetInvolvedPage />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Global AI Assistant */}
      <AICareerCoach />
    </div>
  );
}

export default App;