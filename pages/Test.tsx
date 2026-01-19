import React from "react";
import { HeartHandshake, Users, CheckCircle2, Megaphone } from "lucide-react";

function Test() {
  return (
    <div className='mt-16'>
      <div className='text-center mb-12'>
        <h3 className='text-3xl font-bold text-brand-dark mb-4'>
          Volunteer & Give Back
        </h3>
        <p className='text-slate-600 max-w-2xl mx-auto'>
          Join our mission-driven community. Whether you are a professional
          looking to mentor or a student wanting to gain experience, your time
          makes a difference.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {/* Professional Mentors */}
        <div className='bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-8 flex flex-col'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='bg-brand-teal text-white p-3 rounded-full'>
              <HeartHandshake className='w-6 h-6' />
            </div>
            <h3 className='text-xl font-bold text-brand-dark'>
              For Professionals: Mentorship
            </h3>
          </div>
          <p className='text-slate-600 mb-6 flex-grow'>
            Share your industry expertise. Review portfolios, conduct mock
            interviews, or speak at our webinars.
          </p>
          <ul className='space-y-3 mb-8 text-sm text-slate-500 font-medium'>
            <li className='flex items-center gap-2'>
              <CheckCircle2 className='w-4 h-4 text-brand-teal' /> 3-5
              hours/month commitment
            </li>
            <li className='flex items-center gap-2'>
              <CheckCircle2 className='w-4 h-4 text-brand-teal' /> Networking
              with future talent
            </li>
            <li className='flex items-center gap-2'>
              <CheckCircle2 className='w-4 h-4 text-brand-teal' /> Certificate
              of Service
            </li>
          </ul>
          <button className='w-full bg-white border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-bold py-3 px-6 rounded-xl transition-all shadow-sm'>
            Become a Mentor
          </button>
        </div>

        {/* Student Volunteers */}
        <div className='bg-brand-accent/10 border border-brand-accent/30 rounded-2xl p-8 flex flex-col'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='bg-brand-accent text-brand-dark p-3 rounded-full'>
              <Users className='w-6 h-6' />
            </div>
            <h3 className='text-xl font-bold text-brand-dark'>
              Student Volunteer Program
            </h3>
          </div>
          <p className='text-slate-600 mb-6 flex-grow'>
            Gain practical experience while making an impact. We have open
            volunteer positions for <strong>Campus Ambassadors</strong> and
            various internal roles including but not limited to:
          </p>

          <div className='grid grid-cols-2 gap-4 mb-6'>
            <div className='bg-white/60 p-3 rounded-lg text-sm border border-brand-accent/20'>
              <span className='font-bold block text-brand-dark flex items-center gap-1'>
                <Megaphone className='w-3 h-3 text-brand-teal' /> Campus
                Ambassadors
              </span>
              <span className='text-slate-500 text-xs'>
                Lead on your campus
              </span>
            </div>
            <div className='bg-white/60 p-3 rounded-lg text-sm border border-brand-accent/20'>
              <span className='font-bold block text-brand-dark'>
                Social Media & Marketing
              </span>
              <span className='text-slate-500 text-xs'>Content & Strategy</span>
            </div>
            <div className='bg-white/60 p-3 rounded-lg text-sm border border-brand-accent/20'>
              <span className='font-bold block text-brand-dark'>
                Community Managers
              </span>
              <span className='text-slate-500 text-xs'>Event Coordination</span>
            </div>
            <div className='bg-white/60 p-3 rounded-lg text-sm border border-brand-accent/20 flex items-center justify-center'>
              <span className='font-bold text-brand-dark/70 text-center text-xs italic'>
                And many more roles...
              </span>
            </div>
          </div>

          <ul className='space-y-3 mb-8 text-sm text-slate-500 font-medium'>
            <li className='flex items-center gap-2'>
              <CheckCircle2 className='w-4 h-4 text-brand-accent' /> Flexible
              remote & on-campus options
            </li>
            <li className='flex items-center gap-2'>
              <CheckCircle2 className='w-4 h-4 text-brand-accent' /> Certificate
              of Volunteering
            </li>
            <li className='flex items-center gap-2'>
              <CheckCircle2 className='w-4 h-4 text-brand-accent' /> Direct
              mentorship from leadership
            </li>
          </ul>
          <button className='w-full bg-white border-2 border-brand-accent text-brand-dark hover:bg-brand-accent hover:border-brand-accent font-bold py-3 px-6 rounded-xl transition-all shadow-sm'>
            Apply to Volunteer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
