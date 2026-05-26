'use client'

import type { Pictogram } from '@/types/aac'
import { PictogramCard } from './pictogram-card'

interface PictogramGridProps {
  pictograms: Pictogram[]
  selectedIds?: string[]
  size?: 'normal' | 'grande' | 'extra-grande'
  onPictogramClick?: (pictogram: Pictogram) => void
}

export function PictogramGrid({ 
  pictograms, 
  selectedIds = [], 
  size = 'normal',
  onPictogramClick 
}: PictogramGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 p-4">
      {pictograms.map((pictogram) => (
        <PictogramCard
          key={pictogram.id}
          pictogram={pictogram}
          selected={selectedIds.includes(pictogram.id)}
          size={size}
          onClick={() => onPictogramClick?.(pictogram)}
        />
      ))}
    </div>
  )
}
