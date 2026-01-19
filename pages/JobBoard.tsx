import { useState } from "react";

import { Building2, ArrowRight, Search, MapPin } from "lucide-react";
import { Job } from "@/types";
import { JobSlider } from "@/components/JobSlider";
import JobLoactionPicker from "@/components/JobLoactionPicker";
import JobService from "@/ApiService/JobSevice";
import { JobCategoryType, JobLocalityType } from "@/types/model/Job.model";
import Paginator from "@/components/Paginator";
const PER_PAGE = 30;
const JobBoard = () => {
  const [activeTab, setActiveTab] = useState<JobLocalityType>("");
  const [jobCategory, setJobCategory] = useState<JobCategoryType>("");
  const [page, setPage] = useState(1);

  const jobs: Job[] = [
    // Local (Ibadan)
    {
      id: "101",
      title: "Campus Ambassador",
      company: "UI Tech Hub",
      location: "Ibadan, Nigeria",
      type: "On-site",
      category: "Marketing",
      postedDate: "1 day ago",
      description:
        "Represent our brand at the University of Ibadan campus events.",
    },
    {
      id: "102",
      title: "React.js Intern",
      company: "Bodija Software",
      location: "Ibadan, Nigeria",
      type: "On-site",
      category: "Tech",
      postedDate: "2 days ago",
      description: "Assist with frontend development in our Bodija office.",
    },
    {
      id: "103",
      title: "Admin Assistant",
      company: "Ibadan Logistics",
      location: "Ibadan, Nigeria",
      type: "On-site",
      category: "Admin",
      postedDate: "5 days ago",
      description: "Manage daily operations at our Ring Road facility.",
    },
    {
      id: "104",
      title: "Research Aide",
      company: "IITA",
      location: "Ibadan, Nigeria",
      type: "On-site",
      category: "Research",
      postedDate: "1 week ago",
      description: "Data collection and field analysis support.",
    },

    // International
    {
      id: "201",
      title: "Summer Analyst",
      company: "Goldman Sachs",
      location: "London, UK",
      type: "On-site",
      category: "Finance",
      postedDate: "3 days ago",
      description:
        "Global markets internship program for international students.",
    },
    {
      id: "202",
      title: "UX Research Assistant",
      company: "Spotify",
      location: "Stockholm, Sweden",
      type: "Hybrid",
      category: "Design",
      postedDate: "5 days ago",
      description: "Help us understand user behavior across European markets.",
    },
    {
      id: "203",
      title: "Software Engineer Intern",
      company: "Google",
      location: "Munich, Germany",
      type: "On-site",
      category: "Tech",
      postedDate: "2 days ago",
      description: "Work on privacy and security engineering tools.",
    },

    // Generic/Remote
    {
      id: "301",
      title: "Content Writer",
      company: "BuzzMedia",
      location: "Remote",
      type: "Remote",
      category: "Marketing",
      postedDate: "Just now",
      description: "Write engaging blog posts for our diverse clientele.",
    },
    {
      id: "302",
      title: "Virtual Assistant",
      company: "Global Corp",
      location: "Remote",
      type: "Remote",
      category: "Admin",
      postedDate: "1 week ago",
      description: "Manage schedules and emails for executives worldwide.",
    },
    {
      id: "303",
      title: "Graphic Designer",
      company: "CreativeFlow",
      location: "Remote",
      type: "Remote",
      category: "Design",
      postedDate: "4 days ago",
      description: "Create social media assets and branding kits.",
    },
    {
      id: "1",
      title: "Social Media Intern",
      company: "GrowthLabs",
      location: "Remote",
      type: "Remote",
      category: "Marketing",
      postedDate: "2 days ago",
      description: "Manage our Instagram and LinkedIn pages.",
    },
    {
      id: "2",
      title: "Junior Frontend Dev",
      company: "WebSolutions",
      location: "New York, NY",
      type: "Hybrid",
      category: "Tech",
      postedDate: "1 day ago",
      description: "Assist with React component building.",
    },
  ];

  const fetchJobQuery = JobService.fetchJobsServiceQuery({
    perPage: PER_PAGE,
    page: page,
  });

  const getFilteredJobs = () => {
    switch (activeTab) {
      case "local":
        return (fetchJobQuery?.data?.data || []).filter(
          (job) => job.location.includes("local") || job.locale_type == "local"
        );
      case "international":
        // Rudimentary check for international: Not Remote and Not Ibadan and Not Nigeria (unless explicitly Ibadan)
        // For this demo, I'll filter by specific cities or exclude Remote/Ibadan
        return (fetchJobQuery?.data?.data || []).filter(
          (job) =>
            !job.location.includes("Ibadan") &&
            job.type !== "remote" &&
            (job.location.includes("UK") ||
              job.location.includes("Sweden") ||
              job.location.includes("Germany") ||
              job.location.includes("us") ||
              job.location.includes("US") ||
              job.location.includes("NY"))
        );
      case "remote":
        return (fetchJobQuery?.data?.data || []).filter(
          (job) => job.type === "remote" || job.locale_type === "international"
        );
      default:
        return fetchJobQuery?.data?.data || [];
    }
  };

  const filterJobsByCategory = () => {
    const jobs = (fetchJobQuery?.data?.data || []).filter((job) => {
      if (jobCategory === "" || jobCategory === job.category) return true;
      return false;
    });
    return jobs;
  };

  const sliderJobs = getFilteredJobs();
  const catergoryJobs = filterJobsByCategory();

  return (
    <div className='min-h-screen bg-slate-50 py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h2 className='text-4xl font-bold text-brand-dark mb-4'>
            Find Your Path
          </h2>
          <p className='text-slate-600 max-w-2xl mx-auto'>
            Whether you are looking for a local placement in Ibadan, a remote
            gig, or an international adventure, we have opportunities for you.
          </p>
        </div>

        {/* --- Featured Opportunities Slider Section --- */}
        <section className='mb-16'>
          <div className='flex flex-col items-center mb-8'>
            <JobLoactionPicker
              handleOnClickLoactionPicker={setActiveTab}
              location={activeTab}
            />
          </div>

          <JobSlider jobs={sliderJobs} />
        </section>

        {/* --- Main Job List & Filters --- */}
        <div className='border-t border-slate-200 pt-12'>
          <div className='mb-8 flex justify-between items-end'>
            <div>
              <h3 className='text-2xl font-bold text-brand-dark'>
                All Opportunities
              </h3>
              <p className='text-sm text-slate-500'>
                Browse all {(fetchJobQuery?.data?.data || []).length} open
                positions on this page
              </p>
            </div>
            {/* Simple Sort/Filter Mockup */}
            {/* <select className='bg-white border border-slate-200 rounded-lg text-sm p-2 outline-none'>
              <option>Most Recent</option>
              <option>Relevance</option>
            </select> */}
          </div>

          <div className='grid lg:grid-cols-4 gap-8 mb-12'>
            {/* Sidebar Filters */}
            <div className='lg:col-span-1 space-y-6'>
              <div className='bg-white p-6 rounded-xl shadow-sm border border-slate-100'>
                {/* <h3 className='font-bold text-brand-dark mb-4 flex items-center gap-2'>
                  <Search className='w-4 h-4' /> Filters
                </h3> */}
                <div className='space-y-4'>
                  {/* <div>
                    <label className='block text-xs font-semibold text-slate-500 uppercase mb-2'>
                      Location Type
                    </label>
                    <div className='space-y-2'>
                      {["Remote", "Hybrid", "On-site"].map((t) => (
                        <label
                          key={t}
                          className='flex items-center gap-2 text-sm text-slate-700 cursor-pointer'
                        >
                          <input
                            type='checkbox'
                            className='rounded text-brand-teal focus:ring-brand-teal'
                          />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div> */}
                  <div>
                    <label className='block text-xs font-semibold text-slate-500 uppercase mb-2'>
                      Category
                    </label>
                    <select
                      onChange={(e) => setJobCategory(e.target.value as any)}
                      className='w-full bg-slate-50 border border-slate-200 rounded-lg text-sm p-2 focus:ring-2 focus:ring-brand-teal outline-none'
                    >
                      <option value=''>All</option>
                      <option value='tech'>Technology</option>
                      <option value='marketing'>Marketing</option>
                      <option value='finance'>Finance</option>
                      <option value='design'>Design</option>
                      <option value='admin'>Admin</option>
                      <option value='research'>Research</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job List */}
          {catergoryJobs.length > 0 ? (
            <div className='lg:col-span-3 space-y-4'>
              {(catergoryJobs || []).map((job) => {
                return (
                  <div
                    key={job.id}
                    className='bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-brand-teal/50 transition-all group'
                  >
                    <div className='flex justify-between items-start mb-2'>
                      <div>
                        <h3 className='text-lg font-bold text-brand-dark group-hover:text-brand-teal transition-colors'>
                          {job.title}
                        </h3>
                        <div className='flex items-center gap-2 text-sm text-slate-500 mb-2'>
                          <Building2 className='w-3 h-3' /> {job.company}
                          <span className='w-1 h-1 bg-slate-300 rounded-full'></span>
                          <MapPin className='w-3 h-3' /> {job.location}
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${
                        job.type === "remote"
                          ? "bg-purple-100 text-purple-700"
                          : job.type === "hybrid"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                      >
                        {job.type}
                      </span>
                    </div>
                    <p className='text-slate-600 text-sm mb-4 line-clamp-2'>
                      {job.description}
                    </p>
                    <div className='flex justify-between items-center pt-4 border-t border-slate-50'>
                      <span className='text-xs text-slate-400'>
                        Posted {job.postedDate}
                      </span>
                      <button className='text-sm font-bold text-brand-teal hover:text-brand-dark'>
                        Apply Now &rarr;
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className='p-12 text-center text-slate-400'>
              {(fetchJobQuery?.data?.data || []).length > 0
                ? `No jobs found matching your filters. "${jobCategory}" on this page `
                : "no jobs available on this page"}
            </div>
          )}

          <div className='bg-brand-teal/5 p-6 rounded-xl border border-brand-teal/20'>
            <h3 className='font-bold text-brand-dark mb-2'>
              Need a Resume Check?
            </h3>
            <p className='text-sm text-slate-600 mb-4'>
              Our AI Career Coach can review your resume tips instantly.
            </p>
            <div className='text-brand-teal text-sm font-bold flex items-center gap-1'>
              Use the chat button <ArrowRight className='w-4 h-4' />
            </div>
          </div>

          <Paginator
            currentPage={page}
            handlePageChange={setPage}
            pagination={fetchJobQuery?.data?.pagination}
          />
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
