import styles from './Philosophy.module.css';

const copy = {
  estate: {
    kind: 'luxury wagon',
    rival: 'It isn’t trying to be a Chaser Tourer V.',
  },
  sedan: {
    kind: 'luxury sedan',
    rival: 'It looks like the car that drops the company president at the office, because it is.',
  },
};

export default function Philosophy({ body }) {
  const c = copy[body.id];
  return (
    <section className={styles.section} aria-label="Build philosophy">
      <div className={styles.inner}>
        <blockquote className={styles.quote}>
          The rarest kind of fast is the kind nobody sees coming.
        </blockquote>
        <div className={styles.body}>
          <p>
            The Crown Athlete V {body.name} occupies a singular position in JDM culture: universally known, almost never modified. It&apos;s a {c.kind} driven by salarymen and retired executives. It has aged into invisibility, and that&apos;s precisely the point.
          </p>
          <p>
            A manual-swapped, 450whp Crown {body.name} is something else: quieter, stranger, more personal. {c.rival} It wins at traffic lights and confuses everyone involved, including the driver.
          </p>
        </div>
      </div>
    </section>
  );
}
