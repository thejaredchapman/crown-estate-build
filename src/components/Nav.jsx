import styles from './Nav.module.css';

const links = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#build', label: 'Build' },
  { href: '#specs', label: 'Specifications' },
  { href: '#interior', label: 'Interior' },
  { href: '#audio', label: 'Audio' },
  { href: '#cost', label: 'Budget' },
];

export default function Nav({ theme, onToggleTheme }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>JZS171W / Crown Estate</div>
      <ul className={styles.links}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <button
        className={styles.themeToggle}
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? '◐ Light' : '◑ Dark'}
      </button>
    </nav>
  );
}
