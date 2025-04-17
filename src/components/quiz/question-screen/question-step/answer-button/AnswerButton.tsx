'use client';
import React, { useState } from 'react';
import { useQuizContext } from '@/contexts/quiz-context-provider';
import { AnswerButtonProps, ButtonStatus } from '@/components/quiz/question-screen/question-step/answer-button/index';
import styles from './styles.module.css';

const AnswerButton = ({ answer, disableButton, setDisableButton }: AnswerButtonProps) => {
    const { activeQuestion, setActiveQuestion, setFinished, data } = useQuizContext();
    if (activeQuestion === null) return;

    const [status, setStatus] = useState<ButtonStatus>('idle');

    const goToNextStep = () => {
        if (answer.isCorrect) {
            if (data.length - 1 === activeQuestion) {
                setFinished(true);
                setActiveQuestion(null);
            } else {
                setActiveQuestion(activeQuestion + 1);
            }
        } else {
            setActiveQuestion(null);
            setFinished(true);
        }
    };
    const handleClick = () => {
        setDisableButton(true);
        setStatus('selected');

        setTimeout(() => {
            setStatus(answer.isCorrect ? 'correct' : 'wrong');

            setTimeout(() => {
                goToNextStep();
                setDisableButton(false);
                setStatus('idle');
            }, 500);
        }, 1000);
    };

    return (
        <button
            disabled={disableButton}
            aria-disabled={disableButton}
            aria-label={`answer ${answer.id}: ${answer.answer}`}
            className={`${styles.answerButton} ${
                status === 'selected'
                    ? styles.selected
                    : status === 'correct'
                      ? styles.correct
                      : status === 'wrong'
                        ? styles.wrong
                        : ''
            }`}
            onClick={handleClick}
        >
            {answer.id} {answer.answer}
        </button>
    );
};

export default AnswerButton;
