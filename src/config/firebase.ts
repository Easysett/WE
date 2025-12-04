import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';

// Firebase configuration interface
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ''
};

// Validate Firebase configuration
const validateFirebaseConfig = (config: FirebaseConfig): boolean => {
  const requiredFields: (keyof FirebaseConfig)[] = [
    'apiKey',
    'authDomain',
    'projectId',
    'storageBucket',
    'messagingSenderId',
    'appId'
  ];

  for (const field of requiredFields) {
    if (!config[field]) {
      console.error(`Firebase configuration error: ${field} is missing`);
      return false;
    }
  }
  return true;
};

// Initialize Firebase only if config is valid
let app: ReturnType<typeof initializeApp> | null = null;
let firestoreDb: Firestore | null = null;
let analytics: Analytics | null = null;

if (validateFirebaseConfig(firebaseConfig)) {
  try {
    // Initialize Firebase App
    app = initializeApp(firebaseConfig);
    console.log(' Firebase initialized successfully');

    // Initialize Firestore
    firestoreDb = getFirestore(app);
    
    // Connect to Firestore emulator in development (optional)
    if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
      connectFirestoreEmulator(firestoreDb, 'localhost', 8080);
      console.log(' Connected to Firestore emulator');
    }

    // Initialize Analytics (only in production and if supported)
    if (typeof window !== 'undefined' && import.meta.env.PROD) {
      isSupported().then((supported) => {
        if (supported && app) {
          analytics = getAnalytics(app);
          console.log(' Firebase Analytics initialized');
        }
      }).catch((error) => {
        console.error('Analytics initialization error:', error);
      });
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
} else {
  console.warn(' Firebase not initialized due to missing configuration');
}

// Export the Firestore instance
export const db: Firestore | null = firestoreDb;

// Export Firebase app and analytics
export { app as firebaseApp, analytics };

// Helper function to get Firestore instance with error handling
export const getFirestoreInstance = (): Firestore => {
  if (!firestoreDb) {
    throw new Error('Firestore is not initialized. Check your Firebase configuration.');
  }
  return firestoreDb;
};

// Helper to check if Firebase is ready
export const isFirebaseReady = (): boolean => {
  return app !== null && firestoreDb !== null;
};

export default app;