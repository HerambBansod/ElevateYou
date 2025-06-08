import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ElevateYou",
  description: "ElevateYou by Siddhi Barge is a personalized fitness experience designed to empower, inspire, and transform. With a focus on individual growth and holistic wellness, Siddhi blends science-backed training methods with motivational coaching to help you build strength — inside and out. Whether you're aiming for weight loss, muscle gain, or mental resilience, ElevateYou is your space to rise, reshape, and reclaim your best self.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
