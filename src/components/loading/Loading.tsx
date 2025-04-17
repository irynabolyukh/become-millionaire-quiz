import React, { CSSProperties } from 'react';

import styles from './styles.module.css';
const Loading = ({ customStyle }: { customStyle?: CSSProperties }) => {
    return (
        <div
            className={styles.skeleton}
            style={customStyle}
        ></div>
    );
};

export default Loading;
