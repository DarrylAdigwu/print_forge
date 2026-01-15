
// tailwind.config.js
import forms from '@tailwindcss/forms'; // Example import

export const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [forms],
  theme: {
    extend: {
      colors: {
        "orange-accent": "#F77D36"
      }
    }
  }
}