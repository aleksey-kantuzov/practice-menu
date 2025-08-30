import React, { useState } from 'react';
import { NavigationTabs } from './components/NavigationTabs';
import { TheoryScreen } from './components/TheoryScreen';
import { PracticeScreen } from './components/PracticeScreen';
import { AlgorithmsScreen } from './components/AlgorithmsScreen';
import { TaskScreen } from './components/TaskScreen';
import { FAQScreen } from './components/FAQScreen';
import { Screen, Task } from './types';
import { Info } from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('practice');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showFAQ, setShowFAQ] = useState(false);

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
    } else if (showFAQ) {
      setShowFAQ(false);
    }
  };

  if (showFAQ) {
    return <FAQScreen onBack={handleBack} />;
  }

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
      </div>
      
      {/* FAQ Button */}
      <button
        onClick={() => setShowFAQ(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl"
      >
        <Info className="w-5 h-5" />
      </button>
    </div>
  );
}

export default App;