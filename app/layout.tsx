import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'


export const metadata: Metadata = {
    title: 'Sergiu Mereacre / Portfolio',
    description: 'Portfolio website showing my work and my skills. Built using the latest Next.js and tailwindcss.',
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    )
}