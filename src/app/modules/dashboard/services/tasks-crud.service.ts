import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksCrudService {

  private url: string = "https://todo-list-dfabf-default-rtdb.firebaseio.com/";
  constructor(
    private http: HttpClient
  ) { }

  addTask(task: Task){
    console.log(task);
    this.http.post(`${this.url}tasks.json`, task).subscribe(
      (response: any) =>{
        console.log(response);
        
      }
    )
    
  }
}
