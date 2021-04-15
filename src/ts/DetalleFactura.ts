import {Articulo} from "./Articulo.js";

export class DetalleFactura{

    cantidad : Number;
    subtotal : Number;

    articulo : Articulo;

    constructor(cantidad : Number, articulo : Articulo){
        this.cantidad = cantidad;
        this.articulo = articulo
        this.subtotal = 0;
    }

    calcularSubTotal() : Number{
        return this.subtotal = Number(this.cantidad) * Number(this.articulo.precio);
    }
    
}