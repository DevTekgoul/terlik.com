import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, MapPin } from "lucide-react"

export default function AddressesPage() {
  // Mock addresses data
  const addresses = [
    {
      id: "1",
      title: "Ev Adresi",
      name: "Ahmet Yılmaz",
      phone: "+90 555 123 4567",
      address: "Atatürk Caddesi No: 123 Daire: 5",
      city: "İstanbul",
      postalCode: "34000",
      isDefault: true,
    },
    {
      id: "2",
      title: "İş Adresi",
      name: "Ahmet Yılmaz",
      phone: "+90 555 123 4567",
      address: "İş Merkezi Kat: 8 No: 42",
      city: "İstanbul",
      postalCode: "34100",
      isDefault: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold">Adreslerim</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Yeni Adres Ekle
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <Card key={address.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{address.title}</h3>
                </div>
                {address.isDefault && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Varsayılan</span>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <p className="font-medium">{address.name}</p>
                <p className="text-muted-foreground">{address.phone}</p>
                <p className="text-muted-foreground">{address.address}</p>
                <p className="text-muted-foreground">
                  {address.city} {address.postalCode}
                </p>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm">
                  Düzenle
                </Button>
                <Button variant="outline" size="sm">
                  Sil
                </Button>
                {!address.isDefault && (
                  <Button variant="outline" size="sm">
                    Varsayılan Yap
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
