
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  const baseStyles = 'w-full bg-slate-900 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition';
  
  if (label) {
    return (
      <div>
        <label className="block text-sm font-semibold mb-1">{label}:</label>
        <input className={`${baseStyles} ${className}`} {...props} />
      </div>
    );
  }

  return <input className={`${baseStyles} ${className}`} {...props} />;
};

export default Input;
