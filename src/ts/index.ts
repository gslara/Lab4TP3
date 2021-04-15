import { Articulo } from "./Articulo.js";
import { Cliente } from "./Cliente.js";
import { DetalleFactura } from "./DetalleFactura.js";
import { Factura, Pago } from "./Factura.js";

export class TestB{
    
    cliente : Cliente;
    articulos : Array<Articulo>;

    inicializarCliente(){
        this.cliente = new Cliente(BigInt(1),"Argentina S.A",BigInt(112321233102));
    }

    inicializarArticulos(){
        this.articulos = new Array<Articulo>(
            new Articulo(BigInt(1),"Marlboro 20 Box", 200.0, "gr"),
            new Articulo(BigInt(2),"Lucky Strike 20", 200.0, "gr"),
            new Articulo(BigInt(3),"Red Point 20", 100.0, "gr"),
            new Articulo(BigInt(4),"Lucky Strike 10", 120.0, "gr"),
            new Articulo(BigInt(5),"Chesterfield 20", 150.0, "gr"),
        );
    }

    inicializarFacturas(){
        this.cliente.facturas = new Array<Factura>(
            new Factura(this.cliente,"E",30,BigInt(1),'S'),
            new Factura(this.cliente,null,10,BigInt(2),'P'),
            new Factura(this.cliente,"R",40,BigInt(3),'D'),
        );
    }

    inicializarDetalleFacturas(){
        this.cliente.facturas[0].detallesFactura = new Array<DetalleFactura>(
            new DetalleFactura(1,this.articulos[0]),
            new DetalleFactura(1,this.articulos[3])
        );

        this.cliente.facturas[1].detallesFactura = new Array<DetalleFactura>(
            new DetalleFactura(1,this.articulos[2]),
            new DetalleFactura(4,this.articulos[4])
        );

        this.cliente.facturas[2].detallesFactura = new Array<DetalleFactura>(
            new DetalleFactura(1,this.articulos[1]),
            new DetalleFactura(1,this.articulos[0])
        );
    }
    
    constructor(){
        this.inicializarCliente();
        this.inicializarArticulos();
        this.inicializarFacturas();
        this.inicializarDetalleFacturas();
        this.cliente.totalFacturadoXTipoPago("E");
    }
}
let pruebaB = new TestB();