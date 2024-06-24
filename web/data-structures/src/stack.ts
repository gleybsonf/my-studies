export class People{
    name:string;
    age:number
    
    constructor(name:string, age:number){
        this.age = age;
        this.name = name;
    }

    imprimirPessoa():void{
        console.log(`o nome da pessoa é ${this.name}, e a idade é ${this.age}`)
    }
}

const people = new People("joao", 21)