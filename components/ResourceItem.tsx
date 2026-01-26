import { ResourceModelInterface } from "@/types/model/resource.model";
import { Calendar, Clock } from "lucide-react";
import React from "react";

interface ResourceItemProps {
  resource: ResourceModelInterface;
  handleClick: (resource: ResourceModelInterface) => void;
}

function ResourceItem({ resource, handleClick }: ResourceItemProps) {
  return (
    <div
      key={resource.id}
      onClick={() => handleClick(resource)}
      className='bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col h-full'
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={
            resource.imageUrl ||
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          }
          alt={resource.title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-teal uppercase tracking-wide'>
          {resource.category}
        </div>
      </div>

      <div className='p-6 flex flex-col flex-grow'>
        <div className='flex items-center gap-4 text-xs text-slate-400 mb-3'>
          <span className='flex items-center gap-1'>
            <Calendar className='w-3 h-3' /> {resource.createdAt}
          </span>
          <span className='flex items-center gap-1'>
            <Clock className='w-3 h-3' />{" "}
            {Math.ceil(resource?.body.split("")?.length / 60) + "min read"}
          </span>
        </div>

        <h3 className='text-xl font-bold text-brand-dark mb-3 leading-tight group-hover:text-brand-teal transition-colors'>
          {resource.title}
        </h3>

        <p className='text-slate-600 text-sm mb-4 line-clamp-3 flex-grow'>
          {resource.summary}
        </p>

        <div className='pt-4 border-t border-slate-50 flex items-center gap-2'>
          <div className='w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-dark text-xs font-bold'>
            {resource.author.charAt(0)}
          </div>
          <span className='text-sm font-medium text-slate-700'>
            {resource.author}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResourceItem;
