import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://image-upload.app',
      lastModified: new Date(),
    },
    {
      url: 'https://image-upload.app/privacy',
      lastModified: new Date(),
    },
    {
      url: 'https://image-upload.app/terms',
      lastModified: new Date(),
    },
    {
      url: 'https://image-upload.app/contact',
      lastModified: new Date(),
    },
  ]
}
