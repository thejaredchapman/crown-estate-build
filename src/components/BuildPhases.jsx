import SectionHeading from './SectionHeading';
import styles from './BuildPhases.module.css';

// body-specific lines carry one entry per body id
const springLine = {
  estate: 'Coilovers or lowering springs: rear rate sized for 1,680 kg plus a loaded cargo bay',
  sedan: 'Coilovers or lowering springs: rear rate sized for 1,600 kg; Estate-spec kits will ride stiff',
};

const phases = [
  {
    num: '01',
    ja: '第一段階',
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
    ja: '第二段階',
    title: '1.5JZ Power Build',
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
    ja: '第三段階',
    title: 'Driveline & Chassis',
    items: [
      'BRZ / Toyota 86 "G-series" Torsen LSD swap — documented bolt-in to JZS platform',
      'Stub axle transfer from Crown diff to BRZ carrier',
      'Rear diff fluid refresh (GL-5 75w-80)',
      'Suspension refresh — poly bushings throughout',
      springLine,
      'Fresh wheel bearing & brake service',
      'Wider, stickier rubber on factory 16" alloys',
    ],
  },
];

export default function BuildPhases({ body }) {
  return (
    <section id="build" className="section-base">
      <SectionHeading title="Three-Phase Conversion" ja="製作計画" />
      <p className="lede">
        The {body.chassis} never left the factory with a manual. This build corrects that. Each phase stands on its own, so the car stays drivable between stages. Phase 2 is the full 1.5JZ engine build: stroker bottom end, turbo and tune done together while the engine is out.
      </p>

      <ol className={styles.grid}>
        {phases.map((phase) => (
          <li key={phase.num} className={styles.card}>
            <div className={styles.head}>
              <span className={styles.num}>{phase.num}</span>
              <span className={styles.ja} lang="ja">{phase.ja}</span>
            </div>
            <h3 className={styles.title}>{phase.title}</h3>
            <ul className={styles.items}>
              {phase.items.map((item) => {
                const text = typeof item === 'string' ? item : item[body.id];
                return <li key={text}>{text}</li>;
              })}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
