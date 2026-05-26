// localStorage utilities for persisting AAC data

import type { UserRole, AccessibilitySettings, Pictogram } from '@/types/aac'

const STORAGE_KEYS = {
  USER_ROLE: 'aac_user_role',
  USER_NAME: 'aac_user_name',
  ACCESSIBILITY: 'aac_accessibility',
  CUSTOM_PICTOGRAMS: 'aac_custom_pictograms',
  FAVORITE_PICTOGRAMS: 'aac_favorites',
} as const

// User Role
export function saveUserRole(role: UserRole): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.USER_ROLE, role)
  }
}

export function getUserRole(): UserRole | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(STORAGE_KEYS.USER_ROLE) as UserRole | null
}

export function saveUserName(name: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.USER_NAME, name)
  }
}

export function getUserName(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(STORAGE_KEYS.USER_NAME)
}

// Accessibility Settings
export function saveAccessibilitySettings(settings: AccessibilitySettings): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.ACCESSIBILITY, JSON.stringify(settings))
  }
}

export function getAccessibilitySettings(): AccessibilitySettings {
  const defaults: AccessibilitySettings = {
    buttonSize: 'normal',
    touchSensitivity: 50,
    waitTime: 0,
    visualStimulation: 'medio',
    highContrast: false,
    reducedMotion: false,
  }

  if (typeof window === 'undefined') return defaults

  const stored = localStorage.getItem(STORAGE_KEYS.ACCESSIBILITY)
  if (!stored) return defaults

  try {
    return { ...defaults, ...JSON.parse(stored) }
  } catch {
    return defaults
  }
}

// Custom Pictograms
export function saveCustomPictograms(pictograms: Pictogram[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_PICTOGRAMS, JSON.stringify(pictograms))
  }
}

export function getCustomPictograms(): Pictogram[] {
  if (typeof window === 'undefined') return []

  const stored = localStorage.getItem(STORAGE_KEYS.CUSTOM_PICTOGRAMS)
  if (!stored) return []

  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

// Favorites
export function saveFavoritePictograms(ids: string[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.FAVORITE_PICTOGRAMS, JSON.stringify(ids))
  }
}

export function getFavoritePictograms(): string[] {
  if (typeof window === 'undefined') return []

  const stored = localStorage.getItem(STORAGE_KEYS.FAVORITE_PICTOGRAMS)
  if (!stored) return []

  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

// Clear all data
export function clearAllData(): void {
  if (typeof window !== 'undefined') {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key)
    })
  }
}
