import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddTodoComponent,
    HeaderComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
