import { BadgeDollarSign, Ban } from "lucide-react";
import { JobModelInterface } from "@/types/model/Job.model";
import {
  formatCompensationLabel,
  hasPaidCompensation,
} from "@/utils/jobCompensation";

type JobCompensationSummaryProps = {
  job: Pick<JobModelInterface, "compensation_type" | "compensation_range">;
  variant?: "compact" | "detail";
};

function JobCompensationSummary({
  job,
  variant = "compact",
}: JobCompensationSummaryProps) {
  const isPaidRole = hasPaidCompensation(job.compensation_type, job.compensation_range);
  const label = formatCompensationLabel(job.compensation_type, job.compensation_range);
  const Icon = isPaidRole ? BadgeDollarSign : Ban;

  if (variant === "detail") {
    return (
      <section className='mb-8'>
        <h2 className='text-lg font-bold text-brand-dark mb-3'>Compensation</h2>
        <div
          className={`rounded-2xl border p-4 md:p-5 ${
            isPaidRole
              ? "bg-emerald-50 border-emerald-100"
              : "bg-slate-50 border-slate-100"
          }`}
        >
          <div className='flex items-start gap-3'>
            <div
              className={`rounded-full p-2 ${
                isPaidRole
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              <Icon className='w-5 h-5' />
            </div>
            <div>
              <p className='text-sm font-semibold uppercase tracking-wide text-slate-500'>
                {isPaidRole ? "Pay range (NGN)" : "Compensation status"}
              </p>
              <p className='text-base md:text-lg font-semibold text-brand-dark mt-1'>
                {label}
              </p>
              <p className='text-sm text-slate-600 mt-2'>
                {isPaidRole
                  ? "This opportunity includes a stated pay range in Naira."
                  : "This opportunity is marked as having no compensation, or compensation details were not supplied yet."}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        isPaidRole
          ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
          : "bg-slate-100 text-slate-600 border border-slate-200"
      }`}
    >
      <Icon className='w-3.5 h-3.5' />
      <span>{label}</span>
    </div>
  );
}

export default JobCompensationSummary;
