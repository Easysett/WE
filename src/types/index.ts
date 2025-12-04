import type { LucideIcon } from 'lucide-react';

export interface ServiceData {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

export interface ServicesDataMap {
  [key: string]: ServiceData;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface NavigationService {
  name: string;
  path: string;
}

export interface Feature {
  name: string;
  image: string;
}