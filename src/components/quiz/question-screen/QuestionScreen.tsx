'use client';
import React from 'react';
import Rewards from '@/components/quiz/question-screen/rewards/Rewards';
import styles from './styles.module.css';
import QuestionStep from '@/components/quiz/question-screen/question-step/QuestionStep';

const Question = () => {
    return (
        <div className={styles.questionStepWrapper}>
            <QuestionStep />
            <Rewards />
        </div>
    );
};

export default Question;
