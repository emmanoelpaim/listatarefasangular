import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa';
import { ListarTarefaComponent } from './listar-tarefa';
import { Routes } from '@angular/router';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },    
    {
        path: 'tarefas',
        redirectTo: '/tarefas/listar',
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    
];
