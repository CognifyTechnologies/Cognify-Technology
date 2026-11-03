import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ScrollService } from '../../services/scroll.service';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
  badge?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
  readonly scrollService = inject(ScrollService);

  readonly services: ServiceItem[] = [
    {
      id: 'custom-website',
      title: 'Custom Website Development',
      description:
        'Fast, mobile-responsive, and SEO-optimized business websites crafted with modern technologies to elevate your brand presence.',
      icon: 'bi-window-fullscreen',
      bullets: [
        'Responsive layout for all screen sizes',
        'SEO-friendly structure & fast load times',
        'Intuitive CMS integration & easy edits',
      ],
    },
    {
      id: 'web-app-dev',
      title: 'Web Application Development',
      description:
        'Scalable Single Page Applications (SPAs) and portals built with Angular and React that streamline your internal workflows.',
      icon: 'bi-cpu-fill',
      bullets: [
        'Modular, enterprise-grade architecture',
        'Interactive dashboards & real-time updates',
        'Role-based permissions & secure auth',
      ],
      badge: 'Popular',
    },
    {
      id: 'backend-api',
      title: 'Backend & API Development',
      description:
        'Robust, high-throughput microservices and RESTful APIs developed in .NET Core and Node.js with SQL Server databases.',
      icon: 'bi-server',
      bullets: [
        'Secure RESTful & GraphQL APIs',
        'Database optimization & normalization',
        'Third-party payment & tool integrations',
      ],
    },
    {
      id: 'cloud-devops',
      title: 'Cloud Deployment & DevOps',
      description:
        'Automated CI/CD pipelines, containerization, and cost-efficient cloud hosting setup on Microsoft Azure and AWS.',
      icon: 'bi-cloud-arrow-up',
      bullets: [
        'Azure App Services & AWS ECS/S3',
        'Automated GitHub Actions CI/CD',
        '24/7 uptime monitoring & backup routines',
      ],
    },
    {
      id: 'offshore-dev',
      title: 'Dedicated Offshore Developers',
      description:
        'Hire vetted full-stack engineers as direct extensions of your in-house team on hourly, part-time, or full-time monthly models.',
      icon: 'bi-people-fill',
      bullets: [
        'Angular, React, .NET, Node.js experts',
        'Direct Slack/Teams communication',
        'Zero recruitment overhead & quick start',
      ],
      badge: 'High Value',
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance & Support',
      description:
        'Proactive monitoring, security patching, bug fixes, performance tuning, and regular feature updates for your live applications.',
      icon: 'bi-shield-check',
      bullets: [
        'Guaranteed SLA response times',
        'Routine dependency & security updates',
        'Continuous performance optimization',
      ],
    },
  ];
}
