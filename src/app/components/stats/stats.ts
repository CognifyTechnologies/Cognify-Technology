import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../directives/count-up.directive';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, CountUpDirective, ScrollRevealDirective],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class StatsComponent {
  readonly stats: StatItem[] = [
    {
      value: 2,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Hands-on full-stack development & cloud architecture',
      icon: 'bi-calendar-check',
    },
    {
      value: 5,
      suffix: '+',
      label: 'Client Projects Delivered',
      description: 'Production systems solving real business challenges',
      icon: 'bi-rocket-takeoff',
    },
    {
      value: 100,
      suffix: '%',
      label: 'On-Time Delivery',
      description: 'Milestone tracking and transparent progress reports',
      icon: 'bi-patch-check',
    },
    {
      value: 10,
      suffix: '+',
      label: 'Tech Stacks Mastered',
      description: 'Angular, React, .NET, Node.js, SQL, Azure & AWS',
      icon: 'bi-layers',
    },
  ];
}

