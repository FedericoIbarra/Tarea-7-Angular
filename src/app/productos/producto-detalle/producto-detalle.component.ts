import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../productos.service';
import { Producto } from '../Producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto: Producto;
  imagen: String;

  constructor(private _productosService: ProductosService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.producto = this._productosService.getById();
    this.route.params.subscribe((params) => {
      if(params.id) {
        this.producto = this._productosService.getById(params.id);
        this.imagen = "https://picsum.photos/50/50?image=" + this.producto.id;
      }
    });
  }


}
