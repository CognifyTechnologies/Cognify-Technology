import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';

interface NavItem {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  readonly themeService = inject(ThemeService);
  readonly scrollService = inject(ScrollService);

  readonly isScrolled = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly activeSection = signal<string>('hero');

  readonly navItems: NavItem[] = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Tech Stack', sectionId: 'tech-stack' },
    { label: 'Clients', sectionId: 'clients' },
    { label: 'Hire Offshore', sectionId: 'offshore' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  ngOnInit(): void {
    this.scrollService.cleanUrlHash();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled.set(scrollPos > 30);

    // Active link detection based on section scroll positions
    const sections = this.navItems.map((item) => item.sectionId);
    for (const sectionId of [...sections].reverse()) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop - 120;
        if (scrollPos >= top) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }

  navigateToSection(sectionId: string, event: Event): void {
    this.closeMobileMenu();
    this.scrollService.scrollTo(sectionId, event);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
