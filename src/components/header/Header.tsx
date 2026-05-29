import igniteLogo from '../../assets/svg/ignite.svg';
import '../../styles/index.css';
import styles from './Header.module.css';
export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.center}>
          <div>
            <img src={igniteLogo} alt="Logo Ignite Feed" />
          </div>
          <span>Feed | OFS</span>
        </div>
      </div>
    </header>
  );
}
