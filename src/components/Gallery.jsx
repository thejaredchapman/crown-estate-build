import { useState } from 'react';
import styles from './Gallery.module.css';

// All photos sourced from jpdjapan.com — actual 2001 JZS171W Crown Estate Athlete V listing
const BASE = 'https://jpdjapan.com/wp-content/uploads/2020/02';

const images = [
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
    alt: 'Exterior — Factory Moonroof',
    caption: 'Exterior — Factory Panoramic Moonroof · Athlete V',
  },
  {
    src: `${BASE}/line_2896497376342.jpeg`,
    alt: 'Engine Bay — 1JZ-GTE VVT-i',
    caption: 'Engine Bay — 1JZ-GTE VVT-i · 2.5L Inline-6 Turbo',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  function handleError(e) {
    e.target.style.opacity = '0.15';
  }

  function close() {
    setLightbox(null);
    document.body.style.overflow = '';
  }

  function open(img) {
    setLightbox(img);
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <div id="gallery" className={styles.wrapper}>
        <div className={`${styles.header} reveal`}>
          <div className="section-label">Documentation</div>
          <h2 className="section-title">The Platform</h2>
        </div>

        <div className={styles.grid}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`${styles.item} ${styles[`item${i + 1}`]}`}
              onClick={() => open(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                onError={handleError}
              />
              <div className={styles.caption}>{img.caption}</div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className={`${styles.lightbox} ${lightbox ? styles.active : ''}`} onClick={close}>
          <button className={styles.lightboxClose} onClick={close}>✕ Close</button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
          />
          <div className={styles.lightboxCaption}>{lightbox.caption}</div>
        </div>
      )}
    </>
  );
}
