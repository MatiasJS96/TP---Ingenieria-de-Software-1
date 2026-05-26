'use client'

import { useState } from 'react'
import { AACHeader } from '@/components/layout/aac-header'
import { SentenceBar } from '@/components/aac/sentence-bar'
import { PictogramGrid } from '@/components/aac/pictogram-grid'
import { CategoryNav } from '@/components/aac/category-nav'
import { categories, getPictogramsByCategory } from '@/lib/pictograms'
import type { Pictogram } from '@/types/aac'

export default function EstudiantePage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id)
  const [selectedPictograms, setSelectedPictograms] = useState<Pictogram[]>([])

  const currentPictograms = getPictogramsByCategory(selectedCategory)

  const handlePictogramClick = (pictogram: Pictogram) => {
    setSelectedPictograms(prev => [...prev, pictogram])
  }

  const handleRemoveLast = () => {
    setSelectedPictograms(prev => prev.slice(0, -1))
  }

  const handleClearAll = () => {
    setSelectedPictograms([])
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  return (
    <div className="min-h-screen bg-wood flex flex-col">
      {/* Header */}
      <AACHeader 
        title="Mi Tablero" 
        backHref="/login"
        showSettings={true}
        showRoutines={true}
      />

      {/* Sentence Construction Bar */}
      <div className="p-3 md:p-4">
        <SentenceBar
          selectedPictograms={selectedPictograms}
          onRemoveLast={handleRemoveLast}
          onClearAll={handleClearAll}
        />
      </div>

      {/* Pictogram Grid */}
      <div className="flex-1 overflow-y-auto bg-card/80 backdrop-blur-sm mx-3 md:mx-4 mb-3 md:mb-4 rounded-2xl shadow-lg">
        <PictogramGrid
          pictograms={currentPictograms}
          onPictogramClick={handlePictogramClick}
        />
      </div>

      {/* Category Navigation */}
      <CategoryNav
        categories={categories}
        selectedCategoryId={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
    </div>
  )
}
