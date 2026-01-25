'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, CheckCircle2, XCircle, Copy, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { validateImageFile } from '@/lib/utils'
import { getTranslations } from '@/lib/i18n'
import { trackEvent } from '@/components/GoogleAnalytics'

const t = getTranslations()

type UploadState = 'idle' | 'uploading' | 'success' | 'error'

export function UploadArea() {
  const [state, setState] = useState<UploadState>('idle')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFile = useCallback(async (file: File) => {
    const validation = validateImageFile(file)
    if (!validation.valid) {
      setError(validation.error || t.error.unsupportedFormat)
      setState('error')
      return
    }

    setState('uploading')
    setError('')
    trackEvent('click', 'upload', 'upload_button')

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || t.error.uploadFailed)
      }

      const data = await response.json()
      setImageUrl(data.url)
      setState('success')
      trackEvent('upload_success', 'upload', 'success')
    } catch (err) {
      setError(err instanceof Error ? err.message : t.error.uploadFailed)
      setState('error')
      trackEvent('upload_failed', 'upload', 'error')
    }
  }, [])

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        handleFile(file)
      }
    },
    [handleFile]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) {
        handleFile(file)
      }
    },
    [handleFile]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleCopy = useCallback(async () => {
    if (imageUrl) {
      await navigator.clipboard.writeText(imageUrl)
      setCopied(true)
      trackEvent('copy_url', 'action', 'copy')
      setTimeout(() => setCopied(false), 2000)
    }
  }, [imageUrl])

  const handleReset = useCallback(() => {
    setState('idle')
    setImageUrl('')
    setError('')
    setCopied(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <AnimatePresence mode="wait">
        {state === 'idle' && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card
              className={`border-2 border-dashed transition-colors ${
                isDragging
                  ? 'border-primary bg-primary/5'
                  : 'border-muted-foreground/25'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <CardContent className="flex flex-col items-center justify-center p-12">
                <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {t.upload.dragDrop}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {t.upload.supported}
                </p>
                <Button onClick={() => fileInputRef.current?.click()}>
                  {t.upload.button}
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </CardContent>
            </Card>
          </motion.div>
        )}

        {state === 'uploading' && (
          <motion.div
            key="uploading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-12">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Upload className="h-12 w-12 text-primary" />
                </motion.div>
                <p className="mt-4 text-muted-foreground">Uploading...</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {state === 'success' && imageUrl && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                  <h3 className="font-semibold">{t.success.title}</h3>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    {t.success.urlLabel}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={imageUrl}
                      readOnly
                      className="flex-1 px-3 py-2 border rounded-md bg-muted font-mono text-sm"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCopy}
                      className="shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  {copied && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-green-600"
                    >
                      Copied!
                    </motion.p>
                  )}
                </div>

                <div className="relative w-full aspect-video bg-muted rounded-md overflow-hidden">
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => window.open(imageUrl, '_blank')}
                    className="flex-1"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t.success.openButton}
                  </Button>
                  <Button onClick={handleReset} variant="secondary" className="flex-1">
                    Upload Another
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  {t.success.hint}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {state === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-12">
                <XCircle className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-destructive">
                  {error || t.error.uploadFailed}
                </h3>
                <Button onClick={handleReset} className="mt-4">
                  Try Again
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
