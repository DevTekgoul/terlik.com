import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function IletisimPage() {
  const whatsappNumber = "905551234567" // WhatsApp numarasını buradan güncelleyin
  const whatsappMessage = encodeURIComponent("Merhaba, yardım almak istiyorum.")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                İletişim
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Size nasıl yardımcı olabiliriz?
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Info Box */}
              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 md:p-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="font-medium text-lg mb-2">Bize ulaşmadan önce...</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Sorunuzun cevabı Sıkça Sorulan Sorular bölümünde olabilir.
                        Buradan aradığınız cevabı hızlıca bulabilir ve zaman kazanabilirsiniz.
                      </p>
                    </div>
                    <Button asChild variant="outline" className="bg-white dark:bg-gray-950">
                      <Link href="/sss">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Sıkça Sorulan Sorular
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* WhatsApp Card */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border border-green-200 dark:border-green-800 rounded-lg p-6 md:p-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">WhatsApp Destek</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        7/24 WhatsApp destek hattımızdan bize ulaşabilirsiniz
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
                        WhatsApp ile Yaz
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Contact Info Card */}
                <div className="bg-secondary/20 border border-border/40 rounded-lg p-6 md:p-8">
                  <h3 className="font-medium text-lg mb-6 text-center">Diğer İletişim Kanalları</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">E-posta</p>
                        <Link
                          href="mailto:info@terlik-ayakkabi.com"
                          className="text-sm font-medium hover:text-primary transition-colors break-all"
                        >
                          info@terlik-ayakkabi.com
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">
                          24 saat içinde yanıt
                        </p>
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
                        <p className="text-xs text-muted-foreground mt-1">
                          Hafta içi: 09:00 - 18:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Office Hours */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="font-medium text-lg mb-3">Çalışma Saatleri</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Pazartesi - Cuma:</span> 09:00 - 18:00
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Cumartesi:</span> 10:00 - 16:00
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Pazar:</span> Kapalı
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-8 border-t border-border/40">
                <h3 className="font-medium text-lg mb-4 text-center">Hızlı Erişim</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/sss">
                      Sıkça Sorulan Sorular
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/kargo">
                      Kargo & İade
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/satici-ol">
                      Satıcı Ol
                    </Link>
                  </Button>
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
