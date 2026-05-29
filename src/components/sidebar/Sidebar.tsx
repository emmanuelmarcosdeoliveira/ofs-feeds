import { PencilLineIcon } from '@phosphor-icons/react';

import { Avatar } from '../avatar/Avatar';

import styles from './Sidebar.module.css';
export default function Sidebar() {
  const urlImg =
    'https://images.unsplash.com/photo-1669023414171-56f0740e34cd?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={urlImg} alt="Imagem de Capa Profile" />
      <div className={styles.profile}>
        <Avatar
          hasBorder={true}
          src="https://github.com/oliveirafullstack.png"
        />
        <strong>Oliveira FullStack</strong>
        <span>FullStack Developer</span>
      </div>
      <footer>
        <a
          href="https://www.linkedin.com/in/oliveira-emmanuel/"
          rel="noreferrer"
        >
          <PencilLineIcon size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
