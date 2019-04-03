import { Component, OnInit} from '@angular/core';
import { ProductosService } from '../../productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  public productos = [];
  public carrito = [];
  public total = 0;
  public isCarrito: Boolean;
  public title = "Lista de Productos"; //this.router.url;
  public numeroArticulos = 0;

  constructor(private _productosService: ProductosService, private router: Router, private route: ActivatedRoute ) {
      if(this.router.url == '/carrito') {
        this.title = "Carrito de Compra";
        this.isCarrito = true;
      } else {
        this.isCarrito = false;
      }
  }

  ngOnInit() {
    if(!this.isCarrito){
        this.productos = this._productosService.getProductos();
    } else {
      this.productos = this._productosService.getCarrito();
      this.getTotal();
    }

  }

  getTotal() {
    this.total = 0;
    this.productos.forEach(p => {
      this.total += p.precio;
    });
  }

  addProduct(product) {
    //Delete
    if(typeof product === "number"){
      console.log(product);
      //delete this.productos[product];
      this._productosService.deleteItem(product);
      this.getTotal();
    } else {
      this.numeroArticulos ++;
      this.carrito.push(product);
    }

    //console.log(this.carrito);
  }

  addCarrito() {
    this._productosService.pushCarrito(this.carrito);
  }

  showDetailLista(producto){
    this.router.navigate([producto.id], {relativeTo: this.route});
  }


}
