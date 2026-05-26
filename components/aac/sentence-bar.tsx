'use client'

import type { Pictogram } from '@/types/aac'
import { Button } from '@/components/ui/button'
import { Trash2, X, Volume2 } from 'lucide-react'
import { speakSentence } from '@/lib/speech'

interface SentenceBarProps {
  selectedPictograms: Pictogram[]
  onRemoveLast: () => void
  onClearAll: () => void
}

export function SentenceBar({ selectedPictograms, onRemoveLast, onClearAll }: SentenceBarProps) {
  const handlePlay = () => {
    if (selectedPictograms.length === 0) return
    const texts = selectedPictograms.map(p => p.audioText || p.label)
    speakSentence(texts)
  }

  return (
    <div className="bg-card rounded-2xl shadow-lg p-3 md:p-4">
      <div className="flex items-center gap-2 md:gap-3">
        {/* Delete/Clear Buttons */}
        <div className="flex gap-1 md:gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 md:h-14 md:w-14 rounded-xl border-2 touch-target"
            onClick={onRemoveLast}
            disabled={selectedPictograms.length === 0}
            aria-label="Borrar último"
          >
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 md:h-14 md:w-14 rounded-xl border-2 touch-target"
            onClick={onClearAll}
            disabled={selectedPictograms.length === 0}
            aria-label="Borrar todo"
          >
            <Trash2 className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        {/* Selected Pictograms Display */}
        <div className="flex-1 min-w-0 overflow-x-auto">
          <div className="flex items-center gap-2 min-h-[60px] md:min-h-[72px] px-2">
            {selectedPictograms.length === 0 ? (
              <span className="text-muted-foreground text-sm md:text-base italic">
                Toca los pictogramas para formar una frase...
              </span>
            ) : (
              selectedPictograms.map((pictogram, index) => (
                <div
                  key={`${pictogram.id}-${index}`}
                  className="flex flex-col items-center justify-center bg-primary/10 rounded-xl p-2 min-w-[60px] md:min-w-[72px] flex-shrink-0"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-card rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-2xl md:text-3xl">
                      {getEmojiForPictogram(pictogram.label)}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm font-medium mt-1 text-foreground truncate max-w-[60px] md:max-w-[72px]">
                    {pictogram.label}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Play Button */}
        <Button
          size="lg"
          className="h-14 w-14 md:h-16 md:w-16 rounded-xl bg-primary hover:bg-primary/90 flex-shrink-0 touch-target"
          onClick={handlePlay}
          disabled={selectedPictograms.length === 0}
          aria-label="Reproducir frase"
        >
          <Volume2 className="h-7 w-7 md:h-8 md:w-8" />
        </Button>
      </div>
    </div>
  )
}

// Simple emoji mapping for visual feedback in sentence bar
function getEmojiForPictogram(label: string): string {
  const emojiMap: Record<string, string> = {
    'Quiero': '🙋',
    'No quiero': '🙅',
    'Dame': '🤲',
    'Ayuda': '❓',
    'Más': '➕',
    'Basta': '🛑',
    'Comer': '🍽️',
    'Beber': '🥤',
    'Dormir': '😴',
    'Jugar': '🎮',
    'Ir': '🚶',
    'Ver': '👁️',
    'Escuchar': '👂',
    'Leer': '📖',
    'Agua': '💧',
    'Leche': '🥛',
    'Jugo': '🧃',
    'Pan': '🍞',
    'Galleta': '🍪',
    'Manzana': '🍎',
    'Plátano': '🍌',
    'Hamburguesa': '🍔',
    'Helado': '🍦',
    'Pastel': '🎂',
    'Sopa': '🍲',
    'Chocolate': '🍫',
    'Yo': '👤',
    'Mamá': '👩',
    'Papá': '👨',
    'Hermano': '👦',
    'Hermana': '👧',
    'Maestro': '👨‍🏫',
    'Amigo': '🤝',
    'Abuelo': '👴',
    'Perro': '🐕',
    'Gato': '🐈',
    'Pájaro': '🐦',
    'Pez': '🐟',
    'Casa': '🏠',
    'Escuela': '🏫',
    'Parque': '🌳',
    'Baño': '🚽',
    'Feliz': '😊',
    'Triste': '😢',
    'Enojado': '😠',
    'Cansado': '😫',
    'Asustado': '😨',
    'Bien': '👍',
    'Libro': '📚',
    'Pelota': '⚽',
    'Teléfono': '📱',
    'Televisión': '📺',
  }
  return emojiMap[label] || '📌'
}
