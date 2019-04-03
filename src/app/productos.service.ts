import { Injectable } from '@angular/core';
import { Producto } from './productos/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [
    {
      id: 0,
      nombre: "Royal Oak",
      marca: "Audemars Piguet",
      categoria: "Sport",
      precio: 5000,
      existencia: 3
    },
    {
      id: 1,
      nombre: "Black Bay",
      marca: "Tudor",
      categoria: "Diver",
      precio: 250,
      existencia: 12
    },
    {
      id: 2,
      nombre: "Nautilus",
      marca: "Patek Phillipe",
      categoria: "Sport",
      precio: 5100,
      existencia: 3
    },
    {
      id: 3,
      nombre: "WR",
      marca: "Casio",
      categoria: "Sport",
      precio: 10,
      existencia: 25
    },
    {
      id: 4,
      nombre: "Speedmaster",
      marca: "Omega",
      categoria: "Chronograph",
      precio: 350,
      existencia: 1
    },
    {
      id: 5,
      nombre: "Bib Pilot",
      marca: "IWC",
      categoria: "Flieger",
      precio: 1200,
      existencia: 2
    }
  ];

  carrito = [];


  constructor() { }

  getProductos() {
    return this.productos;
  }

  getCarrito() {
    return this.carrito;
  }


  pushCarrito(p) {
    p.forEach(prod => {
      if (!this.carrito.includes(prod))
        this.carrito.push(prod)
    });
    //this.carrito = p;
  }

  deleteItem(id){
    const pos = this.carrito.findIndex(producto => producto.id === id);

    if(pos >= 0){
      this.carrito.splice(pos,1);
    //  this.notificarCambios();
      return true;
    }

    delete this.productos[id];
  }

  getById(id){
    return this.productos[id];
  }

}
