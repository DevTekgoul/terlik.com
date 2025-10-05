import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { getProducts } from "@/lib/medusa-client"

export default async function VendorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // Mock vendor data (in production, this would come from Medusa metadata or a separate vendors service)
  const vendor = {
    id,
    name: id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description:
      "Kaliteli ve şık ayakkabı modelleri ile müşterilerimize hizmet veriyoruz. 2010 yılından beri sektörde olan firmamız, müşteri memnuniyetini ön planda tutar.",
    rating: 4.7,
    reviewCount: 342,
    productCount: 156,
    location: "İstanbul, Türkiye",
    phone: "+90 212 555 0123",
    email: "info@klasikayakkabi.com",
    verified: true,
    joinDate: "2010-03-15",
  }

  // Fetch vendor products
  let vendorProducts = []
  try {
    const { products } = await getProducts({ limit: 12 })
    vendorProducts = products || []
  } catch (error) {
    console.log("[v0] Error fetching vendor products:", error)
    // Mock products
    vendorProducts = Array.from({ length: 12 }, (_, i) => ({
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
        vendor: vendor.name,
        rating: 4.5 + Math.random() * 0.5,
        reviewCount: Math.floor(Math.random() * 100) + 20,
      },
    }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Vendor Header */}
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Vendor Avatar */}
              <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-5xl font-serif font-bold text-primary">{vendor.name.charAt(0)}</span>
              </div>

              {/* Vendor Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="font-serif text-3xl md:text-4xl font-bold">{vendor.name}</h1>
                  {vendor.verified && (
                    <Badge className="bg-green-600 text-white">
                      <span className="mr-1">✓</span>
                      Onaylı Satıcı
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(vendor.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {vendor.rating.toFixed(1)} ({vendor.reviewCount} değerlendirme)
                  </span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{vendor.productCount} ürün</span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">{vendor.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{vendor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{vendor.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{vendor.email}</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Satıcıya Sor
                  </Button>
                  <Button variant="outline">Mağazayı Takip Et</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Products */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="font-serif text-2xl font-bold mb-6">Satıcının Ürünleri</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {vendorProducts.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={(product.variants?.[0]?.prices?.[0]?.amount || 0) / 100}
                image={product.thumbnail || "/placeholder.svg?height=400&width=400"}
                vendor={vendor.name}
                rating={product.metadata?.rating}
                reviewCount={product.metadata?.reviewCount}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
