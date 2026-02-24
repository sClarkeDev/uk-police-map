import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full py-6 px-8 bg-sidebar border-b border-border flex items-center justify-center">
          <nav className="flex gap-10 items-center text-lg font-semibold">
            <a href="/" className="hover:text-primary transition-colors">
              Map
            </a>
            <a href="/forces" className="hover:text-primary transition-colors">
              Forces
            </a>
            <a
              href="https://github.com/sClarkeDev/uk-police-map"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </nav>
        </header>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
