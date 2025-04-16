import { createContext, FC, useEffect, useState } from 'react';

import { useContextWithCheck } from '@/utils/helper';
import { QuizProviderProps, QuizContextProps } from '@/contexts/quiz-context-provider/index';

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

const QuizProvider: FC<QuizProviderProps> = ({ data, children }) => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const [finished, setFinished] = useState<boolean>(false);
    const [rewardCollected, setRewardCollected] = useState<string | number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedIndex = localStorage.getItem('currentQuestion');
        if (savedIndex) {
            setActiveQuestion(parseInt(savedIndex));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (activeQuestion !== null) {
            localStorage.setItem('currentQuestion', activeQuestion.toString());
        } else {
            localStorage.removeItem('currentQuestion');
        }
    }, [activeQuestion]);

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
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

const useQuizContext = () => useContextWithCheck(QuizContext);

export { QuizProvider, useQuizContext };
