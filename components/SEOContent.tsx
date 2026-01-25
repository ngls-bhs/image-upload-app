'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTranslations } from '@/lib/i18n'

const t = getTranslations()

export function SEOContent() {
  return (
    <div className="container py-16 space-y-12">
      <section>
        <Card>
          <CardHeader>
            <CardTitle>{t.seo.whatIs.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t.seo.whatIs.content}</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>{t.seo.howItWorks.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              {t.seo.howItWorks.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-muted-foreground">
              {t.seo.howItWorks.footer}
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>{t.seo.whyUse.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              {t.seo.whyUse.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground">{t.seo.whyUse.footer}</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>{t.seo.useCases.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              {t.seo.useCases.cases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>{t.seo.faq.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              {t.seo.faq.items.map((item, index) => (
                <div key={index}>
                  <dt className="font-semibold mb-1">{item.q}</dt>
                  <dd className="text-muted-foreground ml-4">{item.a}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
