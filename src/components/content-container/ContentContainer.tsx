import React from 'react';
import { ContentContainerProps } from '@/components/content-container/index';
import styles from './styles.module.css';
const ContentContainer = ({ children, className }: ContentContainerProps) => {
    return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default ContentContainer;
