import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksCrudService {
  sendFetchUpdate$ = new BehaviorSubject<boolean>(false);

  private url: string = "https://todo-list-dfabf-default-rtdb.firebaseio.com/";
  constructor(
    private http: HttpClient
  ) { }

  addTask(task: Task){
    console.log(task);
    this.http.post(`${this.url}tasks.json`, task).subscribe(
      (response: any) =>{
        console.log(response);
        this.sendFetchUpdate$.next(true)
      }
    )
    
  }

  getTasks(){
    return this.http.get(`${this.url}tasks.json`)
      .pipe(map((responseData: any)=>{
        console.log(responseData);
        
        const tasksArray: Task[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            tasksArray.push({...responseData[key], id:key})
          }
        }
        return tasksArray
      }),
      catchError(errorResponse => {
        return throwError(errorResponse);
      })
      )
  }
}
