import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function SaticiOlPage() {
  const whatsappNumber = "905551234567" // WhatsApp numarasını buradan güncelleyin
  const whatsappMessage = encodeURIComponent("Merhaba, satıcı olmak istiyorum. Bilgi alabilir miyim?")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                Satıcı Olun
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Türkiye'nin güvenilir terlik ve ayakkabı platformunda yerinizi alın
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Side - Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-light mb-4">
                      Neden Bize Katılmalısınız?
                    </h2>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Geniş Müşteri Kitlesi</h3>
                          <p className="text-sm text-muted-foreground">
                            Türkiye genelindeki binlerce potansiyel müşteriye ulaşın
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Kolay Kullanım</h3>
                          <p className="text-sm text-muted-foreground">
                            Kullanıcı dostu satıcı paneli ile ürünlerinizi kolayca yönetin
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Güvenli Ödeme</h3>
                          <p className="text-sm text-muted-foreground">
                            Satışlarınız düzenli ve güvenli şekilde hesabınıza aktarılır
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Destek Ekibi</h3>
                          <p className="text-sm text-muted-foreground">
                            7/24 teknik destek ve müşteri hizmetleri desteği
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-light mb-4">
                      Başvuru Süreci
                    </h2>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-medium">
                          1
                        </span>
                        <p className="text-sm text-muted-foreground pt-0.5">
                          WhatsApp üzerinden veya iletişim bilgilerimizden bize ulaşın
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-medium">
                          2
                        </span>
                        <p className="text-sm text-muted-foreground pt-0.5">
                          Gerekli belgeleri (vergi levhası, şirket bilgileri) paylaşın
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-medium">
                          3
                        </span>
                        <p className="text-sm text-muted-foreground pt-0.5">
                          2-3 iş günü içinde başvurunuz değerlendirilir
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs font-medium">
                          4
                        </span>
                        <p className="text-sm text-muted-foreground pt-0.5">
                          Onay sonrası satıcı panelinize erişim sağlanır
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Card */}
                <div className="space-y-6">
                  {/* WhatsApp Button */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border border-green-200 dark:border-green-800 rounded-lg p-6 md:p-8">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Hemen Başvurun</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          WhatsApp üzerinden hızlıca bizimle iletişime geçin
                        </p>
                      </div>
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        <Link
                          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          WhatsApp ile İletişime Geç
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Contact Info Card */}
                  <div className="bg-secondary/20 border border-border/40 rounded-lg p-6 md:p-8">
                    <h3 className="font-medium text-lg mb-6 text-center">İletişim Bilgilerimiz</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">E-posta</p>
                          <Link
                            href="mailto:info@terlik-ayakkabi.com"
                            className="text-sm font-medium hover:text-primary transition-colors"
                          >
                            info@terlik-ayakkabi.com
                          </Link>
                        </div>
                      </div>

                      <div className="h-px bg-border/40" />

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">Telefon</p>
                          <Link
                            href="tel:+905551234567"
                            className="text-sm font-medium hover:text-primary transition-colors"
                          >
                            +90 555 123 45 67
                          </Link>
                        </div>
                      </div>

                      <div className="h-px bg-border/40" />
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Çalışma Saatleri:</span>
                      <br />
                      Pazartesi - Cuma: 09:00 - 18:00
                      <br />
                      Cumartesi: 10:00 - 16:00
                    </p>
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
