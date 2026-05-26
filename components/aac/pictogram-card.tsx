'use client'

import type { Pictogram } from '@/types/aac'
import { cn } from '@/lib/utils'

interface PictogramCardProps {
  pictogram: Pictogram
  selected?: boolean
  size?: 'normal' | 'grande' | 'extra-grande'
  onClick?: () => void
}

const sizeClasses = {
  normal: 'w-24 h-28 md:w-28 md:h-32',
  grande: 'w-28 h-32 md:w-32 md:h-36',
  'extra-grande': 'w-32 h-36 md:w-40 md:h-44',
}

const imageSizeClasses = {
  normal: 'w-14 h-14 md:w-16 md:h-16',
  grande: 'w-16 h-16 md:w-20 md:h-20',
  'extra-grande': 'w-20 h-20 md:w-24 md:h-24',
}

const textSizeClasses = {
  normal: 'text-xs md:text-sm',
  grande: 'text-sm md:text-base',
  'extra-grande': 'text-base md:text-lg',
}

export function PictogramCard({ pictogram, selected, size = 'normal', onClick }: PictogramCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'pictogram-card flex flex-col items-center justify-center gap-2 p-2 touch-target',
        sizeClasses[size],
        selected && 'selected'
      )}
      aria-label={pictogram.label}
      aria-pressed={selected}
    >
      <div 
        className={cn(
          'flex items-center justify-center bg-muted rounded-xl',
          imageSizeClasses[size]
        )}
      >
        {/* Placeholder SVG icon - in production would use actual pictogram images */}
        <PictogramIcon label={pictogram.label} />
      </div>
      <span className={cn('font-medium text-foreground text-center leading-tight', textSizeClasses[size])}>
        {pictogram.label}
      </span>
    </button>
  )
}

// Simple icon representations for pictograms
function PictogramIcon({ label }: { label: string }) {
  const iconMap: Record<string, JSX.Element> = {
    'Quiero': <WantIcon />,
    'No quiero': <NoWantIcon />,
    'Dame': <GiveIcon />,
    'Ayuda': <HelpIcon />,
    'Más': <MoreIcon />,
    'Basta': <StopIcon />,
    'Comer': <EatIcon />,
    'Beber': <DrinkIcon />,
    'Dormir': <SleepIcon />,
    'Jugar': <PlayIcon />,
    'Ir': <GoIcon />,
    'Ver': <SeeIcon />,
    'Escuchar': <ListenIcon />,
    'Leer': <ReadIcon />,
    'Agua': <WaterIcon />,
    'Leche': <MilkIcon />,
    'Jugo': <JuiceIcon />,
    'Pan': <BreadIcon />,
    'Galleta': <CookieIcon />,
    'Manzana': <AppleIcon />,
    'Plátano': <BananaIcon />,
    'Hamburguesa': <BurgerIcon />,
    'Helado': <IceCreamIcon />,
    'Pastel': <CakeIcon />,
    'Sopa': <SoupIcon />,
    'Chocolate': <ChocolateIcon />,
    'Yo': <MeIcon />,
    'Mamá': <MomIcon />,
    'Papá': <DadIcon />,
    'Hermano': <BrotherIcon />,
    'Hermana': <SisterIcon />,
    'Maestro': <TeacherIcon />,
    'Amigo': <FriendIcon />,
    'Abuelo': <GrandpaIcon />,
    'Perro': <DogIcon />,
    'Gato': <CatIcon />,
    'Pájaro': <BirdIcon />,
    'Pez': <FishIcon />,
    'Casa': <HouseIcon />,
    'Escuela': <SchoolIcon />,
    'Parque': <ParkIcon />,
    'Baño': <BathroomIcon />,
    'Feliz': <HappyIcon />,
    'Triste': <SadIcon />,
    'Enojado': <AngryIcon />,
    'Cansado': <TiredIcon />,
    'Asustado': <ScaredIcon />,
    'Bien': <OkIcon />,
    'Libro': <BookIcon />,
    'Pelota': <BallIcon />,
    'Teléfono': <PhoneIcon />,
    'Televisión': <TVIcon />,
  }

  return iconMap[label] || <DefaultIcon />
}

// Simple SVG icons for pictograms
const DefaultIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-2">
    <circle cx="24" cy="24" r="18" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2"/>
    <text x="24" y="28" textAnchor="middle" fontSize="14" fill="#64748B">?</text>
  </svg>
)

const WantIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="16" r="10" fill="#FECACA"/>
    <path d="M14 36c0-6 4-10 10-10s10 4 10 10" fill="#93C5FD"/>
    <circle cx="20" cy="14" r="2" fill="#1E293B"/>
    <circle cx="28" cy="14" r="2" fill="#1E293B"/>
    <path d="M20 20c2 2 6 2 8 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <path d="M34 28l8-4" stroke="#F87171" strokeWidth="3"/>
    <path d="M38 24l4 8" stroke="#F87171" strokeWidth="3"/>
  </svg>
)

const NoWantIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="16" r="10" fill="#FECACA"/>
    <path d="M14 36c0-6 4-10 10-10s10 4 10 10" fill="#93C5FD"/>
    <circle cx="20" cy="14" r="2" fill="#1E293B"/>
    <circle cx="28" cy="14" r="2" fill="#1E293B"/>
    <path d="M20 22c2-2 6-2 8 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <line x1="32" y1="24" x2="44" y2="36" stroke="#EF4444" strokeWidth="4"/>
  </svg>
)

const GiveIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="20" cy="30" rx="12" ry="8" fill="#93C5FD"/>
    <path d="M32 22c4-2 8 0 8 4s-4 6-8 4" fill="#FECACA"/>
    <circle cx="38" cy="26" r="1" fill="#1E293B"/>
  </svg>
)

const HelpIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="16" fill="#FDE68A" stroke="#F59E0B" strokeWidth="2"/>
    <text x="24" y="30" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#92400E">?</text>
  </svg>
)

const MoreIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="20" y="8" width="8" height="32" rx="2" fill="#10B981"/>
    <rect x="8" y="20" width="32" height="8" rx="2" fill="#10B981"/>
  </svg>
)

const StopIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="8" y="8" width="32" height="32" rx="4" fill="#EF4444"/>
    <path d="M16 24h16" stroke="white" strokeWidth="4" strokeLinecap="round"/>
  </svg>
)

const EatIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="20" cy="16" r="8" fill="#FECACA"/>
    <ellipse cx="28" cy="32" rx="12" ry="6" fill="#FDE68A"/>
    <path d="M20 24l8 8" stroke="#1E293B" strokeWidth="2"/>
  </svg>
)

const DrinkIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <path d="M16 8h16l-2 32h-12z" fill="#93C5FD" stroke="#3B82F6" strokeWidth="2"/>
    <ellipse cx="24" cy="10" rx="8" ry="3" fill="#BFDBFE"/>
  </svg>
)

const SleepIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="24" cy="32" rx="16" ry="8" fill="#E0E7FF"/>
    <circle cx="24" cy="24" r="10" fill="#FECACA"/>
    <path d="M20 24c1-1 2-1 3 0" stroke="#1E293B" strokeWidth="2"/>
    <path d="M25 24c1-1 2-1 3 0" stroke="#1E293B" strokeWidth="2"/>
    <text x="38" y="16" fontSize="12" fill="#6366F1">Z</text>
    <text x="42" y="10" fontSize="10" fill="#6366F1">z</text>
  </svg>
)

const PlayIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="16" fill="#FDE68A"/>
    <circle cx="24" cy="24" r="6" fill="#F97316"/>
  </svg>
)

const GoIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <path d="M8 36h32" stroke="#94A3B8" strokeWidth="4"/>
    <path d="M16 36l8-20l8 20" fill="#93C5FD"/>
    <circle cx="24" cy="12" r="6" fill="#FECACA"/>
    <path d="M32 24l8 4l-8 4" fill="#10B981"/>
  </svg>
)

const SeeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="24" cy="24" rx="18" ry="10" fill="white" stroke="#1E293B" strokeWidth="2"/>
    <circle cx="24" cy="24" r="6" fill="#3B82F6"/>
    <circle cx="26" cy="22" r="2" fill="white"/>
  </svg>
)

const ListenIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="18" cy="28" rx="8" ry="12" fill="#FECACA"/>
    <path d="M26 20c6 0 10 4 10 8s-4 8-10 8" fill="none" stroke="#10B981" strokeWidth="3"/>
    <path d="M30 24c3 0 5 2 5 4s-2 4-5 4" fill="none" stroke="#10B981" strokeWidth="2"/>
  </svg>
)

const ReadIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="8" y="12" width="32" height="24" rx="2" fill="#FDE68A" stroke="#F59E0B" strokeWidth="2"/>
    <path d="M12 18h24M12 24h24M12 30h16" stroke="#92400E" strokeWidth="2"/>
  </svg>
)

const WaterIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <path d="M24 8c-8 12-12 18-12 24a12 12 0 0024 0c0-6-4-12-12-24z" fill="#60A5FA"/>
    <ellipse cx="20" cy="28" rx="4" ry="6" fill="#93C5FD"/>
  </svg>
)

const MilkIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <path d="M16 12h16v28c0 2-2 4-4 4h-8c-2 0-4-2-4-4z" fill="white" stroke="#94A3B8" strokeWidth="2"/>
    <rect x="14" y="8" width="20" height="6" rx="1" fill="#3B82F6"/>
  </svg>
)

const JuiceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <path d="M16 16h16l-2 24h-12z" fill="#FB923C"/>
    <rect x="14" y="10" width="20" height="8" rx="2" fill="#FDBA74"/>
    <circle cx="32" cy="12" r="6" fill="#22C55E"/>
  </svg>
)

const BreadIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="24" cy="28" rx="16" ry="12" fill="#FDE68A"/>
    <ellipse cx="24" cy="24" rx="14" ry="8" fill="#FCD34D"/>
  </svg>
)

const CookieIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="16" fill="#D97706"/>
    <circle cx="18" cy="20" r="3" fill="#78350F"/>
    <circle cx="28" cy="18" r="2" fill="#78350F"/>
    <circle cx="24" cy="28" r="3" fill="#78350F"/>
    <circle cx="32" cy="26" r="2" fill="#78350F"/>
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="28" r="14" fill="#EF4444"/>
    <path d="M24 14v6" stroke="#65A30D" strokeWidth="3"/>
    <ellipse cx="28" cy="12" rx="4" ry="2" fill="#22C55E"/>
  </svg>
)

const BananaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <path d="M12 36c0-16 8-28 24-28c-4 8-8 20-8 28z" fill="#FDE047"/>
    <path d="M12 36c0-16 8-28 24-28" stroke="#CA8A04" strokeWidth="2" fill="none"/>
  </svg>
)

const BurgerIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="24" cy="12" rx="16" ry="6" fill="#FDE68A"/>
    <rect x="8" y="18" width="32" height="6" fill="#22C55E"/>
    <rect x="8" y="24" width="32" height="8" fill="#92400E"/>
    <ellipse cx="24" cy="36" rx="16" ry="6" fill="#FDE68A"/>
  </svg>
)

const IceCreamIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <path d="M16 24l8 20l8-20" fill="#FDE68A"/>
    <circle cx="24" cy="20" r="12" fill="#FBCFE8"/>
    <circle cx="20" cy="16" r="3" fill="#F472B6"/>
  </svg>
)

const CakeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="8" y="24" width="32" height="16" rx="2" fill="#FDE68A"/>
    <rect x="8" y="28" width="32" height="4" fill="#F472B6"/>
    <rect x="22" y="12" width="4" height="12" fill="#EF4444"/>
    <ellipse cx="24" cy="10" rx="3" ry="4" fill="#FDE047"/>
  </svg>
)

const SoupIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="24" cy="32" rx="16" ry="8" fill="#F97316"/>
    <path d="M8 32c0-8 8-16 16-16s16 8 16 16" fill="#FDBA74"/>
    <path d="M16 24c2-4 4-4 6 0M26 24c2-4 4-4 6 0" stroke="#94A3B8" strokeWidth="2" fill="none"/>
  </svg>
)

const ChocolateIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="8" y="12" width="32" height="24" rx="2" fill="#78350F"/>
    <path d="M8 20h32M8 28h32M16 12v24M24 12v24M32 12v24" stroke="#92400E" strokeWidth="2"/>
  </svg>
)

const MeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="16" r="10" fill="#FECACA"/>
    <path d="M14 40c0-8 4-14 10-14s10 6 10 14" fill="#3B82F6"/>
    <circle cx="20" cy="14" r="2" fill="#1E293B"/>
    <circle cx="28" cy="14" r="2" fill="#1E293B"/>
    <path d="M20 20c2 2 6 2 8 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <path d="M24 26l-6 8" stroke="#FECACA" strokeWidth="3"/>
  </svg>
)

const MomIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="14" r="10" fill="#FECACA"/>
    <path d="M14 40c0-8 4-14 10-14s10 6 10 14" fill="#EC4899"/>
    <circle cx="20" cy="12" r="2" fill="#1E293B"/>
    <circle cx="28" cy="12" r="2" fill="#1E293B"/>
    <path d="M20 18c2 2 6 2 8 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <path d="M14 8c0-4 4-6 10-6s10 2 10 6" fill="#1E293B"/>
  </svg>
)

const DadIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="14" r="10" fill="#FECACA"/>
    <path d="M14 40c0-8 4-14 10-14s10 6 10 14" fill="#3B82F6"/>
    <circle cx="20" cy="12" r="2" fill="#1E293B"/>
    <circle cx="28" cy="12" r="2" fill="#1E293B"/>
    <path d="M20 18c2 2 6 2 8 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <rect x="14" y="4" width="20" height="6" rx="2" fill="#1E293B"/>
  </svg>
)

const BrotherIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="16" r="8" fill="#FECACA"/>
    <path d="M16 40c0-6 4-12 8-12s8 6 8 12" fill="#10B981"/>
    <circle cx="21" cy="15" r="1.5" fill="#1E293B"/>
    <circle cx="27" cy="15" r="1.5" fill="#1E293B"/>
    <path d="M21 19c1.5 1.5 4.5 1.5 6 0" stroke="#1E293B" strokeWidth="1.5" fill="none"/>
  </svg>
)

const SisterIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="16" r="8" fill="#FECACA"/>
    <path d="M16 40c0-6 4-12 8-12s8 6 8 12" fill="#F472B6"/>
    <circle cx="21" cy="15" r="1.5" fill="#1E293B"/>
    <circle cx="27" cy="15" r="1.5" fill="#1E293B"/>
    <path d="M21 19c1.5 1.5 4.5 1.5 6 0" stroke="#1E293B" strokeWidth="1.5" fill="none"/>
    <path d="M16 12c-2-6 4-10 8-10s10 4 8 10" fill="#1E293B"/>
  </svg>
)

const TeacherIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="14" r="10" fill="#FECACA"/>
    <path d="M14 40c0-8 4-14 10-14s10 6 10 14" fill="#6366F1"/>
    <circle cx="20" cy="12" r="2" fill="#1E293B"/>
    <circle cx="28" cy="12" r="2" fill="#1E293B"/>
    <rect x="16" y="10" width="16" height="4" rx="1" fill="#93C5FD" opacity="0.5"/>
    <path d="M20 18c2 2 6 2 8 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
  </svg>
)

const FriendIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="18" cy="18" r="8" fill="#FECACA"/>
    <circle cx="30" cy="18" r="8" fill="#FECACA"/>
    <path d="M10 40c0-6 4-10 8-10" fill="#3B82F6"/>
    <path d="M38 40c0-6-4-10-8-10" fill="#10B981"/>
    <path d="M18 30c2 0 4 2 6 2s4-2 6-2c0 4-4 8-6 8s-6-4-6-8" fill="#FDE68A"/>
  </svg>
)

const GrandpaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="14" r="10" fill="#FECACA"/>
    <path d="M14 40c0-8 4-14 10-14s10 6 10 14" fill="#6B7280"/>
    <circle cx="20" cy="12" r="2" fill="#1E293B"/>
    <circle cx="28" cy="12" r="2" fill="#1E293B"/>
    <path d="M20 18c2 2 6 2 8 0" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <path d="M14 6c4-2 16-2 20 0" stroke="#9CA3AF" strokeWidth="3" fill="none"/>
  </svg>
)

const DogIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="24" cy="28" rx="14" ry="10" fill="#D97706"/>
    <circle cx="24" cy="18" r="10" fill="#FDE68A"/>
    <circle cx="20" cy="16" r="2" fill="#1E293B"/>
    <circle cx="28" cy="16" r="2" fill="#1E293B"/>
    <ellipse cx="24" cy="22" rx="3" ry="2" fill="#1E293B"/>
    <path d="M12 12l-4-8" stroke="#D97706" strokeWidth="4"/>
    <path d="M36 12l4-8" stroke="#D97706" strokeWidth="4"/>
  </svg>
)

const CatIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="24" cy="30" rx="12" ry="10" fill="#9CA3AF"/>
    <circle cx="24" cy="20" r="10" fill="#D1D5DB"/>
    <path d="M14 14l-2-10 8 6" fill="#D1D5DB"/>
    <path d="M34 14l2-10-8 6" fill="#D1D5DB"/>
    <ellipse cx="20" cy="18" rx="2" ry="3" fill="#22C55E"/>
    <ellipse cx="28" cy="18" rx="2" ry="3" fill="#22C55E"/>
    <circle cx="20" cy="18" r="1" fill="#1E293B"/>
    <circle cx="28" cy="18" r="1" fill="#1E293B"/>
    <ellipse cx="24" cy="24" rx="2" ry="1.5" fill="#F472B6"/>
  </svg>
)

const BirdIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="24" cy="24" rx="12" ry="10" fill="#FDE047"/>
    <circle cx="28" cy="20" r="8" fill="#FDE68A"/>
    <circle cx="30" cy="18" r="2" fill="#1E293B"/>
    <path d="M36 20l8-2-8 6" fill="#F97316"/>
    <path d="M12 28c-4 4-4 8 0 8" stroke="#D97706" strokeWidth="2" fill="none"/>
  </svg>
)

const FishIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <ellipse cx="24" cy="24" rx="16" ry="10" fill="#60A5FA"/>
    <path d="M40 24l8-8v16z" fill="#3B82F6"/>
    <circle cx="16" cy="22" r="3" fill="white"/>
    <circle cx="17" cy="22" r="1.5" fill="#1E293B"/>
  </svg>
)

const HouseIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <path d="M24 8l-16 14h6v16h20v-16h6z" fill="#FDE68A"/>
    <path d="M24 8l-16 14h32z" fill="#EF4444"/>
    <rect x="20" y="28" width="8" height="10" fill="#92400E"/>
  </svg>
)

const SchoolIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="8" y="20" width="32" height="20" fill="#FDE68A"/>
    <path d="M24 8l-12 12h24z" fill="#EF4444"/>
    <rect x="12" y="24" width="6" height="6" fill="#93C5FD"/>
    <rect x="30" y="24" width="6" height="6" fill="#93C5FD"/>
    <rect x="20" y="30" width="8" height="10" fill="#92400E"/>
  </svg>
)

const ParkIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="0" y="36" width="48" height="8" fill="#22C55E"/>
    <circle cx="16" cy="20" r="12" fill="#16A34A"/>
    <rect x="14" y="28" width="4" height="12" fill="#92400E"/>
    <circle cx="36" cy="24" r="8" fill="#16A34A"/>
    <rect x="34" y="30" width="4" height="10" fill="#92400E"/>
  </svg>
)

const BathroomIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="12" y="8" width="24" height="32" rx="4" fill="white" stroke="#94A3B8" strokeWidth="2"/>
    <ellipse cx="24" cy="28" rx="8" ry="6" fill="#93C5FD"/>
    <rect x="20" y="12" width="8" height="4" rx="1" fill="#94A3B8"/>
  </svg>
)

const HappyIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="18" fill="#FDE047"/>
    <circle cx="18" cy="20" r="3" fill="#1E293B"/>
    <circle cx="30" cy="20" r="3" fill="#1E293B"/>
    <path d="M14 28c4 6 16 6 20 0" stroke="#1E293B" strokeWidth="3" fill="none"/>
  </svg>
)

const SadIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="18" fill="#93C5FD"/>
    <circle cx="18" cy="20" r="3" fill="#1E293B"/>
    <circle cx="30" cy="20" r="3" fill="#1E293B"/>
    <path d="M14 34c4-6 16-6 20 0" stroke="#1E293B" strokeWidth="3" fill="none"/>
    <path d="M16 22l-2 6" stroke="#60A5FA" strokeWidth="2"/>
  </svg>
)

const AngryIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="18" fill="#FCA5A5"/>
    <circle cx="18" cy="22" r="3" fill="#1E293B"/>
    <circle cx="30" cy="22" r="3" fill="#1E293B"/>
    <path d="M14 16l8 4" stroke="#1E293B" strokeWidth="2"/>
    <path d="M34 16l-8 4" stroke="#1E293B" strokeWidth="2"/>
    <path d="M16 34c4-4 12-4 16 0" stroke="#1E293B" strokeWidth="3" fill="none"/>
  </svg>
)

const TiredIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="18" fill="#E0E7FF"/>
    <path d="M14 20c2-1 4-1 6 0" stroke="#1E293B" strokeWidth="2"/>
    <path d="M28 20c2-1 4-1 6 0" stroke="#1E293B" strokeWidth="2"/>
    <ellipse cx="24" cy="32" rx="4" ry="3" fill="#1E293B"/>
  </svg>
)

const ScaredIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="18" fill="#DDD6FE"/>
    <circle cx="18" cy="20" r="4" fill="white"/>
    <circle cx="30" cy="20" r="4" fill="white"/>
    <circle cx="18" cy="20" r="2" fill="#1E293B"/>
    <circle cx="30" cy="20" r="2" fill="#1E293B"/>
    <ellipse cx="24" cy="34" rx="4" ry="5" fill="#1E293B"/>
  </svg>
)

const OkIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="18" fill="#BBF7D0"/>
    <circle cx="18" cy="20" r="3" fill="#1E293B"/>
    <circle cx="30" cy="20" r="3" fill="#1E293B"/>
    <path d="M18 30c3 3 9 3 12 0" stroke="#1E293B" strokeWidth="3" fill="none"/>
  </svg>
)

const BookIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="8" y="8" width="32" height="32" rx="2" fill="#3B82F6"/>
    <rect x="12" y="12" width="24" height="24" fill="white"/>
    <path d="M16 18h16M16 24h16M16 30h10" stroke="#94A3B8" strokeWidth="2"/>
  </svg>
)

const BallIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <circle cx="24" cy="24" r="16" fill="#EF4444"/>
    <path d="M12 18c8 4 16 4 24 0" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M12 30c8-4 16-4 24 0" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="12" y="4" width="24" height="40" rx="4" fill="#1E293B"/>
    <rect x="14" y="8" width="20" height="28" rx="1" fill="#93C5FD"/>
    <circle cx="24" cy="40" r="2" fill="#4B5563"/>
  </svg>
)

const TVIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full p-1">
    <rect x="4" y="8" width="40" height="28" rx="2" fill="#1E293B"/>
    <rect x="8" y="12" width="32" height="20" fill="#93C5FD"/>
    <rect x="16" y="38" width="16" height="4" fill="#4B5563"/>
  </svg>
)
