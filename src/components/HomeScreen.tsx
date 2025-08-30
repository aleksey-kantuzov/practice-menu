import React from 'react';
import { BookOpen, Code, Cpu, Info } from 'lucide-react';
import { NavigationButton } from './NavigationButton';
import { Header } from './Header';
import { Screen } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Header title="Обучение программированию" />
      
      <div className="p-4 space-y-4">
        <div className="space-y-3">
          <NavigationButton
            title="Теория"
            icon={BookOpen}
            onClick={() => onNavigate('theory')}
            disabled
          />
          
          <NavigationButton
            title="Практика"
            icon={Code}
            onClick={() => onNavigate('practice')}
            active
          />
          
          <NavigationButton
            title="Алгоритмы"
            icon={Cpu}
            onClick={() => onNavigate('algorithms')}
            disabled
          />
        </div>
      </div>
      
      {/* FAQ Button */}
      <button
        onClick={() => onNavigate('faq')}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl"
      >
        <Info className="w-5 h-5" />
      </button>
    </div>
  );
};