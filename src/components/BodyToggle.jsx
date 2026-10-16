import { BODIES, BODY_IDS } from '../data/bodies';
import styles from './BodyToggle.module.css';

export default function BodyToggle({ body, onChange, size = 'small' }) {
  return (
    <div className={`${styles.toggle} ${styles[size]}`} role="radiogroup" aria-label="Body style">
      {BODY_IDS.map((id) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={body === id}
          className={styles.option}
          onClick={() => onChange(id)}
        >
          <span>{BODIES[id].name}</span>
          <span className={styles.ja} lang="ja">{BODIES[id].ja}</span>
        </button>
      ))}
    </div>
  );
}
