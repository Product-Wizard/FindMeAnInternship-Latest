import React from "react";
import { Globe, Home, Laptop } from "lucide-react";
import { JobLocalityType } from "@/types/model/Job.model";
interface JobLoactionPickerInterface {
  handleOnClickLoactionPicker: (string: JobLocalityType) => void;
  location: JobLocalityType;
}

function JobLoactionPicker({
  handleOnClickLoactionPicker,
  location,
}: JobLoactionPickerInterface) {
  return (
    <div className='flex flex-col items-center mb-8'>
      <div className='inline-flex bg-white p-1 rounded-full border border-slate-200 shadow-sm'>
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
          onClick={() => handleOnClickLoactionPicker("local")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
            location === "local"
              ? "bg-brand-teal text-white shadow-md"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Home className='w-4 h-4' /> Local (Ibadan)
        </button>
        <button
          onClick={() => handleOnClickLoactionPicker("remote")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
            location === "remote"
              ? "bg-brand-teal text-white shadow-md"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Laptop className='w-4 h-4' /> Remote / Generic
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

export default JobLoactionPicker;
