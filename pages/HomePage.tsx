import {
  ArrowRight,
  Search,
  CheckCircle2,
  HeartHandshake,
  TrendingUp,
  Users,
  Megaphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className='flex flex-col'>
    {/* Problem Section (Hero) */}
    <section className='relative bg-brand-dark text-white pt-20 pb-32 overflow-hidden'>
      <div className='absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 skew-x-12 translate-x-20'></div>
      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <div className='max-w-2xl'>
          <div className='inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6'>
            <TrendingUp className='w-4 h-4' />
            <span>Youth Unemployment is at 28%. Let's fix it.</span>
          </div>
          <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
            Talent is everywhere.
            <br />
            <span className='text-brand-teal'>Opportunity</span> is not.
          </h1>
          <p className='text-lg text-slate-300 mb-8 leading-relaxed max-w-xl'>
            We exist to break the "no experience, no job" cycle. We connect
            driven students with organizations ready to nurture the next
            generation of leaders.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Link
              to='/jobs'
              className='bg-brand-teal hover:bg-brand-light text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2'
            >
              Find an Internship <ArrowRight className='w-5 h-5' />
            </Link>
            <Link
              to='/involved'
              className='bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all inline-block text-center'
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Solution Section (Process) */}
    <section className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl font-bold text-brand-dark mb-4'>
            Bridging Education to Employment
          </h2>
          <p className='text-slate-600'>
            Our platform simplifies the connection process, ensuring quality
            matches for both students and companies.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {[
            {
              icon: <Search className='w-8 h-8 text-brand-teal' />,
              title: "1. Discover",
              desc: "Students browse curated opportunities that match their field of study and career aspirations.",
            },
            {
              icon: <CheckCircle2 className='w-8 h-8 text-brand-teal' />,
              title: "2. Verify",
              desc: "We vet both candidates and companies to ensure a safe, productive, and educational environment.",
            },
            {
              icon: <HeartHandshake className='w-8 h-8 text-brand-teal' />,
              title: "3. Connect",
              desc: "Seamless application process and support throughout the internship duration.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className='bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow relative overflow-hidden group'
            >
              <div className='absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-brand-dark group-hover:scale-110 transition-transform'>
                {i + 1}
              </div>
              <div className='bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6'>
                {step.icon}
              </div>
              <h3 className='text-xl font-bold text-brand-dark mb-3'>
                {step.title}
              </h3>
              <p className='text-slate-600 leading-relaxed'>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Proof Section (Social Proof) */}
    <section className='py-24 bg-brand-dark/5'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-brand-dark mb-6'>
              Real Impact, Real Stories
            </h2>
            <div className='space-y-6'>
              <div className='bg-white p-6 rounded-xl shadow-sm border border-slate-100'>
                <p className='text-slate-600 italic mb-4'>
                  {/* "I applied to 50 jobs with no luck. Find Me an Internship
                  connected me with a mentor and a 3-month role that turned into
                  a full-time offer." */}
                  ”Dominion was my first real workplace. Find Me an Internship
                  verified the role, helped me package my skills clearly, and I
                  landed the internship. By my second month, I was trusted to
                  own weekly reporting and present updates to the team.”
                </p>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold'>
                    E
                  </div>
                  <div>
                    <div className='font-bold text-brand-dark'>Evangel</div>
                    <div className='text-xs text-slate-500'>
                      Intern, Dominion
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white p-6 rounded-xl shadow-sm border border-slate-100'>
                <p className='text-slate-600 italic mb-4'>
                  ”We needed support fast for a 6-week project. They found us
                  two interns, both reliable, both coachable, and we would hire
                  from this pipeline again.”
                </p>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white font-bold'>
                    BF
                  </div>
                  <div>
                    <div className='font-bold text-brand-dark'>Bisi Falade</div>
                    <div className='text-xs text-slate-500'>
                      Program Manager, Community Health NGO
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <Link
                // to='/impact'
                to='/'
                className='text-brand-teal font-bold hover:underline flex items-center gap-2'
              >
                Goals <ArrowRight className='w-4 h-4' />
              </Link>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-brand-teal text-white p-8 rounded-2xl flex flex-col justify-center text-center'>
              <span className='text-4xl font-bold mb-2'>500+</span>
              <span className='text-brand-teal-100'>Students Placed</span>
            </div>
            <div className='bg-white text-brand-dark p-8 rounded-2xl flex flex-col justify-center text-center shadow-sm'>
              <span className='text-4xl font-bold mb-2'>85%</span>
              <span className='text-slate-500'>Employment Rate</span>
            </div>
            <div className='bg-white text-brand-dark p-8 rounded-2xl flex flex-col justify-center text-center shadow-sm'>
              <span className='text-4xl font-bold mb-2'>120+</span>
              <span className='text-slate-500'>Partner Orgs</span>
            </div>
            <div className='bg-brand-accent text-brand-dark p-8 rounded-2xl flex flex-col justify-center text-center'>
              <span className='text-4xl font-bold mb-2'>50k</span>
              <span className='opacity-80'>Training Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
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
                <span className='text-slate-500 text-xs'>
                  Content & Strategy
                </span>
              </div>
              <div className='bg-white/60 p-3 rounded-lg text-sm border border-brand-accent/20'>
                <span className='font-bold block text-brand-dark'>
                  Community Managers
                </span>
                <span className='text-slate-500 text-xs'>
                  Event Coordination
                </span>
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
                <CheckCircle2 className='w-4 h-4 text-brand-accent' />{" "}
                Certificate of Volunteering
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
    </section>
  </div>
);

export default HomePage;
