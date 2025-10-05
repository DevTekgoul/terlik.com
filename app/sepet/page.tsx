"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-12">
            <h1 className="font-serif text-3xl font-bold mb-4">Sepetiniz Boş</h1>
            <p className="text-muted-foreground mb-6">Alışverişe başlamak için ürünlerimize göz atın</p>
            <Button asChild>
              <Link href="/urunler">Ürünleri İncele</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8">Sepetim ({itemCount} ürün)</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg?height=96&width=96"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/urun/${item.productId}`}
                          className="font-medium hover:text-primary transition-colors line-clamp-2"
                        >
                          {item.title}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">{item.vendor}</p>
                        <p className="text-sm text-muted-foreground">Beden: {item.variant}</p>
                        <p className="font-semibold mt-2">{item.price.toFixed(2)} ₺</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end justify-between">
                        <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-4">
                  <h2 className="font-serif text-xl font-bold">Sipariş Özeti</h2>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ara Toplam</span>
                      <span>{total.toFixed(2)} ₺</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Kargo</span>
                      <span className="text-green-600">Ücretsiz</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Toplam</span>
                      <span>{total.toFixed(2)} ₺</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">KDV Dahil</p>
                  </div>

                  <Button className="w-full" size="lg" asChild>
                    <Link href="/odeme">
                      Ödemeye Geç
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>✓ Güvenli ödeme</p>
                    <p>✓ 14 gün içinde ücretsiz iade</p>
                    <p>✓ Hızlı kargo</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
