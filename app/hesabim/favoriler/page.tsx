import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FavoritesPage() {
  // Mock favorites data
  const favorites = [
    {
      id: "1",
      title: "Premium Deri Erkek Ayakkabı",
      price: 899.0,
      image: "/premium-leather-mens-shoes.jpg",
      vendor: "Klasik Ayakkabı",
      rating: 4.8,
      reviewCount: 124,
    },
    {
      id: "4",
      title: "Kadın Topuklu Ayakkabı",
      price: 1299.0,
      image: "/womens-heeled-shoes.jpg",
      vendor: "Şık Adım",
      rating: 4.7,
      reviewCount: 67,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold">Favorilerim</h2>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              vendor={product.vendor}
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">Favori ürününüz bulunmuyor</p>
            <Button asChild>
              <Link href="/urunler">Ürünleri İncele</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
