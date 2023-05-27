import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{

  listPedidos: Pedido[] = [];
  elementos: number = 0;

  constructor(private _pedidoService: PedidoService) {

  }

  ngOnInit(): void {
    this.obtenerPedidos()
  }

  obtenerPedidos(){
    this._pedidoService.getPedidos().subscribe(data => {
      console.log(data);
      this.listPedidos = data;
      this.elementos = this.listPedidos.length;
    })
  }

  eliminarPedido(id: any) {
    this._pedidoService.deletePedido(id).subscribe(data => {
      Swal.fire({
        title: 'Finalizar pedido',
        text: "¿Desea terminar el pedido?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if(result.isConfirmed) {
          console.log(data);
          this.obtenerPedidos();
          this.elementos = this.listPedidos.length;
        }
      })
    })
  }

}
