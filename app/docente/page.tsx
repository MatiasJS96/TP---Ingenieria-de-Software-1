'use client'

import Link from 'next/link'
import { AACHeader } from '@/components/layout/aac-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Image, 
  FolderOpen, 
  Users, 
  Settings2, 
  TrendingUp,
  Clock,
  BookOpen
} from 'lucide-react'
import { categories, pictograms } from '@/lib/pictograms'

// Mock student data
const students = [
  { id: '1', name: 'María García', lastActivity: 'Hace 5 min', pictogramsToday: 24 },
  { id: '2', name: 'Carlos López', lastActivity: 'Hace 15 min', pictogramsToday: 18 },
  { id: '3', name: 'Ana Martínez', lastActivity: 'Hace 1 hora', pictogramsToday: 32 },
]

const quickActions = [
  { 
    label: 'Pictogramas', 
    description: 'Gestionar biblioteca', 
    icon: Image, 
    href: '/docente/pictogramas',
    color: 'bg-[oklch(0.92_0.05_240)]',
    iconColor: 'text-[oklch(0.58_0.15_240)]'
  },
  { 
    label: 'Carpetas', 
    description: 'Organizar categorías', 
    icon: FolderOpen, 
    href: '/docente/carpetas',
    color: 'bg-[oklch(0.94_0.05_50)]',
    iconColor: 'text-[oklch(0.65_0.18_50)]'
  },
  { 
    label: 'Estudiantes', 
    description: 'Ver progreso', 
    icon: Users, 
    href: '/docente/estudiantes',
    color: 'bg-[oklch(0.92_0.05_145)]',
    iconColor: 'text-[oklch(0.6_0.15_145)]'
  },
  { 
    label: 'Accesibilidad', 
    description: 'Configurar opciones', 
    icon: Settings2, 
    href: '/docente/accesibilidad',
    color: 'bg-[oklch(0.92_0.05_290)]',
    iconColor: 'text-[oklch(0.55_0.15_290)]'
  },
]

export default function DocentePage() {
  return (
    <div className="min-h-screen bg-background">
      <AACHeader 
        title="Panel Docente" 
        backHref="/login"
        showSettings={true}
      />

      <main className="p-4 md:p-6 max-w-6xl mx-auto space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{pictograms.length}</p>
                  <p className="text-xs text-muted-foreground">Pictogramas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[oklch(0.92_0.05_145)]">
                  <FolderOpen className="h-5 w-5 text-[oklch(0.6_0.15_145)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{categories.length}</p>
                  <p className="text-xs text-muted-foreground">Categorías</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[oklch(0.92_0.05_240)]">
                  <Users className="h-5 w-5 text-[oklch(0.58_0.15_240)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{students.length}</p>
                  <p className="text-xs text-muted-foreground">Estudiantes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[oklch(0.94_0.05_50)]">
                  <TrendingUp className="h-5 w-5 text-[oklch(0.65_0.18_50)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">74</p>
                  <p className="text-xs text-muted-foreground">Usos hoy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {quickActions.map((action) => (
              <Link key={action.label} href={action.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className={`p-3 rounded-xl ${action.color} mb-3`}>
                      <action.icon className={`h-6 w-6 ${action.iconColor}`} />
                    </div>
                    <h3 className="font-medium text-foreground">{action.label}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Student Activity */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5" />
              Actividad de Estudiantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {students.map((student) => (
              <div 
                key={student.id}
                className="flex items-center justify-between p-3 rounded-xl bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-medium text-primary-foreground">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{student.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {student.lastActivity}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">{student.pictogramsToday}</p>
                  <p className="text-xs text-muted-foreground">pictogramas</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Preview Student View Button */}
        <div className="flex justify-center pt-4">
          <Button asChild size="lg" className="touch-target">
            <Link href="/estudiante">
              Ver como Estudiante
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
