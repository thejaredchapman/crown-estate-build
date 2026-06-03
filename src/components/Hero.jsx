import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.grid} />
      <div className={styles.chassis}>JZS171</div>

      <div className={styles.tag}>2000 · Toyota Crown Athlete V Estate · JZS171W</div>
      <h1 className={styles.h1}>
        The <em>Invisible</em>
        <br />Weapon
      </h1>
      <p className={styles.sub}>
        A theoretical build document — manual swap, mild 1JZ-GTE, and the rare satisfaction of being completely underestimated.
      </p>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statNum}>450<span className={styles.statUnit}>whp</span></div>
          <div className={styles.statLabel}>Power Ceiling</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>R154</div>
          <div className={styles.statLabel}>5-Speed Manual</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>1JZ</div>
          <div className={styles.statLabel}>GTE VVT-i</div>
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </div>
  );
}
