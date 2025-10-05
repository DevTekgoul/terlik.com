import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OrdersPage() {
  // Mock orders data
  const orders = [
    {
      id: "ORD-2025-001",
      date: "2025-01-20",
      status: "Teslim Edildi",
      statusColor: "bg-green-600",
      total: 899.0,
      items: [
        {
          title: "Premium Deri Erkek Ayakkabı",
          image: "/premium-leather-mens-shoes.jpg",
          quantity: 1,
          price: 899.0,
        },
      ],
    },
    {
      id: "ORD-2025-002",
      date: "2025-01-18",
      status: "Kargoda",
      statusColor: "bg-blue-600",
      total: 249.0,
      items: [
        {
          title: "Rahat Ev Terliği",
          image: "/comfortable-home-slippers.jpg",
          quantity: 1,
          price: 249.0,
        },
      ],
    },
    {
      id: "ORD-2025-003",
      date: "2025-01-15",
      status: "Hazırlanıyor",
      statusColor: "bg-yellow-600",
      total: 129.0,
      items: [
        {
          title: "Pamuklu Spor Çorap Seti",
          image: "/cotton-sports-socks.jpg",
          quantity: 1,
          price: 129.0,
        },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold">Siparişlerim</h2>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">Sipariş #{order.id}</h3>
                      <Badge className={`${order.statusColor} text-white`}>{order.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.date).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p className="text-2xl font-bold">{order.total.toFixed(2)} ₺</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-20 h-20 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg?height=80&width=80"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">Adet: {item.quantity}</p>
                        <p className="text-sm font-semibold mt-1">{item.price.toFixed(2)} ₺</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/hesabim/siparisler/${order.id}`}>Detayları Gör</Link>
                  </Button>
                  {order.status === "Teslim Edildi" && (
                    <Button variant="outline" size="sm">
                      Değerlendir
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">Henüz siparişiniz bulunmuyor</p>
            <Button asChild>
              <Link href="/urunler">Alışverişe Başla</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
