type JobCompensationSummaryProps = {
  variant?: "detail";
};

function JobCompensationSummary({ variant = "detail" }: JobCompensationSummaryProps) {
  if (variant !== "detail") return null;

  return (
    <section className='mb-8'>
      <h2 className='text-lg font-bold text-brand-dark mb-3'>Compensation</h2>
      <div className='rounded-2xl border border-slate-100 bg-slate-50 p-4 md:p-5'>
        <p className='text-sm text-slate-600'>
          compensation details were not supplied yet
        </p>
      </div>
    </section>
  );
}

export default JobCompensationSummary;
