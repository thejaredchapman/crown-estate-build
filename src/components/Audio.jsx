import SectionHeading from './SectionHeading';
import SpecList from './SpecList';
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
    recommended: {
      estate: 'Recommended for the Estate: sealed 1.0 cu ft',
      sedan: 'Recommended for the Sedan: ported 1.3 cu ft',
    },
  },
  {
    code: 'W7AE',
    title: '12W7AE — Flagship',
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

const factoryRows = [
  { key: 'Trim Audio', val: 'Super Live Sound — 7-speaker', highlight: true },
  { key: 'Front Door', val: '16cm (6.5") full-range', highlight: true },
  { key: 'Rear Door', val: '16cm (6.5") full-range', highlight: true },
  { key: 'Dash Tweeters', val: '~5cm (2"), Super Live trim only' },
  { key: 'Subwoofer', val: 'None — Athlete V has no factory sub' },
  { key: 'Head Unit', val: 'Factory deck, no CarPlay/Bluetooth' },
  { key: 'Verify', val: 'Confirm with tape measure — pull door card' },
];

const enclosureRows = {
  estate: [
  { key: 'Best Option', val: 'Custom sealed box, cargo floor level', highlight: true },
  { key: 'Placement', val: 'Driver-side or centered rear cargo' },
  { key: 'W6v3 Sealed', val: '1.0 cu ft — compact, clean' },
  { key: 'W7 Sealed', val: '1.375 cu ft — still manageable' },
  { key: 'Ported Option', val: 'More output, larger box (~1.3–1.75 cu ft)' },
  { key: 'Spare Tire', val: 'TW3 only — fits well, preserves floor' },
  { key: 'Finish', val: 'Wrapped in matching carpet or vinyl' },
  ],
  sedan: [
    { key: 'Best Option', val: 'Ported box on the trunk floor', highlight: true },
    { key: 'Placement', val: 'Against the rear seatback, centered' },
    { key: 'W6v3 Ported', val: '1.3 cu ft — makes up the trunk loss', highlight: true },
    { key: 'W7 Sealed', val: '1.375 cu ft — if you want to stay sealed' },
    { key: 'Orientation', val: 'Try facing the seat and the lid; keep the louder' },
    { key: 'Spare Tire', val: 'TW3 only — fits under the trunk floor' },
    { key: 'Finish', val: 'Trunk carpet to match' },
  ],
};

const intro = {
  estate: 'The Crown Estate has one massive advantage for audio: it’s a wagon. That cargo bay is a natural acoustic chamber and you have genuine room to work with.',
  sedan: 'The Crown Sedan puts the subwoofer in a trunk, sealed off from the cabin by the rear seat and parcel shelf. You lose the wagon’s free cabin gain, so box choice matters more.',
};

const note = {
  estate: {
    title: 'Estate wagon acoustic advantage',
    text: 'Wagons are genuinely better for audio than sedans. The continuous cabin volume from front seats to tailgate means bass propagates naturally through the space rather than through a tiny trunk opening. A well-built 12W6v3 in a sealed 1.0 cu ft box, powered by the RD500/1, will outperform a larger setup in a sedan. The wagon body is doing acoustic work for you.',
  },
  sedan: {
    title: 'Sedan trunk: work through the bulkhead',
    text: 'In the sedan, bass has to get through the rear seat and parcel shelf to reach you. A ported 1.3 cu ft box for the 12W6v3 gets back most of the output the Estate gets for free. If you want more, the 12W7AE on an RD1000/1 is the honest fix.',
  },
};

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

export default function Audio({ body }) {
  const id = body.id;
  return (
    <section id="audio" className="section-base">
      <SectionHeading title={'JL Audio Build, 12" Subwoofer'} ja="音響" />
      <p className="lede">
        {intro[id]} The Athlete V left the factory with Toyota&apos;s Super Live Sound 7-speaker system: 16cm (6.5&quot;) full-range drivers in all four doors, no factory sub. Here&apos;s how to build a JL Audio system that sounds like the car it&apos;s in.
      </p>

      <div className={styles.factory}>
        <SpecList title={`Factory speakers, ${body.chassis} Athlete V`} rows={factoryRows} />
      </div>

      <div className={styles.subGrid}>
        {subs.map((sub) => (
          <div key={sub.code} className={`${styles.subCard} ${sub.recommended ? styles.picked : ''}`}>
            <div className={styles.subCode}>{sub.code}</div>
            <h3 className={styles.subTitle}>{sub.title}</h3>
            <ul className={styles.items}>
              {sub.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            {sub.recommended && <p className={styles.recommended}>{sub.recommended[id]}</p>}
            {sub.note && <p className={styles.note}>{sub.note}</p>}
          </div>
        ))}
      </div>

      <div className={styles.specGrid}>
        <SpecList title={`Enclosure strategy, ${body.name}`} rows={enclosureRows[id]} />
        <SpecList title="Full signal chain" rows={chainRows} />
      </div>

      <div className={styles.noteCard}>
        <h3 className={styles.noteTitle}>{note[id].title}</h3>
        <p>
          {note[id].text} One practical note: add sound deadening (Dynamat or Kilmat) to the {id === 'estate' ? 'rear cargo floor panels' : 'trunk floor and lid'} and lower door skins. It transforms the system from loud to refined, which is exactly what this car is.
        </p>
      </div>
    </section>
  );
}
