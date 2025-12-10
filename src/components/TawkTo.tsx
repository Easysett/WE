// components/TawkTo.tsx
'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkTo() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/693993fefc8f39198374a3b0/1jc4ek7h6';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return null;
}