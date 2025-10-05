import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VendorsPage() {
  // Mock vendors data (in production, this would come from Medusa or a separate vendors service)
  const vendors = [
    {
      id: "klasik-ayakkabi",
      name: "Klasik Ayakkabı",
      description: "Premium deri ayakkabı ve aksesuar uzmanı",
      rating: 4.8,
      reviewCount: 342,
      productCount: 156,
      verified: true,
    },
    {
      id: "konfor-terlik",
      name: "Konfor Terlik",
      description: "Rahat ve kaliteli ev terliği koleksiyonları",
      rating: 4.6,
      reviewCount: 218,
      productCount: 89,
      verified: true,
    },
    {
      id: "corap-dunyasi",
      name: "Çorap Dünyası",
      description: "Her mevsim için çorap çeşitleri",
      rating: 4.9,
      reviewCount: 567,
      productCount: 234,
      verified: true,
    },
    {
      id: "sik-adim",
      name: "Şık Adım",
      description: "Kadın ayakkabı ve topuklu modelleri",
      rating: 4.7,
      reviewCount: 423,
      productCount: 178,
      verified: true,
    },
    {
      id: "saglik-ayakkabi",
      name: "Sağlık Ayakkabı",
      description: "Ortopedik ve sağlık ayakkabıları",
      rating: 4.8,
      reviewCount: 289,
      productCount: 112,
      verified: true,
    },
    {
      id: "aktif-spor",
      name: "Aktif Spor",
      description: "Spor ayakkabı ve koşu ayakkabıları",
      rating: 4.9,
      reviewCount: 634,
      productCount: 267,
      verified: true,
    },
    {
      id: "yaz-koleksiyonu",
      name: "Yaz Koleksiyonu",
      description: "Plaj terliği ve sandalet modelleri",
      rating: 4.5,
      reviewCount: 156,
      productCount: 78,
      verified: true,
    },
    {
      id: "kis-ayakkabi",
      name: "Kış Ayakkabı",
      description: "Bot ve kışlık ayakkabı çeşitleri",
      rating: 4.7,
      reviewCount: 312,
      productCount: 145,
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Satıcılarımız</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Güvenilir ve kaliteli ürünler sunan onaylı satıcılarımızı keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <Link key={vendor.id} href={`/satici/${vendor.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-serif font-bold text-primary">{vendor.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg truncate">{vendor.name}</h3>
                          {vendor.verified && (
                            <Badge className="bg-green-600 text-white text-xs">
                              <span>✓</span>
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{vendor.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(vendor.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {vendor.rating.toFixed(1)} ({vendor.reviewCount})
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{vendor.productCount} ürün</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
