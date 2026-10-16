import { POWER_TARGET_WHP, ratio } from '../data/bodies';
import styles from './Hero.module.css';

export default function Hero({ body }) {
  const stats = [
    { num: POWER_TARGET_WHP, unit: 'whp', label: 'Power target' },
    { num: ratio(body.weight, POWER_TARGET_WHP), unit: 'kg/whp', label: `At ${body.weight.toLocaleString('en-US')} kg kerb` },
    { num: 'R154', label: '5-speed manual' },
    { num: '1JZ', label: 'GTE VVT-i, stroked' },
  ];

  return (
    <header id="top" className={styles.hero}>
      <p className={styles.vertical} lang="ja" aria-hidden="true">見えない武器</p>

      <div className={styles.copy}>
        <p className={styles.tag}>
          <span className={styles.chassis}>{body.chassis}</span>
          2000 Toyota Crown Athlete V {body.name}
        </p>
        <h1 className={styles.h1}>The Invisible Weapon</h1>
        <p className={styles.sub}>
          A theoretical build document: manual swap, stroked 1JZ-GTE, and the rare satisfaction of being completely underestimated.
        </p>
      </div>

      <dl className={styles.stats}>
        {stats.map((s) => (
          <div className={styles.stat} key={s.label}>
            <dt className={styles.statLabel}>{s.label}</dt>
            <dd className={styles.statNum}>
              {s.num}
              {s.unit && <span className={styles.statUnit}>{s.unit}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
