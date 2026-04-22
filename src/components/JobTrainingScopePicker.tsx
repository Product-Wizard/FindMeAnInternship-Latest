import React from "react";
import { Globe, Home, Laptop } from "lucide-react";
import { JobTrainigScope } from "@/types/model/Job.model";
interface JobTrainingScopePickerInterface {
  handleOnClickLoactionPicker: (string: JobTrainigScope) => void;
  location: JobTrainigScope;
}

function JobTrainingScopePicker({
  handleOnClickLoactionPicker,
  location,
}: JobTrainingScopePickerInterface) {
  return (
    <div className='flex item-center justify-center'>
      <div className='flex overflow-x-auto no-scrollbar scroll-smooth bg-white p-1 rounded-full border border-slate-200 shadow-sm whitespace-nowrap w-auto '>
        <button
          onClick={() => handleOnClickLoactionPicker("")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
            location === ""
              ? "bg-brand-teal text-white shadow-md"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleOnClickLoactionPicker("siwes_or_general")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
            location === "siwes_or_general"
              ? "bg-brand-teal text-white shadow-md"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Home className='w-4 h-4' /> Siwes/General
        </button>
        <button
          onClick={() => handleOnClickLoactionPicker("graduate_training")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
            location === "graduate_training"
              ? "bg-brand-teal text-white shadow-md"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Laptop className='w-4 h-4' /> Graduate Training
        </button>
        <button
          onClick={() => handleOnClickLoactionPicker("international")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
            location === "international"
              ? "bg-brand-teal text-white shadow-md"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Globe className='w-4 h-4' /> International
        </button>
      </div>
    </div>
  );
}

export default JobTrainingScopePicker;
