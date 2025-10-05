import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Kişisel Bilgiler</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Ad</Label>
              <Input id="firstName" defaultValue="Ahmet" />
            </div>
            <div>
              <Label htmlFor="lastName">Soyad</Label>
              <Input id="lastName" defaultValue="Yılmaz" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">E-posta</Label>
            <Input id="email" type="email" defaultValue="ahmet@example.com" />
          </div>
          <div>
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" type="tel" defaultValue="+90 555 123 4567" />
          </div>
          <Button>Değişiklikleri Kaydet</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Şifre Değiştir</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="currentPassword">Mevcut Şifre</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div>
            <Label htmlFor="newPassword">Yeni Şifre</Label>
            <Input id="newPassword" type="password" />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Yeni Şifre (Tekrar)</Label>
            <Input id="confirmPassword" type="password" />
          </div>
          <Button>Şifreyi Güncelle</Button>
        </CardContent>
      </Card>
    </div>
  )
}
