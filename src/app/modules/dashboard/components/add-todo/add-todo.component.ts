import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksCrudService } from '../../services/tasks-crud.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoEntry!: FormGroup;
  // task!: Task = {
  //   title: '',
  //   description: '',
  //   createdAt: new Date(),
  //   completed: false,
  //   completedAt: new Date(),
  //   dueDate: new Date()
  // };

  task: Task


  constructor(
    private  fb: FormBuilder,
    private taskService: TasksCrudService
  ){
    this.task = {} as Task
  }

  ngOnInit(): void {
      this.todoEntry = this.fb.group({
        todo : [null, Validators.required]
      })
  }

  onAdd(){
    if(this.todoEntry.valid){      
      this.task.title = this.todoEntry.value.todo;
      this.task.createdAt = new Date();
      this.task.completed = false
      alert(this.todoEntry.value.todo)
      this.taskService.addTask(this.task)
    }
  }


}
