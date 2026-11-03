import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CustomSelectComponent } from '../custom-select/custom-select';

function requireAtLeastOneCheckbox(min = 1) {
  return (control: AbstractControl): ValidationErrors | null => {
    const formArray = control as FormArray;
    const totalSelected = formArray.controls
      .map((c) => c.value)
      .reduce((prev, next) => (next ? prev + 1 : prev), 0);
    return totalSelected >= min ? null : { required: true };
  };
}

@Component({
  selector: 'app-offshore-hiring',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollRevealDirective,
    CustomSelectComponent,
  ],
  templateUrl: './offshore-hiring.html',
  styleUrl: './offshore-hiring.scss',
})
export class OffshoreHiringComponent {
  private fb = inject(FormBuilder);
  readonly mailService = inject(MailService);

  readonly isSubmittedSuccess = signal<boolean>(false);

  readonly availableTechnologies = [
    'Angular',
    'React',
    'Node.js',
    '.NET',
    'SQL Server',
    'Azure',
    'AWS',
  ];

  readonly engagementTypes = [
    'Full-time monthly (40 hrs/week)',
    'Part-time (20 hrs/week)',
    'Hourly / On-Demand',
  ];

  readonly durationOptions = [
    '1 - 3 Months',
    '3 - 6 Months',
    '6 - 12 Months',
    'Long-term (1+ Years)',
    'Flexible / Undecided',
  ];

  readonly offshoreForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    companyName: [''],
    country: [''],
    developersCount: [1, [Validators.required, Validators.min(1)]],
    technologies: this.fb.array(
      this.availableTechnologies.map(() => new FormControl(false)),
      [requireAtLeastOneCheckbox(1)]
    ),
    engagementType: ['Full-time monthly (40 hrs/week)', [Validators.required]],
    duration: ['3 - 6 Months'],
    message: [''],
  });

  get techFormArray(): FormArray {
    return this.offshoreForm.get('technologies') as FormArray;
  }

  onSubmit(): void {
    if (this.offshoreForm.invalid) {
      this.offshoreForm.markAllAsTouched();
      return;
    }

    const formValue = this.offshoreForm.value;

    // Map selected technologies
    const selectedTechs = this.availableTechnologies.filter(
      (_, index) => formValue.technologies[index] === true
    );

    this.mailService.sendInquiry('Offshore Developer Request - Cognify Technology', [
      { label: 'Full Name', value: formValue.fullName },
      { label: 'Work Email', value: formValue.email },
      { label: 'Company Name', value: formValue.companyName },
      { label: 'Country', value: formValue.country },
      { label: 'Number of Developers Needed', value: formValue.developersCount },
      { label: 'Technologies Required', value: selectedTechs },
      { label: 'Engagement Type', value: formValue.engagementType },
      { label: 'Project Duration', value: formValue.duration },
      { label: 'Project Needs & Message', value: formValue.message },
    ]);

    this.isSubmittedSuccess.set(true);
    this.offshoreForm.reset({
      developersCount: 1,
      engagementType: 'Full-time monthly (40 hrs/week)',
      duration: '3 - 6 Months',
    });

    // Reset checkboxes to false
    this.techFormArray.controls.forEach((control) => control.setValue(false));
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.offshoreForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  isTechArrayInvalid(): boolean {
    return !!(
      this.techFormArray.invalid &&
      (this.techFormArray.dirty || this.techFormArray.touched)
    );
  }
}

