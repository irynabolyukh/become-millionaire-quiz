'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import useMediaQuery from '@/hooks/useMediaQuery';
import { CloseIcon, MenuIcon } from '@/icons';
const RewardList = dynamic(() => import('@/components/quiz/question-screen/rewards/rewards-list/RewardsList'), {
    ssr: false,
});
import styles from './styles.module.css';
const Rewards = () => {
    const isTablet = useMediaQuery('(max-width: 768px)');
    const [showRewards, setShowRewards] = useState(false);
    return (
        <>
            {!isTablet ? (
                <RewardList />
            ) : (
                <div className={styles.menuWrapper}>
                    <div className={styles.menuTopWrapper}>
                        <button onClick={() => setShowRewards(!showRewards)}>
                            {showRewards ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                    {showRewards && <RewardList />}
                </div>
            )}
        </>
    );
};

export default Rewards;
