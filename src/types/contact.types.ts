export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}