import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OrderCompletePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center py-12 px-4">
          <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Siparişiniz Alındı!</h1>
          <p className="text-muted-foreground mb-2">Siparişiniz başarıyla oluşturuldu.</p>
          <p className="text-muted-foreground mb-8">Sipariş detaylarını e-posta adresinize gönderdik.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/hesabim/siparisler">Siparişlerimi Görüntüle</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/urunler">Alışverişe Devam Et</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
