import { TarefaService } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar-tarefa';



@NgModule({
  declarations: [ListarTarefaComponent],
  providers:[
    TarefaService
  ],
  imports: [
    CommonModule
  ]
})
export class TarefasModule { }
