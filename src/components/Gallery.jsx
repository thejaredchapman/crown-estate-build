import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import styles from './Gallery.module.css';

// Estate photos: jpdjapan.com listing of a 2001 JZS171W Crown Estate Athlete V
const BASE = 'https://jpdjapan.com/wp-content/uploads/2020/02';

const estateImages = [
  {
    src: `${BASE}/line_2864994277396.jpeg`,
    alt: 'JZS171W Exterior — Front',
    caption: 'Exterior — Front · JZS171W · 2001',
  },
  {
    src: `${BASE}/line_2877265671922.jpeg`,
    alt: 'JZS171W Exterior — Front 3/4',
    caption: 'Exterior — Front 3/4',
  },
  {
    src: `${BASE}/line_2877725058068.jpeg`,
    alt: 'JZS171W Exterior — Side Profile',
    caption: 'Exterior — Side Profile',
  },
  {
    src: `${BASE}/line_2878609655776.jpeg`,
    alt: 'JZS171W Exterior — Rear',
    caption: 'Exterior — Rear Quarter',
  },
  {
    src: `${BASE}/line_2888585362439.jpeg`,
    alt: 'Interior — Dashboard',
    caption: 'Interior — Dashboard & Cockpit',
  },
  {
    src: `${BASE}/line_2886933428169.jpeg`,
    alt: 'Exterior — Rear, Roof Rails',
    caption: 'Exterior — Rear Quarter & Roof Line · Athlete V',
  },
  {
    src: `${BASE}/line_2896497376342.jpeg`,
    alt: 'Engine Bay — 1JZ-GTE VVT-i',
    caption: 'Engine Bay — 1JZ-GTE VVT-i · 2.5L Inline-6 Turbo',
  },
  {
    src: `${BASE}/line_2900046750612.jpeg`,
    alt: 'Interior — Full Cabin View',
    caption: 'Interior — Cockpit & Front Cabin',
  },
  {
    src: `${BASE}/line_2899504476601.jpeg`,
    alt: 'Cargo Area — Tailgate Open, Rear Seats',
    caption: 'Cargo Bay — Tailgate Open · Rear Seatbacks',
  },
  {
    src: `${BASE}/line_2898447227227.jpeg`,
    alt: 'Cargo Floor — ESTATE Embossed Liner',
    caption: 'Cargo Floor — ESTATE Embossed Liner',
  },
  {
    src: `${BASE}/line_2898858134779.jpeg`,
    alt: 'Spare Tire Well — Underfloor Storage',
    caption: 'Spare Tire Well — Underfloor Storage',
  },
];

// Sedan photos: two JZS171 Athlete V sedans, a 1999 sold by XAT Racing and a 2000 listed by B-Pro JDM Imports
const XAT = 'https://xatracing.com/var/images/product/800.800';
const GOO = 'https://picture1.goo-net.com/020/0204560/J/0204560A30250908W001';

const sedanImages = [
  { src: `${XAT}/IMG_4144.jpg`, alt: 'JZS171 sedan exterior, front 3/4', caption: 'Exterior — Front 3/4 · JZS171 · 1999' },
  { src: `${XAT}/IMG_4140.jpg`, alt: 'JZS171 sedan exterior, side profile', caption: 'Exterior — Side Profile, Four-Door' },
  { src: `${GOO}06.jpg`, alt: 'JZS171 sedan rear, trunk lid and Athlete V badge', caption: 'Exterior — Rear, Trunk Lid' },
  { src: `${XAT}/IMG_4147.jpg`, alt: 'JZS171 sedan exterior, rear 3/4', caption: 'Exterior — Rear Quarter' },
  { src: `${GOO}15.jpg`, alt: 'Sedan interior, driver seat and dash', caption: 'Interior — Front Cabin' },
  { src: `${XAT}/IMG_4159.jpg`, alt: 'Sedan instrument cluster', caption: 'Interior — Gauge Cluster' },
  { src: `${XAT}/IMG_4154.jpg`, alt: 'Engine bay, 1JZ-GTE VVT-i', caption: 'Engine Bay — 1JZ-GTE VVT-i · 2.5L Inline-6 Turbo' },
  { src: `${GOO}16.jpg`, alt: 'Sedan rear seats', caption: 'Interior — Rear Seats' },
  { src: `${GOO}21.jpg`, alt: 'Sedan climate control and head unit', caption: 'Interior — Climate & Head Unit' },
  { src: `${GOO}19.jpg`, alt: 'Sedan trunk tool tray with CROWN emblem', caption: 'Trunk — Tool Tray Under the Floor' },
  { src: `${GOO}18.jpg`, alt: 'Sedan trunk floor, open', caption: 'Trunk — Floor & Bulkhead' },
];

export default function Gallery({ body }) {
  const [lightbox, setLightbox] = useState(null);
  const isSedan = body.id === 'sedan';
  const shown = isSedan ? sedanImages : estateImages;

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  function handleError(e) {
    e.target.style.opacity = '0.15';
  }

  return (
    <>
      <section id="gallery" className={styles.wrapper}>
        <div className={styles.header}>
          <SectionHeading title="The Platform" ja="車両資料" />
          {isSedan && (
            <p className="lede">
              Sedan photos come from two JZS171 Athlete V cars: a 1999 sold by{' '}
              <a href="https://xatracing.com/1999-toyota-crown-athlete-v-1" target="_blank" rel="noreferrer">XAT Racing</a>{' '}
              and a 2000 listed by{' '}
              <a href="https://b-pro.ca/jdm-dealer-inventory/0204560A30250908W001/2000-toyota-crown-athlete-v/" target="_blank" rel="noreferrer">B-Pro JDM Imports</a>.
            </p>
          )}
        </div>

        <div className={styles.grid}>
          {shown.map((img, i) => (
            <button
              type="button"
              key={img.src}
              className={`${styles.item} ${styles[`item${i + 1}`]}`}
              onClick={() => setLightbox(img)}
              aria-label={`Open photo: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" onError={handleError} />
              <span className={styles.caption}>{img.caption}</span>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)} role="dialog" aria-label={lightbox.alt}>
          <button type="button" className={styles.lightboxClose} onClick={() => setLightbox(null)} autoFocus>
            Close
          </button>
          <img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
          <div className={styles.lightboxCaption}>{lightbox.caption}</div>
        </div>
      )}
    </>
  );
}
