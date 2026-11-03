import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  /**
   * Smoothly scrolls to a section by element ID without modifying the browser URL.
   * Completely avoids #hashes in the URL (e.g. keeping http://localhost:4200/ clean).
   */
  scrollTo(elementId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const cleanId = elementId.replace(/^#/, '');
    const element = document.getElementById(cleanId);

    if (element) {
      const headerOffset = 76; // header height offset
      const elementTop = element.getBoundingClientRect().top;
      const targetPosition = elementTop + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      });

      // Remove any lingering hash from address bar without page reload
      if (typeof window !== 'undefined' && window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  }

  /**
   * Clean any initial hash on page bootstrap so URL is always clean
   */
  cleanUrlHash(): void {
    if (typeof window !== 'undefined' && window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }
}

