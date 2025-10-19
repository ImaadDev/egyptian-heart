'use client'

import '../../app/globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function FrontendLayout({ children }) {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
