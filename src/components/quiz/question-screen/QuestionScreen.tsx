'use client';
import React from 'react';
import Rewards from '@/components/quiz/question-screen/rewards/Rewards';
import styles from './styles.module.css';
import QuestionStep from '@/components/quiz/question-screen/question-step/QuestionStep';
import ContentContainer from '@/components/content-container/ContentContainer';

const Question = () => {
    return (
        <div className={styles.questionStepWrapper}>
            <ContentContainer className={styles.content}>
                <QuestionStep />
                <Rewards />
            </ContentContainer>
        </div>
    );
};

export default Question;
