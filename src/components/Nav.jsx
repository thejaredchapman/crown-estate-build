import BodyToggle from './BodyToggle';
import styles from './Nav.module.css';

const links = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#build', label: 'Build' },
  { href: '#specs', label: 'Specs' },
  { href: '#compare', label: 'Estate vs Sedan' },
  { href: '#cost', label: 'Budget' },
  { href: '#interior', label: 'Interior' },
  { href: '#audio', label: 'Audio' },
];

export default function Nav({ body, onBodyChange, theme, onToggleTheme }) {
  return (
    <nav className={styles.nav} aria-label="Sections">
      <a href="#top" className={styles.logo}>
        <span className={styles.mark} aria-hidden="true" />
        {body.chassis}
      </a>
      <ul className={styles.links}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <div className={styles.controls}>
        <BodyToggle body={body.id} onChange={onBodyChange} />
        <button
          type="button"
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}
