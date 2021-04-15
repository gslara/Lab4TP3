var DetalleFactura = /** @class */ (function () {
    function DetalleFactura(cantidad, articulo) {
        this.cantidad = cantidad;
        this.articulo = articulo;
        this.subtotal = 0;
    }
    DetalleFactura.prototype.calcularSubTotal = function () {
        return this.subtotal = Number(this.cantidad) * Number(this.articulo.precio);
    };
    return DetalleFactura;
}());
export { DetalleFactura };
