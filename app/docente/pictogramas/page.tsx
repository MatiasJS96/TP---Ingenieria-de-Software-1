'use client'

import { useState } from 'react'
import { AACHeader } from '@/components/layout/aac-header'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Plus, 
  Edit2, 
  Trash2,
  Filter
} from 'lucide-react'
import { categories, pictograms, getPictogramsByCategory } from '@/lib/pictograms'
import { PictogramCard } from '@/components/aac/pictogram-card'
import type { Category } from '@/types/aac'

export default function PictogramasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPictograms = pictograms.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.categoryId === selectedCategory
    const matchesSearch = p.label.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <AACHeader 
        title="Gestión de Pictogramas" 
        backHref="/docente"
        showSettings={false}
      />

      <main className="p-4 md:p-6 max-w-6xl mx-auto">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar pictogramas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          
          <div className="flex gap-2">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-12 px-4 pr-10 rounded-lg border border-input bg-card text-foreground appearance-none cursor-pointer"
              >
                <option value="all">Todas las categorías</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            <Button size="lg" className="h-12 touch-target">
              <Plus className="h-5 w-5 mr-2" />
              Añadir
            </Button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Todos ({pictograms.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat.name} ({getPictogramsByCategory(cat.id).length})
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-4">
          {filteredPictograms.length} pictograma{filteredPictograms.length !== 1 ? 's' : ''} encontrado{filteredPictograms.length !== 1 ? 's' : ''}
        </p>

        {/* Pictogram Grid with Edit Actions */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {filteredPictograms.map((pictogram) => (
            <Card key={pictogram.id} className="group relative overflow-hidden">
              <CardContent className="p-2">
                <PictogramCard pictogram={pictogram} />
                
                {/* Edit overlay */}
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-10 w-10 rounded-full"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="destructive"
                    className="h-10 w-10 rounded-full"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPictograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron pictogramas</p>
            <Button className="mt-4" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Crear nuevo pictograma
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
