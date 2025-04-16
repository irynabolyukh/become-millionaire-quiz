'use client';
import React from 'react';

import { useQuizContext } from '@/contexts/quiz-context-provider';
import Score from '@/components/score/Score';
import HomeScreen from '@/components/home-screen/HomeScreen';
import QuestionScreen from '@/components/quiz/question-screen/QuestionScreen';

const Step = () => {
    const { finished, activeQuestion } = useQuizContext();

    if (finished) return <Score />;

    if (activeQuestion !== null) return <QuestionScreen />;

    return <HomeScreen />;
};

export default Step;
