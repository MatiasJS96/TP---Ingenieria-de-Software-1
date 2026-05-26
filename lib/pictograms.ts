// Pictogram data and categories for AAC application

import type { Category, Pictogram, Routine } from '@/types/aac'

export const categories: Category[] = [
  {
    id: 'quiero',
    name: 'Quiero',
    icon: 'heart',
    color: '#E53E3E',
    bgColor: '#FED7D7',
  },
  {
    id: 'acciones',
    name: 'Acciones',
    icon: 'hand',
    color: '#3182CE',
    bgColor: '#BEE3F8',
  },
  {
    id: 'comida',
    name: 'Comida',
    icon: 'utensils',
    color: '#DD6B20',
    bgColor: '#FEEBC8',
  },
  {
    id: 'personas',
    name: 'Personas',
    icon: 'users',
    color: '#38A169',
    bgColor: '#C6F6D5',
  },
  {
    id: 'animales',
    name: 'Animales',
    icon: 'cat',
    color: '#D69E2E',
    bgColor: '#FAF089',
  },
  {
    id: 'lugares',
    name: 'Lugares',
    icon: 'home',
    color: '#805AD5',
    bgColor: '#E9D8FD',
  },
  {
    id: 'emociones',
    name: 'Emociones',
    icon: 'smile',
    color: '#D53F8C',
    bgColor: '#FED7E2',
  },
  {
    id: 'objetos',
    name: 'Objetos',
    icon: 'box',
    color: '#319795',
    bgColor: '#B2F5EA',
  },
]

export const pictograms: Pictogram[] = [
  // Quiero (Want)
  { id: 'quiero-1', label: 'Quiero', imageUrl: '/pictograms/quiero.svg', categoryId: 'quiero', audioText: 'Yo quiero' },
  { id: 'quiero-2', label: 'No quiero', imageUrl: '/pictograms/no-quiero.svg', categoryId: 'quiero', audioText: 'No quiero' },
  { id: 'quiero-3', label: 'Dame', imageUrl: '/pictograms/dame.svg', categoryId: 'quiero', audioText: 'Dame' },
  { id: 'quiero-4', label: 'Ayuda', imageUrl: '/pictograms/ayuda.svg', categoryId: 'quiero', audioText: 'Necesito ayuda' },
  { id: 'quiero-5', label: 'Más', imageUrl: '/pictograms/mas.svg', categoryId: 'quiero', audioText: 'Quiero más' },
  { id: 'quiero-6', label: 'Basta', imageUrl: '/pictograms/basta.svg', categoryId: 'quiero', audioText: 'Basta' },

  // Acciones (Actions)
  { id: 'acciones-1', label: 'Comer', imageUrl: '/pictograms/comer.svg', categoryId: 'acciones', audioText: 'Comer' },
  { id: 'acciones-2', label: 'Beber', imageUrl: '/pictograms/beber.svg', categoryId: 'acciones', audioText: 'Beber' },
  { id: 'acciones-3', label: 'Dormir', imageUrl: '/pictograms/dormir.svg', categoryId: 'acciones', audioText: 'Dormir' },
  { id: 'acciones-4', label: 'Jugar', imageUrl: '/pictograms/jugar.svg', categoryId: 'acciones', audioText: 'Jugar' },
  { id: 'acciones-5', label: 'Ir', imageUrl: '/pictograms/ir.svg', categoryId: 'acciones', audioText: 'Ir' },
  { id: 'acciones-6', label: 'Ver', imageUrl: '/pictograms/ver.svg', categoryId: 'acciones', audioText: 'Ver' },
  { id: 'acciones-7', label: 'Escuchar', imageUrl: '/pictograms/escuchar.svg', categoryId: 'acciones', audioText: 'Escuchar' },
  { id: 'acciones-8', label: 'Leer', imageUrl: '/pictograms/leer.svg', categoryId: 'acciones', audioText: 'Leer' },

  // Comida (Food)
  { id: 'comida-1', label: 'Agua', imageUrl: '/pictograms/agua.svg', categoryId: 'comida', audioText: 'Agua' },
  { id: 'comida-2', label: 'Leche', imageUrl: '/pictograms/leche.svg', categoryId: 'comida', audioText: 'Leche' },
  { id: 'comida-3', label: 'Jugo', imageUrl: '/pictograms/jugo.svg', categoryId: 'comida', audioText: 'Jugo' },
  { id: 'comida-4', label: 'Pan', imageUrl: '/pictograms/pan.svg', categoryId: 'comida', audioText: 'Pan' },
  { id: 'comida-5', label: 'Galleta', imageUrl: '/pictograms/galleta.svg', categoryId: 'comida', audioText: 'Galleta' },
  { id: 'comida-6', label: 'Manzana', imageUrl: '/pictograms/manzana.svg', categoryId: 'comida', audioText: 'Manzana' },
  { id: 'comida-7', label: 'Plátano', imageUrl: '/pictograms/platano.svg', categoryId: 'comida', audioText: 'Plátano' },
  { id: 'comida-8', label: 'Hamburguesa', imageUrl: '/pictograms/hamburguesa.svg', categoryId: 'comida', audioText: 'Hamburguesa' },
  { id: 'comida-9', label: 'Helado', imageUrl: '/pictograms/helado.svg', categoryId: 'comida', audioText: 'Helado' },
  { id: 'comida-10', label: 'Pastel', imageUrl: '/pictograms/pastel.svg', categoryId: 'comida', audioText: 'Pastel' },
  { id: 'comida-11', label: 'Sopa', imageUrl: '/pictograms/sopa.svg', categoryId: 'comida', audioText: 'Sopa' },
  { id: 'comida-12', label: 'Chocolate', imageUrl: '/pictograms/chocolate.svg', categoryId: 'comida', audioText: 'Chocolate' },

  // Personas (People)
  { id: 'personas-1', label: 'Yo', imageUrl: '/pictograms/yo.svg', categoryId: 'personas', audioText: 'Yo' },
  { id: 'personas-2', label: 'Mamá', imageUrl: '/pictograms/mama.svg', categoryId: 'personas', audioText: 'Mamá' },
  { id: 'personas-3', label: 'Papá', imageUrl: '/pictograms/papa.svg', categoryId: 'personas', audioText: 'Papá' },
  { id: 'personas-4', label: 'Hermano', imageUrl: '/pictograms/hermano.svg', categoryId: 'personas', audioText: 'Hermano' },
  { id: 'personas-5', label: 'Hermana', imageUrl: '/pictograms/hermana.svg', categoryId: 'personas', audioText: 'Hermana' },
  { id: 'personas-6', label: 'Maestro', imageUrl: '/pictograms/maestro.svg', categoryId: 'personas', audioText: 'Maestro' },
  { id: 'personas-7', label: 'Amigo', imageUrl: '/pictograms/amigo.svg', categoryId: 'personas', audioText: 'Amigo' },
  { id: 'personas-8', label: 'Abuelo', imageUrl: '/pictograms/abuelo.svg', categoryId: 'personas', audioText: 'Abuelo' },

  // Animales (Animals)
  { id: 'animales-1', label: 'Perro', imageUrl: '/pictograms/perro.svg', categoryId: 'animales', audioText: 'Perro' },
  { id: 'animales-2', label: 'Gato', imageUrl: '/pictograms/gato.svg', categoryId: 'animales', audioText: 'Gato' },
  { id: 'animales-3', label: 'Pájaro', imageUrl: '/pictograms/pajaro.svg', categoryId: 'animales', audioText: 'Pájaro' },
  { id: 'animales-4', label: 'Pez', imageUrl: '/pictograms/pez.svg', categoryId: 'animales', audioText: 'Pez' },

  // Lugares (Places)
  { id: 'lugares-1', label: 'Casa', imageUrl: '/pictograms/casa.svg', categoryId: 'lugares', audioText: 'Casa' },
  { id: 'lugares-2', label: 'Escuela', imageUrl: '/pictograms/escuela.svg', categoryId: 'lugares', audioText: 'Escuela' },
  { id: 'lugares-3', label: 'Parque', imageUrl: '/pictograms/parque.svg', categoryId: 'lugares', audioText: 'Parque' },
  { id: 'lugares-4', label: 'Baño', imageUrl: '/pictograms/bano.svg', categoryId: 'lugares', audioText: 'Baño' },

  // Emociones (Emotions)
  { id: 'emociones-1', label: 'Feliz', imageUrl: '/pictograms/feliz.svg', categoryId: 'emociones', audioText: 'Estoy feliz' },
  { id: 'emociones-2', label: 'Triste', imageUrl: '/pictograms/triste.svg', categoryId: 'emociones', audioText: 'Estoy triste' },
  { id: 'emociones-3', label: 'Enojado', imageUrl: '/pictograms/enojado.svg', categoryId: 'emociones', audioText: 'Estoy enojado' },
  { id: 'emociones-4', label: 'Cansado', imageUrl: '/pictograms/cansado.svg', categoryId: 'emociones', audioText: 'Estoy cansado' },
  { id: 'emociones-5', label: 'Asustado', imageUrl: '/pictograms/asustado.svg', categoryId: 'emociones', audioText: 'Tengo miedo' },
  { id: 'emociones-6', label: 'Bien', imageUrl: '/pictograms/bien.svg', categoryId: 'emociones', audioText: 'Estoy bien' },

  // Objetos (Objects)
  { id: 'objetos-1', label: 'Libro', imageUrl: '/pictograms/libro.svg', categoryId: 'objetos', audioText: 'Libro' },
  { id: 'objetos-2', label: 'Pelota', imageUrl: '/pictograms/pelota.svg', categoryId: 'objetos', audioText: 'Pelota' },
  { id: 'objetos-3', label: 'Teléfono', imageUrl: '/pictograms/telefono.svg', categoryId: 'objetos', audioText: 'Teléfono' },
  { id: 'objetos-4', label: 'Televisión', imageUrl: '/pictograms/television.svg', categoryId: 'objetos', audioText: 'Televisión' },
]

export const routines: Routine[] = [
  {
    id: 'manana',
    name: 'Rutina de Mañana',
    icon: 'sun',
    steps: [
      { id: 'm1', label: 'Despertar', imageUrl: '/pictograms/despertar.svg', completed: false, time: '7:00' },
      { id: 'm2', label: 'Ir al baño', imageUrl: '/pictograms/bano.svg', completed: false, time: '7:05' },
      { id: 'm3', label: 'Lavarse la cara', imageUrl: '/pictograms/lavar-cara.svg', completed: false, time: '7:10' },
      { id: 'm4', label: 'Vestirse', imageUrl: '/pictograms/vestirse.svg', completed: false, time: '7:15' },
      { id: 'm5', label: 'Desayunar', imageUrl: '/pictograms/desayunar.svg', completed: false, time: '7:30' },
      { id: 'm6', label: 'Cepillarse los dientes', imageUrl: '/pictograms/cepillar-dientes.svg', completed: false, time: '7:45' },
    ],
  },
  {
    id: 'escuela',
    name: 'Rutina de Escuela',
    icon: 'school',
    steps: [
      { id: 'e1', label: 'Llegar a la escuela', imageUrl: '/pictograms/escuela.svg', completed: false, time: '8:00' },
      { id: 'e2', label: 'Saludar', imageUrl: '/pictograms/saludar.svg', completed: false, time: '8:05' },
      { id: 'e3', label: 'Clase', imageUrl: '/pictograms/clase.svg', completed: false, time: '8:15' },
      { id: 'e4', label: 'Recreo', imageUrl: '/pictograms/recreo.svg', completed: false, time: '10:00' },
      { id: 'e5', label: 'Almuerzo', imageUrl: '/pictograms/almuerzo.svg', completed: false, time: '12:00' },
    ],
  },
  {
    id: 'noche',
    name: 'Rutina de Noche',
    icon: 'moon',
    steps: [
      { id: 'n1', label: 'Cenar', imageUrl: '/pictograms/cenar.svg', completed: false, time: '19:00' },
      { id: 'n2', label: 'Baño', imageUrl: '/pictograms/bano.svg', completed: false, time: '20:00' },
      { id: 'n3', label: 'Ponerse pijama', imageUrl: '/pictograms/pijama.svg', completed: false, time: '20:15' },
      { id: 'n4', label: 'Leer cuento', imageUrl: '/pictograms/leer.svg', completed: false, time: '20:30' },
      { id: 'n5', label: 'Dormir', imageUrl: '/pictograms/dormir.svg', completed: false, time: '21:00' },
    ],
  },
]

export function getPictogramsByCategory(categoryId: string): Pictogram[] {
  return pictograms.filter(p => p.categoryId === categoryId)
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find(c => c.id === categoryId)
}

export function getPictogramById(pictogramId: string): Pictogram | undefined {
  return pictograms.find(p => p.id === pictogramId)
}

export function getRoutineById(routineId: string): Routine | undefined {
  return routines.find(r => r.id === routineId)
}
