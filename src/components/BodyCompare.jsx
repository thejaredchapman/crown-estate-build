import SectionHeading from './SectionHeading';
import BodyToggle from './BodyToggle';
import { BODIES, POWER_TARGET_WHP, STOCK_PS, kg, mm, ratio } from '../data/bodies';
import { ACCEL_ASSUMPTIONS, SETUPS, fmtSec, zeroToSixty } from '../data/acceleration';
import styles from './BodyCompare.module.css';

const { estate, sedan } = BODIES;

function diff(a, b, unit) {
  const d = b - a;
  if (d === 0) return 'Same';
  return `${d > 0 ? '+' : '−'}${Math.abs(d).toLocaleString('en-US')} ${unit}`;
}

function ratioDiff(a, b) {
  const d = Number(b) - Number(a);
  return `${d > 0 ? '+' : '−'}${Math.abs(d).toFixed(2)}`;
}

function secDiff(a, b) {
  const d = Math.round((b - a) * 10) / 10;
  if (d === 0) return 'Same';
  return `${d > 0 ? '+' : '−'}${Math.abs(d).toFixed(1)} s`;
}

const sixty = Object.fromEntries(
  Object.keys(SETUPS).map((k) => [k, { estate: zeroToSixty(estate.weight, SETUPS[k]), sedan: zeroToSixty(sedan.weight, SETUPS[k]) }]),
);

const rows = [
  { key: 'Chassis code', estate: estate.chassis, sedan: sedan.chassis },
  { key: 'Body', estate: estate.style, sedan: sedan.style },
  { key: 'Production', estate: estate.production, sedan: sedan.production },
  { key: 'Length', estate: mm(estate.length), sedan: mm(sedan.length), diff: diff(estate.length, sedan.length, 'mm') },
  { key: 'Width', estate: mm(estate.width), sedan: mm(sedan.width), diff: diff(estate.width, sedan.width, 'mm') },
  { key: 'Height', estate: mm(estate.height), sedan: mm(sedan.height), diff: diff(estate.height, sedan.height, 'mm') },
  { key: 'Wheelbase', estate: mm(estate.wheelbase), sedan: mm(sedan.wheelbase), diff: diff(estate.wheelbase, sedan.wheelbase, 'mm') },
  { key: 'Kerb weight', estate: kg(estate.weight), sedan: kg(sedan.weight), diff: diff(estate.weight, sedan.weight, 'kg'), emphasis: true },
  {
    key: `Stock, kg per PS (${STOCK_PS} PS)`,
    estate: ratio(estate.weight, STOCK_PS),
    sedan: ratio(sedan.weight, STOCK_PS),
    diff: ratioDiff(ratio(estate.weight, STOCK_PS), ratio(sedan.weight, STOCK_PS)),
  },
  {
    key: `Built, kg per whp (${POWER_TARGET_WHP} whp)`,
    estate: ratio(estate.weight, POWER_TARGET_WHP),
    sedan: ratio(sedan.weight, POWER_TARGET_WHP),
    diff: ratioDiff(ratio(estate.weight, POWER_TARGET_WHP), ratio(sedan.weight, POWER_TARGET_WHP)),
    emphasis: true,
  },
  {
    key: '0–60 mph, stock (est.)',
    estate: fmtSec(sixty.stock.estate),
    sedan: fmtSec(sixty.stock.sedan),
    diff: secDiff(sixty.stock.estate, sixty.stock.sedan),
  },
  {
    key: '0–60 mph, built (est.)',
    estate: fmtSec(sixty.built.estate),
    sedan: fmtSec(sixty.built.sedan),
    diff: secDiff(sixty.built.estate, sixty.built.sedan),
    emphasis: true,
  },
  { key: 'Behind the rear seat', estate: estate.rearSpace, sedan: sedan.rearSpace },
  { key: 'Engine', estate: '1JZ-GTE VVT-i', sedan: '1JZ-GTE VVT-i', diff: 'Same' },
  { key: 'Factory gearbox', estate: '4-speed automatic', sedan: '4-speed automatic', diff: 'Same' },
];

const lighterPct = (((estate.weight - sedan.weight) / estate.weight) * 100).toFixed(1);

export default function BodyCompare({ body, onBodyChange }) {
  return (
    <section id="compare" className="section-base">
      <SectionHeading title="Estate vs Sedan" ja="セダン仕様書" />
      <p className="lede">
        Same chassis, same engine, same build plan. The sedan carries {estate.weight - sedan.weight} kg less ({lighterPct}%), which changes the power-to-weight, the spring rates and where the subwoofer goes. Pick a body and the rest of this page follows it.
      </p>

      <div className={styles.toggleRow}>
        <BodyToggle body={body.id} onChange={onBodyChange} size="large" />
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption className={styles.visuallyHidden}>Factory specifications, Crown Athlete V Estate and Sedan</caption>
          <thead>
            <tr>
              <th scope="col">Spec</th>
              <th scope="col" className={body.id === 'estate' ? styles.active : ''}>Estate</th>
              <th scope="col" className={body.id === 'sedan' ? styles.active : ''}>Sedan</th>
              <th scope="col">Sedan vs Estate</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key} className={r.emphasis ? styles.keyRow : ''}>
                <th scope="row">{r.key}</th>
                <td className={body.id === 'estate' ? styles.activeCell : ''}>{r.estate}</td>
                <td className={body.id === 'sedan' ? styles.activeCell : ''}>{r.sedan}</td>
                <td className={styles.diff}>{r.diff ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.method}>
        No measured 0–60 times exist for the JZS171, so these are estimates from a simple simulation run identically for both bodies: kerb weight plus a {ACCEL_ASSUMPTIONS.driverKg} kg driver, {Math.round(ACCEL_ASSUMPTIONS.avgPowerShare * 100)}% of peak wheel power on average, {Math.round(ACCEL_ASSUMPTIONS.rearLoadShare * 100)}% of the weight on the rear tyres at launch, and one gear change. Expect real runs to vary by a few tenths with tyres, surface and launch.
      </p>

      <div className={styles.effects}>
        <div className={styles.effect}>
          <h3>Acceleration</h3>
          <p>
            Stock, the 280 PS car is power-limited, so the sedan&apos;s lighter body is worth about {(sixty.stock.estate - sixty.stock.sedan).toFixed(1)} s to 60. Built, both run about {sixty.built.sedan.toFixed(1)} s: at {POWER_TARGET_WHP} whp the rear tyres are the limit, and a heavier car presses them harder. The sedan&apos;s {ratio(sedan.weight, POWER_TARGET_WHP)} kg/whp pays off above 60.
          </p>
        </div>
        <div className={styles.effect}>
          <h3>Suspension</h3>
          <p>
            Most of the Estate&apos;s extra weight sits over and behind the rear axle: the longer roof, D-pillars and tailgate. On the sedan, choose a softer rear spring rate, and don&apos;t copy Estate-spec coilover kits.
          </p>
        </div>
        <div className={styles.effect}>
          <h3>Audio</h3>
          <p>
            The sedan&apos;s subwoofer fires into a sealed trunk, not the open cabin. Pick a ported box or the stronger driver to make up for it. The Audio section switches over with the body.
          </p>
        </div>
        <div className={styles.effect}>
          <h3>Parts and budget</h3>
          <p>
            Same for both bodies. The gearbox, engine, diff and tune don&apos;t change, so the budget table below covers either car.
          </p>
        </div>
      </div>
    </section>
  );
}
