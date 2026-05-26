'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GraduationCap, Users, Home, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { saveUserRole, saveUserName } from '@/lib/storage'
import type { UserRole } from '@/types/aac'

const roles: { id: UserRole; label: string; description: string; icon: React.ReactNode; color: string; route: string }[] = [
  {
    id: 'estudiante',
    label: 'Estudiante',
    description: 'Tablero de comunicación y rutinas',
    icon: <GraduationCap className="h-12 w-12" />,
    color: 'bg-[oklch(0.92_0.05_240)] hover:bg-[oklch(0.88_0.08_240)] border-[oklch(0.58_0.15_240)]',
    route: '/estudiante',
  },
  {
    id: 'docente',
    label: 'Docente',
    description: 'Gestión de pictogramas y estudiantes',
    icon: <Users className="h-12 w-12" />,
    color: 'bg-[oklch(0.92_0.05_145)] hover:bg-[oklch(0.88_0.08_145)] border-[oklch(0.6_0.15_145)]',
    route: '/docente',
  },
  {
    id: 'familia',
    label: 'Familia',
    description: 'Ver progreso y comunicación',
    icon: <Home className="h-12 w-12" />,
    color: 'bg-[oklch(0.94_0.05_350)] hover:bg-[oklch(0.90_0.08_350)] border-[oklch(0.7_0.15_350)]',
    route: '/familia',
  },
]

export default function LoginPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role)
  }

  const handleContinue = async () => {
    if (!selectedRole) return

    setIsLoading(true)
    saveUserRole(selectedRole)
    saveUserName(selectedRole === 'estudiante' ? 'Estudiante' : selectedRole === 'docente' ? 'Docente' : 'Familia')

    const selectedRoleData = roles.find(r => r.id === selectedRole)
    if (selectedRoleData) {
      router.push(selectedRoleData.route)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/30 via-background to-background flex flex-col">
      {/* Header */}
      <header className="pt-8 pb-4 px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
          <MessageCircle className="h-10 w-10 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold text-foreground tracking-tight">
          PictoComunica
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Comunicación aumentativa y alternativa
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-8 max-w-lg mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-center mb-6 text-foreground">
            Selecciona tu perfil
          </h2>

          <div className="space-y-4">
            {roles.map((role) => (
              <Card
                key={role.id}
                className={`cursor-pointer transition-all duration-200 border-2 ${role.color} ${
                  selectedRole === role.id 
                    ? 'ring-4 ring-primary/50 scale-[1.02]' 
                    : ''
                }`}
                onClick={() => handleRoleSelect(role.id)}
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex-shrink-0 text-foreground">
                    {role.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground">
                      {role.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {role.description}
                    </p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selectedRole === role.id 
                      ? 'bg-primary border-primary' 
                      : 'border-muted-foreground/30'
                  }`}>
                    {selectedRole === role.id && (
                      <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <Button
          size="lg"
          className="w-full h-14 text-lg font-semibold touch-target"
          disabled={!selectedRole || isLoading}
          onClick={handleContinue}
        >
          {isLoading ? (
            'Cargando...'
          ) : (
            <>
              Continuar
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        {/* Quick Demo Access */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Selecciona un perfil para comenzar a usar la aplicación
        </p>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>PictoComunica - Educación Accesible</p>
      </footer>
    </div>
  )
}
