import { GraduationCap, Building2 } from "lucide-react";

const GetInvolvedPage = () => (
  <div className='min-h-screen bg-slate-50 py-12'>
    <div className='max-w-7xl mx-auto px-4'>
      <div className='text-center max-w-3xl mx-auto mb-16'>
        <h2 className='text-3xl font-bold text-brand-dark mb-4'>
          Join the Movement
        </h2>
        <p className='text-slate-600'>
          Whether you are a student looking for a break or a company looking for
          talent, we need you.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {/* Student Form */}
        <div className='bg-white p-8 rounded-2xl shadow-sm border border-slate-100'>
          <div className='w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6'>
            <GraduationCap className='w-6 h-6 text-brand-teal' />
          </div>
          <h3 className='text-2xl font-bold text-brand-dark mb-2'>
            For Students
          </h3>
          <p className='text-slate-500 mb-6'>
            Create a profile and start matching with top companies.
          </p>
          <form className='space-y-4'>
            <input
              type='text'
              placeholder='Full Name'
              className='w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none'
            />
            <input
              type='email'
              placeholder='University Email'
              className='w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none'
            />
            <select className='w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none text-slate-500'>
              <option>Select Year of Study</option>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>
            <button className='w-full bg-brand-teal hover:bg-brand-dark text-white font-bold py-3 rounded-lg transition-colors'>
              Sign Up as Student
            </button>
          </form>
        </div>

        {/* Organization Form */}
        <div className='bg-brand-dark text-white p-8 rounded-2xl shadow-xl'>
          <div className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6'>
            <Building2 className='w-6 h-6 text-brand-accent' />
          </div>
          <h3 className='text-2xl font-bold mb-2'>For Organizations</h3>
          <p className='text-slate-300 mb-6'>
            Post jobs, manage candidates, and track your social impact.
          </p>
          <form className='space-y-4'>
            <input
              type='text'
              placeholder='Company Name'
              className='w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-white placeholder-slate-400'
            />
            <input
              type='email'
              placeholder='Work Email'
              className='w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-white placeholder-slate-400'
            />
            <select className='w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-slate-400'>
              <option>Company Size</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>50+</option>
            </select>
            <button className='w-full bg-brand-accent hover:bg-brand-light text-brand-dark font-bold py-3 rounded-lg transition-colors'>
              Become a Partner
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default GetInvolvedPage;
