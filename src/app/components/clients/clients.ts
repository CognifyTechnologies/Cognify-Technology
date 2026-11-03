import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ScrollService } from '../../services/scroll.service';

export interface ClientProject {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  isPlaceholder?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  designation: string;
  organization: string;
  rating: number;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class ClientsComponent {
  readonly scrollService = inject(ScrollService);

  readonly clientProjects: ClientProject[] = [
    {
      id: 'nootan-vidhyalay',
      name: 'Nootan Vidhyalay',
      category: 'Education & Institutional',
      description:
        'Complete bilingual institutional school website and management portal featuring online admission inquiries, student showcase, activity galleries, and administrative communication.',
      image: '/images/client-nootan-vidhyalay.jpg',
      tags: ['School Website', 'Admin Portal', 'Bilingual UI', 'Responsive Design'],
      liveUrl: 'https://nootan-vidhyalay.cognifytechnology.in',
      isPlaceholder: false,
    },
    {
      id: 'placeholder-project-1',
      name: 'Your Company Could Be Here',
      category: 'Next Success Story',
      description:
        'Partner with Cognify Technology to design, build, and deploy your custom SaaS platform, enterprise ERP, or customer-facing mobile-first website.',
      image: '',
      tags: ['Custom Software', 'Cloud Hosted', 'Scalable Architecture'],
      isPlaceholder: true,
    },
    {
      id: 'placeholder-project-2',
      name: 'Offshore Team Extension',
      category: 'Dedicated Engineering',
      description:
        'A global fintech or healthcare startup augmenting their development bandwidth with dedicated offshore Angular/.NET engineers.',
      image: '',
      tags: ['Offshore Developers', 'Full-Stack Sprints', 'High Velocity'],
      isPlaceholder: true,
    },
  ];

  readonly testimonial: Testimonial = {
    quote:
      'Cognify Technology delivered our school website with exceptional attention to detail. Their clear communication, responsiveness to our feedback, and dedication to delivering on time made the entire process seamless and dependable.',
    author: 'Institutional Leadership',
    designation: 'Management Committee',
    organization: 'Nootan Vidhyalay Karsanpura',
    rating: 5,
  };
}
