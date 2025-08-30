import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack, showBack = false }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center">
      {showBack && (
        <button
          onClick={onBack}
          className="mr-3 p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
      )}
      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
    </div>
  );
};