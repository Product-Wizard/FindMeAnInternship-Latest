export interface JobApplicationModelInterface {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  job_id: number;
}

export type CreateJobApplicationType = Omit<JobApplicationModelInterface, "id">
