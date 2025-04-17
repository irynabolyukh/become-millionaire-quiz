'use client';
import React, { useState } from 'react';
import { useQuizContext } from '@/contexts/quiz-context-provider';
import AnswerButton from '@/components/quiz/question-screen/question-step/answer-button';
const Question = () => {
    const { data, activeQuestion } = useQuizContext();
    if (activeQuestion === null) return;

    const [disableButton, setDisableButton] = useState<boolean>(false);

    return (
        <div>
            <p>{data[activeQuestion].question}</p>
            <div>
                {data[activeQuestion].answers.map((a) => (
                    <AnswerButton
                        key={a.id}
                        answer={a}
                        disableButton={disableButton}
                        setDisableButton={setDisableButton}
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;
