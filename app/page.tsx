import { Header } from '@/components/Header'
import { UploadArea } from '@/components/UploadArea'
import { SEOContent } from '@/components/SEOContent'
import { Footer } from '@/components/Footer'
import { getTranslations } from '@/lib/i18n'

const t = getTranslations()

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-20">
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t.hero.subtitle}
              <br />
              {t.hero.subtitle2}
            </p>
          </div>
          <UploadArea />
        </section>
        <SEOContent />
      </main>
      <Footer />
    </div>
  )
}
