'use client';
import React from 'react';
import { useQuizContext } from '@/contexts/quiz-context-provider';
import styles from './styles.module.css';
const RewardsList = () => {
    const { data, rewardCollected } = useQuizContext();

    return (
        <div className={styles.rewardsWrapper}>
            <div className={styles.rewardsItems}>
                {data.map((i) => (
                    <div
                        className={`${styles.rewardItem} ${i.reward === rewardCollected ? styles.selected : ''}`}
                        key={i.reward}
                    >
                        {i.reward}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RewardsList;
