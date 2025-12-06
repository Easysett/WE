import { logEvent, setUserProperties, setUserId } from 'firebase/analytics';
import { analytics } from './firebase';


declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    clarity?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type EventCategory = 
  | 'Contact' 
  | 'Navigation' 
  | 'Engagement' 
  | 'Form' 
  | 'Service'
  | 'User';

export interface AnalyticsEvent {
  action: string;
  category: EventCategory;
  label?: string;
  value?: number;
}

export interface PageViewData {
  page_path: string;
  page_title?: string;
  page_location?: string;
}


const isAnalyticsAvailable = (): boolean => {
  return typeof window !== 'undefined' && window.gtag !== undefined;
};

const isClarityAvailable = (): boolean => {
  return typeof window !== 'undefined' && window.clarity !== undefined;
};

const isFirebaseAnalyticsAvailable = (): boolean => {
  return analytics !== null;
};

export const trackPageView = (path: string, title?: string): void => {
  try {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (!measurementId) {
      console.warn('Google Analytics Measurement ID not found');
      return;
    }

    if (isAnalyticsAvailable() && window.gtag) {
      const pageViewData: Record<string, unknown> = {
        page_path: path,
        page_title: title || document.title,
        page_location: window.location.href
      };

      window.gtag('config', measurementId, pageViewData);
      console.log('📊 Page view tracked:', path);
    }
    if (isFirebaseAnalyticsAvailable() && analytics) {
      logEvent(analytics, 'page_view', {
        page_path: path,
        page_title: title || document.title
      });
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};
export const trackEvent = (
  action: string,
  category: EventCategory,
  label?: string,
  value?: number
): void => {
  try {
    if (isAnalyticsAvailable() && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
      console.log('📊 Event tracked:', { action, category, label, value });
    }
    if (isFirebaseAnalyticsAvailable() && analytics) {
      logEvent(analytics, action, {
        category,
        label,
        value
      });
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};
export const trackButtonClick = (buttonName: string, location: string): void => {
  trackEvent('button_click', 'Engagement', `${buttonName} - ${location}`);
};
export const trackFormSubmission = (formName: string, success: boolean): void => {
  trackEvent(
    success ? 'form_submission_success' : 'form_submission_error',
    'Form',
    formName,
    success ? 1 : 0
  );
};

/**
 * Track service selection
 */
export const trackServiceView = (serviceName: string): void => {
  trackEvent('service_view', 'Service', serviceName);
};

/**
 * Track outbound link clicks
 */
export const trackOutboundLink = (url: string, linkText: string): void => {
  trackEvent('outbound_link_click', 'Navigation', `${linkText} - ${url}`);
};

/**
 * Set user properties
 */
export const setUserProperty = (propertyName: string, value: string): void => {
  try {
    if (isAnalyticsAvailable() && window.gtag) {
      window.gtag('set', 'user_properties', {
        [propertyName]: value
      });
    }

    // Also set with Firebase Analytics if available
    if (isFirebaseAnalyticsAvailable() && analytics) {
      setUserProperties(analytics, {
        [propertyName]: value
      });
    }
  } catch (error) {
    console.error('Error setting user property:', error);
  }
};
export const setAnalyticsUserId = (userId: string): void => {
  try {
    if (isAnalyticsAvailable() && window.gtag) {
      window.gtag('set', 'user_properties', { user_id: userId });
    }
    if (isFirebaseAnalyticsAvailable() && analytics) {
      setUserId(analytics, userId);
    }
  } catch (error) {
    console.error('Error setting user ID:', error);
  }
};

export const trackClarityEvent = (eventName: string): void => {
  try {
    if (isClarityAvailable() && window.clarity) {
      window.clarity('event', eventName);
      console.log('📊 Clarity event tracked:', eventName);
    }
  } catch (error) {
    console.error('Error tracking Clarity event:', error);
  }
};
export const setClarityTag = (key: string, value: string): void => {
  try {
    if (isClarityAvailable() && window.clarity) {
      window.clarity('set', key, value);
      console.log(' Clarity tag set:', { key, value });
    }
  } catch (error) {
    console.error('Error setting Clarity tag:', error);
  }
};
export const identifyClarityUser = (userId: string, sessionId?: string, pageId?: string): void => {
  try {
    if (isClarityAvailable() && window.clarity) {
      window.clarity('identify', userId, { sessionId, pageId } as Record<string, unknown>);
      console.log(' Clarity user identified:', userId);
    }
  } catch (error) {
    console.error('Error identifying Clarity user:', error);
  }
};
export const trackInteraction = (
  interactionType: string,
  details: string,
  category: EventCategory = 'Engagement'
): void => {
  trackEvent(interactionType, category, details);
  trackClarityEvent(`${interactionType}_${details.replace(/\s+/g, '_').toLowerCase()}`);
};
export const trackError = (errorType: string, errorMessage: string): void => {
  trackEvent('error', 'User', `${errorType}: ${errorMessage}`);
  trackClarityEvent(`error_${errorType.replace(/\s+/g, '_').toLowerCase()}`);
};
export const trackSearch = (searchTerm: string, resultsCount: number): void => {
  trackEvent('search', 'Engagement', searchTerm, resultsCount);
  trackClarityEvent('search_performed');
};
export const trackDownload = (fileName: string, fileType: string): void => {
  trackEvent('download', 'Engagement', `${fileName} (${fileType})`);
  trackClarityEvent('file_download');
};
export const trackVideoPlay = (videoTitle: string): void => {
  trackEvent('video_play', 'Engagement', videoTitle);
  trackClarityEvent('video_interaction');
};
export const initializeAnalytics = (consentGiven: boolean): void => {
  if (consentGiven) {
    console.log(' Analytics consent given - tracking enabled');
    if (typeof window !== 'undefined' && window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'consent': 'update',
        'analytics_storage': 'granted'
      });
      console.log(' Google Analytics consent updated to granted');
    }
  } else {
    console.log(' Analytics consent denied - tracking disabled');
    if (typeof window !== 'undefined' && window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'consent': 'update',
        'analytics_storage': 'denied'
      });
      console.log(' Google Analytics consent updated to denied');
    }
  }
};
export const analyticsStatus = {
  isGoogleAnalyticsReady: isAnalyticsAvailable,
  isClarityReady: isClarityAvailable,
  isFirebaseAnalyticsReady: isFirebaseAnalyticsAvailable
};