import { DiversityChart, PlacementsChart } from "@/components/ImpactCharts";
import {
  GraduationCap,
  Building2,
  Briefcase,
  Users,
  ArrowRight,
  Search,
  MapPin,
  CheckCircle2,
  HeartHandshake,
  TrendingUp,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Globe,
  Home,
  Laptop,
} from "lucide-react";

// Impact Page
const ImpactPage = () => (
  <div className='min-h-screen bg-white py-12'>
    <div className='max-w-7xl mx-auto px-4'>
      <div className='text-center max-w-3xl mx-auto mb-16'>
        <h2 className='text-4xl font-bold text-brand-dark mb-4'>
          Measuring Our Impact
        </h2>
        <p className='text-xl text-slate-600'>
          We believe in transparency. Here is how we are changing lives through
          internships.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8 mb-16'>
        <PlacementsChart />
        <DiversityChart />
      </div>

      <div className='bg-brand-dark rounded-3xl p-12 text-white overflow-hidden relative'>
        <div className='relative z-10 grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h3 className='text-3xl font-bold mb-4'>Beyond the Numbers</h3>
            <p className='text-slate-300 mb-6 leading-relaxed'>
              Statistics tell part of the story, but the real impact is in the
              confidence gained, the networks built, and the generational
              barriers broken. We focus on underserved communities where one
              internship can change a family's trajectory.
            </p>
            <ul className='space-y-4'>
              {[
                "Mentorship programs included with every internship",
                "Soft-skills workshops provided weekly",
                "Post-internship job search support",
              ].map((item, i) => (
                <li key={i} className='flex items-center gap-3'>
                  <CheckCircle2 className='w-5 h-5 text-brand-teal' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='h-full min-h-[300px] bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 flex flex-col justify-center'>
            <blockquote className='text-xl italic mb-6'>
              "This program didn't just find me a job. It taught me how to
              navigate the corporate world and believe in my own value."
            </blockquote>
            <cite className='not-italic'>
              <div className='font-bold text-brand-teal'>Marcus Johnson</div>
              <div className='text-sm text-slate-400'>
                Alumni, Class of 2023
              </div>
            </cite>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ImpactPage;
