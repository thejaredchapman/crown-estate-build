import styles from './Philosophy.module.css';

export default function Philosophy() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className="section-label reveal">Build Philosophy</div>
        <blockquote className={`${styles.quote} reveal`}>
          The rarest kind of fast is the kind nobody sees coming.
        </blockquote>
        <div className={styles.body}>
          <p className="reveal">
            The Crown Estate Athlete V occupies a singular position in JDM culture: universally known, almost never modified. It&apos;s a luxury wagon driven by salary men and retired executives. It has aged into invisibility — and that&apos;s precisely the point.
          </p>
          <p className="reveal" style={{ transitionDelay: '0.1s' }}>
            A manual-swapped, 380whp Crown Estate isn&apos;t trying to be a Chaser Tourer V. It&apos;s something else — quieter, stranger, more personal. The kind of car that wins at traffic lights and confuses everyone involved, including the driver.
          </p>
        </div>
      </div>
    </div>
  );
}
