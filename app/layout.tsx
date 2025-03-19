import type React from "react"
import type { Metadata } from "next"
import { Inter, Anton } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart/cart-context"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sunshine Stars FC",
  description: "Official website of Sunshine Stars Football Club",
  icons: {
    icon: "/media/img/icons/badge2.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${anton.variable}`}>
      <body>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
            <Toaster />
            <CookieConsent />
          </CartProvider>
      </body>
    </html>
  )
}



