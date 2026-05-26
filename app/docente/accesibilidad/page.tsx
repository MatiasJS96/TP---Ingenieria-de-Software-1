'use client'

import { useState } from 'react'
import { AACHeader } from '@/components/layout/aac-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { 
  Hand, 
  Eye, 
  Sparkles,
  Moon,
  Zap,
  Save
} from 'lucide-react'
import { getAccessibilitySettings, saveAccessibilitySettings } from '@/lib/storage'
import type { AccessibilitySettings } from '@/types/aac'

export default function AccesibilidadPage() {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => getAccessibilitySettings())

  const handleSave = () => {
    saveAccessibilitySettings(settings)
    // Show success feedback (in a real app, use a toast)
    alert('Configuración guardada')
  }

  const buttonSizes = [
    { value: 'normal', label: 'Normal', size: '56px' },
    { value: 'grande', label: 'Grande', size: '72px' },
    { value: 'extra-grande', label: 'Extra Grande', size: '96px' },
  ] as const

  const visualLevels = [
    { value: 'bajo', label: 'Bajo', description: 'Colores suaves, sin animaciones' },
    { value: 'medio', label: 'Medio', description: 'Colores normales, animaciones sutiles' },
    { value: 'alto', label: 'Alto', description: 'Colores vivos, animaciones activas' },
  ] as const

  return (
    <div className="min-h-screen bg-background">
      <AACHeader 
        title="Configuración de Accesibilidad" 
        backHref="/docente"
        showSettings={false}
      />

      <main className="p-4 md:p-6 max-w-2xl mx-auto space-y-6">
        {/* Button Size */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Hand className="h-5 w-5" />
              Tamaño de Botones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Ajusta el tamaño de los pictogramas y botones para facilitar la interacción táctil.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {buttonSizes.map((size) => (
                <button
                  key={size.value}
                  onClick={() => setSettings(s => ({ ...s, buttonSize: size.value }))}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    settings.buttonSize === size.value
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div 
                    className="mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center"
                    style={{ width: size.size, height: size.size, maxWidth: '100%', aspectRatio: '1' }}
                  >
                    <span className="text-2xl">A</span>
                  </div>
                  <p className="text-sm font-medium text-center">{size.label}</p>
                  <p className="text-xs text-muted-foreground text-center">{size.size}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Touch Sensitivity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5" />
              Sensibilidad Táctil
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Ajusta qué tan rápido responde la aplicación al toque.
            </p>
            <div className="space-y-4">
              <Slider
                value={[settings.touchSensitivity]}
                onValueChange={([value]) => setSettings(s => ({ ...s, touchSensitivity: value }))}
                min={0}
                max={100}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Menos sensible</span>
                <span className="font-medium text-foreground">{settings.touchSensitivity}%</span>
                <span>Más sensible</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wait Time */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Moon className="h-5 w-5" />
              Tiempo de Espera
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Tiempo mínimo entre acciones consecutivas (previene toques accidentales).
            </p>
            <div className="space-y-4">
              <Slider
                value={[settings.waitTime]}
                onValueChange={([value]) => setSettings(s => ({ ...s, waitTime: value }))}
                min={0}
                max={2000}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Sin espera</span>
                <span className="font-medium text-foreground">{settings.waitTime}ms</span>
                <span>2 segundos</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visual Stimulation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5" />
              Nivel de Estimulación Visual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Controla la intensidad de colores y animaciones.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {visualLevels.map((level) => (
                <button
                  key={level.value}
                  onClick={() => setSettings(s => ({ ...s, visualStimulation: level.value }))}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    settings.visualStimulation === level.value
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <p className="font-medium text-foreground">{level.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{level.description}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Toggle Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Eye className="h-5 w-5" />
              Opciones Adicionales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="high-contrast" className="text-base font-medium">Alto Contraste</Label>
                <p className="text-sm text-muted-foreground">Aumenta el contraste de colores</p>
              </div>
              <Switch
                id="high-contrast"
                checked={settings.highContrast}
                onCheckedChange={(checked) => setSettings(s => ({ ...s, highContrast: checked }))}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="reduced-motion" className="text-base font-medium">Reducir Movimiento</Label>
                <p className="text-sm text-muted-foreground">Desactiva animaciones y transiciones</p>
              </div>
              <Switch
                id="reduced-motion"
                checked={settings.reducedMotion}
                onCheckedChange={(checked) => setSettings(s => ({ ...s, reducedMotion: checked }))}
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button 
          size="lg" 
          className="w-full touch-target"
          onClick={handleSave}
        >
          <Save className="h-5 w-5 mr-2" />
          Guardar Configuración
        </Button>
      </main>
    </div>
  )
}
