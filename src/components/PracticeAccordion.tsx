import React, { useState } from 'react';
import { ChevronDown, Code, Database, Zap, Clock } from 'lucide-react';
import { PracticeBlock, Task } from '../types';
import { practiceBlocks } from '../data/practiceData';

interface PracticeAccordionProps {
  block: PracticeBlock;
  onTaskClick: (task: Task) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code':
      return Code;
    case 'Database':
      return Database;
    case 'Zap':
      return Zap;
    case 'Clock':
      return Clock;
    default:
      return Code;
  }
};

const getDifficultyColor = (difficulty: Task['difficulty']) => {
  switch (difficulty) {
    case 'easy':
      return 'text-green-600 bg-green-100';
    case 'medium':
      return 'text-yellow-600 bg-yellow-100';
    case 'hard':
      return 'text-red-600 bg-red-100';
  }
};

const getDifficultyText = (difficulty: Task['difficulty']) => {
  switch (difficulty) {
    case 'easy':
      return 'Легкий';
    case 'medium':
      return 'Средний';
    case 'hard':
      return 'Сложный';
  }
};

const getStatusColor = (status: Task['status']) => {
  switch (status) {
    case 'completed':
      return 'text-green-600 bg-green-100';
    case 'in_progress':
      return 'text-blue-600 bg-blue-100';
    case 'not_started':
      return 'text-gray-500 bg-gray-100';
  }
};

const getStatusText = (status: Task['status']) => {
  switch (status) {
    case 'completed':
      return 'Завершен';
    case 'in_progress':
      return 'В процессе';
    case 'not_started':
      return 'Не начат';
  }
};

// Функция для определения доступности задачи
const isTaskUnlocked = (taskId: number): boolean => {
  // Получаем все задачи в порядке их следования
  const allTasks = practiceBlocks.flatMap(block => block.tasks);
  const currentTaskIndex = allTasks.findIndex(task => task.id === taskId);
  
  if (currentTaskIndex === 0) {
    // Первая задача всегда доступна
    return true;
  }
  
  // Проверяем, завершена ли предыдущая задача
  const previousTask = allTasks[currentTaskIndex - 1];
  return previousTask.status === 'completed';
};

export const PracticeAccordion: React.FC<PracticeAccordionProps> = ({
  block,
  onTaskClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = getIcon(block.icon);

  // Подсчитываем завершенные задачи
  const completedTasks = block.tasks.filter(task => task.status === 'completed').length;
  const totalTasks = block.tasks.length;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left hover:bg-gray-50 transition-all duration-200"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gray-100">
              <IconComponent className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{block.title}</h3>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              {completedTasks}/{totalTasks}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            />
          </div>
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 pb-4 space-y-3">
          {block.tasks.map((task) => {
            const isUnlocked = isTaskUnlocked(task.id);
            const isClickable = isUnlocked && task.status !== 'not_started';
            
            return (
              <button
                key={task.id}
                onClick={() => isClickable && onTaskClick(task)}
                disabled={!isUnlocked}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
                  !isUnlocked
                    ? 'border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed'
                    : isClickable
                    ? 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className={`font-medium mb-3 ${
                      !isUnlocked ? 'text-gray-400' : 'text-gray-900'
                    }`}>
                      {task.title}
                    </h4>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          !isUnlocked 
                            ? 'text-gray-400 bg-gray-200'
                            : getDifficultyColor(task.difficulty)
                        }`}>
                          {getDifficultyText(task.difficulty)}
                        </span>
                        
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          !isUnlocked
                            ? 'text-gray-400 bg-gray-200'
                            : getStatusColor(task.status)
                        }`}>
                          {!isUnlocked ? 'Не начат' : getStatusText(task.status)}
                        </span>
                      </div>
                      
                      <div className={`text-center flex flex-col items-center justify-center ${
                        !isUnlocked ? 'text-gray-400' : 'text-gray-900'
                      }`}>
                        <div className="text-sm font-bold">
                          {task.best_score !== null ? `${task.best_score}/10` : '—/10'}
                        </div>
                        <div className="text-xs text-gray-500">Оценка</div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};