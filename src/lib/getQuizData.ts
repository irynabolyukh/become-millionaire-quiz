import { promises as fs } from 'fs';
import path from 'path';
import { Question } from '@/types/question';

export async function getQuizData(): Promise<Question[]> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'data.json');
        const file = await fs.readFile(filePath, 'utf-8');
        const parsed: unknown = JSON.parse(file);

        if (Array.isArray(parsed)) {
            return parsed as Question[];
        } else {
            console.warn('Parsed data is not an array');
            return [];
        }
    } catch (error) {
        console.error('Failed to fetch quiz data:', error);
        return [];
    }
}
