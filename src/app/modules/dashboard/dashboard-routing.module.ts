import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path:"",
        children:[
            {
                path:"",
                component: DashboardComponent
            },
            {
                path: 'tasks',
                loadChildren:()=>import('../tasks/tasks.module').then((m)=>m.TasksModule)
            },
            {
                path: 'finished-tasks',
                loadChildren:()=>import('../finished-tasks/finished-tasks.module').then((m)=>m.FinishedTasksModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
