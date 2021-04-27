import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  description: string; 
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
    let todo = {
      "description": this.description,
      "checked": false
    };
    this.todoService.addTodo(todo); 
  }


}
