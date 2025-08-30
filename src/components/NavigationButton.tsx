import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface NavigationButtonProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  title,
  subtitle,
  icon: Icon,
  onClick,
  disabled = false,
  active = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${
        active
          ? 'border-blue-500 bg-blue-50 shadow-sm'
          : disabled
          ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${
          active ? 'bg-blue-100' : disabled ? 'bg-gray-100' : 'bg-gray-100'
        }`}>
          <Icon className={`w-6 h-6 ${
            active ? 'text-blue-600' : disabled ? 'text-gray-400' : 'text-gray-600'
          }`} />
        </div>
        <div className="flex-1 text-left">
          <h3 className={`font-medium ${
            active ? 'text-blue-900' : disabled ? 'text-gray-400' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          {subtitle && (
            <p className={`text-sm ${
              active ? 'text-blue-600' : disabled ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};