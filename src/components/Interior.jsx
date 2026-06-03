import styles from './Interior.module.css';

const features = [
  { key: 'Display', val: '1.51″ full-color round AMOLED', highlight: true },
  { key: 'Material', val: 'Real carbon fibre, precision-machined' },
  { key: 'Media Control', val: 'Full Bluetooth music control' },
  { key: 'Performance Data', val: 'Built-in G-meter + 0–60 timer', highlight: true },
  { key: 'Visuals', val: 'Motion-reactive animations while driving' },
  { key: 'Custom Content', val: 'Upload logos / GIFs via Wi-Fi' },
  { key: 'Power', val: 'USB auto-on or internal battery' },
  { key: 'Fitment', val: 'Universal thread — fits R154 shifter' },
];

export default function Interior() {
  return (
    <section id="interior" className="section-base">
      <div className="section-label reveal">Cockpit Technology</div>
      <h2 className="section-title reveal">Shift Sync — Smart Gear Knob</h2>
      <p className={`reveal ${styles.intro}`}>
        A manual-swapped Crown deserves a shifter that earns attention. The Shift Sync is the world&apos;s first carbon fibre OLED shift knob — and it&apos;s exactly the kind of detail that makes this build feel intentional rather than accidental.
      </p>

      <div className={`${styles.grid} reveal`}>
        <div className={styles.specBlock}>
          <div className={styles.blockTitle}>Shift Sync — Feature Set</div>
          {features.map(({ key, val, highlight }) => (
            <div className={styles.row} key={key}>
              <span className={styles.key}>{key}</span>
              <span className={`${styles.val} ${highlight ? styles.highlight : ''}`}>{val}</span>
            </div>
          ))}
        </div>

        <div className={`${styles.whyCard} reveal`} style={{ transitionDelay: '0.1s' }}>
          <div className={styles.whyTitle}>Why It Works</div>
          <p>
            You&apos;re adding a manual swap specifically to connect with the drive. The Shift Sync puts a live 0–60 timer and G-meter literally in your hand — that&apos;s not a gimmick, that&apos;s data at the point of contact. The motion-reactive display responding to your inputs is the kind of detail that makes the interior feel built rather than assembled.
          </p>
          <p style={{ marginTop: '1rem' }}>
            On a car this understated on the outside, the interior details carry the story. Carbon fibre OLED knob + clean OEM+ dash = a cockpit that communicates intent without screaming it.
          </p>
          <div className={styles.link}>
            <a
              href="https://shiftsync.tech/products/untitled-nov10_14-35"
              target="_blank"
              rel="noreferrer"
            >
              shiftsync.tech ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
