import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoEntry!: FormGroup;

  constructor(
    private  fb: FormBuilder
  ){}

  ngOnInit(): void {
      this.todoEntry = this.fb.group({
        todo : [null, Validators.required]
      })
  }

  onAdd(){
    if(this.todoEntry.valid){
      console.log(this.todoEntry.value.todo)
      alert(this.todoEntry.value.todo)
    }
  }


}
