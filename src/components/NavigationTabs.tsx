import React from 'react';
import { Screen } from '../types';

interface NavigationTabsProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  currentScreen,
  onNavigate
}) => {
  const tabs = [
    { id: 'theory' as Screen, label: 'Теория' },
    { id: 'practice' as Screen, label: 'Практика' },
    { id: 'algorithms' as Screen, label: 'Алгоритмы' },
    { id: 'faq' as Screen, label: 'FAQ' }
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex space-x-2 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              currentScreen === tab.id
                ? 'bg-blue-500 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};