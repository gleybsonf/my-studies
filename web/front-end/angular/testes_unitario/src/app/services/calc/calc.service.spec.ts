import { TestBed } from '@angular/core/testing';
import { CalcService } from './calc.service';
import { LoggerService } from '../log/logger.service';

 describe('CalcService', () => {
  let service: CalcService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])
    TestBed.configureTestingModule({
      providers: [CalcService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });
    service = TestBed.inject(CalcService);
  });

  it('deve somar, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(5 , 8, 'soma')
    expect(result).toBe(13)
  });

  it('deve subtrarir, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(8, 5, 'subtração')
    expect(result).toBe(3)
  });


  it('deve dividir, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(8, 2, 'divisão')
    expect(result).toBe(4)
  });


  it('deve mutiplicar, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(8, 5, 'multiplicação')
    expect(result).toBe(40)
  });

  it('operação não existente', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(8, 5, 'aaaa')
    expect(result).toBeNull()
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  });
});
