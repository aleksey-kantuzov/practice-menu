import React, { useState } from 'react';
import { NavigationTabs } from './components/NavigationTabs';
import { TheoryScreen } from './components/TheoryScreen';
import { PracticeScreen } from './components/PracticeScreen';
import { AlgorithmsScreen } from './components/AlgorithmsScreen';
import { TaskScreen } from './components/TaskScreen';
import { FAQScreen } from './components/FAQScreen';
import { Screen, Task } from './types';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('practice');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    setSelectedTask(null);
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleBack = () => {
    if (selectedTask) {
      setSelectedTask(null);
    }
  };

  if (selectedTask) {
    return <TaskScreen task={selectedTask} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-lg font-semibold text-gray-900 text-center">SenseAI / Все кейсы</h1>
      </div>
      
      <NavigationTabs currentScreen={currentScreen} onNavigate={handleNavigate} />
      
      <div className="flex-1">
        {currentScreen === 'theory' && <TheoryScreen />}
        {currentScreen === 'practice' && (
          <PracticeScreen onTaskClick={handleTaskClick} />
        )}
        {currentScreen === 'algorithms' && <AlgorithmsScreen />}
        {currentScreen === 'faq' && <FAQScreen />}
      </div>
    </div>
  );
}

export default App;