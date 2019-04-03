import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './productos/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'productos', component: ProductosComponent  },
  { path: 'carrito', component: ProductosComponent  },
  { path: 'productos/:id', component: ProductoDetalleComponent  },
  { path: 'carrito/:id', component: ProductoDetalleComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
