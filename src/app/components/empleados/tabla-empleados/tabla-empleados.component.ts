import { Component } from '@angular/core';
import { EmpleadosService } from '../../../services/empleados/empleados.service';
import { IEmpleado } from '../../../interfaces/empleados/empleado.interface';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrl: './tabla-empleados.component.css',
})
export class TablaEmpleadosComponent {
  empleados: IEmpleado[] = [];
  constructor(private empleadosService: EmpleadosService) {
    this.getEmpleados();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.empleados);
  }

  getEmpleados(): IEmpleado[] | void {
    this.empleados = this.empleadosService.getEmpleados();
  }

  eliminarEmpleado(id: number) {
    this.empleadosService.eliminarEmpleado(id);
    this.getEmpleados();
  }
}
