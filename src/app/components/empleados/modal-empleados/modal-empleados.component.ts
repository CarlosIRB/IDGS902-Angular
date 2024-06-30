import { Component, EventEmitter, Output } from '@angular/core';
import { IEmpleado } from '../../../interfaces/empleados/empleado.interface';
import { EmpleadosService } from '../../../services/empleados/empleados.service';

@Component({
  selector: 'app-modal-empleados',
  templateUrl: './modal-empleados.component.html',
  styleUrl: './modal-empleados.component.css',
})
export class ModalEmpleadosComponent {
  @Output() reload = new EventEmitter<boolean>();
  titulo: string = 'Empleado';
  btnLabel: string = 'Agregar';
  display: boolean = false;
  actualizar: boolean = false;
  opciones: any[] = [
    { nombre: 'Hombre', valor: 'H' },
    { nombre: 'Mujer', valor: 'M' },
  ];

  empleado: IEmpleado = {} as IEmpleado;

  constructor(private empleadosService: EmpleadosService) {}

  show(idEmpleado?: number) {
    if (idEmpleado) {
      this.actualizar = true;
      console.log(idEmpleado);
      this.titulo = 'Editar empleado';
      this.btnLabel = 'Actualizar';
      this.empleado =
        this.empleadosService.getEmpleado(idEmpleado) ?? ({} as IEmpleado);
      console.log(this.empleado);
    } else {
      this.actualizar = false;
      this.titulo = 'Registro';
      this.btnLabel = 'Agregar';
      this.empleado = {} as IEmpleado;
    }
    this.display = true;
  }

  guardar() {
    this.empleadosService.agregarEmpleado(this.empleado);
    this.reload.emit(true);
    this.display = false;
  }

  actualizarEmpleado() {
    this.empleadosService.actualizarEmpleado(this.empleado);
    this.reload.emit(true);
    this.display = false;
  }
}
