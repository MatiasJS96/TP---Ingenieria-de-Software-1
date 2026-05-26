'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Settings, Calendar } from 'lucide-react'

interface AACHeaderProps {
  title: string
  backHref?: string
  showSettings?: boolean
  showRoutines?: boolean
  onSettingsClick?: () => void
}

export function AACHeader({ 
  title, 
  backHref, 
  showSettings = true, 
  showRoutines = false,
  onSettingsClick 
}: AACHeaderProps) {
  return (
    <header className="bg-card shadow-sm border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {backHref && (
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-10 w-10 md:h-12 md:w-12 rounded-xl touch-target"
          >
            <Link href={backHref} aria-label="Volver">
              <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </Button>
        )}
        <h1 className="text-lg md:text-xl font-semibold text-foreground">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        {showRoutines && (
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-10 w-10 md:h-12 md:w-12 rounded-xl touch-target"
          >
            <Link href="/estudiante/rutinas" aria-label="Rutinas">
              <Calendar className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </Button>
        )}
        {showSettings && (
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 md:h-12 md:w-12 rounded-xl touch-target"
            onClick={onSettingsClick}
            aria-label="Configuración"
          >
            <Settings className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        )}
      </div>
    </header>
  )
}
