import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../Producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

@Input() producto: Producto;
@Input() isCarrito: Boolean;
@Output() add = new EventEmitter();
@Output() showDetail = new EventEmitter();
imagen: String;

  constructor() { }

  ngOnInit() {
    //this.imagen = "assets/Media/w" + this.producto.id + '.jpg';
    this.imagen = "https://picsum.photos/50/50?image=" + this.producto.id;
  }

  addItem() {
    //console.log("Si jala "+ this.producto.nombre);
    this.add.emit(this.producto);
  }

  delItem() {
    this.add.emit(this.producto.id);
  }

  showDetailMethod() {
    this.showDetail.emit(this.producto);
  }

}
