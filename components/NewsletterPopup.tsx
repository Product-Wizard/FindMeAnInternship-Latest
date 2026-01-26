import React, { useState, useEffect } from "react";
import { X, Mail, Bell, Check } from "lucide-react";
import NewsLetterSubscriberFormValidators from "@/formValidator/NewsLetterSubscriberFormValidator";
import NewsLetterSubscriberService from "@/ApiService/NewsLetterSubscriberSevice";
import { CreateNewsLetterSubscriberModel } from "@/types/model/NewsLetterSubscriber.model";
import toast from "react-hot-toast";
import LoadingIndicator from "./LoadingIndicator";
import FormErrorMessage from "./FormErrorMessage";

export const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const newsLetterSbscriberForm =
    NewsLetterSubscriberFormValidators.createNewsLetterSubscriber();
  const newsLetterSubscriberMutation =
    NewsLetterSubscriberService.createNewsLetterSubscriberServiceMutation();

  const handleSubscribeNewsLetter = (data: CreateNewsLetterSubscriberModel) => {
    newsLetterSubscriberMutation.mutate(data, {
      onSuccess: (data) => {
        // toast.success(data.message, { duration: 5000 });
        newsLetterSbscriberForm.reset();
        setStep("success");
        // Simulate API call
        setTimeout(() => {
          handleClose();
        }, 5000);
      },
      onError: (error: any) => {
        toast.error(
          error?.response?.message ||
            error.message ||
            "Newsletter subscription error"
        );
      },
    });
  };
  useEffect(() => {
    // Check if user has already closed or subscribed in this session
    // Using sessionStorage so it resets when the tab is closed, allowing you to see it again on a new visit
    const hasInteracted = sessionStorage.getItem("newsletter_popup_closed");
    if (!hasInteracted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // Show after 4 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("newsletter_popup_closed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity opacity-100'
        onClick={handleClose}
      />

      {/* Card */}
      <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-sm md:max-w-2xl overflow-hidden flex flex-col md:flex-row transform transition-all scale-100 opacity-100 animate-fade-in-up'>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className='absolute top-3 right-3 md:top-4 md:right-4 z-10 p-1.5 md:p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-slate-500 hover:text-slate-800'
        >
          <X className='w-4 h-4 md:w-5 md:h-5' />
        </button>

        {/* Left Side (Visual) - Hidden on Mobile */}
        <div className='hidden md:flex bg-brand-teal text-white p-8 md:w-2/5 flex-col justify-center relative overflow-hidden'>
          {/* Background Pattern */}
          <div className='absolute top-0 left-0 w-full h-full bg-brand-dark/10' />
          <div className='absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 rounded-full blur-3xl' />

          <div className='relative z-10'>
            <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md shadow-inner'>
              <Bell className='w-6 h-6 text-white' />
            </div>
            <h3 className='text-2xl font-bold mb-3 leading-tight'>
              Be the First to Know
            </h3>
            <p className='text-brand-teal-light text-sm opacity-90 leading-relaxed'>
              Get notified about new internships at top companies before they
              are posted anywhere else.
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className='p-6 md:p-8 w-full md:w-3/5 bg-white flex flex-col justify-center md:min-h-[400px]'>
          {step === "form" ? (
            <>
              {/* Mobile Header (Visible only on mobile to replace left side) */}
              <div className='md:hidden flex items-center gap-2 mb-3 text-brand-teal'>
                <div className='p-1.5 bg-brand-teal/10 rounded-lg'>
                  <Bell className='w-4 h-4' />
                </div>
                <span className='font-bold text-xs uppercase tracking-wide'>
                  Weekly Updates
                </span>
              </div>

              <h4 className='text-lg md:text-xl font-bold text-brand-dark mb-2'>
                Get Opportunities
              </h4>
              <p className='text-slate-600 text-sm mb-4 md:mb-6 leading-relaxed'>
                Join 1,500+ students. We send personalized internship matches
                directly to your inbox.
              </p>

              <form
                onSubmit={newsLetterSbscriberForm.handleSubmit(
                  handleSubscribeNewsLetter
                )}
                className='space-y-3 md:space-y-4'
              >
                <div>
                  <label htmlFor='email-popup' className='sr-only'>
                    Email address
                  </label>
                  <div className='relative group'>
                    <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors' />
                    <input
                      id='email-popup'
                      type='email'
                      placeholder='Enter your email'
                      className='w-full pl-9 pr-4 py-2.5 md:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all text-sm placeholder:text-slate-400'
                      {...newsLetterSbscriberForm.register("email")}
                    />
                  </div>
                  <div>
                    <FormErrorMessage
                      message={
                        newsLetterSbscriberForm?.formState?.errors?.email
                          ?.message
                      }
                    />
                  </div>
                </div>
                <button
                  type='submit'
                  className='w-full bg-brand-dark hover:bg-brand-teal text-white font-bold py-2.5 md:py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base flex items-center justify-center'
                >
                  {newsLetterSubscriberMutation.isPending ? (
                    <LoadingIndicator size='20px' />
                  ) : (
                    "Subscribe for Free"
                  )}
                </button>
              </form>
              <p className='text-[10px] md:text-xs text-slate-400 mt-3 md:mt-4 text-center'>
                No spam. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <div className='text-center py-6 md:py-8 flex flex-col items-center'>
              <div className='w-14 h-14 md:w-16 md:h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 md:mb-6 animate-[bounce_1s_infinite]'>
                <Check className='w-6 h-6 md:w-8 md:h-8' />
              </div>
              <h4 className='text-xl md:text-2xl font-bold text-brand-dark mb-2'>
                You're on the list!
              </h4>
              <p className='text-slate-600 mb-6 text-sm md:text-base'>
                Keep an eye on your inbox for the latest roles.
              </p>
              <button
                onClick={handleClose}
                className='text-sm font-bold text-brand-teal hover:text-brand-dark transition-colors'
              >
                Return to browsing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
