import { ComponentPropsWithoutRef } from 'react';
import { Answer } from '@/types/question';

export type ButtonStatus = 'idle' | 'selected' | 'correct' | 'wrong';

export type AnswerButtonProps = {
    answer: Answer;
    disableButton: boolean;
    setDisableButton: (d: boolean) => void;
} & ComponentPropsWithoutRef<'div'>;

export { default } from './AnswerButton';
