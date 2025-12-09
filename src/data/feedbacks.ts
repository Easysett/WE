export interface Feedback {
  id: number;
  name: string;
  text: string;
  rating: number;
  service?: string;
}

export const feedbacks: Feedback[] = [
  {
    id: 1,
    name: "AHMED AL-MANSOORI",
    text: "Easyset made my company setup process incredibly smooth. Their team handled all documentation efficiently and kept me informed at every step. I highly recommend their PRO services to anyone starting a business in UAE.",
    rating: 5,
    service: "Company Formation"
  },
  {
    id: 2,
    name: "SARAH JOHNSON",
    text: "Exceptional service for document attestation! The team was professional, quick, and very helpful. My certificates were attested faster than expected. Will definitely use their services again.",
    rating: 5,
    service: "Document Attestation"
  },
  {
    id: 3,
    name: "RAJESH KUMAR",
    text: "I was worried about my visa renewal process, but Easyset handled everything perfectly. No stress, no delays. Their customer service is outstanding and they truly care about their clients.",
    rating: 5,
    service: "Visa Renewal"
  },
  {
    id: 4,
    name: "FATIMA ABDULLAH",
    text: "Professional and reliable! Easyset helped with my family visa application and made the entire process hassle-free. Their attention to detail and prompt communication made all the difference.",
    rating: 5,
    service: "Family Visa"
  },
  {
    id: 5,
    name: "MICHAEL CHEN",
    text: "Top-notch service for Emirates ID and typing services. The staff is knowledgeable, friendly, and extremely efficient. Easyset is now my go-to for all documentation needs in Dubai.",
    rating: 5,
    service: "Emirates ID Services"
  },
  {
    id: 6,
    name: "LAYLA HASSAN",
    text: "I needed urgent trade license renewal and Easyset delivered beyond expectations. Their team worked diligently to meet my deadline. Truly impressive professionalism and expertise!",
    rating: 5,
    service: "Trade License Renewal"
  },
  {
    id: 7,
    name: "DAVID MARTINEZ",
    text: "Outstanding experience with Easyset for my golden visa application. They guided me through every requirement and ensured all documents were perfect. Highly recommended for their expertise!",
    rating: 5,
    service: "Golden Visa"
  },
  {
    id: 8,
    name: "AMIRA KHALIL",
    text: "Easyset is simply the best! Their business setup consultation was thorough and they helped me choose the right free zone for my startup. Professional, efficient, and trustworthy.",
    rating: 5,
    service: "Business Consultation"
  }
];