import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent} from './components/about/about.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'app', component: AddTodoComponent }];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }