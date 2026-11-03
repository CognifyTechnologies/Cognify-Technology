import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface HighlightCard {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  readonly highlights: HighlightCard[] = [
    {
      title: 'Quality Code',
      description: 'Clean, maintainable, and strictly typed architecture engineered to scale smoothly.',
      icon: 'bi-code-square',
    },
    {
      title: 'Transparent Communication',
      description: 'Daily/weekly updates, clear progress demos, and direct access to your developers.',
      icon: 'bi-chat-heart',
    },
    {
      title: 'On-Time Delivery',
      description: 'Milestone-based sprints and realistic estimates to ensure your release stays on schedule.',
      icon: 'bi-clock-history',
    },
    {
      title: 'Affordable Pricing',
      description: 'High-tier software expertise and offshore cost efficiencies with zero agency bloat.',
      icon: 'bi-tags',
    },
  ];
}

