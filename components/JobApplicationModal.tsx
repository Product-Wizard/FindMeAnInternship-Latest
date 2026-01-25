import React from "react";
import BlockLoadingIndicator from "./BlockLoadingIndicator";
import { JobModelInterface } from "@/types/model/Job.model";
import JobApplicationService from "@/ApiService/JobApplicationSevice";
import JobApplicationFormValidators from "@/formValidator/JonApplicationFormValidator";
import FormErrorMessage from "./FormErrorMessage";
import { CreateJobApplicationType } from "@/types/model/jobApplication.model";
import toast from "react-hot-toast";
import LoadingIndicator from "./LoadingIndicator";
import Window from "@/utils/window.utils";
import { AlertTriangle } from "lucide-react";

interface JobApplicationModalProps {
  applicationtype?: "student";
  onClose: () => void;
  job: JobModelInterface;
}

function JobApplicationModal({
  onClose,
  applicationtype = "student",
  job,
}: JobApplicationModalProps) {
  const jobApplicationMutation =
    JobApplicationService.createJobApplicationServiceMutation();
  const jobApplicationForm =
    JobApplicationFormValidators.createJobApplicationForm();

  const handleSubmitCreateJobApplication = (data: CreateJobApplicationType) => {
    jobApplicationMutation.mutate(
      { ...data, job_id: job.id },
      {
        onSuccess: (data) => {
          if (data.message === "you have previously applied for this job") {
            toast.success(data.message, {
              icon: <AlertTriangle color='yellow' />,
              iconTheme: {
                primary: "yellow",
                secondary: "yellow",
              },
            });
          } else {
            toast.success(
              data.message || "job application submitted succesfully",
              {
                duration: 5000,
              }
            );
          }
          jobApplicationForm.reset();
          onClose();
          setTimeout(() => Window.newTab(job.link), 2000);
        },
        onError: (data: any) => {
          toast.error(
            data.response.messsage || data.message || "job application error"
          );
        },
      }
    );
  };
  return (
    <div>
      <div
        id='modalOverlay'
        className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'
      >
        <div className='bg-white w-full max-w-md rounded-xl shadow-2xl transform transition-all p-6 relative'>
          <button
            id='closeModal'
            onClick={onClose}
            className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          <div className='mb-6'>
            <h3 className='text-2xl font-bold text-gray-800'>Get Started</h3>
            <p className='text-sm text-gray-500'>
              Enter your details and we'll reach out shortly.
            </p>
          </div>

          <form
            onSubmit={jobApplicationForm.handleSubmit(
              handleSubmitCreateJobApplication
            )}
            className='space-y-4'
          >
            <div>
              <label className='block text-sm font-medium capitalize text-gray-700 mb-1'>
                {applicationtype} Full Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder={`${applicationtype} name`}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition'
                {...jobApplicationForm.register("fullname")}
              />
              <FormErrorMessage
                message={
                  jobApplicationForm?.formState?.errors?.fullname?.message
                }
              />
            </div>

            <div>
              <label className='block text-sm font-medium capitalize text-gray-700 mb-1'>
                {applicationtype} Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder={`${applicationtype}@example.com`}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal  focus:border-brand-teal outline-none transition'
                {...jobApplicationForm.register("email")}
              />
              <FormErrorMessage
                message={jobApplicationForm?.formState?.errors?.email?.message}
              />
            </div>

            <div>
              <label className='block text-sm font-medium capitalize text-gray-700 mb-1'>
                {applicationtype} Phone Number
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                placeholder={`${applicationtype} phone number`}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal  focus:border-brand-teal outline-none transition'
                {...jobApplicationForm.register("phone")}
              />
              <FormErrorMessage
                message={jobApplicationForm?.formState?.errors?.phone?.message}
              />
            </div>

            <button
              type='submit'
              className='w-full flex item-center justify-center bg-brand-teal bg-opacity-80 text-white font-bold py-3 rounded-lg hover:bg-opacity-100 shadow-lg hover:shadow-blue-500/30 transition duration-300'
            >
              {jobApplicationMutation.isPending ? (
                <LoadingIndicator size='20px' />
              ) : (
                <span>Submit Information </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationModal;
