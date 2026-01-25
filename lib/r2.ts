import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID || 'b4e60706d3e02cb2b9bb5758df040e12'
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || 'imageupload'
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || 'https://image-upload.app'

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID!,
    secretAccessKey: R2_SECRET_ACCESS_KEY!,
  },
})

export async function uploadToR2(
  file: Buffer,
  filename: string,
  contentType: string
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: `uploads/${filename}`,
    Body: file,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000, immutable',
  })

  await s3Client.send(command)
  
  return `${R2_PUBLIC_URL}/uploads/${filename}`
}
