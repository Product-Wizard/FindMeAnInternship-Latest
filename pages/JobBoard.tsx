import { useState, useEffect } from "react";
import { Building2, ArrowRight, MapPin, Search } from "lucide-react";
import { JobSlider } from "@/components/JobSlider";
import JobTrainingScopePicker from "@/components/JobTrainingScopePicker";
import JobService from "@/ApiService/JobSevice";
import {
  JobCategoryType,
  JobTrainigScope,
  JobModelInterface,
} from "@/types/model/Job.model";
import Paginator from "@/components/Paginator";
import BlockLoadingIndicator from "@/components/BlockLoadingIndicator";
import JobApplicationModal from "@/components/JobApplicationModal";
import { useQueryClient } from "@tanstack/react-query";
import ApiQueryMutationKeys from "@/consts/ApiQueryMutationKeys";
import NigerianStates from "@/consts/NigerianStates";

const PER_PAGE = 20;
const JobBoard = () => {
  const queryClient = useQueryClient();
  const [remote, setRemote] = useState(false);
  const [state, setState] = useState("");
  const [all, setAll] = useState(false);
  const [onSite, setOnSite] = useState(false);
  const [hybrid, setHybrid] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<JobTrainigScope>("");
  const [jobCategory, setJobCategory] = useState<JobCategoryType>("");
  const [page, setPage] = useState(1);

  const handleCheckAllClicked = (checkedState: boolean) => {
    // if (!checkedState) return
    setAll(checkedState);
    setRemote(checkedState);
    setOnSite(checkedState);
    setHybrid(checkedState);
    setAll(checkedState);
  };

  const fetchJobQuery = JobService.fetchJobsServiceQuery({
    perPage: PER_PAGE,
    page: page,
    category_by_user: jobCategory,
    state_by_user: state,
    company: search,
    description: search,
    link: search,
    location: search,
    title: search,
    on_site: onSite ? "on-site" : "",
    remote: remote ? "remote" : "",
    hybrid: hybrid ? "hybrid" : "",
  });

  const getFilteredJobs = () => {
    switch (activeTab) {
      case "siwes_or_general":
        return (fetchJobQuery?.data?.data || []).filter(
          (job) =>
            job.location.includes("local") ||
            job.job_training_scope == "siwes_or_general"
        );
      case "international":
        return (fetchJobQuery?.data?.data || []).filter(
          (job) => job.job_training_scope === "international"
        );
      case "graduate_training":
        return (fetchJobQuery?.data?.data || []).filter(
          (job) => job.job_training_scope === "graduate_training"
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

  // Reset pagination when filters change
  const trigerFilterSearch = () => {
    setPage(1);
    setTimeout(
      () =>
        queryClient.invalidateQueries({
          queryKey: [
            ...ApiQueryMutationKeys.JobQuryMutationKeys.getJobsQueryKeys,
            1,
          ],
        }),
      400
    );
  };

  const sliderJobs = getFilteredJobs();
  const categoryJobs = filterJobsByCategory();

  useEffect(() => {
    if (onSite && remote && hybrid) {
      handleCheckAllClicked(true);
    }
    if (onSite === false && remote === false && hybrid === false) {
      handleCheckAllClicked(false);
    }
    trigerFilterSearch();
  }, [remote, onSite, hybrid]);

  return (
    <div className='min-h-screen bg-slate-50 py-12 overflow-x-hidden'>
      {fetchJobQuery?.isFetching ? <BlockLoadingIndicator /> : null}
      <div className=' w-full lg:max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h2 className='text-4xl font-bold text-brand-dark mb-4'>
            Find Your Path
          </h2>
          <p className='text-slate-600 max-w-2xl mx-auto'>
            Whether you are looking for a local placement across nigeria, a
            remote gig, or an international adventure, we have opportunities for
            you.
          </p>
        </div>

        <section className='mb-16'>
          <div className='mb-8'>
            <JobTrainingScopePicker
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
          </div>

          <div className='grid lg:grid-cols-4 gap-8 mb-12'>
            {/* Sidebar Filters */}

            <div className='lg:col-span-1 space-y-6'>
              <div className='bg-white p-6 rounded-xl shadow-sm border border-slate-100'>
                <div className='space-y-4'>
                  <div>
                    <label className='block text-xs font-semibold text-slate-500 uppercase mb-2'>
                      Location Type
                    </label>
                    {/* job filter by job type */}
                    <div className='space-y-2'>
                      <label className='flex items-center gap-2 text-sm text-slate-700 cursor-pointer'>
                        <input
                          type='checkbox'
                          onChange={(e) =>
                            handleCheckAllClicked(e.target.checked)
                          }
                          checked={all}
                          className='rounded text-brand-teal focus:ring-brand-teal'
                        />
                        All
                      </label>
                      <label className='flex items-center gap-2 text-sm text-slate-700 cursor-pointer'>
                        <input
                          type='checkbox'
                          checked={remote}
                          onChange={(e) => setRemote(e.target.checked)}
                          className='rounded text-brand-teal focus:ring-brand-teal'
                        />
                        Remote
                      </label>
                      <label className='flex items-center gap-2 text-sm text-slate-700 cursor-pointer'>
                        <input
                          type='checkbox'
                          checked={hybrid}
                          onChange={(e) => setHybrid(e.target.checked)}
                          className='rounded text-brand-teal focus:ring-brand-teal'
                        />
                        Hybrid
                      </label>
                      <label className='flex items-center gap-2 text-sm text-slate-700 cursor-pointer'>
                        <input
                          type='checkbox'
                          onChange={(e) => setOnSite(e.target.checked)}
                          checked={onSite}
                          className='rounded text-brand-teal focus:ring-brand-teal'
                        />
                        On-Site
                      </label>
                    </div>
                  </div>

                  <div className='flex-1 relative'>
                    <Search className='absolute left-3 top-2.5 w-4 h-4 text-slate-400' />
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        document.getElementById("search-text-input")?.blur();
                        // if (!search) return;
                        trigerFilterSearch();
                      }}
                    >
                      <div className='flex items-center'>
                        <input
                          type='text'
                          id='search-text-input'
                          placeholder='Search by title or company...'
                          className='w-full pl-10 p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-1 focus:ring-brand-teal'
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          onBlur={() => {
                            // if (!search) return;
                            trigerFilterSearch();
                          }}
                        />
                        <button
                          type='submit'
                          className=' rounded-lg bg-brand-teal p-3 ml-1'
                        >
                          <Search className='w-4 h-4 text-white' />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* job category and state */}
            <div className=' flex items-end justify-start'>
              {/* job category */}
              <div className='mr-3'>
                <label className='block text-xs font-semibold text-slate-500 uppercase mb-2'>
                  Category
                </label>
                <select
                  value={jobCategory}
                  onChange={(e) => {
                    setJobCategory(e.target.value as any);
                    trigerFilterSearch();
                  }}
                  className='w-full bg-slate-50 border border-slate-200 rounded-lg text-sm p-2 focus:ring-2 focus:ring-brand-teal outline-none'
                >
                  <option value=''>All</option>
                  <option value='stem'>STEM</option>
                  <option value='humanities_and_art'>Humanities/Art</option>
                  <option value='commercial_and_finance'>
                    Commercial/Finance
                  </option>
                  <option value='non_profit'>Non-Profit</option>
                </select>
              </div>
              {/* job state */}
              <div>
                <label className='block text-xs font-semibold text-slate-500 uppercase mb-2'>
                  state
                </label>
                <select
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value as any);
                    trigerFilterSearch();
                  }}
                  className='w-full bg-slate-50 border border-slate-200 rounded-lg text-sm p-2 focus:ring-2 focus:ring-brand-teal outline-none'
                >
                  <option value=''>All State</option>
                  {NigerianStates.getStates().map((item) => {
                    return (
                      <option
                        key={item}
                        className='capitalize'
                        value={item.toLowerCase()}
                      >
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Job List */}
          {(fetchJobQuery?.data?.data || []).length > 0 ? (
            <div className='lg:col-span-3 space-y-4'>
              {(fetchJobQuery?.data?.data || []).map((job) => {
                return <JobItemList job={job} />;
              })}
            </div>
          ) : (
            <div className='p-12 text-center text-slate-400'>
              {(fetchJobQuery?.data?.data || []).length > 0
                ? `No jobs found matching your filters`
                : "no jobs available on this page"}
            </div>
          )}

          <div className=' mt-20 bg-brand-teal/5 p-6 rounded-xl border border-brand-teal/20'>
            <h3 className='font-bold text-brand-dark mb-2'>
              Need a Resume Check?
            </h3>
            <p className='text-sm text-slate-600 mb-4'>
              Our AI Career Coach can review your resume tips instantly.
            </p>
            <div className='text-brand-teal text-sm font-bold flex items-center gap-1'>
              Use the chat button at the bottom right corner{" "}
              <ArrowRight className='w-4 h-4 rotate-45' />
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

function JobItemList({ job }: { job: JobModelInterface }) {
  const [openJobApplication, setOpenJobApplication] = useState(false);
  return (
    <div
      key={job.id}
      className='bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-brand-teal/50 transition-all group'
    >
      {openJobApplication ? (
        <JobApplicationModal
          job={job}
          onClose={() => setOpenJobApplication(false)}
        />
      ) : null}
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
        <span className='text-xs text-slate-400'>Posted {job.postedDate}</span>
        <button
          onClick={() => setOpenJobApplication(true)}
          className='text-sm font-bold text-brand-teal hover:text-brand-dark'
        >
          Apply Now &rarr;
        </button>
      </div>
    </div>
  );
}

export default JobBoard;
