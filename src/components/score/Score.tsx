'use client';
import React from 'react';
import { useQuizContext } from '@/contexts/quiz-context-provider';
const Question = () => {
    const { rewardCollected, setFinished } = useQuizContext();
    return (
        <div>
            <p>{rewardCollected}</p>
            <button onClick={() => setFinished(false)}>Try Again</button>
        </div>
    );
};

export default Question;
