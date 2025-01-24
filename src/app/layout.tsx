import type { Metadata } from 'next';
import { Geist, Geist_Mono, Ubuntu } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Head from 'next/head';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const ubuntu = Ubuntu({
    variable: '--font-ubuntu',
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
    title: 'DaviCarvalho.dev',
    description: 'Confira o meu portfólio e veja do que eu sou capaz!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
            >
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
