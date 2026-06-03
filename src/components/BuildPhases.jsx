import styles from './BuildPhases.module.css';

const phases = [
  {
    num: '01',
    title: 'Manual Conversion',
    items: [
      'R154 5-speed from JZX100 Chaser/Mark II',
      'JZ bellhousing, flywheel & clutch kit',
      'JZX100 clutch/brake pedal box',
      'Clutch master cylinder (JZX100 OEM)',
      'Handbrake conversion from foot-operated',
      'Verossa hanging throttle pedal swap',
      'Custom-length driveshaft to suit R154',
      'Shifter surround & console trim work',
      'Piggyback or standalone ECU to clear codes',
    ],
  },
  {
    num: '02',
    title: '1.5JZ Power Build',
    delay: '0.1s',
    items: [
      'Stroker crankshaft — 77–84mm throw (vs stock 71.5mm)',
      'Forged H-beam connecting rods (set of 6)',
      'Forged pistons — matched compression ratio for turbo use',
      'Machine work — bore, hone, balance, line hone',
      'ARP head studs + head gasket + full reseal',
      'SerialNine 409R or IE550R billet turbo (CT15B replacement)',
      '1,000cc top-feed injectors + Bosch 044 / Walbro 255 fuel pump',
      'Front-mount intercooler & custom piping',
      '3" downpipe → 3" cat-back exhaust system',
      'Link G4X standalone ECU',
      'Full dyno tune — JZ specialist, stroker-specific map',
      'Target: 420–450whp · ~2.7–2.8L · 17–19 psi on 93 octane',
    ],
  },
  {
    num: '03',
    title: 'Driveline & Chassis',
    delay: '0.2s',
    items: [
      'BRZ / Toyota 86 "G-series" Torsen LSD swap — documented bolt-in to JZS platform',
      'Stub axle transfer from Crown diff to BRZ carrier',
      'Rear diff fluid refresh (GL-5 75w-80)',
      'Suspension refresh — poly bushings throughout',
      'Mild lowering springs or coilovers (optional)',
      'Fresh wheel bearing & brake service',
      'Wider, stickier rubber on factory 16" alloys',
    ],
  },
];

export default function BuildPhases() {
  return (
    <section id="build" className="section-base">
      <div className="section-label reveal">Build Strategy</div>
      <h2 className="section-title reveal">Three-Phase Conversion</h2>
      <p className={`reveal ${styles.intro}`}>
        The JZS171W never left the factory with a manual. This build corrects that. Each phase is designed to stand on its own — drive it between stages. Phase 2 is the full 1.5JZ engine build: stroker bottom end, turbo, and tune done together while the engine is out.
      </p>

      <div className={styles.grid}>
        {phases.map((phase) => (
          <div
            key={phase.num}
            className={`${styles.card} reveal`}
            style={phase.delay ? { transitionDelay: phase.delay } : undefined}
          >
            <div className={styles.num}>{phase.num}</div>
            <div className={styles.title}>{phase.title}</div>
            <ul className={styles.items}>
              {phase.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
