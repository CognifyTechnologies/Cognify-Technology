import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface TechItem {
  name: string;
  role: string;
  icon: string;
  description: string;
  level: string;
}

export interface TechGroup {
  category: string;
  categoryIcon: string;
  categoryDescription: string;
  items: TechItem[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStackComponent {
  readonly techGroups: TechGroup[] = [
    {
      category: 'Frontend Engineering',
      categoryIcon: 'bi-window-stack',
      categoryDescription: 'High-performance reactive interfaces and single page applications',
      items: [
        {
          name: 'Angular',
          role: 'Framework',
          icon: 'bi-shield-check',
          description: 'Signals, standalone components, reactive forms, and enterprise SPAs.',
          level: 'Core Expertise',
        },
        {
          name: 'React',
          role: 'Library',
          icon: 'bi-atom',
          description: 'Modern functional hooks, Next.js setups, and dynamic client dashboards.',
          level: 'Advanced',
        },
      ],
    },
    {
      category: 'Backend & APIs',
      categoryIcon: 'bi-hdd-network',
      categoryDescription: 'High-concurrency microservices, robust business logic, and security',
      items: [
        {
          name: '.NET / C#',
          role: 'Enterprise Platform',
          icon: 'bi-cpu',
          description: 'ASP.NET Core Web APIs, clean architecture, Entity Framework, and microservices.',
          level: 'Core Expertise',
        },
        {
          name: 'Node.js',
          role: 'JavaScript Runtime',
          icon: 'bi-diagram-3',
          description: 'Fast, lightweight asynchronous event-driven REST and WebSocket servers.',
          level: 'Advanced',
        },
      ],
    },
    {
      category: 'Databases & Storage',
      categoryIcon: 'bi-database-fill-gear',
      categoryDescription: 'ACID transactional integrity, relational schema design, and query tuning',
      items: [
        {
          name: 'SQL Server',
          role: 'RDBMS',
          icon: 'bi-database',
          description: 'Complex stored procedures, indexing, data migrations, and high availability.',
          level: 'Core Expertise',
        },
      ],
    },
    {
      category: 'Cloud Infrastructure & DevOps',
      categoryIcon: 'bi-clouds-fill',
      categoryDescription: 'Scalable deployment, serverless computing, and continuous integration',
      items: [
        {
          name: 'Microsoft Azure',
          role: 'Cloud Platform',
          icon: 'bi-cloud',
          description: 'Azure App Services, SQL Database, Blob Storage, and Azure DevOps CI/CD.',
          level: 'Primary Cloud',
        },
        {
          name: 'Amazon Web Services (AWS)',
          role: 'Cloud Platform',
          icon: 'bi-cloud-sun',
          description: 'AWS EC2, S3, RDS, CloudFront CDN, and Lambda serverless functions.',
          level: 'Deployment Ready',
        },
      ],
    },
  ];
}

