import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { User, Package, Heart, MapPin, Settings } from "lucide-react"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { href: "/hesabim", label: "Hesap Bilgilerim", icon: User },
    { href: "/hesabim/siparisler", label: "Siparişlerim", icon: Package },
    { href: "/hesabim/favoriler", label: "Favorilerim", icon: Heart },
    { href: "/hesabim/adresler", label: "Adreslerim", icon: MapPin },
    { href: "/hesabim/ayarlar", label: "Ayarlar", icon: Settings },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8">Hesabım</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3">{children}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
