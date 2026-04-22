import React from "react";

interface AppModalProps {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
  className?: string;
  headerText?: string;
}
import { X } from "lucide-react";

function AppModal({
  open,
  handleClose,
  children = null,
  className = "",
  headerText = "",
}: AppModalProps) {
  if (open === false) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center flex-col justify-center bg-white/50 p-4'>
      <div
        className={`bg-white max-h-[80%] md:max-h-[66%] overflow-scroll w-full max-w-md rounded-xl shadow-2xl p-6 relative ${className}`}
      >
        <div className='absolute top-0 right-0'>
          <div className='h-fit  flex items-center w-full px-5 justify-between'>
            <p className='w-[80%]'>{headerText}</p>
            <button onClick={handleClose} className=' transition'>
              <X size={25} className='text-red-700 hover:text-gray-600 ' />
            </button>
          </div>
        </div>

        {/* modal children content */}
        <div className='space-y-4 mt-[25px]'>{children}</div>
      </div>
    </div>
  );
}

export default AppModal;
