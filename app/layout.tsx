import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const orbitron = Orbitron({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-orbitron",
});

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "MyPhoneExpress 06.fr";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Expert en numéros de téléphone virtuels et solutions de communication express. Obtenez votre numéro en France, Canada, USA, UK et Espagne en moins de 5 minutes.";

export const metadata: Metadata = {
    title: {
        default: siteName,
        template: `%s | ${siteName}`,
    },
    description: siteDescription,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://myphoneexpress-06.fr"),
    openGraph: {
        type: "website",
        locale: "fr_FR",
        siteName: siteName,
        title: siteName,
        description: siteDescription,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${inter.variable} ${orbitron.variable}`}>
            <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
