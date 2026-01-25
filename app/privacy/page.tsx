import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground">
              This privacy policy will be updated soon. For now, please note that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>We do not collect personal information</li>
              <li>Uploaded images are stored publicly</li>
              <li>We use Google Analytics for website analytics</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
