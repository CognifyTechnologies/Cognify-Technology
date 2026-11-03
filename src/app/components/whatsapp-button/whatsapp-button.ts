import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
})
export class WhatsappButtonComponent {
  readonly whatsappUrl =
    'https://wa.me/919825641854?text=Hello%20Cognify%20Technology%2C%20I%20would%20like%20to%20inquire%20about%20your%20software%20and%20offshore%20services.';
}
