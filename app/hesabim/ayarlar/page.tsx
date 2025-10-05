import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Bildirim Ayarları</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-notifications">E-posta Bildirimleri</Label>
              <p className="text-sm text-muted-foreground">Sipariş ve kampanya bildirimlerini e-posta ile al</p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="sms-notifications">SMS Bildirimleri</Label>
              <p className="text-sm text-muted-foreground">Kargo durumu hakkında SMS bildirimleri al</p>
            </div>
            <Switch id="sms-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="marketing">Pazarlama İletişimi</Label>
              <p className="text-sm text-muted-foreground">Özel teklifler ve kampanyalar hakkında bilgi al</p>
            </div>
            <Switch id="marketing" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gizlilik</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="profile-visibility">Profil Görünürlüğü</Label>
              <p className="text-sm text-muted-foreground">Değerlendirmelerimde adımı göster</p>
            </div>
            <Switch id="profile-visibility" defaultChecked />
          </div>
          <Button variant="destructive">Hesabı Sil</Button>
        </CardContent>
      </Card>
    </div>
  )
}
