'use client';
import { useEffect } from 'react';

export default function useScrollNavigation() {
  useEffect(() => {
    const handleScroll = () => {
      // Add your scroll logic
      console.log('Scrolling...');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
