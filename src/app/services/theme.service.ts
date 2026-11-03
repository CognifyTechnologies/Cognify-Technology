import { Injectable, effect, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /**
   * Theme mode state using Angular Signals.
   * Kept in memory only (no localStorage), default is 'light'.
   */
  readonly currentTheme = signal<ThemeMode>('light');

  constructor() {
    // Synchronize HTML root element class with signal
    effect(() => {
      const mode = this.currentTheme();
      const root = document.documentElement;
      if (mode === 'dark') {
        root.classList.add('dark-theme');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark-theme');
        root.setAttribute('data-theme', 'light');
      }
    });
  }

  toggleTheme(): void {
    this.currentTheme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }

  setTheme(mode: ThemeMode): void {
    this.currentTheme.set(mode);
  }

  isDark(): boolean {
    return this.currentTheme() === 'dark';
  }
}

