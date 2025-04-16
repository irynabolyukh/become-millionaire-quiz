'use client';
import React from 'react';
import { useQuizContext } from '@/contexts/quiz-context-provider';
import styles from './styles.module.css';
const Rewards = () => {
    const { data, rewardCollected } = useQuizContext();

    return (
        <div className={styles.rewardsWrapper}>
            {data.map((i) => (
                <div
                    className={i.reward.toString() == rewardCollected ? styles.rewardActive : styles.reward}
                    key={i.reward}
                >
                    {i.reward}
                </div>
            ))}
        </div>
    );
};

export default Rewards;
