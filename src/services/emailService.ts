import emailjs from '@emailjs/browser';
import { emailConfig, validateEmailConfig } from '../config/email.config';
import type { ContactFormData, EmailResponse } from '../types/contact.types';

export class EmailService {
  private static isConfigured(): boolean {
    return validateEmailConfig();
  }

  static async sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
    if (!this.isConfigured()) {
      console.error('EmailJS is not properly configured. Check your .env file.');
      return {
        success: false,
        message: 'Email service is not configured properly.',
      };
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: emailConfig.recipientEmail,
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        emailConfig.serviceId!,
        emailConfig.templateId!,
        templateParams,
        emailConfig.publicKey!
      );

      console.log('Email sent successfully:', response.status, response.text);

      return {
        success: true,
        message: 'Email sent successfully!',
      };
    } catch (error: unknown) {
      console.error('Failed to send email:', error);
      const errorMessage = (error as { text?: string }).text || 'Failed to send email. Please try again.';

      return {
        success: false,
        message: errorMessage,
      };
    }
  }
}