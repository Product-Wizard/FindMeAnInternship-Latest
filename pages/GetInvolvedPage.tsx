import { useState } from "react";
import {
  GraduationCap,
  Building2,
  Megaphone,
  Users,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";
import AuthService from "@/ApiService/AuthSevice";
import BlockLoadingIndicator from "@/components/BlockLoadingIndicator";
import StudentFormValidators from "@/formValidator/StudentFormValidator";
import OrganizationFormValidators from "@/formValidator/OrganizationFormValidator";
import { StudentModelInterface } from "@/types/model/student.type";
import toast from "react-hot-toast";
import FormErrorMessage from "@/components/FormErrorMessage";
import { OrganizationModelInterface } from "@/types/model/organization.model";
import Window from "@/utils/window.utils";
import AppModal from "@/components/AppModal";
import { InlineWidget } from "react-calendly";

const GetInvolvedPage = () => {
  const [openModal, setOpenModal] = useState(false);
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
        setTimeout(() => setOpenModal(true), 1500);
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
    <div className='min-h-screen bg-slate-50 py-12 scroll-smooth '>
      <AppModal
        headerText='Schedule meeting with us at Findmeanintenship'
        open={openModal}
        handleClose={() => setOpenModal(false)}
      >
        <InlineWidget url='https://calendly.com/findmeaninternship/30min' />
      </AppModal>
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

      <section id='volunteer'>
        {/* volunteer for students */}
        <div className='mt-16 px-5'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-brand-dark mb-4'>
              Volunteer & Give Back
            </h3>
            <p className='text-slate-600 max-w-2xl mx-auto'>
              Join our mission-driven community. Whether you are a professional
              looking to mentor or a student wanting to gain experience, your
              time makes a difference.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Professional Mentors */}
            <div className='bg-brand-teal/5 border border-brand-teal/20 rounded-2xl p-8 flex flex-col'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='bg-brand-teal text-white p-3 rounded-full'>
                  <HeartHandshake className='w-6 h-6' />
                </div>
                <h3 className='text-xl font-bold text-brand-dark'>
                  For Professionals: Mentorship
                </h3>
              </div>
              <p className='text-slate-600 mb-6 flex-grow'>
                Share your industry expertise. Review portfolios, conduct mock
                interviews, or speak at our webinars.
              </p>
              <ul className='space-y-3 mb-8 text-sm text-slate-500 font-medium'>
                <li className='flex items-center gap-2'>
                  <CheckCircle2 className='w-4 h-4 text-brand-teal' /> 3-5
                  hours/month commitment
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle2 className='w-4 h-4 text-brand-teal' />{" "}
                  Networking with future talent
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle2 className='w-4 h-4 text-brand-teal' />{" "}
                  Certificate of Service
                </li>
              </ul>
              <button
                onClick={() =>
                  Window.newTab(
                    "https://airtable.com/appZEY5L7mjpgjj9G/pagOoTv2WbrUxr25S/form"
                  )
                }
                className='w-full bg-white border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-bold py-3 px-6 rounded-xl transition-all shadow-sm'
              >
                Become a Mentor
              </button>
            </div>

            {/* Student Volunteers */}
            <div className='bg-brand-accent/10 border border-brand-accent/30 rounded-2xl p-8 flex flex-col'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='bg-brand-accent text-brand-dark p-3 rounded-full'>
                  <Users className='w-6 h-6' />
                </div>
                <h3 className='text-xl font-bold text-brand-dark'>
                  Student Volunteer Program
                </h3>
              </div>
              <p className='text-slate-600 mb-6 flex-grow'>
                Gain practical experience while making an impact. We have open
                volunteer positions for <strong>Campus Ambassadors</strong> and
                various internal roles including but not limited to:
              </p>

              <div className='grid grid-cols-2 gap-4 mb-6'>
                <div className='bg-white/60 p-3 rounded-lg text-sm border border-brand-accent/20'>
                  <span className='font-bold text-brand-dark flex items-center gap-1'>
                    <Megaphone className='w-3 h-3 text-brand-teal' /> Campus
                    Ambassadors
                  </span>
                  <span className='text-slate-500 text-xs'>
                    Lead on your campus
                  </span>
                </div>
                <div className='bg-white/60 p-3 rounded-lg text-sm border border-brand-accent/20'>
                  <span className='font-bold block text-brand-dark'>
                    Social Media & Marketing
                  </span>
                  <span className='text-slate-500 text-xs'>
                    Content & Strategy
                  </span>
                </div>
                <div className='bg-white/60 p-3 rounded-lg text-sm border border-brand-accent/20'>
                  <span className='font-bold block text-brand-dark'>
                    Community Managers
                  </span>
                  <span className='text-slate-500 text-xs'>
                    Event Coordination
                  </span>
                </div>
                <div className='bg-white/60 p-3 rounded-lg text-sm border border-brand-accent/20 flex items-center justify-center'>
                  <span className='font-bold text-brand-dark/70 text-center text-xs italic'>
                    And many more roles...
                  </span>
                </div>
              </div>

              <ul className='space-y-3 mb-8 text-sm text-slate-500 font-medium'>
                <li className='flex items-center gap-2'>
                  <CheckCircle2 className='w-4 h-4 text-brand-accent' />{" "}
                  Flexible remote & on-campus options
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle2 className='w-4 h-4 text-brand-accent' />{" "}
                  Certificate of Volunteering
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle2 className='w-4 h-4 text-brand-accent' /> Direct
                  mentorship from leadership
                </li>
              </ul>
              <button
                onClick={() =>
                  Window.newTab(
                    "https://airtable.com/appZEY5L7mjpgjj9G/pagmMAlkM24RVDwda/form"
                  )
                }
                className='w-full bg-white border-2 border-brand-accent text-brand-dark hover:bg-brand-accent hover:border-brand-accent font-bold py-3 px-6 rounded-xl transition-all shadow-sm'
              >
                Apply to Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
