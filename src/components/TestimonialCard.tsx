import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  parentName: string;
  childClass: string;
}

export function TestimonialCard({ quote, parentName, childClass }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
      <Quote className="w-10 h-10 text-emerald-600 mb-4 flex-shrink-0" />
      <p className="text-gray-700 leading-relaxed mb-4 italic flex-grow">"{quote}"</p>
      <div className="border-t border-gray-200 pt-4 mt-auto">
        <p className="font-bold text-gray-900">{parentName}</p>
        <p className="text-sm text-gray-600">Parent of Class {childClass} Student</p>
      </div>
    </div>
  );
}
