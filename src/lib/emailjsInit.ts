import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}; 