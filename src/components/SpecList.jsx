import styles from './SpecList.module.css';

export default function SpecList({ title, rows, columns = 1, className = '' }) {
  return (
    <div className={`${styles.block} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      <dl className={columns === 2 ? styles.twoCol : undefined}>
        {rows.map(({ key, val, highlight }) => (
          <div className={styles.row} key={key}>
            <dt className={styles.key}>{key}</dt>
            <dd className={`${styles.val} ${highlight ? styles.highlight : ''}`}>{val}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
