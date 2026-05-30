import type { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, alt = '', ...props }: AvatarProps) {
  return (
    <div className={styles.avatar}>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        alt={alt}
        {...props}
      />
    </div>
  );
}
