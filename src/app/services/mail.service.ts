import { Injectable } from '@angular/core';

export interface MailField {
  label: string;
  value: string | number | boolean | string[] | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class MailService {
  readonly recipientEmail = 'venish.patel@cognifytechnology.in';

  /**
   * Formats fields into readable "Label: value" lines separated by line breaks,
   * encodes the URI parameters, and triggers window.location.href to open the default email client.
   */
  sendInquiry(subject: string, fields: MailField[]): void {
    const formattedBodyLines: string[] = [];

    for (const field of fields) {
      let val = field.value;
      if (val === null || val === undefined || val === '') {
        val = 'Not specified';
      } else if (Array.isArray(val)) {
        val = val.length > 0 ? val.join(', ') : 'None selected';
      }
      formattedBodyLines.push(`${field.label}: ${val}`);
    }

    // Add footer timestamp note
    formattedBodyLines.push('');
    formattedBodyLines.push('---');
    formattedBodyLines.push(`Sent via Cognify Technology Website at ${new Date().toLocaleString()}`);

    const bodyString = formattedBodyLines.join('\r\n');
    const mailtoUrl = `mailto:${this.recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyString)}`;

    // Open user's email client
    window.location.href = mailtoUrl;
  }
}
