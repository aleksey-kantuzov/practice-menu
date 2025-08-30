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
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4">
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