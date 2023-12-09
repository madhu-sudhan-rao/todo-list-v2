import { Component, OnInit } from '@angular/core';
import { TasksCrudService } from '../../services/tasks-crud.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  loadedTasks: Task[]=[]
  constructor(
    private taskService: TasksCrudService
  ){}

  ngOnInit(): void {

  this.fetchTasks() ;
  this.taskService.sendFetchUpdate$.subscribe(
    (value)=>{
      value ? this.fetchTasks() : '';
    }
  )   
  }

  fetchTasks(){
    this.taskService.getTasks().subscribe(
      (tasks)=>{
        console.log(tasks);
        this.loadedTasks = tasks;        
      }
    )
  }
}
