import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Davi Carvalho | Desenvolvedor Full-Stack',
    description: 'Desenvolvedor Full-Stack especializado em criar soluções digitais modernas, performáticas e escaláveis. Confira meus projetos e entre em contato.',
    keywords: ['desenvolvedor', 'full-stack', 'react', 'nextjs', 'typescript', 'portfolio'],
    authors: [{ name: 'Davi Carvalho' }],
    openGraph: {
        title: 'Davi Carvalho | Desenvolvedor Full-Stack',
        description: 'Desenvolvedor Full-Stack especializado em criar soluções digitais modernas, performáticas e escaláveis.',
        type: 'website',
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0f1c' },
    ],
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
