import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://egyptianheart.com'),
  title: {
    default: "Al Fouad Company for Aluminum and PVC Contracting | Expert Aluminum & Glass Solutions",
    template: "%s | Al Fouad Company"
  },
  description: "Al Fouad Company for Aluminum and PVC Contracting - Leading provider of premium aluminum, glass, and PVC solutions in Saudi Arabia and Egypt. Expert curtain wall, facades, windows, doors, and architectural systems.",
  keywords: [
    "aluminum contracting",
    "PVC contracting",
    "glass solutions",
    "curtain wall systems",
    "aluminum facades",
    "architectural aluminum",
    "aluminum windows",
    "aluminum doors",
    "cladding systems",
    "glass partitions",
    "handrail systems",
    "shutter systems",
    "shower systems",
    "Saudi Arabia aluminum",
    "Egypt aluminum",
    "Dammam aluminum",
    "Damanhour aluminum",
    "Al Fouad Company"
  ],
  authors: [{ name: "Al Fouad Company for Aluminum and PVC Contracting" }],
  creator: "Al Fouad Company",
  publisher: "Al Fouad Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    url: "https://egyptianheart.com",
    siteName: "Al Fouad Company for Aluminum and PVC Contracting",
    title: "Al Fouad Company | Expert Aluminum & Glass Solutions",
    description: "Leading provider of premium aluminum, glass, and PVC solutions. Specializing in curtain walls, facades, windows, doors, and architectural systems.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Al Fouad Company for Aluminum and PVC Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Fouad Company | Expert Aluminum & Glass Solutions",
    description: "Leading provider of premium aluminum, glass, and PVC solutions in Saudi Arabia and Egypt.",
    images: ["/Logo.png"],
    creator: "@abdofouad51991",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://egyptianheart.com",
    languages: {
      'en-US': '/en',
      'ar-SA': '/ar',
    },
  },
  category: "construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
