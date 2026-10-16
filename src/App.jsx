import { useEffect, useState } from 'react';
import Splash from './components/Splash';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import BuildPhases from './components/BuildPhases';
import Specifications from './components/Specifications';
import BodyCompare from './components/BodyCompare';
import Philosophy from './components/Philosophy';
import Budget from './components/Budget';
import Interior from './components/Interior';
import Audio from './components/Audio';
import Footer from './components/Footer';
import { BODIES } from './data/bodies';

const SPLASH_KEY = 'crown-splash-seen';
const BODY_KEY = 'crown-body';

function readStorage(store, key) {
  try { return window[store].getItem(key); } catch { return null; }
}

function writeStorage(store, key, value) {
  try { window[store].setItem(key, value); } catch { /* storage unavailable */ }
}

function initialBody() {
  const fromUrl = new URLSearchParams(window.location.search).get('body');
  if (BODIES[fromUrl]) return fromUrl;
  const saved = readStorage('localStorage', BODY_KEY);
  return BODIES[saved] ? saved : 'estate';
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [bodyId, setBodyId] = useState(initialBody);
  const [showSplash, setShowSplash] = useState(() => !readStorage('sessionStorage', SPLASH_KEY));
  const body = BODIES[bodyId];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.title = `Crown Athlete V ${body.name} Build`;
    writeStorage('localStorage', BODY_KEY, bodyId);
    const url = new URL(window.location.href);
    url.searchParams.set('body', bodyId);
    window.history.replaceState(null, '', url);
  }, [bodyId, body.name]);

  function closeSplash() {
    writeStorage('sessionStorage', SPLASH_KEY, '1');
    setShowSplash(false);
  }

  return (
    <>
      {showSplash && <Splash chassis={body.chassis} onDone={closeSplash} />}
      <Nav
        body={body}
        onBodyChange={setBodyId}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Hero body={body} />
        <Gallery body={body} />
        <hr className="stripe" />
        <BuildPhases body={body} />
        <hr className="stripe" />
        <Specifications body={body} />
        <BodyCompare body={body} onBodyChange={setBodyId} />
        <Philosophy body={body} />
        <Budget />
        <hr className="stripe" />
        <Interior />
        <hr className="stripe" />
        <Audio body={body} />
      </main>
      <Footer body={body} />
    </>
  );
}
