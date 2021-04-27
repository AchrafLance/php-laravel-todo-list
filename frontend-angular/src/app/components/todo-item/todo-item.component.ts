import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todoList : any; 
  isChecked : boolean; 
  @Output() eventEmiter = new EventEmitter<any>(); 
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().then(res =>{
      if(res !== null){
        this.todoList = this.todoService.todoList;
      }
    });
    
    } 
    
  onToggle(todo){
    todo.checked = !todo.checked;
    this.todoService.updateTodo(todo); 
  }

  deleteTodo(todo){
    this.todoService.deleteTodo(todo); 
  }

  updateTodo(todo){
    this.eventEmiter.emit(todo); 
   

  }

}
