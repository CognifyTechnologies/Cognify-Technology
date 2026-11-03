import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  readonly scrollService = inject(ScrollService);

  readonly currentYear = new Date().getFullYear();
  readonly email = 'venish.patel@cognifytechnology.in';
  readonly phone = '+91 98256 41854';
  readonly location = 'Gandhinagar, Gujarat, India';

  readonly quickLinks = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About Us', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Tech Stack', sectionId: 'tech-stack' },
    { label: 'Delivered Projects', sectionId: 'clients' },
    { label: 'Hire Offshore Developers', sectionId: 'offshore' },
    { label: 'Get a Free Quote', sectionId: 'contact' },
  ];

  readonly serviceLinks = [
    { label: 'Custom Website Development', sectionId: 'services' },
    { label: 'Web Application Development (SPA)', sectionId: 'services' },
    { label: 'Backend & API Engineering', sectionId: 'services' },
    { label: 'Cloud Deployment & DevOps', sectionId: 'services' },
    { label: 'Dedicated Offshore Developers', sectionId: 'offshore' },
    { label: 'Ongoing Maintenance & Support', sectionId: 'services' },
  ];

  readonly socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'bi-linkedin',
      href: 'https://www.linkedin.com/in/venishkumar-patel-429aa9289/',
    },
    {
      name: 'GitHub',
      icon: 'bi-github',
      href: 'https://github.com/CognifyTechnologies',
    },
    {
      name: 'Twitter / X',
      icon: 'bi-twitter-x',
      href: 'https://x.com/home',
    },
    {
      name: 'WhatsApp',
      icon: 'bi-whatsapp',
      href: 'https://wa.me/919825641854',
    },
  ];
}
