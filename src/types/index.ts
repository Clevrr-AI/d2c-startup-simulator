// Game state and data types

export interface GameMetrics {
  revenue: number;       // Monthly revenue in dollars
  margins: number;       // Percentage (0-100)
  employeeHappiness: number; // Scale 0-100
  founderSanity: number;     // Scale 0-100
  cash: number;          // Available cash in dollars
}

export interface GameState {
  brandName: string;
  currentMonth: number;  // 1-12
  metrics: GameMetrics;
  gameStatus: 'not-started' | 'setup' | 'in-progress' | 'won' | 'lost';
  questionHistory: {
    question: string;
    choice: string;
    effects: Partial<GameMetrics>;
  }[];
}

export type PersonaType = 'chad' | 'molly' | 'opal' | 'karen' | 'vic' | 'clevrr';

export interface Persona {
  id: PersonaType;
  name: string;
  title: string;
  style: string;
}

export interface Question {
  id: string;
  month: number;
  text: string;
  persona: PersonaType;
  choices: {
    text: string;
    effects: Partial<GameMetrics>;
  }[];
}