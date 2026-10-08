import { Component, inject, signal } from '@angular/core';
import { Estudiante } from '../../Interface/estudiante';
import { form, min, required, email, FormField } from '@angular/forms/signals';
import { PrimerServicioService } from '../../Service/primer-servicio.service';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-aside',
  styleUrl: './aside.css',
  templateUrl: './aside.html',
})
export class Aside {
  private estudianteService = inject(PrimerServicioService);

  listaEstudiantes: Estudiante[] = this.estudianteService.mostrar();

  estudianteModelo = signal<Estudiante>({
    nombre: '',
    email: '',
    telefono: '',
    idioma: '',
    modalidad: '',
    edad: 0,
  });

  estudianteFormulario = form(this.estudianteModelo, (esquema) => {
    required(esquema.nombre, { message: 'El nombre es obligatorio' });
    required(esquema.email, { message: 'El correo electrónico es obligatorio' });
    email(esquema.email, { message: 'El formato de correo no es válido' });
    required(esquema.telefono, { message: 'El teléfono es obligatorio' });
    required(esquema.idioma, { message: 'El idioma es obligatorio' });
    required(esquema.modalidad, { message: 'La modalidad es obligatoria' });
    min(esquema.edad, 14, { message: 'Debes tener como mínimo 14 años' });
  });

  constructor() {
    this.mostrarEstudiantes();
  }

  guardar(evento: Event) {
    evento.preventDefault();
    let estudiante: Estudiante = {
      nombre: this.estudianteModelo().nombre,
      email: this.estudianteModelo().email,
      telefono: this.estudianteModelo().telefono,
      idioma: this.estudianteModelo().idioma,
      modalidad: this.estudianteModelo().modalidad,
      edad: this.estudianteModelo().edad,
    };
    this.estudianteService.guardar(estudiante);
    Swal.fire({
      title: '¡Registro Exitoso!',
      text: '¡El estudiante ha sido registrado correctamente!',
      icon: 'success',
    });
    this.mostrarEstudiantes();
    this.limpiar();
  }

  mostrarEstudiantes() {
    this.listaEstudiantes = this.estudianteService.mostrar();
  }

  limpiar() {
    this.estudianteModelo.set({
      nombre: '',
      email: '',
      telefono: '',
      idioma: '',
      modalidad: '',
      edad: 0,
    });
  }
}
