import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  description : string; 
  id:number;  
  checked: boolean; 
  todo: any; 
  updateDisabled: boolean = true; 
  addDisabled: boolean = false; 
  constructor(private todoService:TodoService) {
   }


  ngOnInit(): void {
  }

  addTodo() {
    let todo = {
      "description": this.description,
      "checked": false
    };
    this.todoService.addTodo(todo); 
  }
  
  updateTodo(){
    this.updateDisabled = !this.updateDisabled; 
    this.addDisabled = !this.addDisabled;
    this.todo.description = this.description; 
    this.todoService.updateTodo(this.todo); 

  
  }

  receiveTodo(event){
   this.todo = event;
   console.log(this.todo)
   this.description = event.description; 
    this.updateDisabled = !this.updateDisabled; 
    this.addDisabled = !this.addDisabled;
  }


}
