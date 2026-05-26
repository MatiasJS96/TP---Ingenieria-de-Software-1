'use client'

import { useState } from 'react'
import { AACHeader } from '@/components/layout/aac-header'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Plus, 
  Edit2, 
  Trash2,
  GripVertical,
  Heart,
  Hand,
  Utensils,
  Users,
  Cat,
  Home,
  Smile,
  Box
} from 'lucide-react'
import { categories, getPictogramsByCategory } from '@/lib/pictograms'

const iconMap: Record<string, React.ReactNode> = {
  'heart': <Heart className="h-8 w-8" />,
  'hand': <Hand className="h-8 w-8" />,
  'utensils': <Utensils className="h-8 w-8" />,
  'users': <Users className="h-8 w-8" />,
  'cat': <Cat className="h-8 w-8" />,
  'home': <Home className="h-8 w-8" />,
  'smile': <Smile className="h-8 w-8" />,
  'box': <Box className="h-8 w-8" />,
}

export default function CarpetasPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <AACHeader 
        title="Gestión de Carpetas" 
        backHref="/familia"
        showSettings={false}
      />

      <main className="p-4 md:p-6 max-w-4xl mx-auto">
        {/* Add New Category Button */}
        <div className="mb-6">
          <Button size="lg" className="w-full md:w-auto touch-target">
            <Plus className="h-5 w-5 mr-2" />
            Nueva Carpeta
          </Button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const pictogramCount = getPictogramsByCategory(category.id).length
            const isHovered = hoveredCategory === category.id
            
            return (
              <Card 
                key={category.id}
                className="group relative overflow-hidden transition-shadow hover:shadow-lg"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardContent className="p-0">
                  {/* Drag Handle */}
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                    <GripVertical className="h-5 w-5 text-muted-foreground" />
                  </div>

                  {/* Category Content */}
                  <div 
                    className="p-6 text-center"
                    style={{ backgroundColor: category.bgColor }}
                  >
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-3"
                      style={{ backgroundColor: 'white', color: category.color }}
                    >
                      {iconMap[category.icon] || <Box className="h-8 w-8" />}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pictogramCount} pictograma{pictogramCount !== 1 ? 's' : ''}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex border-t border-border">
                    <button 
                      className="flex-1 py-3 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:bg-muted transition-colors"
                    >
                      <Edit2 className="h-4 w-4" />
                      Editar
                    </button>
                    <div className="w-px bg-border" />
                    <button 
                      className="flex-1 py-3 flex items-center justify-center gap-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                      Eliminar
                    </button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Info Text */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Arrastra las carpetas para reordenarlas. El orden se reflejará en el tablero del estudiante.
        </p>
      </main>
    </div>
  )
}
