import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { getProducts } from "@/lib/medusa-client"

export default async function HomePage() {
  // Fetch featured products from Medusa
  let featuredProducts = []
  try {
    const { products } = await getProducts({ limit: 8 })
    featuredProducts = products || []
  } catch (error) {
    console.log("[v0] Error fetching products:", error)
    // Use mock data if Medusa is not available
    featuredProducts = [
      {
        id: "1",
        title: "Premium Deri Erkek Ayakkabı",
        thumbnail: "/premium-leather-mens-shoes.jpg",
        variants: [{ prices: [{ amount: 89900 }] }],
        metadata: { vendor: "Klasik Ayakkabı", rating: 4.8, reviewCount: 124 },
      },
      {
        id: "2",
        title: "Rahat Ev Terliği",
        thumbnail: "/comfortable-home-slippers.jpg",
        variants: [{ prices: [{ amount: 24900 }] }],
        metadata: { vendor: "Konfor Terlik", rating: 4.6, reviewCount: 89, isNew: true },
      },
      {
        id: "3",
        title: "Pamuklu Spor Çorap Seti",
        thumbnail: "/cotton-sports-socks.jpg",
        variants: [{ prices: [{ amount: 12900 }] }],
        metadata: { vendor: "Çorap Dünyası", rating: 4.9, reviewCount: 256 },
      },
      {
        id: "4",
        title: "Kadın Topuklu Ayakkabı",
        thumbnail: "/womens-heeled-shoes.jpg",
        variants: [{ prices: [{ amount: 129900 }] }],
        metadata: { vendor: "Şık Adım", rating: 4.7, reviewCount: 67 },
      },
      {
        id: "5",
        title: "Ortopedik Terlik",
        thumbnail: "/orthopedic-slippers.jpg",
        variants: [{ prices: [{ amount: 34900 }] }],
        metadata: { vendor: "Sağlık Ayakkabı", rating: 4.8, reviewCount: 143, isNew: true },
      },
      {
        id: "6",
        title: "Yün Kışlık Çorap",
        thumbnail: "/wool-winter-socks.jpg",
        variants: [{ prices: [{ amount: 18900 }] }],
        metadata: { vendor: "Sıcak Çorap", rating: 4.5, reviewCount: 92 },
      },
      {
        id: "7",
        title: "Spor Ayakkabı",
        thumbnail: "/athletic-sports-shoes.jpg",
        variants: [{ prices: [{ amount: 149900 }] }],
        metadata: { vendor: "Aktif Spor", rating: 4.9, reviewCount: 312 },
      },
      {
        id: "8",
        title: "Plaj Terliği",
        thumbnail: "/beach-flip-flops.jpg",
        variants: [{ prices: [{ amount: 19900 }] }],
        metadata: { vendor: "Yaz Koleksiyonu", rating: 4.4, reviewCount: 78 },
      },
    ]
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance leading-[1.1]">
                Türkiye'nin terlik ve
                <br />
                ayakkabı koleksiyonu
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Türkiye'nin seçkin satıcılarından özenle seçilmiş ürünler
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button asChild size="lg" className="text-sm md:text-base h-11 md:h-12 px-8">
                  <Link href="/urunler">
                    Koleksiyonu Keşfet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-end justify-between mb-10 md:mb-14">
              <div>
                <h2 className="font-serif text-2xl md:text-4xl font-light mb-2">Öne Çıkan Ürünler</h2>
                <p className="text-sm text-muted-foreground">Seçkin koleksiyonumuzdan</p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex">
                <Link href="/urunler">
                  Tümünü Gör
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {featuredProducts.slice(0, 8).map((product: any) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={(product.variants?.[0]?.prices?.[0]?.amount || 0) / 100}
                  image={product.thumbnail || "/placeholder.svg?height=400&width=400"}
                  vendor={product.metadata?.vendor || "Satıcı"}
                  rating={product.metadata?.rating}
                  reviewCount={product.metadata?.reviewCount}
                  isNew={product.metadata?.isNew}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8 md:hidden">
              <Button asChild variant="outline">
                <Link href="/urunler">
                  Tümünü Gör
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-serif text-2xl md:text-4xl font-light mb-2">Kategoriler</h2>
              <p className="text-sm text-muted-foreground">İhtiyacınıza uygun ürünleri keşfedin</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Terlik */}
              <Link href="/urunler?kategori=terlik" className="group">
                <div className="relative aspect-[4/5] bg-background rounded-lg overflow-hidden mb-4">
                  <img
                    src="/premium-slippers-on-minimal-beige-background.jpg"
                    alt="Terlik"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-light mb-1 group-hover:text-primary transition-colors">
                  Terlik
                </h3>
                <p className="text-sm text-muted-foreground">Konfor ve şıklık bir arada</p>
              </Link>

              {/* Ayakkabı */}
              <Link href="/urunler?kategori=ayakkabi" className="group">
                <div className="relative aspect-[4/5] bg-background rounded-lg overflow-hidden mb-4">
                  <img
                    src="/premium-leather-shoes-on-minimal-background.jpg"
                    alt="Ayakkabı"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-light mb-1 group-hover:text-primary transition-colors">
                  Ayakkabı
                </h3>
                <p className="text-sm text-muted-foreground">Her adımda kalite</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Vendors Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-serif text-2xl md:text-4xl font-light mb-2">Öne Çıkan Satıcılar</h2>
              <p className="text-sm text-muted-foreground">Güvenilir ve onaylı satıcılarımız</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {["Klasik Ayakkabı", "Konfor Terlik", "Çorap Dünyası", "Şık Adım"].map((vendor) => (
                <Link
                  key={vendor}
                  href={`/satici/${vendor.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group text-center"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary mx-auto mb-3 md:mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-105">
                    <span className="text-2xl md:text-3xl font-serif font-light text-primary">{vendor.charAt(0)}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">
                    {vendor}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">Onaylı Satıcı</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl md:text-2xl">🚚</span>
                </div>
                <h3 className="font-medium text-base md:text-lg mb-2">Hızlı Kargo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Türkiye geneline ücretsiz teslimat</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl md:text-2xl">✓</span>
                </div>
                <h3 className="font-medium text-base md:text-lg mb-2">Güvenli Alışveriş</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Onaylı satıcılar ve güvenli ödeme</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl md:text-2xl">↻</span>
                </div>
                <h3 className="font-medium text-base md:text-lg mb-2">Kolay İade</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">14 gün ücretsiz iade hakkı</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
