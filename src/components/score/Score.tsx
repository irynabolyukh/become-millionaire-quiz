'use client';
import React from 'react';
import { useQuizContext } from '@/contexts/quiz-context-provider';
import styles from './styles.module.css';
import Button from '@/components/button/Button';
import { HandIcon } from '@/icons';
import ContentContainer from '@/components/content-container/ContentContainer';
const Score = () => {
    const { rewardCollected, tryAgain } = useQuizContext();
    return (
        <div className={styles.scoreWrapper}>
            <ContentContainer className={styles.scoreContent}>
                <div className={styles.handIconWrapper}>
                    <HandIcon className={styles.handIcon} />
                </div>
                <div className={styles.scoreTextWrapper}>
                    <div>
                        <p>Total score:</p>
                        <p>{rewardCollected} earned</p>
                    </div>
                    <Button
                        aria-label="try again button"
                        onClick={tryAgain}
                    >
                        Try again
                    </Button>
                </div>
            </ContentContainer>
        </div>
    );
};

export default Score;
