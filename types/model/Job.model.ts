export type JobType = 'remote' | 'on-site' | 'hybrid' | "";
export type JobCategoryType = "stem " | "humanities_and_art" | "commercial_and_finance" | "non_Profit" | "";
// export type JobCategoryType = "marketing" | "tech" | "admin" | "research" | "finance" | "design" | "";
export type JobTrainigScope = "siwes_or_general" | "graduate_training" | "international" | "";
export type CompensationType = "paid" | "unpaid" | "";

export interface JobModelInterface {
  id: number;
  title: string;
  company: string;
  location: string;
  type: JobType;
  category: JobCategoryType;
  link: string;
  // organization_id: number;
  postedDate: string;
  description: string;
  job_training_scope: JobTrainigScope;
  compensation_type?: CompensationType;
  compensation_range?: string | null;

  readonly createdAt: string;
  readonly updatedAt: string;
}
export type CreateJobModelInterface = Omit<JobModelInterface, "id" | "createdAt" | "updatedAt" | "postedDate">