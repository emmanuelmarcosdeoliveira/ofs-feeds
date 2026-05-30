import { ThumbsUpIcon, TrashIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { Avatar } from '../avatar/Avatar';
import styles from './Comment.module.css';

interface ComentProps {
  content: string;
  onDeleteComment: (coment: string) => void;
}

export default function Comment({ content, onDeleteComment }: ComentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <div>
        <Avatar
          alt="imagem de perfil"
          hasBorder={false}
          src="https://www.github.com/diego3g.png"
        />
      </div>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Oliveira FullStack</strong>
              <time
                title="Publicado em 24 de Abril as 11:03"
                dateTime="2025-04-24 11:03:35
        "
              >
                Cerca de 1h atrás{' '}
              </time>
            </div>
            <button
              type="button"
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <TrashIcon size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button type="button" onClick={handleLikeComment}>
            <ThumbsUpIcon />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
