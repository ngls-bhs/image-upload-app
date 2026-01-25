import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground">
              For inquiries, please contact us through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>GitHub Issues (if applicable)</li>
              <li>Email: contact@image-upload.app</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
