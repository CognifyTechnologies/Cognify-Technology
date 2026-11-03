import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  readonly mailService = inject(MailService);

  readonly isSubmittedSuccess = signal<boolean>(false);

  readonly projectTypes = [
    'Business Website',
    'E-commerce Store',
    'Web Application (SPA)',
    'School/Institute Website & Portal',
    'Custom Software / ERP',
    'Dedicated Offshore Developers',
    'Other / Consultation',
  ];

  readonly budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $3,000',
    '$3,000+',
    'Not sure yet',
  ];

  readonly timelineOptions = [
    'Immediately (Within 2 weeks)',
    '1 - 2 Months',
    '2 - 3 Months',
    'Flexible',
  ];

  readonly contactForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    companyName: [''],
    projectType: ['Business Website', [Validators.required]],
    budgetRange: ['$1,000 - $3,000'],
    expectedTimeline: ['1 - 2 Months'],
    projectDescription: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const val = this.contactForm.value;

    this.mailService.sendInquiry('New Project Inquiry - Cognify Technology', [
      { label: 'Full Name', value: val.fullName },
      { label: 'Email', value: val.email },
      { label: 'Phone / WhatsApp', value: val.phone },
      { label: 'Company Name', value: val.companyName },
      { label: 'Project Type', value: val.projectType },
      { label: 'Budget Range', value: val.budgetRange },
      { label: 'Expected Timeline', value: val.expectedTimeline },
      { label: 'Project Description', value: val.projectDescription },
    ]);

    this.isSubmittedSuccess.set(true);
    this.contactForm.reset({
      projectType: 'Business Website',
      budgetRange: '$1,000 - $3,000',
      expectedTimeline: '1 - 2 Months',
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

