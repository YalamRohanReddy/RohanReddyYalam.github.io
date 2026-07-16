import { Link, NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navItems = [
  { title: 'Home', to: '/' },
  { title: 'Projects', to: '/projects' },
  { title: 'Contact', to: '/contact' },
];

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => (
  <header className="sticky top-0 z-30 border-b border-white/10 bg-white/80 text-slate-950 backdrop-blur-xl dark:border-white/10 dark:bg-[#071420]/80 dark:text-slate-100">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-colors sm:px-8">
      <Link to="/" className="text-lg font-semibold tracking-[0.18em] text-slate-100/90">
        Rohan Yalam
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive ? 'text-secondary' : 'text-slate-300 hover:text-slate-100'}`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Link
          to="/contact"
          className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-slate-950 shadow-glass shadow-cyan-500/20 transition hover:opacity-95"
        >
          Hire Me
        </Link>
      </div>
    </div>
  </header>
);
