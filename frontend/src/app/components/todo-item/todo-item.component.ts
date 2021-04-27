import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todoList : any; 
  isChecked : boolean; 
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().then(res =>{
      this.todoList = this.todoService.todoList;
    });
    
    } 
    
  onToggle(todo){
    todo.checked = !todo.checked;
  }

  deleteTodo(todo){
    this.todoService.deleteTodo(todo); 
  }

  updateTodo(todo){
    this.todoService.description = todo.description; 
    this.todoService.updateDisabled = false; 
    this.todoService.addDisabled = true; 

  }

}
