import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <Card>
          <CardHeader>
            <CardTitle>Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground">
              Terms of service will be updated soon. For now, please note that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>This service is provided as-is</li>
              <li>Users are responsible for the content they upload</li>
              <li>We reserve the right to remove inappropriate content</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
