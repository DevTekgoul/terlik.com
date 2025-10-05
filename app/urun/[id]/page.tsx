import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { ProductReviews } from "@/components/product-reviews"
import { ProductCard } from "@/components/product-card"
import { getProduct, getProducts } from "@/lib/medusa-client"
import { notFound } from "next/navigation"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // Fetch product from Medusa
  let product
  try {
    const response = await getProduct(id)
    product = response.product
  } catch (error) {
    console.log("[v0] Error fetching product:", error)
    // Mock product data
    product = {
      id,
      title: "Premium Deri Erkek Ayakkabı",
      description:
        "Yüksek kaliteli deri malzemeden üretilmiş, şık ve konforlu erkek ayakkabısı. Günlük kullanım için ideal, dayanıklı taban yapısı ile uzun ömürlü kullanım sağlar.",
      thumbnail: "/premium-leather-mens-shoes.jpg",
      images: [
        { url: "/premium-leather-mens-shoes.jpg" },
        { url: "/premium-leather-shoes-on-minimal-background.jpg" },
        { url: "/athletic-sports-shoes.jpg" },
      ],
      variants: [
        {
          id: "variant-1",
          title: "40",
          prices: [{ amount: 89900 }],
          inventory_quantity: 10,
        },
        {
          id: "variant-2",
          title: "41",
          prices: [{ amount: 89900 }],
          inventory_quantity: 5,
        },
        {
          id: "variant-3",
          title: "42",
          prices: [{ amount: 89900 }],
          inventory_quantity: 8,
        },
        {
          id: "variant-4",
          title: "43",
          prices: [{ amount: 89900 }],
          inventory_quantity: 0,
        },
      ],
      metadata: {
        vendor: "Klasik Ayakkabı",
        vendorId: "klasik-ayakkabi",
        rating: 4.8,
        reviewCount: 124,
        material: "Hakiki Deri",
        color: "Kahverengi",
      },
    }
  }

  if (!product) {
    notFound()
  }

  // Fetch related products
  let relatedProducts = []
  try {
    const { products } = await getProducts({ limit: 4 })
    relatedProducts = products || []
  } catch (error) {
    console.log("[v0] Error fetching related products:", error)
  }

  // Mock reviews data (in production, this would come from Medusa or a separate reviews service)
  const reviews = [
    {
      id: "1",
      author: "Ahmet Y.",
      rating: 5,
      date: "2025-01-15",
      comment: "Çok kaliteli bir ürün. Ayağıma tam oturdu ve çok rahat. Kesinlikle tavsiye ederim.",
      verified: true,
    },
    {
      id: "2",
      author: "Mehmet K.",
      rating: 4,
      date: "2025-01-10",
      comment: "Güzel bir ayakkabı ama biraz dar geldi. Bir numara büyük almanızı öneririm.",
      verified: true,
    },
    {
      id: "3",
      author: "Zeynep A.",
      rating: 5,
      date: "2025-01-05",
      comment: "Eşim için aldım, çok beğendi. Kalitesi ve görünümü harika.",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <ProductGallery images={product.images || [{ url: product.thumbnail }]} />
            <ProductInfo product={product} />
          </div>

          {/* Product Description */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold mb-4">Ürün Açıklaması</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Reviews */}
          <div className="mb-16">
            <ProductReviews
              reviews={reviews}
              rating={product.metadata?.rating || 0}
              reviewCount={product.metadata?.reviewCount || 0}
            />
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Benzer Ürünler</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.slice(0, 4).map((relatedProduct: any) => (
                  <ProductCard
                    key={relatedProduct.id}
                    id={relatedProduct.id}
                    title={relatedProduct.title}
                    price={(relatedProduct.variants?.[0]?.prices?.[0]?.amount || 0) / 100}
                    image={relatedProduct.thumbnail || "/placeholder.svg?height=400&width=400"}
                    vendor={relatedProduct.metadata?.vendor || "Satıcı"}
                    rating={relatedProduct.metadata?.rating}
                    reviewCount={relatedProduct.metadata?.reviewCount}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
