import type { Metadata } from "next"
import { Inter, Anton } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const anton = Anton({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sunshine Stars FC",
  description: "Official website of Sunshine Stars Football Club",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${anton.className}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

