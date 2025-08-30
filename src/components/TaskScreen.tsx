import React from 'react';
import { Header } from './Header';
import { Task } from '../types';
import { CheckCircle, Clock, Star } from 'lucide-react';

interface TaskScreenProps {
  task: Task;
  onBack: () => void;
}

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
      return 'Легкая задача';
    case 'medium':
      return 'Средняя задача';
    case 'hard':
      return 'Сложная задача';
  }
};

export const TaskScreen: React.FC<TaskScreenProps> = ({ task, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={task.title} onBack={onBack} showBack />
      
      <div className="p-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
              getDifficultyColor(task.difficulty)
            }`}>
              {getDifficultyText(task.difficulty)}
            </span>
            {task.completed && (
              <div className="flex items-center space-x-1 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Выполнено</span>
              </div>
            )}
          </div>
          
          <h1 className="text-xl font-bold text-gray-900 mb-3">{task.title}</h1>
          <p className="text-gray-600 leading-relaxed mb-6">{task.description}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>~15 минут</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4" />
              <span>+10 баллов</span>
            </div>
          </div>
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-150">
            {task.status === 'completed' ? 'Повторить' : task.status === 'in_progress' ? 'Продолжить' : 'Начать'}
          </button>
        </div>

      </div>
    </div>
  );
};