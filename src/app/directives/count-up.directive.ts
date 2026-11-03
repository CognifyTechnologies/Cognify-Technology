import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input('appCountUp') endValue = 0;
  @Input() countDuration = 1800; // in milliseconds
  @Input() countSuffix = '+';
  @Input() countPrefix = '';

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Initial display
    this.renderText(0);

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.hasAnimated = true;
              this.startCountAnimation();
              this.observer?.unobserve(this.el.nativeElement);
            }
          });
        },
        { threshold: 0.3 }
      );

      this.observer.observe(this.el.nativeElement);
    } else {
      this.renderText(this.endValue);
    }
  }

  private startCountAnimation(): void {
    const startTime = performance.now();
    const duration = this.countDuration;
    const target = this.endValue;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out quad formula
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOutProgress * target);

      this.renderText(currentVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.renderText(target);
      }
    };

    requestAnimationFrame(step);
  }

  private renderText(value: number): void {
    const formatted = `${this.countPrefix}${value}${this.countSuffix}`;
    this.renderer.setProperty(this.el.nativeElement, 'textContent', formatted);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

