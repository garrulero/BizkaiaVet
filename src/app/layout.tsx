import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { Nunito, Open_Sans } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});


export const metadata: Metadata = {
  title: 'Clínica Veterinaria en Mungia, Bizkaia | Especialidades | BizkaiaVet',
  description: 'Clínica veterinaria integral en Mungia (Bizkaia). Especialistas en cirugía por laparoscopia, medicina preventiva y animales exóticos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${nunito.variable} ${openSans.variable}`}>
      <head />
      <body className={cn("min-h-screen bg-background font-body antialiased flex flex-col")}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
