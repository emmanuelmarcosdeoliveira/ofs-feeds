import type React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
