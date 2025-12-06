import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://typemaster.app'),
  title: {
    default: "TypeMaster - Master Touch Typing with Deep Analytics",
    template: "%s | TypeMaster"
  },
  description: "Improve your typing speed (WPM) and accuracy with TypeMaster. Free advanced typing test with real-time analytics, problem word detection, and personalized practice modes.",
  applicationName: "TypeMaster",
  authors: [{ name: "TypeMaster Team", url: "https://typemaster.app" }],
  generator: "Next.js",
  keywords: [
    "typing test",
    "wpm test",
    "touch typing",
    "typing practice",
    "learn to type",
    "typing speed test",
    "10 fast fingers alternative",
    "monkeytype alternative",
    "tes mengetik",
    "belajar mengetik cepat"
  ],
  referrer: "origin-when-cross-origin",
  creator: "TypeMaster",
  publisher: "TypeMaster",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'id-ID': '/id-ID',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://typemaster.app",
    siteName: "TypeMaster",
    title: "TypeMaster - Master Touch Typing with Deep Analytics",
    description: "Improve your typing speed (WPM) and accuracy with TypeMaster. Free advanced typing test with real-time analytics.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TypeMaster Dashboard and Typing Test Interface",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeMaster - Advanced Typing Test",
    description: "Master your typing skills with personalized training and deep analytics.",
    images: ["/og-image.png"],
    creator: "@typemaster_app",
  },
  verification: {
    google: "process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION",
  },
  category: "utility",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white min-h-screen`}
      >
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
