import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  readonly scrollService = inject(ScrollService);

  readonly techHighlights = [
    { label: 'Angular & React', icon: 'bi-code-slash' },
    { label: '.NET & Node.js', icon: 'bi-cpu' },
    { label: 'Azure & AWS Cloud', icon: 'bi-cloud-check' },
    { label: 'Dedicated Offshore Engineers', icon: 'bi-people' },
  ];
}
