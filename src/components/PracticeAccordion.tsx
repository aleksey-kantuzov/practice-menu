import React, { useState } from 'react';
import { ChevronDown, CheckCircle, Play, Lock, Code, Database, Zap, Clock } from 'lucide-react';
import { PracticeBlock, Task } from '../types';

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

export const PracticeAccordion: React.FC<PracticeAccordionProps> = ({
  block,
  onTaskClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = getIcon(block.icon);

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
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 pb-4 space-y-3">
          {block.tasks.map((task) => (
            <button
              key={task.id}
              onClick={() => task.status !== 'not_started' && onTaskClick(task)}
              disabled={task.status === 'not_started'}
              className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
                task.status === 'not_started'
                  ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-3">{task.title}</h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        getDifficultyColor(task.difficulty)
                      }`}>
                        {getDifficultyText(task.difficulty)}
                      </span>
                      
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        getStatusColor(task.status)
                      }`}>
                        {getStatusText(task.status)}
                      </span>
                    </div>
                    
                    <div className="text-sm font-medium text-gray-900">
                      {task.best_score !== null ? `${task.best_score}/10` : '—/10'}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};