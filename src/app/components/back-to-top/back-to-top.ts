import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss',
})
export class BackToTopComponent {
  readonly isVisible = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    this.isVisible.set(scrollPos > 320);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

