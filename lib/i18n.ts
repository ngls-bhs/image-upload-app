export type Locale = 'en' | 'es' | 'de' | 'fr'

export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'es', 'de', 'fr']

export const translations = {
  en: {
    hero: {
      title: 'Image to URL Converter',
      subtitle: 'Upload images and instantly get a shareable public URL.',
      subtitle2: 'Free, fast, and no signup required.',
    },
    upload: {
      button: 'Upload Image',
      dragDrop: 'Drag & drop your image here, or click to browse',
      supported: 'Supported formats: JPG, PNG, WEBP, GIF',
    },
    success: {
      title: 'Upload successful',
      urlLabel: 'Your image URL',
      copyButton: 'Copy URL',
      openButton: 'Open Image',
      hint: 'You can share this link anywhere — social media, forums, or documents.',
    },
    error: {
      unsupportedFormat: 'Unsupported file format',
      fileTooLarge: 'File size exceeds the limit',
      uploadFailed: 'Upload failed. Please try again.',
      networkError: 'Network error. Check your connection.',
    },
    seo: {
      whatIs: {
        title: 'What is Image to URL?',
        content: 'Image to URL is a simple online tool that lets you upload an image and convert it into a publicly accessible URL. Instead of sending image files directly, you can share a lightweight link that works anywhere on the internet.',
      },
      howItWorks: {
        title: 'How does it work?',
        steps: [
          'Upload an image from your device',
          'The image is securely stored online',
          'A unique public URL is generated instantly',
          'Copy and share the link anywhere you want',
        ],
        footer: 'No registration. No setup. No technical knowledge required.',
      },
      whyUse: {
        title: 'Why use our Image to URL converter?',
        features: [
          'Fast uploads with instant results',
          'Accessible worldwide',
          'Secure HTTPS links',
          'No account or login required',
          'Works on desktop and mobile',
        ],
        footer: 'Perfect for developers, designers, students, and everyday users.',
      },
      useCases: {
        title: 'Common use cases',
        cases: [
          'Share images on forums like Reddit or Stack Overflow',
          'Add images to GitHub README files',
          'Send image links in emails or chats',
          'Share AI-generated images',
          'Embed images in documents or websites',
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'Is this tool free to use?',
            a: 'Yes. This tool is completely free.',
          },
          {
            q: 'Do I need to create an account?',
            a: 'No. You can upload images without signing up.',
          },
          {
            q: 'Is my image publicly accessible?',
            a: 'Yes. Anyone with the URL can view the image.',
          },
          {
            q: 'How long will my image be available?',
            a: 'Images are stored online and accessible via the generated URL.',
          },
        ],
      },
    },
    footer: {
      description: 'A simple and reliable image to URL converter for global users.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact Us',
    },
  },
} as const

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale]
}
