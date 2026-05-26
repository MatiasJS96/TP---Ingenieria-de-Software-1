'use client'

import type { Category } from '@/types/aac'
import { cn } from '@/lib/utils'
import { 
  Heart, 
  Hand, 
  Utensils, 
  Users, 
  Cat, 
  Home, 
  Smile, 
  Box 
} from 'lucide-react'

interface CategoryNavProps {
  categories: Category[]
  selectedCategoryId: string
  onCategorySelect: (categoryId: string) => void
}

const iconMap: Record<string, React.ReactNode> = {
  'heart': <Heart className="h-5 w-5 md:h-6 md:w-6" />,
  'hand': <Hand className="h-5 w-5 md:h-6 md:w-6" />,
  'utensils': <Utensils className="h-5 w-5 md:h-6 md:w-6" />,
  'users': <Users className="h-5 w-5 md:h-6 md:w-6" />,
  'cat': <Cat className="h-5 w-5 md:h-6 md:w-6" />,
  'home': <Home className="h-5 w-5 md:h-6 md:w-6" />,
  'smile': <Smile className="h-5 w-5 md:h-6 md:w-6" />,
  'box': <Box className="h-5 w-5 md:h-6 md:w-6" />,
}

export function CategoryNav({ categories, selectedCategoryId, onCategorySelect }: CategoryNavProps) {
  return (
    <nav className="bg-primary/20 border-t border-border">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-start md:justify-center gap-1 md:gap-2 p-2 md:p-3 min-w-max">
          {categories.map((category) => {
            const isSelected = category.id === selectedCategoryId
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={cn(
                  'flex flex-col items-center justify-center px-3 py-2 md:px-4 md:py-3 rounded-xl transition-all duration-200 touch-target min-w-[64px] md:min-w-[80px]',
                  isSelected 
                    ? 'bg-card shadow-lg scale-105' 
                    : 'hover:bg-card/50'
                )}
                aria-label={category.name}
                aria-pressed={isSelected}
              >
                <div 
                  className={cn(
                    'p-2 rounded-lg mb-1 transition-colors',
                    isSelected ? 'bg-primary/20' : 'bg-muted'
                  )}
                  style={{ color: category.color }}
                >
                  {iconMap[category.icon] || <Box className="h-5 w-5 md:h-6 md:w-6" />}
                </div>
                <span className={cn(
                  'text-xs md:text-sm font-medium text-center leading-tight',
                  isSelected ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  {category.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
