import styles from './Audio.module.css';

const subs = [
  {
    code: 'W6v3',
    title: '12W6v3 — Best Balance',
    items: [
      '600W RMS — punchy, musical, controlled',
      'Sealed: 1.0 cu ft · Ported: 1.3 cu ft',
      'Shares W7 motor tech at lower price',
      'Deep, accurate bass without drama',
      'Ideal for music across genres — the audiophile pick',
    ],
    recommended: 'Recommended for this build',
  },
  {
    code: 'W7AE',
    title: '12W7AE — Flagship',
    delay: '0.1s',
    items: [
      '1,000W RMS — the reference-grade JL driver',
      'Sealed: 1.375 cu ft · Ported: 1.75 cu ft',
      '29mm Xmax — exceptional excursion depth',
      'Reviewers called it "addictive" and "seductive"',
      'Requires 400–1000W amp to realise full potential',
    ],
    note: 'Premium choice — noticeably more expensive',
  },
  {
    code: 'TW3',
    title: '12TW3 — Stealth Option',
    delay: '0.2s',
    items: [
      '400W RMS — only 3.25" mount depth',
      'Sealed: 0.9–1.1 cu ft — very compact',
      'Ideal if you want to preserve cargo floor',
      'Fits in spare tire well or under floor panel',
      'Uses patented concentric tube suspension',
    ],
    note: 'Less output than W6/W7 but nearly invisible',
  },
];

const enclosureRows = [
  { key: 'Best Option', val: 'Custom sealed box, cargo floor level', highlight: true },
  { key: 'Placement', val: 'Driver-side or centered rear cargo' },
  { key: 'W6v3 Sealed', val: '1.0 cu ft — compact, clean' },
  { key: 'W7 Sealed', val: '1.375 cu ft — still manageable' },
  { key: 'Ported Option', val: 'More output, larger box (~1.3–1.75 cu ft)' },
  { key: 'Spare Tire', val: 'TW3 only — fits well, preserves floor' },
  { key: 'Finish', val: 'Wrapped in matching carpet or vinyl' },
];

const chainRows = [
  { key: 'Head Unit', val: 'Pioneer AVH or Sony XAV — Apple CarPlay', highlight: true },
  { key: 'Front Speakers', val: 'JL Audio C2 or C5 6.5" component set' },
  { key: 'Rear Fill', val: 'JL Audio C1 coaxials (optional)' },
  { key: 'Sub Amp', val: 'JL Audio RD500/1 — 500W mono', highlight: true },
  { key: 'Alt: Sub Amp', val: 'JL Audio RD1000/1 — for W7AE' },
  { key: 'Full Range Amp', val: 'JL Audio RD400/4 — 4-channel' },
  { key: 'Signal Processor', val: 'JL Audio TwK-88 (optional, best results)' },
  { key: 'Wiring', val: '4-gauge power, quality RCA, deadening' },
];

function SpecBlock({ title, rows }) {
  return (
    <div className={styles.specBlock}>
      <div className={styles.blockTitle}>{title}</div>
      {rows.map(({ key, val, highlight }) => (
        <div className={styles.row} key={key}>
          <span className={styles.key}>{key}</span>
          <span className={`${styles.val} ${highlight ? styles.highlight : ''}`}>{val}</span>
        </div>
      ))}
    </div>
  );
}

export default function Audio() {
  return (
    <section id="audio" className="section-base">
      <div className="section-label reveal">Sound System</div>
      <h2 className="section-title reveal">JL Audio Build — 12" Subwoofer</h2>
      <p className={`reveal ${styles.intro}`}>
        The Crown Estate has one massive advantage for audio: it&apos;s a wagon. That cargo bay is a natural acoustic chamber and you have genuine room to work with. Here&apos;s how to build a JL Audio system that sounds like the car it&apos;s in.
      </p>

      <div className={styles.subGrid}>
        {subs.map((sub) => (
          <div
            key={sub.code}
            className={`${styles.subCard} reveal`}
            style={sub.delay ? { transitionDelay: sub.delay } : undefined}
          >
            <div className={styles.subCode}>{sub.code}</div>
            <div className={styles.subTitle}>{sub.title}</div>
            <ul className={styles.items}>
              {sub.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            {sub.recommended && (
              <div className={styles.recommended}>{sub.recommended}</div>
            )}
            {sub.note && (
              <div className={styles.note}>{sub.note}</div>
            )}
          </div>
        ))}
      </div>

      <div className={`${styles.specGrid} reveal`}>
        <SpecBlock title="Enclosure Strategy — Estate Wagon" rows={enclosureRows} />
        <SpecBlock title="Full Signal Chain" rows={chainRows} />
      </div>

      <div className={`${styles.noteCard} reveal`}>
        <div className={styles.noteTitle}>Estate Wagon Acoustic Advantage</div>
        <p>
          Wagons are genuinely better for audio than sedans. The continuous cabin volume from front seats to tailgate means bass propagates naturally through the space rather than through a tiny trunk opening. A well-built 12W6v3 in a sealed 1.0 cu ft box, powered by the RD500/1, in this wagon will outperform a larger setup in a sedan. The wagon body is doing acoustic work for you. One practical note: add sound deadening (Dynamat or Kilmat) to the rear cargo floor panels and lower door skins — it transforms the system from loud to refined, which is exactly what this car is.
        </p>
      </div>
    </section>
  );
}
