import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { EmpleadosRoutes } from './empleados.routing';
import { TablaEmpleadosComponent } from './tabla-empleados/tabla-empleados.component';
import { ModalEmpleadosComponent } from './modal-empleados/modal-empleados.component';
import { BannerComponent } from '../banner/banner.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TablaEmpleadosComponent,
    ModalEmpleadosComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutes,
    TableModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    FormsModule
  ],
  exports: [
    TablaEmpleadosComponent,
    ModalEmpleadosComponent,
    BannerComponent
  ]
})
export class EmpleadosModule { }
