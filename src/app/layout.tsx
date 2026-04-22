import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AICareerCoach } from "@/components/AICareerCoach";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Me an Internship | Internship Opportunities in Nigeria",
  description: "Find verified internship opportunities, SIWES placements, and graduate trainee roles for students and recent graduates in Nigeria.",
  keywords: ["internship in nigeria", "siwes placement", "graduate trainee nigeria", "internship jobs lagos", "student internships"],
  openGraph: {
    type: "website",
    siteName: "Find Me an Internship",
    title: "Find Me an Internship | Internship Opportunities in Nigeria",
    description: "Find verified internship opportunities, SIWES placements, and graduate trainee roles for students and recent graduates in Nigeria.",
    url: "https://findmeaninternship.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Me an Internship | Internship Opportunities in Nigeria",
    description: "Find verified internship opportunities, SIWES placements, and graduate trainee roles for students and recent graduates in Nigeria.",
  },
  alternates: {
    canonical: "https://findmeaninternship.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased`}>
        <Providers>
          <div className='min-h-screen bg-slate-50 flex flex-col font-sans'>
            <Header />
            <main className='flex-grow'>
              {children}
            </main>
            <Footer />
            <AICareerCoach />
          </div>
        </Providers>
      </body>
    </html>
  );
}
