import { Outfit } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreProvider from './components/storeProvider';
import Header from './components/header/header';
import './globals.css';
import React from 'react';
import Footer from './components/footer/footer';
import '@pub/css/animate.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  variable: '--font-outfit',
});

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="tr">
        <body className={`${outfit.variable}`}>
          <Header />

          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
