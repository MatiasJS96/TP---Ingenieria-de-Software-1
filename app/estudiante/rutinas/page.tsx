'use client'

import { useState } from 'react'
import { AACHeader } from '@/components/layout/aac-header'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Sun, 
  School, 
  Moon,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react'
import { routines } from '@/lib/pictograms'
import type { Routine, RoutineStep } from '@/types/aac'
import { cn } from '@/lib/utils'

const routineIcons: Record<string, React.ReactNode> = {
  'sun': <Sun className="h-6 w-6" />,
  'school': <School className="h-6 w-6" />,
  'moon': <Moon className="h-6 w-6" />,
}

const routineColors: Record<string, { bg: string; accent: string }> = {
  'manana': { bg: 'bg-[oklch(0.95_0.05_85)]', accent: 'bg-[oklch(0.82_0.15_85)]' },
  'escuela': { bg: 'bg-[oklch(0.92_0.05_240)]', accent: 'bg-[oklch(0.58_0.15_240)]' },
  'noche': { bg: 'bg-[oklch(0.92_0.05_290)]', accent: 'bg-[oklch(0.55_0.15_290)]' },
}

export default function RutinasPage() {
  const [selectedRoutine, setSelectedRoutine] = useState<Routine>(routines[0])
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())

  const currentStep = selectedRoutine.steps[currentStepIndex]
  const colors = routineColors[selectedRoutine.id] || routineColors['manana']

  const handleStepComplete = () => {
    setCompletedSteps(prev => new Set([...prev, currentStep.id]))
    if (currentStepIndex < selectedRoutine.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
    }
  }

  const handleNextStep = () => {
    if (currentStepIndex < selectedRoutine.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  const handleRoutineChange = (routine: Routine) => {
    setSelectedRoutine(routine)
    setCurrentStepIndex(0)
    setCompletedSteps(new Set())
  }

  return (
    <div className={cn("min-h-screen", colors.bg)}>
      <AACHeader 
        title="Mis Rutinas" 
        backHref="/estudiante"
        showSettings={false}
      />

      <main className="p-4 md:p-6 max-w-2xl mx-auto">
        {/* Routine Selector */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {routines.map((routine) => {
            const isSelected = routine.id === selectedRoutine.id
            const rColors = routineColors[routine.id] || routineColors['manana']
            
            return (
              <button
                key={routine.id}
                onClick={() => handleRoutineChange(routine)}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap transition-all touch-target',
                  isSelected 
                    ? `${rColors.accent} text-white shadow-lg scale-105` 
                    : 'bg-card text-foreground hover:shadow-md'
                )}
              >
                {routineIcons[routine.icon]}
                <span className="font-medium">{routine.name}</span>
              </button>
            )
          })}
        </div>

        {/* Current Step Display */}
        <Card className="mb-6 overflow-hidden">
          <CardContent className="p-0">
            <div className={cn("p-6 text-center", colors.accent)}>
              <div className="w-32 h-32 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <StepIcon label={currentStep.label} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {currentStep.label}
              </h2>
              {currentStep.time && (
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <Clock className="h-5 w-5" />
                  <span className="text-lg">{currentStep.time}</span>
                </div>
              )}
            </div>

            <div className="p-4 flex items-center justify-between">
              <Button
                variant="outline"
                size="lg"
                onClick={handlePrevStep}
                disabled={currentStepIndex === 0}
                className="touch-target"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-foreground">
                  {currentStepIndex + 1} / {selectedRoutine.steps.length}
                </span>
              </div>

              <Button
                variant="outline"
                size="lg"
                onClick={handleNextStep}
                disabled={currentStepIndex === selectedRoutine.steps.length - 1}
                className="touch-target"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Complete Step Button */}
        <Button
          size="lg"
          className={cn(
            "w-full h-16 text-xl font-semibold touch-target mb-6",
            completedSteps.has(currentStep.id) && "bg-green-500 hover:bg-green-600"
          )}
          onClick={handleStepComplete}
          disabled={completedSteps.has(currentStep.id) && currentStepIndex === selectedRoutine.steps.length - 1}
        >
          {completedSteps.has(currentStep.id) ? (
            <>
              <Check className="h-6 w-6 mr-2" />
              Completado
            </>
          ) : (
            'Marcar como Hecho'
          )}
        </Button>

        {/* Timeline View */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-4">Progreso</h3>
            <div className="space-y-3">
              {selectedRoutine.steps.map((step, index) => {
                const isCompleted = completedSteps.has(step.id)
                const isCurrent = index === currentStepIndex
                
                return (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStepIndex(index)}
                    className={cn(
                      'w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left',
                      isCurrent && 'bg-primary/20 ring-2 ring-primary',
                      !isCurrent && 'hover:bg-muted'
                    )}
                  >
                    <div className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isCurrent 
                          ? colors.accent + ' text-white'
                          : 'bg-muted text-muted-foreground'
                    )}>
                      {isCompleted ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={cn(
                        'font-medium truncate',
                        isCompleted ? 'text-muted-foreground line-through' : 'text-foreground'
                      )}>
                        {step.label}
                      </p>
                      {step.time && (
                        <p className="text-xs text-muted-foreground">{step.time}</p>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

// Simple step icons
function StepIcon({ label }: { label: string }) {
  const iconMap: Record<string, JSX.Element> = {
    'Despertar': <SunIcon />,
    'Ir al baño': <ToiletIcon />,
    'Lavarse la cara': <WashIcon />,
    'Vestirse': <ShirtIcon />,
    'Desayunar': <BreakfastIcon />,
    'Cepillarse los dientes': <ToothbrushIcon />,
    'Llegar a la escuela': <SchoolBuildingIcon />,
    'Saludar': <WaveIcon />,
    'Clase': <BookIcon />,
    'Recreo': <PlaygroundIcon />,
    'Almuerzo': <LunchIcon />,
    'Cenar': <DinnerIcon />,
    'Baño': <BathIcon />,
    'Ponerse pijama': <PajamaIcon />,
    'Leer cuento': <StoryIcon />,
    'Dormir': <SleepIcon />,
  }

  return iconMap[label] || <DefaultStepIcon />
}

const DefaultStepIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <circle cx="32" cy="32" r="24" fill="#E2E8F0"/>
    <text x="32" y="38" textAnchor="middle" fontSize="20" fill="#64748B">?</text>
  </svg>
)

const SunIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <circle cx="32" cy="32" r="14" fill="#FDE047"/>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1={32 + Math.cos(angle * Math.PI / 180) * 18}
        y1={32 + Math.sin(angle * Math.PI / 180) * 18}
        x2={32 + Math.cos(angle * Math.PI / 180) * 26}
        y2={32 + Math.sin(angle * Math.PI / 180) * 26}
        stroke="#FDE047"
        strokeWidth="4"
        strokeLinecap="round"
      />
    ))}
  </svg>
)

const ToiletIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <rect x="18" y="12" width="28" height="40" rx="4" fill="white" stroke="#94A3B8" strokeWidth="2"/>
    <ellipse cx="32" cy="36" rx="10" ry="8" fill="#93C5FD"/>
    <rect x="26" y="16" width="12" height="6" rx="2" fill="#94A3B8"/>
  </svg>
)

const WashIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <circle cx="32" cy="28" r="16" fill="#FECACA"/>
    <path d="M20 44c6 8 18 8 24 0" fill="#60A5FA"/>
    <circle cx="26" cy="26" r="2" fill="#1E293B"/>
    <circle cx="38" cy="26" r="2" fill="#1E293B"/>
  </svg>
)

const ShirtIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <path d="M20 16l-8 8v8l8-4v28h24v-28l8 4v-8l-8-8c-2 4-6 6-12 6s-10-2-12-6z" fill="#3B82F6"/>
    <path d="M26 16c2 2 4 3 6 3s4-1 6-3" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
)

const BreakfastIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <ellipse cx="32" cy="40" rx="20" ry="8" fill="#FDE68A"/>
    <rect x="16" y="20" width="12" height="20" rx="2" fill="#F97316"/>
    <circle cx="44" cy="28" r="8" fill="#FECACA"/>
    <circle cx="44" cy="28" r="4" fill="#FDE047"/>
  </svg>
)

const ToothbrushIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <rect x="28" y="8" width="8" height="48" rx="2" fill="#60A5FA"/>
    <rect x="24" y="8" width="16" height="12" rx="2" fill="white" stroke="#94A3B8" strokeWidth="2"/>
    <path d="M26 12v4M30 12v4M34 12v4M38 12v4" stroke="#94A3B8" strokeWidth="1"/>
  </svg>
)

const SchoolBuildingIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <rect x="12" y="28" width="40" height="28" fill="#FDE68A"/>
    <path d="M32 12l-16 16h32z" fill="#EF4444"/>
    <rect x="16" y="32" width="8" height="8" fill="#93C5FD"/>
    <rect x="40" y="32" width="8" height="8" fill="#93C5FD"/>
    <rect x="26" y="40" width="12" height="16" fill="#92400E"/>
  </svg>
)

const WaveIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <circle cx="32" cy="24" r="12" fill="#FECACA"/>
    <path d="M24 48c0-8 4-12 8-12s8 4 8 12" fill="#10B981"/>
    <path d="M44 24c4-8 12-4 12 4" stroke="#FECACA" strokeWidth="4" fill="none"/>
    <circle cx="28" cy="22" r="2" fill="#1E293B"/>
    <circle cx="36" cy="22" r="2" fill="#1E293B"/>
    <path d="M28 28c2 2 6 2 8 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
  </svg>
)

const BookIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <rect x="12" y="12" width="40" height="40" rx="2" fill="#3B82F6"/>
    <rect x="16" y="16" width="32" height="32" fill="white"/>
    <path d="M20 24h24M20 32h24M20 40h16" stroke="#94A3B8" strokeWidth="2"/>
  </svg>
)

const PlaygroundIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <rect x="8" y="48" width="48" height="8" fill="#22C55E"/>
    <path d="M16 48l16-32l16 32" fill="#FDE68A" stroke="#F59E0B" strokeWidth="2"/>
    <circle cx="32" cy="20" r="4" fill="#EF4444"/>
  </svg>
)

const LunchIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <ellipse cx="32" cy="44" rx="24" ry="8" fill="#E2E8F0"/>
    <ellipse cx="32" cy="40" rx="20" ry="6" fill="#F97316"/>
    <circle cx="24" cy="38" r="4" fill="#22C55E"/>
    <circle cx="36" cy="36" r="3" fill="#EF4444"/>
    <rect x="40" y="28" width="4" height="20" fill="#94A3B8"/>
  </svg>
)

const DinnerIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <ellipse cx="32" cy="44" rx="24" ry="10" fill="#E2E8F0"/>
    <ellipse cx="32" cy="38" rx="18" ry="6" fill="#FDE68A"/>
    <ellipse cx="32" cy="36" rx="12" ry="4" fill="#92400E"/>
  </svg>
)

const BathIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <ellipse cx="32" cy="40" rx="24" ry="12" fill="#93C5FD"/>
    <circle cx="32" cy="24" r="12" fill="#FECACA"/>
    <circle cx="28" cy="22" r="2" fill="#1E293B"/>
    <circle cx="36" cy="22" r="2" fill="#1E293B"/>
    <path d="M28 28c2 2 6 2 8 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <ellipse cx="20" cy="44" rx="4" ry="2" fill="white"/>
    <ellipse cx="44" cy="42" rx="3" ry="1.5" fill="white"/>
  </svg>
)

const PajamaIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <path d="M20 20l-8 8v8l8-4v24h24v-24l8 4v-8l-8-8c-2 4-6 6-12 6s-10-2-12-6z" fill="#DDD6FE"/>
    <circle cx="28" cy="36" r="2" fill="#8B5CF6"/>
    <circle cx="36" cy="36" r="2" fill="#8B5CF6"/>
    <circle cx="32" cy="44" r="2" fill="#8B5CF6"/>
  </svg>
)

const StoryIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <rect x="16" y="12" width="32" height="40" rx="2" fill="#FDE68A" stroke="#F59E0B" strokeWidth="2"/>
    <path d="M32 12v40" stroke="#F59E0B" strokeWidth="2"/>
    <path d="M20 20h8M20 28h8M20 36h6" stroke="#92400E" strokeWidth="2"/>
    <circle cx="44" cy="32" r="6" fill="#F472B6"/>
  </svg>
)

const SleepIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20">
    <ellipse cx="32" cy="44" rx="24" ry="8" fill="#E0E7FF"/>
    <circle cx="32" cy="32" r="14" fill="#FECACA"/>
    <path d="M26 32c1.5-1.5 3-1.5 4.5 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <path d="M33.5 32c1.5-1.5 3-1.5 4.5 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <text x="52" y="20" fontSize="14" fill="#6366F1" fontWeight="bold">Z</text>
    <text x="56" y="12" fontSize="10" fill="#6366F1">z</text>
  </svg>
)
