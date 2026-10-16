import SectionHeading from './SectionHeading';
import styles from './Budget.module.css';

const rows = [
  { item: 'R154 gearbox + JZ bellhousing + flywheel & clutch',   phase: '01 — Swap',    type: 'Parts',     cost: '$1,200 – $2,000' },
  { item: 'Pedal box, clutch master cylinder, handbrake kit',    phase: '01 — Swap',    type: 'Parts + Fab', cost: '$400 – $800' },
  { item: 'Custom driveshaft (R154 output → Crown diff flange)',  phase: '01 — Swap',    type: 'Parts + Fab', cost: '$400 – $700' },
  { item: 'Stroker crankshaft — aftermarket 77–84mm throw',      phase: '02 — 1.5JZ',   type: 'Parts',     cost: '$800 – $1,500' },
  { item: 'Forged H-beam connecting rods (set of 6)',            phase: '02 — 1.5JZ',   type: 'Parts',     cost: '$600 – $1,000' },
  { item: 'Forged pistons — matched compression',                phase: '02 — 1.5JZ',   type: 'Parts',     cost: '$500 – $900' },
  { item: 'Machine work — bore, hone, balance, line hone',       phase: '02 — 1.5JZ',   type: 'Shop',      cost: '$800 – $1,500' },
  { item: 'ARP head studs + head gasket + full reseal',          phase: '02 — 1.5JZ',   type: 'Parts',     cost: '$300 – $500' },
  { item: 'Turbo upgrade — SerialNine 409R or IE550R billet',    phase: '02 — 1.5JZ',   type: 'Parts',     cost: '$800 – $1,400' },
  { item: '1,000cc injectors + fuel pump (Bosch 044 / Walbro)',  phase: '02 — 1.5JZ',   type: 'Parts',     cost: '$450 – $700' },
  { item: 'Front-mount intercooler + custom piping',             phase: '02 — 1.5JZ',   type: 'Parts',     cost: '$500 – $900' },
  { item: '3" downpipe + cat-back exhaust system',               phase: '02 — 1.5JZ',   type: 'Parts',     cost: '$400 – $700' },
  { item: 'Link G4X standalone ECU',                             phase: '02 — 1.5JZ',   type: 'Parts',     cost: '$900 – $1,200' },
  { item: 'Dyno tune — JZ specialist, full stroker map',         phase: '02 — 1.5JZ',   type: 'Service',   cost: '$500 – $1,500' },
  { item: 'BRZ / Toyota 86 Torsen LSD (G-series bolt-in)',       phase: '03 — Chassis', type: 'Parts',     cost: '$200 – $600' },
  { item: 'Labor — swap, install, fabrication',                  phase: 'All Phases',   type: 'Shop',      cost: '$1,500 – $2,500' },
  { item: 'Shift Sync OLED carbon fibre gear knob',              phase: 'Interior',     type: 'Parts',     cost: '~$200 – $350' },
  { item: 'JL Audio 12W6v3 subwoofer + sealed enclosure',        phase: 'Audio',        type: 'Parts',     cost: '$400 – $600' },
  { item: 'JL Audio RD500/1 mono amplifier',                     phase: 'Audio',        type: 'Parts',     cost: '$250 – $350' },
  { item: 'JL Audio RD400/4 + C2 component speakers',            phase: 'Audio',        type: 'Parts',     cost: '$500 – $800' },
  { item: 'Head unit (CarPlay) + wiring + sound deadening',      phase: 'Audio',        type: 'Parts',     cost: '$350 – $600' },
  { item: 'Audio install labor',                                 phase: 'Audio',        type: 'Service',   cost: '$400 – $700' },
];

// low: 1200+400+400 + 800+600+500+800+300+800+450+500+400+900+500 + 200+1500 + 200 + 400+250+500+350+400 = $12,350
// high: 2000+800+700 + 1500+1000+900+1500+500+1400+700+900+700+1200+1500 + 600+2500 + 350 + 600+350+800+600+700 = $21,800

export default function Budget() {
  return (
    <section id="cost" className="section-base">
      <SectionHeading title="Estimated Build Budget" ja="予算" />
      <p className="lede">
        All figures are theoretical estimates based on current parts availability. Labor assumes a quality independent shop; DIY reduces cost significantly if you have the skills and lift. The parts list is the same for the Estate and the Sedan.
      </p>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Component</th>
              <th className={styles.phaseCol}>Phase</th>
              <th>Type</th>
              <th className={styles.costCol}>Est. Cost (USD)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.item}>
                <th scope="row">{row.item}</th>
                <td className={`${styles.phaseTag} ${styles.phaseCol}`}>{row.phase}</td>
                <td className={styles.typeCell}>{row.type}</td>
                <td className={styles.costRange}>{row.cost}</td>
              </tr>
            ))}
            <tr className={styles.totalRow}>
              <td className={styles.totalLabel} colSpan={3}>
                <strong>Grand Total</strong>
                <span className={styles.totalNote}>Full build — all three phases</span>
              </td>
              <td className={`${styles.costRange} ${styles.totalCost}`}>$12,350 – $21,800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
