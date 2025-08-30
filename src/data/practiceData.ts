import { PracticeBlock } from '../types';

export const practiceBlocks: PracticeBlock[] = [
  {
    id: 1,
    title: "Основы программирования",
    description: "Базовые концепции и принципы разработки",
    icon: "Code",
    tasks: [
      {
        id: 1,
        title: "Переменные и типы данных",
        difficulty: 'easy',
        status: 'completed',
        best_score: 8,
        description: "Изучите основы работы с переменными и различными типами данных"
      },
      {
        id: 2,
        title: "Условные операторы",
        difficulty: 'easy',
        status: 'in_progress',
        best_score: null,
        description: "Практикуйте использование if-else конструкций"
      },
      {
        id: 3,
        title: "Циклы и итерации",
        difficulty: 'medium',
        status: 'not_started',
        best_score: null,
        description: "Освойте работу с циклами for и while"
      }
    ]
  },
  {
    id: 2,
    title: "Структуры данных",
    description: "Работа с массивами, объектами и коллекциями",
    icon: "Database",
    tasks: [
      {
        id: 4,
        title: "Массивы и методы",
        difficulty: 'medium',
        status: 'not_started',
        best_score: null,
        description: "Изучите основные методы работы с массивами"
      },
      {
        id: 5,
        title: "Объекты и их свойства",
        difficulty: 'medium',
        status: 'not_started',
        best_score: null,
        description: "Практика создания и манипулирования объектами"
      },
      {
        id: 6,
        title: "Коллекции и Map/Set",
        difficulty: 'hard',
        status: 'not_started',
        best_score: null,
        description: "Продвинутые структуры данных"
      }
    ]
  },
  {
    id: 3,
    title: "Функции и области видимости",
    description: "Создание и использование функций",
    icon: "Zap",
    tasks: [
      {
        id: 7,
        title: "Объявление функций",
        difficulty: 'easy',
        status: 'not_started',
        best_score: null,
        description: "Различные способы создания функций"
      },
      {
        id: 8,
        title: "Замыкания и контекст",
        difficulty: 'hard',
        status: 'not_started',
        best_score: null,
        description: "Понимание областей видимости и замыканий"
      },
      {
        id: 9,
        title: "Стрелочные функции",
        difficulty: 'medium',
        status: 'not_started',
        best_score: null,
        description: "Современный синтаксис функций ES6+"
      }
    ]
  },
  {
    id: 4,
    title: "Асинхронное программирование",
    description: "Работа с промисами и асинхронным кодом",
    icon: "Clock",
    tasks: [
      {
        id: 10,
        title: "Промисы и then/catch",
        difficulty: 'medium',
        status: 'completed',
        best_score: 9,
        description: "Основы асинхронной работы с промисами"
      },
      {
        id: 11,
        title: "Async/Await синтаксис",
        difficulty: 'medium',
        status: 'in_progress',
        best_score: null,
        description: "Современный подход к асинхронности"
      },
      {
        id: 12,
        title: "Обработка ошибок",
        difficulty: 'hard',
        status: 'not_started',
        best_score: null,
        description: "Правильная обработка асинхронных ошибок"
      }
    ]
  }
];