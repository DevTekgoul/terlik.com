"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

interface ProductInfoProps {
  product: any
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0])
  const { addItem } = useCart()
  const router = useRouter()
  const price = (selectedVariant?.prices?.[0]?.amount || 0) / 100

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedVariant.id}`,
      productId: product.id,
      variantId: selectedVariant.id,
      title: product.title,
      variant: selectedVariant.title,
      price,
      image: product.thumbnail,
      vendor: product.metadata?.vendor || "Satıcı",
    })
    router.push("/sepet")
  }

  return (
    <div className="space-y-6">
      {/* Vendor */}
      <div>
        <Link
          href={`/satici/${product.metadata?.vendorId || "vendor"}`}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {product.metadata?.vendor || "Satıcı"}
        </Link>
      </div>

      {/* Title */}
      <h1 className="font-serif text-3xl md:text-4xl font-bold">{product.title}</h1>

      {/* Rating */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.metadata?.rating || 0)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {product.metadata?.rating?.toFixed(1)} ({product.metadata?.reviewCount} değerlendirme)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold">{price.toFixed(2)} ₺</span>
        <span className="text-sm text-muted-foreground">KDV Dahil</span>
      </div>

      {/* Product Details */}
      {product.metadata && (
        <div className="flex gap-4">
          {product.metadata.material && <Badge variant="outline">Malzeme: {product.metadata.material}</Badge>}
          {product.metadata.color && <Badge variant="outline">Renk: {product.metadata.color}</Badge>}
        </div>
      )}

      {/* Size Selection */}
      {product.variants && product.variants.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3">Beden Seçin</h3>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant: any) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                disabled={variant.inventory_quantity === 0}
                className={`px-4 py-2 border rounded-md transition-colors ${
                  selectedVariant?.id === variant.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : variant.inventory_quantity === 0
                      ? "border-border bg-muted text-muted-foreground cursor-not-allowed"
                      : "border-border hover:border-primary"
                }`}
              >
                {variant.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <Button size="lg" className="flex-1" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Sepete Ekle
        </Button>
        <Button size="lg" variant="outline">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Favorilere Ekle</span>
        </Button>
        <Button size="lg" variant="outline">
          <Share2 className="h-5 w-5" />
          <span className="sr-only">Paylaş</span>
        </Button>
      </div>

      {/* Shipping Info */}
      <div className="border-t border-border pt-6 space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-green-600">✓</span>
          <span>Ücretsiz kargo</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600">✓</span>
          <span>14 gün içinde ücretsiz iade</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600">✓</span>
          <span>Güvenli ödeme</span>
        </div>
      </div>
    </div>
  )
}
