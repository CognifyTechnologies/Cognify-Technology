import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { StatsComponent } from './components/stats/stats';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { ClientsComponent } from './components/clients/clients';
import { OffshoreHiringComponent } from './components/offshore-hiring/offshore-hiring';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button';
import { BackToTopComponent } from './components/back-to-top/back-to-top';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    AboutComponent,
    ServicesComponent,
    TechStackComponent,
    ClientsComponent,
    OffshoreHiringComponent,
    ContactComponent,
    FooterComponent,
    WhatsappButtonComponent,
    BackToTopComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private scrollService = inject(ScrollService);
  readonly pageTitle = 'Cognify Technology';

  ngOnInit(): void {
    // If the browser lands on or refreshes with a #hash (e.g. /#about), smoothly scroll and clean the URL
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.substring(1);
      setTimeout(() => {
        this.scrollService.scrollTo(hashId);
      }, 100);
    }
  }
}
