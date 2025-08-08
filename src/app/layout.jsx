import { Passion_One, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/layout/header";
import Footer from "@/layout/footer";

import "./globals.css";

const passionOne = Passion_One({
    variable: "--font-passion-one",
    subsets: ["latin"],
    weight: ["700"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "Portfolio de Andrés Gutiérrez Hurtado - Desarrollador y Programador Web y Mobile",
    description: "Portfolio de Andrés Gutiérrez Hurtado - Desarrollador y Programador Web y Mobile",
};

export default async function RootLayout({ children }) {
    const locale = await getLocale();

    return (
        <html lang={locale}>
            <head>
                <link
                    rel="icon"
                    href={process.env.NEXT_PUBLIC_APP_DOMAIN + "/code-icon.png"}
                    type="image/png"
                    sizes="any"
                />
                <meta
                    property="og:title"
                    content="Portfolio de Andrés Gutiérrez Hurtado - Desarrollador y Programador web / mobile"
                />
                <meta
                    property="og:description"
                    content="Desarrollador de software con experiencia en el desarrollo de sitios web, aplicaciones web y aplicaciones moviles, con conocimientos en las mejores practicas de desarrollo y experiencia en el uso de tecnologias como Next.js, React, Node.js, Laravel, Three.js, entre otras."
                />
                <meta
                    property="og:image"
                    content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/preview.png`}
                />
                <meta property="og:url" content="https://andres-portfolio-b4dv.onrender.com/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </head>
            <NextIntlClientProvider locale={locale}>
                <body
                    className={`${passionOne.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
                >
                    <Header />
                    <main className="flex-1">{children}</main>
                    <ToastContainer position="bottom-right" autoClose={3000} />
                    <Footer />
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
