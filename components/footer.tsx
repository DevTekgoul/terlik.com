import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors">
                  Terlik & Ayakkabı
                </span>
                <span className="text-[10px] md:text-xs font-light tracking-[0.2em] text-muted-foreground uppercase">
                  Pazarı
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
             Türkiye'nin terlik ve ayakkabı koleksiyonu. Türkiye'nin güvenilir alışveriş platformu.
            </p>
          </div>

          {/* Alışveriş */}
          <div>
            <h3 className="font-medium text-sm mb-4">Alışveriş</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/urunler" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tüm Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler?kategori=terlik"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terlik
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler?kategori=ayakkabi"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ayakkabı
                </Link>
              </li>
              <li>
                <Link href="/saticilar" className="text-muted-foreground hover:text-foreground transition-colors">
                  Satıcılar
                </Link>
              </li>
            </ul>
          </div>

          {/* Yardım */}
          <div>
            <h3 className="font-medium text-sm mb-4">Yardım</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/iletisim" className="text-muted-foreground hover:text-foreground transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="/kargo" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kargo & İade
                </Link>
              </li>
              <li>
                <Link href="/satici-ol" className="text-muted-foreground hover:text-foreground transition-colors">
                  Satıcı Ol
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="font-medium text-sm mb-4">Bizi Takip Edin</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/terlik.sitesi?igsh=NHZpeHltamw3OGc0&utm_source=q"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Terlik & Ayakkabı Pazarı · Tüm hakları saklıdır
          </p>
        </div>
      </div>
    </footer>
  )
}
