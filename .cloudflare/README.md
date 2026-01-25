# Cloudflare Deployment Notes

## R2 Configuration

1. Create an R2 bucket named `imageupload` in Cloudflare dashboard
2. Create API tokens with read/write permissions:
   - Go to Cloudflare Dashboard > R2 > Manage R2 API Tokens
   - Create a token with read/write access to the `imageupload` bucket
3. Configure public access:
   - In R2 bucket settings, enable public access
   - Set up custom domain: `image-upload.app`
   - Configure CORS if needed

## Environment Variables

Set these in Cloudflare Pages settings:

- `R2_ACCOUNT_ID`: b4e60706d3e02cb2b9bb5758df040e12
- `R2_BUCKET_NAME`: imageupload
- `R2_ACCESS_KEY_ID`: Your R2 API access key
- `R2_SECRET_ACCESS_KEY`: Your R2 API secret key
- `R2_PUBLIC_URL`: https://image-upload.app
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your GA4 measurement ID (optional)

## Deployment Steps

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Add environment variables
6. Deploy

## R2 Public URL Setup

To make uploaded images publicly accessible:

1. In R2 bucket settings, go to "Settings" > "Public Access"
2. Enable public access
3. Add custom domain: `image-upload.app`
4. Configure DNS records as instructed by Cloudflare
