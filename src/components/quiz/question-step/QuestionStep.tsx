'use client';
import React from 'react';
import { useQuizContext } from '@/contexts/quiz-context-provider';
const Question = () => {
    const { data, activeQuestion, setActiveQuestion, setRewardCollected, setFinished } = useQuizContext();
    if (activeQuestion === null) return;

    const handleClick = (isCorrect?: boolean) => {
        if (isCorrect) {
            if (data.length - 1 === activeQuestion) {
                setRewardCollected(data[activeQuestion].reward);
                setFinished(true);
                setActiveQuestion(null);
            } else {
                setRewardCollected(data[activeQuestion].reward);
                setActiveQuestion(activeQuestion + 1);
            }
        } else {
            setActiveQuestion(null);
            setFinished(true);
        }
    };

    return (
        <div>
            <p>{data[activeQuestion].question}</p>
            <div>
                {data[activeQuestion].answers.map((i) => (
                    <button
                        key={i.id}
                        onClick={() => handleClick(i.isCorrect)}
                    >
                        {i.answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
