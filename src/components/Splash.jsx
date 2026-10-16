import { useEffect, useRef, useState } from 'react';
import styles from './Splash.module.css';

const BARS_MS = 1100;
const TITLE_MS = 3200;
const EXIT_MS = 450;

function timecode(ms) {
  const frames = Math.floor((ms / 1000) * 30);
  const pad = (n) => String(n).padStart(2, '0');
  return `00:00:${pad(Math.floor(frames / 30))}:${pad(frames % 30)}`;
}

export default function Splash({ chassis, onDone }) {
  const reduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [stage, setStage] = useState(reduced ? 'title' : 'bars');
  const [elapsed, setElapsed] = useState(0);
  const finished = useRef(false);

  function finish() {
    if (finished.current) return;
    finished.current = true;
    setStage('exit');
    setTimeout(onDone, reduced ? 0 : EXIT_MS);
  }

  useEffect(() => {
    document.body.classList.add('splash-open');
    const start = performance.now();
    let raf;
    const tick = () => {
      setElapsed(performance.now() - start);
      raf = requestAnimationFrame(tick);
    };
    if (!reduced) raf = requestAnimationFrame(tick);

    const toTitle = reduced ? null : setTimeout(() => setStage('title'), BARS_MS);
    const toExit = setTimeout(finish, reduced ? 1800 : BARS_MS + TITLE_MS);
    const onKey = () => finish();
    window.addEventListener('keydown', onKey);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(toTitle);
      clearTimeout(toExit);
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('splash-open');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${styles.splash} ${stage === 'exit' ? styles.exit : ''}`}
      onClick={finish}
      aria-label="Intro"
    >
      <div className={styles.osd} aria-hidden="true">
        <span>CH 4</span>
        <span>{stage === 'bars' ? 'PLAY ▶' : timecode(elapsed)}</span>
      </div>

      {stage === 'bars' && (
        <div className={styles.bars} aria-hidden="true">
          <div className={styles.barsTop}>
            {['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000', '#0000c0'].map((c) => (
              <span key={c} style={{ background: c }} />
            ))}
          </div>
          <div className={styles.barsBottom}>
            {['#0000c0', '#131313', '#c000c0', '#131313', '#00c0c0', '#131313', '#c0c0c0'].map((c, i) => (
              <span key={i} style={{ background: c }} />
            ))}
          </div>
        </div>
      )}

      {stage !== 'bars' && (
        <div className={styles.card}>
          <div className={styles.sweep} aria-hidden="true">
            <span /><span /><span />
          </div>
          <p className={styles.slogan} lang="ja">いつかはクラウン。</p>
          <p className={styles.translation}>Someday, a Crown.</p>
          <div className={styles.lowerThird}>
            <span className={styles.chassis}>{chassis}</span>
            <span>Crown Athlete V build file</span>
          </div>
        </div>
      )}

      <button type="button" className={styles.skip} onClick={finish} autoFocus>
        Skip intro
      </button>
    </div>
  );
}
