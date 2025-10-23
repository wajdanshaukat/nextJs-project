// src/hooks/useGsap.js
'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useGsap() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    // optional global config:
    ScrollTrigger.defaults({ ease: 'power2.out', scrub: false });

    return () => {
      try {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);
}
