import { HiMoon, HiSun } from 'react-icons/hi';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => (
  <button
    type="button"
    aria-label="Toggle theme"
    className="inline-flex items-center justify-center rounded-full border border-slate-200/70 bg-slate-100 p-2 text-slate-950 transition hover:border-secondary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
    onClick={toggleTheme}
  >
    {theme === 'dark' ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
  </button>
);
