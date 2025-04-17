'use client';
import React, { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { CloseIcon, MenuIcon } from '@/icons';
import RewardsList from '@/components/quiz/question-screen/rewards/rewards-list/RewardsList';
import styles from './styles.module.css';
const Rewards = () => {
    const isTablet = useMediaQuery('(max-width: 768px)');
    const [showRewards, setShowRewards] = useState(false);
    return (
        <>
            {!isTablet ? (
                <RewardsList />
            ) : (
                <div className={styles.menuWrapper}>
                    <div className={styles.menuTopWrapper}>
                        <button onClick={() => setShowRewards(!showRewards)}>
                            {showRewards ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                    {showRewards && <RewardsList />}
                </div>
            )}
        </>
    );
};

export default Rewards;
