export interface Question {
  id: number;
  category: string;
  text: string;
  highlight?: string;
  options: {
    label: string;
    value: number;
  }[];
  image?: string;
  hint?: string;
}

export type AppState = 'landing' | 'survey' | 'complete';
