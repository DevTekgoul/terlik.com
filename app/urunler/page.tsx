import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { getProducts } from "@/lib/medusa-client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchParams {
  kategori?: string
  fiyat?: string
  siralama?: string
  q?: string
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const { kategori, fiyat, siralama, q } = params

  // Fetch products from Medusa with filters
  let products = []
  try {
    const { products: medusaProducts } = await getProducts({
      q: q || undefined,
      limit: 24,
    })
    products = medusaProducts || []
  } catch (error) {
    console.log("[v0] Error fetching products:", error)
    // Mock data for demonstration
    products = Array.from({ length: 24 }, (_, i) => ({
      id: `${i + 1}`,
      title: [
        "Premium Deri Erkek Ayakkabı",
        "Rahat Ev Terliği",
        "Pamuklu Spor Çorap Seti",
        "Kadın Topuklu Ayakkabı",
        "Ortopedik Terlik",
        "Yün Kışlık Çorap",
        "Spor Ayakkabı",
        "Plaj Terliği",
      ][i % 8],
      thumbnail: [
        "/premium-leather-mens-shoes.jpg",
        "/comfortable-home-slippers.jpg",
        "/cotton-sports-socks.jpg",
        "/womens-heeled-shoes.jpg",
        "/orthopedic-slippers.jpg",
        "/wool-winter-socks.jpg",
        "/athletic-sports-shoes.jpg",
        "/beach-flip-flops.jpg",
      ][i % 8],
      variants: [{ prices: [{ amount: [89900, 24900, 12900, 129900, 34900, 18900, 149900, 19900][i % 8] }] }],
      metadata: {
        vendor: ["Klasik Ayakkabı", "Konfor Terlik", "Çorap Dünyası", "Şık Adım"][i % 4],
        rating: 4.5 + Math.random() * 0.5,
        reviewCount: Math.floor(Math.random() * 200) + 50,
        isNew: i % 5 === 0,
      },
    }))
  }

  // Apply client-side filters (in production, these would be handled by Medusa)
  let filteredProducts = [...products]

  if (kategori) {
    // Filter by category
    filteredProducts = filteredProducts.filter((p) => {
      const title = p.title.toLowerCase()
      if (kategori === "ayakkabi") return title.includes("ayakkabı")
      if (kategori === "terlik") return title.includes("terlik")
      if (kategori === "corap") return title.includes("çorap")
      return true
    })
  }

  if (fiyat) {
    filteredProducts = filteredProducts.filter((p) => {
      const price = (p.variants?.[0]?.prices?.[0]?.amount || 0) / 100
      if (fiyat === "0-50") return price <= 50
      if (fiyat === "50-100") return price > 50 && price <= 100
      if (fiyat === "100-200") return price > 100 && price <= 200
      if (fiyat === "200+") return price > 200
      return true
    })
  }

  if (siralama) {
    if (siralama === "fiyat-artan") {
      filteredProducts.sort(
        (a, b) => (a.variants?.[0]?.prices?.[0]?.amount || 0) - (b.variants?.[0]?.prices?.[0]?.amount || 0),
      )
    } else if (siralama === "fiyat-azalan") {
      filteredProducts.sort(
        (a, b) => (b.variants?.[0]?.prices?.[0]?.amount || 0) - (a.variants?.[0]?.prices?.[0]?.amount || 0),
      )
    } else if (siralama === "puan") {
      filteredProducts.sort((a, b) => (b.metadata?.rating || 0) - (a.metadata?.rating || 0))
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="mb-8 md:mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-light mb-2">
              {kategori
                ? kategori === "ayakkabi"
                  ? "Ayakkabı"
                  : kategori === "terlik"
                    ? "Terlik"
                    : "Çorap"
                : "Tüm Ürünler"}
            </h1>
            <p className="text-sm text-muted-foreground">{filteredProducts.length} ürün</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters currentCategory={kategori} currentPrice={fiyat} />
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <p className="text-sm text-muted-foreground hidden md:block">
                  {filteredProducts.length} ürün gösteriliyor
                </p>
                <Select defaultValue={siralama || "varsayilan"}>
                  <SelectTrigger className="w-[180px] md:w-[200px] h-10">
                    <SelectValue placeholder="Sırala" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="varsayilan">
                      <a href="?">Varsayılan</a>
                    </SelectItem>
                    <SelectItem value="fiyat-artan">
                      <a href={`?${new URLSearchParams({ ...params, siralama: "fiyat-artan" }).toString()}`}>
                        Fiyat: Düşükten Yükseğe
                      </a>
                    </SelectItem>
                    <SelectItem value="fiyat-azalan">
                      <a href={`?${new URLSearchParams({ ...params, siralama: "fiyat-azalan" }).toString()}`}>
                        Fiyat: Yüksekten Düşüğe
                      </a>
                    </SelectItem>
                    <SelectItem value="puan">
                      <a href={`?${new URLSearchParams({ ...params, siralama: "puan" }).toString()}`}>En Yüksek Puan</a>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product: any) => (
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
              ) : (
                <div className="text-center py-16 md:py-20">
                  <p className="text-muted-foreground">Ürün bulunamadı</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
