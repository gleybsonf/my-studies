import { Injectable } from '@angular/core';
import { LoggerService } from '../log/logger.service';



@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private loggerService: LoggerService) { }

  calcular(num1: number, num2: number, operacao: string): number | null{
    switch (operacao) {
      case 'soma':
        return num1 + num2;  
      case 'subtração':
        return num1 - num2;  
      case 'divisão':
        return num1 / num2;  
      case 'multiplicação':
        return num1 * num2;        
      default:
        this.loggerService.log("operação inexistente.");
        return null
    }
  }
}
