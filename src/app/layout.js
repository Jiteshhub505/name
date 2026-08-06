import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Council for Digital Data Protection and Privacy | CDDPP India",
  description: "The Council for Digital Data Protection and Privacy (CDDPP) is India's leading advisory, standards formulation, and training body for enterprise DPDP Act compliance and Data Protection Officer (DPO) certification.",
  openGraph: {
    title: "Council for Digital Data Protection and Privacy | CDDPP India",
    description: "Formulating standards and offering qualifications for India's DPDP Act, including the Data Protection Officer (DPO) framework. Led by elite legal, technical, and defence specialists.",
    type: "website",
    url: "https://cddpp.org.in/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* FontAwesome for Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: "calc(100vh - 400px)", paddingTop: "var(--header-height)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
