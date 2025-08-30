import React from 'react';
import { BookOpen, Code, Cpu, Info } from 'lucide-react';
import { NavigationButton } from './NavigationButton';
import { Header } from './Header';
import { Screen } from '../types';
import { practiceBlocks } from '../data/practiceData';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const totalTasks = practiceBlocks.reduce((sum, block) => sum + block.tasks.length, 0);
  const completedTasks = practiceBlocks.reduce((sum, block) => 
    sum + block.tasks.filter(task => task.status === 'completed').length, 0
  );
  
  // Вычисляем среднюю оценку по завершенным задачам
  const completedTasksWithScores = practiceBlocks.flatMap(block => 
    block.tasks.filter(task => task.status === 'completed' && task.best_score !== null)
  );
  
  const averageScore = completedTasksWithScores.length > 0 
    ? Math.round(completedTasksWithScores.reduce((sum, task) => sum + (task.best_score || 0), 0) / completedTasksWithScores.length * 10) / 10
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Header title="SenseAI" />
      
      <div className="p-4 space-y-6">
        {/* Прогресс */}
        <div className="p-4 bg-white rounded-xl border border-gray-200">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">0</div>
              <div className="text-xs text-gray-500">Изучено уроков</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{completedTasks}/{totalTasks}</div>
              <div className="text-xs text-gray-500">Решено кейсов</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{averageScore}</div>
              <div className="text-xs text-gray-500">Средняя оценка</div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0}%` }} 
            />
          </div>
        </div>

        {/* Навигационные кнопки */}
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