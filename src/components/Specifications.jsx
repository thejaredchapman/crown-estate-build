import styles from './Specifications.module.css';

function SpecBlock({ title, rows, delay, span, optional }) {
  return (
    <div
      className={[
        styles.block,
        span ? styles.span : '',
        optional ? styles.optional : '',
        'reveal',
      ].join(' ')}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      <div className={styles.blockTitle}>
        {title}
      </div>
      <div className={span ? styles.spanRows : undefined}>
        {rows.map(({ key, val, highlight }) => (
          <div className={styles.row} key={key}>
            <span className={styles.key}>{key}</span>
            <span className={`${styles.val} ${highlight ? styles.highlight : ''}`}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const blocks = [
  {
    title: 'Donor Platform',
    rows: [
      { key: 'Chassis', val: 'JZS171W' },
      { key: 'Body', val: '5-door Wagon / Estate' },
      { key: 'Production', val: 'Dec 1999 – 2003' },
      { key: 'Wheelbase', val: '2,780 mm' },
      { key: 'Length', val: '4,835 mm' },
      { key: 'Kerb Weight', val: '1,680 kg' },
      { key: 'Drivetrain', val: 'RWD' },
      { key: 'Suspension', val: 'Double Wishbone F&R' },
    ],
  },
  {
    title: 'Engine — 1JZ-GTE VVT-i',
    delay: '0.1s',
    rows: [
      { key: 'Config', val: '2.5L Inline-6 Turbo' },
      { key: 'Displacement', val: '2,491 cc' },
      { key: 'Stock Power', val: '280 hp (JDM limit)' },
      { key: 'Turbo (stock)', val: 'Toyota CT15B single' },
      { key: 'Turbo (build)', val: 'SerialNine 409R / IE550R', highlight: true },
      { key: 'Injectors', val: '1,000cc top-feed', highlight: true },
      { key: 'ECU', val: 'Link G4X Standalone', highlight: true },
      { key: 'Power Target', val: '420–450 whp', highlight: true },
    ],
  },
  {
    title: 'Transmission',
    delay: '0.15s',
    rows: [
      { key: 'Type', val: 'R154 5-speed Manual', highlight: true },
      { key: 'Donor Source', val: 'JZX100 Chaser/Mark II' },
      { key: 'Bellhousing', val: 'JZ-native direct bolt' },
      { key: 'Torque Rating', val: '~600–700 lb-ft' },
      { key: 'Clutch', val: 'ORC / ACT Stage 2' },
      { key: 'Flywheel', val: 'Lightened steel' },
      { key: 'Driveshaft', val: 'Custom length, 1-piece' },
    ],
  },
  {
    title: 'Differential',
    delay: '0.2s',
    rows: [
      { key: 'Stock', val: 'Open diff — G-series' },
      { key: 'Upgrade', val: 'BRZ / Toyota 86 Torsen LSD', highlight: true },
      { key: 'Type', val: 'Torsen (gear-type) LSD' },
      { key: 'Ratio', val: '4.10 (86 MT unit)' },
      { key: 'Fitment', val: 'Documented bolt-in' },
      { key: 'Maintenance', val: 'Zero — Torsen is sealed' },
    ],
  },
  {
    title: 'Engine — 1.5JZ Stroker',
    delay: '0.25s',
    span: true,
    optional: false,
    rows: [
      { key: 'Base Engine', val: '1JZ-GTE VVT-i (existing unit)' },
      { key: 'Stroke', val: '77–84 mm (vs stock 71.5 mm)', highlight: true },
      { key: 'Displacement', val: '~2,700–2,820 cc stroked', highlight: true },
      { key: 'Bottom End', val: 'Forged H-beam rods + forged pistons', highlight: true },
      { key: 'Head Studs', val: 'ARP — mandatory at this level' },
      { key: 'Sealing', val: 'Full reseal — head gasket, crank seals, valley cover' },
      { key: 'Injectors', val: '1,000cc top-feed (upgraded from 650cc)', highlight: true },
      { key: 'ECU', val: 'Link G4X — re-mapped for displacement' },
      { key: 'Same Turbo', val: 'SerialNine 409R / IE550R — no change needed' },
      { key: 'Power Target', val: '420–450 whp (+50 whp over Phase 2)', highlight: true },
      { key: 'Torque Gain', val: 'Significant mid-range improvement — primary benefit' },
      { key: 'Phase 2 Budget', val: '~$6,550–$11,800 all-in', highlight: true },
    ],
  },
];

export default function Specifications() {
  return (
    <section id="specs" className="section-base">
      <div className="section-label reveal">Technical Reference</div>
      <h2 className="section-title reveal">Build Specifications</h2>

      <div className={styles.layout}>
        {blocks.map((block) => (
          <SpecBlock key={block.title} {...block} />
        ))}
      </div>
    </section>
  );
}
