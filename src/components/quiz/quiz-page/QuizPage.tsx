'use client';
import React from 'react';

import { QuizProvider } from '@/contexts/quiz-context-provider';
import { Question } from '@/types/question';
import Step from '@/components/quiz/step/Step';

const QuizPage = ({ questions }: { questions: Question[] }) => {
    return (
        <QuizProvider data={questions}>
            <Step />
        </QuizProvider>
    );
};

export default QuizPage;
