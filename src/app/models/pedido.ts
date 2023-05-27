export class Pedido {

    _id?: string;
    pedido: string;
    mesa: string;
    imagen: string;

    constructor(pedido:string, mesa:string, imagen: string){
        this.pedido = pedido;
        this.mesa = mesa;
        this.imagen = imagen;
    }

}