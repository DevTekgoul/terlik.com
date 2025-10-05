import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SSSPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                Sıkça Sorulan Sorular
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Terlik & Ayakkabı Satış Platformu hakkında merak ettikleriniz
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
              {/* Genel Sorular */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 md:mb-8 pb-3 border-b">
                  Genel Sorular
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Bu site nedir?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Terlik ve ayakkabı satışına özel bir e-ticaret platformudur. Hem müşteriler alışveriş yapabilir hem de farklı firmalar ürünlerini satışa sunabilir.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Bu platformda kimler satış yapabilir?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Terlik ve ayakkabı sektöründe faaliyet gösteren firmalar, marka sahipleri ve distribütörler satış yapabilir.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Bireysel satıcı olarak ürün yükleyebilir miyim?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Şu an için sadece şirketler satış yapabilmektedir. Vergi levhası olan tüm işletmeler başvuru yapabilir.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Satıcı olmak için nasıl başvuru yapabilirim?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ana sayfadaki "Satıcı Ol" bölümünden başvuru formunu doldurup gerekli belgeleri yüklemeniz yeterlidir.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Satıcı başvurum ne kadar sürede onaylanır?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Başvurular genellikle 2-3 iş günü içinde değerlendirilip tarafınıza bilgi verilir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Alıcılar için Sorular */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 md:mb-8 pb-3 border-b">
                  Alıcılar için Sorular
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Siparişimi nasıl verebilirim?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Beğendiğiniz ürünü sepete ekleyip güvenli ödeme adımlarını takip ederek siparişinizi tamamlayabilirsiniz.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Hangi ödeme yöntemlerini kullanabilirim?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kredi kartı, banka kartı ve kapıda ödeme seçenekleri mevcuttur.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Siparişimin kargoya verildiğini nasıl öğrenirim?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Siparişiniz kargoya verildiğinde size e-posta ve SMS yoluyla bilgilendirme yapılır.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Kargo ücreti ne kadar?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Belirli bir tutarın üzerindeki alışverişlerde kargo ücretsizdir. Daha düşük tutarlarda sabit kargo ücreti uygulanır.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">İade ve değişim yapabiliyor muyum?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Evet. 14 gün içinde kullanılmamış ürünleri iade veya değişim için gönderebilirsiniz.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">İadem ne kadar sürede sonuçlanır?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ürün bize ulaştıktan sonra 3-5 iş günü içinde ödemeniz iade edilir.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Ürünlerde garanti var mı?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tüm ürünler üretici veya satıcı firma tarafından belirtilen garanti koşullarına tabidir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Satıcılar için Sorular */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 md:mb-8 pb-3 border-b">
                  Satıcılar için Sorular
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Platformda satış yapmak ücretli mi?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Üyelik ücretsizdir. Sadece satışlardan belirli bir komisyon oranı alınır.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Komisyon oranı nedir?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ürün kategorisine göre değişiklik gösterebilir. Detaylı bilgi için Satıcı Paneli üzerinden görebilirsiniz.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Ürünleri siteye nasıl yükleyebilirim?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Satıcı panelinizden ürün bilgilerini ve görsellerini yükleyebilirsiniz. Toplu yükleme desteği de vardır.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Satıştan kazandığım tutar hesabıma ne zaman geçer?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ödeme, müşterinin ürünü teslim alıp onaylamasından sonra 7 iş günü içinde hesabınıza aktarılır.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Kendi kargo anlaşmamı kullanabilir miyim?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Evet, dilerseniz kendi kargo anlaşmanızı tanımlayabilir veya platformun anlaşmalı kargo hizmetini kullanabilirsiniz.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Stok takibi nasıl yapılıyor?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Satıcı panelinden stok adetlerinizi güncelleyebilir, anlık stok takibini kolayca yapabilirsiniz.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Müşteriyle iletişimi kim sağlar?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Satış sonrası müşteri soruları öncelikle platform destek ekibine iletilir. Gerekli durumlarda satıcıya yönlendirilir.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">Reklam ve öne çıkarma imkanı var mı?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Evet, ürünlerinizi banner, vitrin veya sponsorlu alanlarda öne çıkarma seçenekleri mevcuttur.
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
