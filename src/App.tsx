import React, { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { TheoryScreen } from './components/TheoryScreen';
import { PracticeScreen } from './components/PracticeScreen';
import { AlgorithmsScreen } from './components/AlgorithmsScreen';
import { TaskScreen } from './components/TaskScreen';
import { FAQScreen } from './components/FAQScreen';
import { Header } from './components/Header';
import { Screen, Task } from './types';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
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
    } else if (currentScreen !== 'home') {
      setCurrentScreen('home');
    }
  };

  if (selectedTask) {
    return <TaskScreen task={selectedTask} onBack={handleBack} />;
  }

  const getScreenTitle = () => {
    switch (currentScreen) {
      case 'home':
        return 'SenseAI / Все кейсы';
      case 'theory':
        return 'Теория';
      case 'practice':
        return 'Практика';
      case 'algorithms':
        return 'Алгоритмы';
      case 'faq':
        return 'FAQ';
      default:
        return 'SenseAI / Все кейсы';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title={getScreenTitle()} 
        onBack={currentScreen !== 'home' ? handleBack : undefined}
        showBack={currentScreen !== 'home'}
      />
      
      <div className="flex-1">
        {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} />}
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