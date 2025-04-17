import React from 'react';

import styles from './styles.module.css';
import { HandIcon } from '@/icons';
import { useQuizContext } from '@/contexts/quiz-context-provider';
import Button from '@/components/button/Button';
import ContentContainer from '@/components/content-container/ContentContainer';

const HomeScreen = () => {
    const { setActiveQuestion } = useQuizContext();

    return (
        <div className={styles.homeWrapper}>
            <ContentContainer className={styles.homeContent}>
                <div className={styles.handIconWrapper}>
                    <HandIcon className={styles.handIcon} />
                </div>
                <div className={styles.homeTextWrapper}>
                    <h1>Who wants to be a millionaire?</h1>
                    <Button
                        aria-label="start button"
                        onClick={() => setActiveQuestion(0)}
                    >
                        Start
                    </Button>
                </div>
            </ContentContainer>
        </div>
    );
};

export default HomeScreen;
