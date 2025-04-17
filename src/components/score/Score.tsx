'use client';
import React from 'react';
import { useQuizContext } from '@/contexts/quiz-context-provider';
const Question = () => {
    const { rewardCollected, tryAgain } = useQuizContext();
    return (
        <div>
            <p>{rewardCollected}</p>
            <button onClick={tryAgain}>Try Again</button>
        </div>
    );
};

export default Question;
