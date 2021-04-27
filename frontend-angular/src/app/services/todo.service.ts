import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: any;
  description: string; 
  updateDisabled: boolean = true; 
  addDisabled: boolean = false; 
  constructor(private requestService: RequestService) { }

  //get todos 
  async getTodos() {
    await this.requestService.getObject().toPromise().then(res => {
      if (res) {
        this.todoList = res;
      }
  }); 
}

  //add todo 
   addTodo(item) {
    this.requestService.postObject(item).subscribe(res => {
      if (res) {
        this.todoList.push(res);
      }
    });
  }

  //update todo
  updateTodo(item) {
    this.requestService.updateObject(item).subscribe(res => {
      console.log("RES = " + res); 
      if(res){
        const index = this.todoList.indexOf(item);
        console.log(index);  
        if(index !== -1){
          this.todoList[index] = res; 
        }
      }
    })
  }

  //delete todo
  deleteTodo(item) {
    const index = this.todoList.indexOf(item);
    if (index > -1) {
      this.todoList.splice(index, 1);
    }
    this.requestService.deleteObject(item.id).subscribe(res => {
      if(res == 1){
        console.log("item deleted successfully"); 
      }
    }); 
  }


}
