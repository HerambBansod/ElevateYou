import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Bebas_Neue, Antonio } from 'next/font/google';

// Load fonts and define CSS variables
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const antonio = Antonio({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-antonio',
});

export const metadata = {
  title: 'ElevateYou',
  description:
    'ElevateYou by Siddhi Barge is a personalized fitness experience designed to empower, inspire, and transform. With a focus on individual growth and holistic wellness, Siddhi blends science-backed training methods with motivational coaching to help you build strength — inside and out. Whether you\'re aiming for weight loss, muscle gain, or mental resilience, ElevateYou is your space to rise, reshape, and reclaim your best self.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${antonio.variable}`}>
      <body className="antialiased">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
