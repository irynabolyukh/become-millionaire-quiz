import { ReactNode } from 'react';
import { Question } from '@/types/question';
import { Quiz } from '@/types/quiz';

export type QuizContextProps = {
    activeQuestion: number | null;
    setActiveQuestion: (tab: number | null) => void;
    setFinished: (tab: boolean) => void;
    setRewardCollected: (tab: string | number) => void;
    data: Question[];
    tryAgain: () => void;
} & Quiz;

export type QuizProviderProps = {
    children?: ReactNode;
    data: Question[];
};

export * from './QuizProvider';
