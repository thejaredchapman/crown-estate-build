import styles from './Footer.module.css';

export default function Footer({ body }) {
  return (
    <footer className={styles.footer}>
      <p>{body.chassis} Crown Athlete V {body.name}. A theoretical build spec.</p>
      <p className={styles.ja} lang="ja">クラウン アスリート V {body.ja}</p>
    </footer>
  );
}
