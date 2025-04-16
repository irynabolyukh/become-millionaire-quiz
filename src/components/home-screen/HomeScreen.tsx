import React from 'react';

import styles from './styles.module.css';
import { HandIcon } from '@/icons';
import { useQuizContext } from '@/contexts/quiz-context-provider';

const HomeScreen = () => {
    const { setActiveQuestion } = useQuizContext();

    return (
        <div className={styles.wrapper}>
            <HandIcon />
            <button onClick={() => setActiveQuestion(0)}>start</button>
        </div>
    );
};

export default HomeScreen;
