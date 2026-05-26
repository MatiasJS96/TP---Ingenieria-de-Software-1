'use client'

import Link from 'next/link'
import { AACHeader } from '@/components/layout/aac-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  MessageCircle, 
  Calendar, 
  TrendingUp,
  Clock,
  Heart,
  Utensils,
  Smile,
  BarChart3
} from 'lucide-react'
import { categories, pictograms } from '@/lib/pictograms'

// Mock data for child activity
const childData = {
  name: 'María',
  pictogramsToday: 42,
  pictogramsWeek: 156,
  topCategories: [
    { name: 'Comida', count: 18, icon: Utensils, color: '#DD6B20' },
    { name: 'Emociones', count: 12, icon: Smile, color: '#D53F8C' },
    { name: 'Quiero', count: 8, icon: Heart, color: '#E53E3E' },
  ],
  recentPhrases: [
    { phrase: 'Quiero agua', time: 'Hace 10 min' },
    { phrase: 'Estoy feliz', time: 'Hace 25 min' },
    { phrase: 'Quiero jugar', time: 'Hace 1 hora' },
    { phrase: 'Mamá, dame galleta', time: 'Hace 2 horas' },
  ],
  routineProgress: {
    morning: 100,
    school: 80,
    evening: 0,
  },
}

export default function FamiliaPage() {
  return (
    <div className="min-h-screen bg-background">
      <AACHeader 
        title="Panel Familiar" 
        backHref="/login"
        showSettings={true}
      />

      <main className="p-4 md:p-6 max-w-4xl mx-auto space-y-6">
        {/* Child Overview */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-primary/30 to-primary/10 p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-foreground">
                  {childData.name.charAt(0)}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Hola, familia de {childData.name}
                </h2>
                <p className="text-muted-foreground">
                  Aquí puedes ver la actividad y progreso
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{childData.pictogramsToday}</p>
                  <p className="text-xs text-muted-foreground">Pictogramas hoy</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[oklch(0.92_0.05_145)]">
                  <TrendingUp className="h-5 w-5 text-[oklch(0.6_0.15_145)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{childData.pictogramsWeek}</p>
                  <p className="text-xs text-muted-foreground">Esta semana</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Categories */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Categorías más usadas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {childData.topCategories.map((category, index) => (
              <div key={category.name} className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon className="h-5 w-5" style={{ color: category.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-foreground">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.count} usos</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${(category.count / childData.pictogramsToday) * 100}%`,
                        backgroundColor: category.color 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Phrases */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Frases recientes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {childData.recentPhrases.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 rounded-xl bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">{item.phrase}</span>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.time}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Routine Progress */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Progreso de rutinas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Rutina de Mañana</span>
                <span className="text-sm text-muted-foreground">{childData.routineProgress.morning}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[oklch(0.82_0.15_85)] rounded-full transition-all"
                  style={{ width: `${childData.routineProgress.morning}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Rutina de Escuela</span>
                <span className="text-sm text-muted-foreground">{childData.routineProgress.school}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[oklch(0.58_0.15_240)] rounded-full transition-all"
                  style={{ width: `${childData.routineProgress.school}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Rutina de Noche</span>
                <span className="text-sm text-muted-foreground">{childData.routineProgress.evening}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[oklch(0.55_0.15_290)] rounded-full transition-all"
                  style={{ width: `${childData.routineProgress.evening}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button asChild size="lg" className="h-14 touch-target">
            <Link href="/estudiante">
              Ver Tablero
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 touch-target">
            <Link href="/estudiante/rutinas">
              Ver Rutinas
            </Link>
          </Button>
        </div>

        {/* Info */}
        <p className="text-center text-sm text-muted-foreground">
          Los datos se actualizan automáticamente mientras {childData.name} usa la aplicación
        </p>
      </main>
    </div>
  )
}
