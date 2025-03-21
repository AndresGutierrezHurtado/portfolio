import { Passion_One, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

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
    description:
        "Portfolio de Andrés Gutiérrez Hurtado - Desarrollador y Programador Web y Mobile",
};

export default async function RootLayout({ children }) {
    const locale = await getLocale();

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href={process.env.NEXT_PUBLIC_APP_DOMAIN + "/code-icon.png"} type="image/png" sizes="any" />
            </head>
            <NextIntlClientProvider locale={locale}>
                <body
                    className={`${passionOne.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
                >
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
