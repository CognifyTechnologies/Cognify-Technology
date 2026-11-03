import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0; // ms delay
  @Input() revealThreshold = 0.15; // 15% visible

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    this.renderer.addClass(element, 'scroll-reveal-init');

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (this.revealDelay > 0) {
                setTimeout(() => {
                  this.renderer.addClass(element, 'is-revealed');
                }, this.revealDelay);
              } else {
                this.renderer.addClass(element, 'is-revealed');
              }
              // Once revealed, unobserve to save performance
              this.observer?.unobserve(element);
            }
          });
        },
        {
          threshold: this.revealThreshold,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      this.observer.observe(element);
    } else {
      // Fallback for environments without IntersectionObserver
      this.renderer.addClass(element, 'is-revealed');
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

