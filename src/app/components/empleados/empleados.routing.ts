import { Routes, RouterModule } from '@angular/router';
import { TablaEmpleadosComponent } from './tabla-empleados/tabla-empleados.component';

const routes: Routes = [
  {
    path: '',
    component: TablaEmpleadosComponent,
   },
];

export const EmpleadosRoutes = RouterModule.forChild(routes);
