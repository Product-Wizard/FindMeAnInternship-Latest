import { GraduationCap, Building2 } from "lucide-react";
import AuthService from "@/ApiService/AuthSevice";
import BlockLoadingIndicator from "@/components/BlockLoadingIndicator";
import StudentFormValidators from "@/formValidator/StudentFormValidator";
import OrganizationFormValidators from "@/formValidator/OrganizationFormValidator";
import { StudentModelInterface } from "@/types/model/student.type";
import toast from "react-hot-toast";
import FormErrorMessage from "@/components/FormErrorMessage";
import { OrganizationModelInterface } from "@/types/model/organization.model";

const GetInvolvedPage = () => {
  const studentForm = StudentFormValidators.createStudentForm();
  const organizationForm = OrganizationFormValidators.createOrganizationForm();
  const createStudentMutation = AuthService.createStudentServiceMutation();
  const createOrganizationMutation =
    AuthService.createOrganizationServiceMutation();

  const handleSubmitStudentForm = async (
    data: Omit<StudentModelInterface, "id">
  ) => {
    createStudentMutation.mutate(data, {
      onSuccess: (data) => {
        toast.success(data.message);
        studentForm.reset();
      },
      onError: (data: any, variables) => {
        toast.error(
          data?.response?.data?.message?.replaceAll("_", " ") ||
            "error occured!"
        );
      },
      onSettled: () => {},
    });
  };

  const handleSubmitOrganizationForm = async (
    data: Omit<OrganizationModelInterface, "id">
  ) => {
    createOrganizationMutation.mutate(data, {
      onSuccess: (data) => {
        toast.success(data.message);
        organizationForm.reset();
      },
      onError: (data: any, variables) => {
        toast.error(
          data?.response?.data?.message?.replaceAll("_", " ") ||
            "error occured!"
        );
      },
      onSettled: () => {},
    });
  };
  return (
    <div className='min-h-screen bg-slate-50 py-12'>
      {createStudentMutation.isPending ? <BlockLoadingIndicator /> : null}
      {createOrganizationMutation.isPending ? <BlockLoadingIndicator /> : null}
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl font-bold text-brand-dark mb-4'>
            Join the Movement
          </h2>
          <p className='text-slate-600'>
            Whether you are a student looking for a break or a company looking
            for talent, we need you.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Student Form */}
          <div className='bg-white p-8 rounded-2xl shadow-sm border border-slate-100'>
            <div className='w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6'>
              <GraduationCap className='w-6 h-6 text-brand-teal' />
            </div>
            <h3 className='text-2xl font-bold text-brand-dark mb-2'>
              For Students
            </h3>
            <p className='text-slate-500 mb-6'>
              Create a profile and start matching with top companies.
            </p>
            <form
              className='space-y-4'
              onSubmit={studentForm.handleSubmit(handleSubmitStudentForm)}
            >
              <input
                name='full_name'
                type='text'
                placeholder='Full Name'
                className='w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none'
                {...studentForm.register("full_name")}
              />
              <FormErrorMessage
                message={studentForm?.formState?.errors?.full_name?.message}
              />
              <input
                name='email'
                type='email'
                placeholder='Email'
                className='w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none'
                {...studentForm.register("email")}
              />
              <FormErrorMessage
                message={studentForm?.formState?.errors?.email?.message}
              />
              <input
                type='text'
                placeholder='Course of study'
                className='w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none'
                {...studentForm.register("course_of_study")}
              />
              <FormErrorMessage
                message={
                  studentForm?.formState?.errors?.course_of_study?.message
                }
              />
              <select
                name='year_of_study'
                className='w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none text-slate-500'
                {...studentForm.register("year_of_study")}
              >
                <option value=''>Select Year of Study</option>
                <option value='fresh_man'>Freshman</option>
                <option value='sophomore'>Sophomore</option>
                <option value='junior'>Junior</option>
                <option value='senior'>Senior</option>
              </select>
              <FormErrorMessage
                message={studentForm?.formState?.errors?.year_of_study?.message}
              />
              <button
                type='submit'
                className='w-full bg-brand-teal hover:bg-brand-dark text-white font-bold py-3 rounded-lg transition-colors'
              >
                Sign Up as Student
              </button>
            </form>
          </div>

          {/* Organization Form */}
          <div className='bg-brand-dark text-white p-8 rounded-2xl shadow-xl'>
            <div className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6'>
              <Building2 className='w-6 h-6 text-brand-accent' />
            </div>
            <h3 className='text-2xl font-bold mb-2'>For Organizations</h3>
            <p className='text-slate-300 mb-6'>
              Post jobs, manage candidates, and track your social impact.
            </p>
            <form
              className='space-y-4'
              onSubmit={organizationForm.handleSubmit(
                handleSubmitOrganizationForm
              )}
            >
              <input
                type='text'
                placeholder='Company Name'
                className='w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-white placeholder-slate-400'
                {...organizationForm.register("company_name")}
              />
              <FormErrorMessage
                message={
                  organizationForm?.formState?.errors?.company_name?.message
                }
              />
              <input
                type='email'
                placeholder='Email Address'
                className='w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-white placeholder-slate-400'
                {...organizationForm.register("email")}
              />
              <FormErrorMessage
                message={organizationForm?.formState?.errors?.email?.message}
              />
              <input
                type='text'
                placeholder='Industry'
                className='w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-white placeholder-slate-400'
                {...organizationForm.register("industry")}
              />
              <FormErrorMessage
                message={organizationForm?.formState?.errors?.industry?.message}
              />
              <select
                placeholder='Company Size'
                className='w-full p-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none text-slate-400'
                {...organizationForm.register("company_size")}
              >
                <option value=''>Company Size</option>
                <option value='1-10'>1-10</option>
                <option value='11-50'>11-50</option>
                <option value='50+'>50+</option>
              </select>
              <FormErrorMessage
                message={
                  organizationForm?.formState?.errors?.company_size?.message
                }
              />
              <button className='w-full bg-brand-accent hover:bg-brand-light text-brand-dark font-bold py-3 rounded-lg transition-colors'>
                Become a Partner
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
