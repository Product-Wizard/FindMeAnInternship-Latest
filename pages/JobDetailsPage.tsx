import { ReactNode, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  ExternalLink,
  Globe,
  MapPin,
  Shapes,
  Tag,
} from "lucide-react";
import JobService from "@/ApiService/JobSevice";
import BlockLoadingIndicator from "@/components/BlockLoadingIndicator";
import JobApplicationModal from "@/components/JobApplicationModal";
import SEO from "@/components/SEO";

const toLabel = (value: string) =>
  value
    .replaceAll("_", " ")
    .split(" ")
    .filter(Boolean)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

const truncate = (value: string, length = 160) =>
  value.length <= length ? value : `${value.slice(0, length - 3)}...`;

function JobDetailsPage() {
  const { id } = useParams();
  const [openJobApplication, setOpenJobApplication] = useState(false);

  const jobId = useMemo(() => Number(id), [id]);
  const isInvalidId = Number.isNaN(jobId) || jobId < 1;

  const fetchJobQuery = JobService.fetchJobServiceQuery(jobId);
  const job = fetchJobQuery.data?.data;

  const seoTitle = job
    ? `${job.title} at ${job.company}`
    : isInvalidId
    ? "Invalid job listing"
    : "Job details";

  const seoDescription = job
    ? truncate(job.description || `${job.title} internship details at ${job.company}`)
    : isInvalidId
    ? "The requested job listing is invalid."
    : "Explore full job details, requirements, and application links.";

  const seoKeywords = job
    ? [
        "internship job details",
        job.title,
        job.company,
        job.location,
        toLabel(job.type),
        toLabel(job.category),
        toLabel(job.job_training_scope),
      ]
        .filter(Boolean)
        .join(", ")
    : "internship details, trainee role, job details";

  return (
    <div className='min-h-screen bg-slate-50 py-12 overflow-x-hidden'>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        path={isInvalidId ? "/jobs" : `/jobs/${jobId}`}
      />

      {isInvalidId ? (
        <div className='min-h-[60vh] flex items-center justify-center text-center px-4'>
          <div>
            <h2 className='text-2xl font-bold text-brand-dark mb-2'>Invalid job</h2>
            <p className='text-slate-600 mb-4'>
              The job you are trying to access does not exist.
            </p>
            <Link
              to='/jobs'
              className='inline-flex items-center gap-2 text-brand-teal font-bold'
            >
              <ArrowLeft className='w-4 h-4' /> Back to jobs
            </Link>
          </div>
        </div>
      ) : fetchJobQuery.isFetching ? (
        <BlockLoadingIndicator />
      ) : !job ? (
        <div className='min-h-[60vh] flex items-center justify-center text-center px-4'>
          <div>
            <h2 className='text-2xl font-bold text-brand-dark mb-2'>Job not found</h2>
            <p className='text-slate-600 mb-4'>
              This job may have been removed or is no longer available.
            </p>
            <Link
              to='/jobs'
              className='inline-flex items-center gap-2 text-brand-teal font-bold'
            >
              <ArrowLeft className='w-4 h-4' /> Browse other jobs
            </Link>
          </div>
        </div>
      ) : (
        <>
          {openJobApplication ? (
            <JobApplicationModal
              job={job}
              onClose={() => setOpenJobApplication(false)}
            />
          ) : null}

          <JobPostingStructuredData
            title={job.title}
            description={truncate(job.description, 240)}
            company={job.company}
            location={job.location}
            employmentType={toLabel(job.type)}
            url={`${window.location.origin}/jobs/${job.id}`}
          />

          <div className='w-full lg:max-w-4xl mx-auto px-4'>
            <Link
              to='/jobs'
              className='inline-flex items-center gap-2 text-brand-teal text-sm font-bold mb-6'
            >
              <ArrowLeft className='w-4 h-4' /> Back to all opportunities
            </Link>

            <div className='bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8'>
              <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-slate-100 pb-6 mb-6'>
                <div>
                  <h1 className='text-3xl font-bold text-brand-dark mb-2'>{job.title}</h1>
                  <p className='text-slate-600 flex items-center gap-2'>
                    <Building2 className='w-4 h-4' />
                    {job.company}
                  </p>
                </div>
                <button
                  onClick={() => setOpenJobApplication(true)}
                  className='bg-brand-teal text-white rounded-lg px-5 py-3 text-sm font-semibold hover:opacity-90'
                >
                  Apply Now
                </button>
              </div>

              <div className='grid md:grid-cols-2 gap-4 mb-8'>
                <InfoPill
                  icon={<MapPin className='w-4 h-4' />}
                  label='Location'
                  value={job.location}
                />
                <InfoPill
                  icon={<Globe className='w-4 h-4' />}
                  label='Work Type'
                  value={toLabel(job.type)}
                />
                <InfoPill
                  icon={<Shapes className='w-4 h-4' />}
                  label='Training Scope'
                  value={toLabel(job.job_training_scope)}
                />
                <InfoPill
                  icon={<Tag className='w-4 h-4' />}
                  label='Category'
                  value={toLabel(job.category)}
                />
                <InfoPill
                  icon={<CalendarDays className='w-4 h-4' />}
                  label='Posted'
                  value={job.postedDate}
                />
              </div>

              <section className='mb-8'>
                <h2 className='text-lg font-bold text-brand-dark mb-3'>Job Description</h2>
                <p className='text-slate-700 leading-7 whitespace-pre-wrap'>{job.description}</p>
              </section>

              <section>
                <h2 className='text-lg font-bold text-brand-dark mb-3'>Application Link</h2>
                <a
                  href={job.link}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 text-brand-teal font-semibold break-all'
                >
                  Open external application page <ExternalLink className='w-4 h-4' />
                </a>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function JobPostingStructuredData({
  title,
  description,
  company,
  location,
  employmentType,
  url,
}: {
  title: string;
  description: string;
  company: string;
  location: string;
  employmentType: string;
  url: string;
}) {
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    hiringOrganization: {
      "@type": "Organization",
      name: company,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: location,
        addressCountry: "NG",
      },
    },
    employmentType,
    url,
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
    />
  );
}

function InfoPill({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className='bg-slate-50 rounded-xl p-4 border border-slate-100'>
      <p className='text-xs uppercase tracking-wide text-slate-500 mb-1 flex items-center gap-2'>
        {icon}
        {label}
      </p>
      <p className='text-sm font-semibold text-brand-dark'>{value || "Not provided"}</p>
    </div>
  );
}

export default JobDetailsPage;
