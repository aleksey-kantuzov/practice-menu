export interface Task {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'not_started' | 'in_progress' | 'completed';
  best_score: number | null;
  description: string;
}

export interface PracticeBlock {
  id: number;
  title: string;
  description: string;
  tasks: Task[];
}

export type Screen = 'home' | 'practice' | 'theory' | 'algorithms' | 'faq';