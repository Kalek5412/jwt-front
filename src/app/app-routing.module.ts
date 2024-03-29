import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './producto/lista-producto/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto/nuevo-producto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto/detalle-producto.component';

import { ProdGuardService } from './guards/prod-guard.service';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'lista', component: ListaProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
