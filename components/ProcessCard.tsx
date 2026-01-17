
import React from 'react';
import { AdmissionStep } from '../types';

interface ProcessCardProps {
  step: AdmissionStep;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ step }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1">
      <div className={`w-12 h-12 ${step.iconBgColor} rounded-xl flex items-center justify-center ${step.iconTextColor} mb-6`}>
        <span className="material-symbols-outlined text-3xl">{step.icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">
        {step.number}. {step.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

export default ProcessCard;
