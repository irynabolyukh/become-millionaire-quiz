import styles from './page.module.css';
import QuizPage from '@/components/quiz/quiz-page/QuizPage';
import { getQuizData } from '@/lib/getQuizData';

export default async function Home() {
    const questions = await getQuizData();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <QuizPage questions={questions} />
            </main>
        </div>
    );
}
