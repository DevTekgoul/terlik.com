import type React from "react"
import { Geist, Playfair_Display } from "next/font/google"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
})

export const metadata = {
  title: "Terlik & Ayakkabı Pazarı - Premium Koleksiyon",
  description: "Premium terlik ve ayakkabı koleksiyonu. Türkiye'nin güvenilir alışveriş platformu.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${playfair.variable} antialiased`}>
      <body className="bg-background text-foreground">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
