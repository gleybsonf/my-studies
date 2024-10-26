import { TestBed } from '@angular/core/testing';
import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';

describe('TodosService', () => {
  let todoService: TodosService;
  let httpTestingControlle: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        TodosService, 
        provideHttpClient(), 
        provideHttpClientTesting()]
    });
    todoService = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('deve retornar todos os TODOS', () => {
    todoService.getAll().subscribe (todos=>{
      expect(todos).toBeTruthy('Nenhum TODO foi retornado.')
      expect(todos.length).toEqual(200, 'A Quantidade de TODOS não é 200.')

      const todo= todos.find( todo=> todo.id === 15)
      expect(todo?.title).toEqual('ab voluptatum amet voluptas')
    })
  });


  it('Deve retornar o TODO por ID', async () => {
    const todo = await todoService.getById(12).toPromise()
    expect(todo).toBeTruthy();
    expect(todo?.id).toEqual(12)
  });
});
