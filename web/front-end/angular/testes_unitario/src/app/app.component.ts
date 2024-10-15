import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosService } from './services/todos/todos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {

  title = 'Testes Unitários';

  /* constructor(private todoService: TodosService){
  } */


  /* ngOnInit(): void {
    this.todoService.getAll().subscribe((response)=>{
      console.log("response getAll", response)
    })


    this.todoService.getById(1).subscribe((response)=>{
      console.log("response getById", response)
    })
  } */


}
