import { createContext, FC, useEffect, useState } from 'react';

import { useContextWithCheck } from '@/utils/helper';
import { QuizProviderProps, QuizContextProps } from '@/contexts/quiz-context-provider/index';
import { LOCAL } from '@/consts/localStorage';

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

const QuizProvider: FC<QuizProviderProps> = ({ data, children }) => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const [finished, setFinished] = useState<boolean>(false);
    const [rewardCollected, setRewardCollected] = useState<string | number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedIndex = localStorage.getItem(LOCAL.CURRENT_QUESTION);
        const savedReward = localStorage.getItem(LOCAL.REWARD);
        if (savedIndex) {
            setActiveQuestion(parseInt(savedIndex));
        }
        if (savedReward) {
            setRewardCollected(savedReward);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (activeQuestion !== null) {
            localStorage.setItem(LOCAL.CURRENT_QUESTION, activeQuestion.toString());
            if (activeQuestion !== 0) {
                setRewardCollected(data[activeQuestion - 1].reward);
                localStorage.setItem(LOCAL.REWARD, data[activeQuestion - 1].reward.toString());
            }
        } else {
            localStorage.removeItem(LOCAL.CURRENT_QUESTION);
            localStorage.removeItem(LOCAL.REWARD);
        }
    }, [activeQuestion]);

    const tryAgain = () => {
        setFinished(false);
        setActiveQuestion(null);
        setRewardCollected(0);
    };

    if (loading) {
        return <div style={{ minHeight: '100vh' }}>Loading quiz...</div>;
    }

    return (
        <QuizContext.Provider
            value={{
                activeQuestion,
                setActiveQuestion,
                finished,
                setFinished,
                rewardCollected,
                setRewardCollected,
                data,
                tryAgain,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

const useQuizContext = () => useContextWithCheck(QuizContext);

export { QuizProvider, useQuizContext };
