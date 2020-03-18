import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TarefaService,TarefaConcluidaDirective } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar-tarefa';
import { CadastrarTarefaComponent } from './cadastrar-tarefa';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';



@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective],
  providers:[
    TarefaService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class TarefasModule { }
