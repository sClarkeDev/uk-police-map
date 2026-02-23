import { Poppins } from "next/font/google"

import { cn } from "@/utils/cn"

import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Poppins({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "UK Police Map",
  description: "View crime information within the UK area",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", montserrat.variable)}>
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

export const runtime = "edge"
