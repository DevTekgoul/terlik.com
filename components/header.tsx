"use client"

import Link from "next/link"
import { ShoppingCart, Search, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors">
                Terlik & Ayakkabı
              </span>
              <span className="text-[10px] md:text-xs font-light tracking-[0.2em] text-muted-foreground uppercase">
                Pazarı
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              href="/urunler?kategori=terlik"
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Terlik
            </Link>
            <Link
              href="/urunler?kategori=ayakkabi"
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Ayakkabı
            </Link>
            <Link
              href="/saticilar"
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Satıcılar
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex h-10 w-10">
              <Search className="h-[18px] w-[18px]" />
              <span className="sr-only">Ara</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
              <Link href="/hesabim">
                <User className="h-[18px] w-[18px]" />
                <span className="sr-only">Hesabım</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative h-10 w-10" asChild>
              <Link href="/sepet">
                <ShoppingCart className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-foreground text-[11px] text-background flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
                <span className="sr-only">Sepet</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden h-10 w-10">
              <Menu className="h-[18px] w-[18px]" />
              <span className="sr-only">Menü</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
