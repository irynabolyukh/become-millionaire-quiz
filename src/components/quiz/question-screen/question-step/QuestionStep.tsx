'use client';
import React, { useState } from 'react';
import { useQuizContext } from '@/contexts/quiz-context-provider';
import AnswerButton from '@/components/quiz/question-screen/question-step/answer-button';
import styles from './styles.module.css';
const Question = () => {
    const { data, activeQuestion } = useQuizContext();
    const [disableButton, setDisableButton] = useState<boolean>(false);

    if (activeQuestion === null) return;

    return (
        <div className={styles.questionStepWrapper}>
            <h2>{data[activeQuestion].question}</h2>
            <div className={styles.questionStepAnswers}>
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
