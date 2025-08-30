import React from 'react';
import { PracticeAccordion } from './PracticeAccordion';
import { practiceBlocks } from '../data/practiceData';
import { Task } from '../types';

interface PracticeScreenProps {
  onTaskClick: (task: Task) => void;
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({
  onTaskClick
}) => {
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
    <div className="min-h-screen bg-gray-50">
      <div className="p-4">
        <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-medium text-gray-900">Прогресс</h3>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{averageScore}</div>
              <div className="text-xs text-gray-500">Средняя оценка</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{completedTasks}/{totalTasks}</div>
              <div className="text-xs text-gray-500">Успешно решено</div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0}%` }} 
            />
          </div>
        </div>

        <div className="space-y-4">
          {practiceBlocks.map((block) => (
            <PracticeAccordion
              key={block.id}
              block={block}
              onTaskClick={onTaskClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};