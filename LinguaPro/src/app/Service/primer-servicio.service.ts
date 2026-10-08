import { Service } from '@angular/core';
import { Estudiante } from '../Interface/estudiante';

@Service()
export class PrimerServicioService {
  private listaEstudiantes: Estudiante[] = [
    {
      nombre: 'Luciana Mendoza Ríos',
      email: 'luciana.mendoza@email.com',
      telefono: '984512345',
      idioma: 'Inglés Avanzado (C1)',
      modalidad: 'Intensivo',
      edad: 22,
    },
    {
      nombre: 'Carlos Eduardo Benítez',
      email: 'carlos.benitez@email.com',
      telefono: '971234890',
      idioma: 'Alemán Inicial (A1)',
      modalidad: 'Regular',
      edad: 26,
    },
    {
      nombre: 'Mariana Silva Torres',
      email: 'mariana.silva@email.com',
      telefono: '992345678',
      idioma: 'Francés Intermedio (B1)',
      modalidad: 'Preparación DELF',
      edad: 24,
    },
  ];

  guardar(estudiante: Estudiante): void {
    this.listaEstudiantes.push(estudiante);
  }

  mostrar(): Estudiante[] {
    return this.listaEstudiantes;
  }
}
