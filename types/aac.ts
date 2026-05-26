// AAC (Augmentative and Alternative Communication) Types

export interface Pictogram {
  id: string
  label: string
  imageUrl: string
  categoryId: string
  audioText?: string // Text for TTS, defaults to label
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
  bgColor: string
}

export interface Routine {
  id: string
  name: string
  icon: string
  steps: RoutineStep[]
}

export interface RoutineStep {
  id: string
  label: string
  imageUrl: string
  completed: boolean
  time?: string
}

export interface Student {
  id: string
  name: string
  avatar: string
  lastActivity: Date
  pictogramsUsedToday: number
  favoriteCategories: string[]
}

export interface AccessibilitySettings {
  buttonSize: 'normal' | 'grande' | 'extra-grande'
  touchSensitivity: number // 0-100
  waitTime: number // ms between actions
  visualStimulation: 'bajo' | 'medio' | 'alto'
  highContrast: boolean
  reducedMotion: boolean
}

export type UserRole = 'estudiante' | 'docente' | 'familia'

export interface User {
  id: string
  name: string
  role: UserRole
  avatar?: string
}
