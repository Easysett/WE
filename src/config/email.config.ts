export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  recipientEmail: import.meta.env.VITE_CONTACT_EMAIL,
};

// Validate that all required environment variables are present
export const validateEmailConfig = (): boolean => {
  const required = [
    emailConfig.serviceId,
    emailConfig.templateId,
    emailConfig.publicKey,
  ];
  
  return required.every(value => value && value.length > 0);
};