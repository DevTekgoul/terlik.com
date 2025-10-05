import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Package, Truck, CheckCircle, Clock, Search, RefreshCw, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function KargoPage() {
  // Mock kargo takip verisi (gerçek uygulamada API'den gelecek)
  const mockCargoTracking = {
    orderNumber: "ORD-2025-002",
    trackingNumber: "KRG123456789TR",
    status: "Kargoda",
    carrier: "Aras Kargo",
    estimatedDelivery: "25 Ocak 2025",
    timeline: [
      {
        status: "Sipariş Alındı",
        date: "20 Ocak 2025, 14:30",
        location: "İstanbul",
        completed: true,
      },
      {
        status: "Hazırlandı",
        date: "21 Ocak 2025, 09:15",
        location: "İstanbul Deposu",
        completed: true,
      },
      {
        status: "Kargoya Verildi",
        date: "22 Ocak 2025, 11:00",
        location: "İstanbul Transfer Merkezi",
        completed: true,
      },
      {
        status: "Dağıtımda",
        date: "23 Ocak 2025, 08:45",
        location: "Kadıköy Şubesi",
        completed: false,
        current: true,
      },
      {
        status: "Teslim Edildi",
        date: "-",
        location: "-",
        completed: false,
      },
    ],
  }

  // Mock iade edilebilir siparişler (gerçek uygulamada kullanıcının siparişlerinden gelecek)
  const returnableOrders = [
    {
      id: "ORD-2025-001",
      date: "2025-01-15",
      deliveryDate: "2025-01-20",
      item: {
        title: "Premium Deri Erkek Ayakkabı",
        image: "/premium-leather-mens-shoes.jpg",
        price: 899.0,
        size: "42",
      },
      canReturn: true,
      returnDeadline: "2025-02-03",
    },
  ]

  // Mock iade talepleri
  const returnRequests = [
    {
      id: "RET-2025-001",
      orderNumber: "ORD-2024-089",
      status: "İnceleniyor",
      statusColor: "bg-yellow-600",
      date: "2025-01-18",
      item: {
        title: "Rahat Ev Terliği",
        image: "/comfortable-home-slippers.jpg",
      },
      reason: "Beden uyumsuzluğu",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                Kargo & İade
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Kargonuzu takip edin ve iade işlemlerinizi yönetin
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Kargo Takip Bölümü */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-6 h-6 text-primary" />
                  <h2 className="font-serif text-2xl md:text-3xl font-light">Kargo Takip</h2>
                </div>

                {/* Kargo Takip Formu */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="trackingNumber">Takip Numarası veya Sipariş Numarası</Label>
                        <Input
                          id="trackingNumber"
                          placeholder="ORD-2025-XXX veya KRG123456789TR"
                          className="mt-2"
                        />
                      </div>
                      <div className="flex items-end">
                        <Button className="w-full md:w-auto">
                          <Search className="w-4 h-4 mr-2" />
                          Sorgula
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Kargo Takip Sonuçları */}
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {/* Kargo Bilgileri */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Sipariş #{mockCargoTracking.orderNumber}</h3>
                          <p className="text-sm text-muted-foreground">
                            Takip No: <span className="font-medium">{mockCargoTracking.trackingNumber}</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Kargo Firması: <span className="font-medium">{mockCargoTracking.carrier}</span>
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Badge className="bg-blue-600 text-white text-sm px-4 py-2">
                            {mockCargoTracking.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-2">
                            Tahmini Teslimat: {mockCargoTracking.estimatedDelivery}
                          </p>
                        </div>
                      </div>

                      {/* Kargo Zaman Çizelgesi */}
                      <div className="space-y-4">
                        {mockCargoTracking.timeline.map((step, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                  step.completed
                                    ? "bg-green-500 text-white"
                                    : step.current
                                      ? "bg-blue-500 text-white"
                                      : "bg-secondary text-muted-foreground"
                                }`}
                              >
                                {step.completed ? (
                                  <CheckCircle className="w-5 h-5" />
                                ) : step.current ? (
                                  <Truck className="w-5 h-5" />
                                ) : (
                                  <Clock className="w-5 h-5" />
                                )}
                              </div>
                              {index < mockCargoTracking.timeline.length - 1 && (
                                <div
                                  className={`w-0.5 h-12 ${step.completed ? "bg-green-500" : "bg-secondary"}`}
                                />
                              )}
                            </div>
                            <div className="flex-1 pb-4">
                              <h4 className={`font-medium ${step.current ? "text-blue-600" : ""}`}>
                                {step.status}
                              </h4>
                              <p className="text-sm text-muted-foreground">{step.location}</p>
                              <p className="text-xs text-muted-foreground mt-1">{step.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Kargo Bilgilendirme */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-secondary/20 border border-border/40 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Truck className="w-5 h-5 text-primary" />
                      <h4 className="font-medium text-sm">Ücretsiz Kargo</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      500 ₺ ve üzeri alışverişlerde kargo ücretsiz
                    </p>
                  </div>
                  <div className="bg-secondary/20 border border-border/40 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <h4 className="font-medium text-sm">Hızlı Teslimat</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Ortalama 2-3 iş günü içinde teslimat</p>
                  </div>
                  <div className="bg-secondary/20 border border-border/40 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Package className="w-5 h-5 text-primary" />
                      <h4 className="font-medium text-sm">Güvenli Paketleme</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Ürünleriniz özenle paketlenir</p>
                  </div>
                </div>
              </div>

              {/* İade Bölümü */}
              <div className="pt-8 border-t">
                <div className="flex items-center gap-3 mb-6">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  <h2 className="font-serif text-2xl md:text-3xl font-light">İade İşlemleri</h2>
                </div>

                {/* İade Bilgilendirme */}
                <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                  <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">İade Koşulları</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ürünler teslim tarihinden itibaren 14 gün içinde iade edilebilir</li>
                        <li>• Ürün kullanılmamış, etiketleri sökülmemiş ve orijinal ambalajında olmalıdır</li>
                        <li>• İade onaylandıktan sonra 3-5 iş günü içinde ödemeniz iade edilir</li>
                        <li>• Hijyen kuralları gereği iç çamaşırı ve çoraplar iade edilemez</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* İade Edilebilir Siparişler */}
                <div className="mb-8">
                  <h3 className="font-medium text-lg mb-4">İade Edilebilir Siparişlerim</h3>
                  {returnableOrders.length > 0 ? (
                    <div className="space-y-4">
                      {returnableOrders.map((order) => (
                        <Card key={order.id}>
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                  src={order.item.image || "/placeholder.svg?height=96&width=96"}
                                  alt={order.item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                                  <div>
                                    <h4 className="font-medium text-lg mb-1">{order.item.title}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      Sipariş No: {order.id} • Beden: {order.item.size}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      Teslim Tarihi:{" "}
                                      {new Date(order.deliveryDate).toLocaleDateString("tr-TR", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })}
                                    </p>
                                  </div>
                                  <p className="font-semibold text-lg mt-2 md:mt-0">
                                    {order.item.price.toFixed(2)} ₺
                                  </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 items-start">
                                  <div className="flex-1">
                                    <p className="text-xs text-muted-foreground">
                                      İade son tarihi:{" "}
                                      {new Date(order.returnDeadline).toLocaleDateString("tr-TR", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })}
                                    </p>
                                  </div>
                                  <Button variant="outline" className="w-full sm:w-auto">
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    İade Talebi Oluştur
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">İade edilebilir ürününüz bulunmuyor</p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Aktif İade Talepleri */}
                <div>
                  <h3 className="font-medium text-lg mb-4">İade Taleplerim</h3>
                  {returnRequests.length > 0 ? (
                    <div className="space-y-4">
                      {returnRequests.map((request) => (
                        <Card key={request.id}>
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="w-20 h-20 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                  src={request.item.image || "/placeholder.svg?height=80&width=80"}
                                  alt={request.item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                                  <div>
                                    <div className="flex items-center gap-3 mb-2">
                                      <h4 className="font-medium">İade Talebi #{request.id}</h4>
                                      <Badge className={`${request.statusColor} text-white`}>
                                        {request.status}
                                      </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{request.item.title}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Sipariş No: {request.orderNumber}
                                    </p>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                                    {new Date(request.date).toLocaleDateString("tr-TR", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })}
                                  </p>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                  İade Nedeni: <span className="font-medium">{request.reason}</span>
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                  <Button variant="outline" size="sm">
                                    Detayları Gör
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    İletişime Geç
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">Aktif iade talebiniz bulunmuyor</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Yardım Bölümü */}
              <div className="pt-8 border-t">
                <div className="bg-secondary/20 border border-border/40 rounded-lg p-6 text-center">
                  <h3 className="font-medium text-lg mb-2">Yardıma mı ihtiyacınız var?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Kargo ve iade işlemlerinizle ilgili sorularınız için bize ulaşabilirsiniz
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild variant="outline">
                      <Link href="/iletisim">İletişime Geç</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/sss">Sıkça Sorulan Sorular</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
