const obj = {
    array1: [2,3,22,55],
    array2: ["boi","vaca","cisne"],
    obj1: {
      idade: 12,
      nome: "cl"
    }
  }
  
  function imprime(key: string){
    console.log("obj", obj[key])
  }
  
  function imprimeTudo(){
    console.log("obj entries", Object.entries(obj))
  }
  
  function imprimeComForeach(){
    Object.entries(obj).forEach( ( [key, value]) => 
    console.log(`a chave é ${key}, e o valor é ${value}`))
  }
  
  //imprimeTudo()
  //imprime("array1")
  imprimeComForeach()

  interface Person {
    [index: string]: string | number;
    age: number;
    name: string;
  }
  
  // 👇️ const p1: Person
  const p1: Person = { name: 'Bobby', bairro: 'Chile', age: 30 };
  
  console.log("p1", p1)