
// Evitaremos usar el tipo any trabajando con genéricos
export function whatsMyType<T>(argument: T): T{
    return argument;
} 

const amIString = whatsMyType("Hola mundo");
const amINumber = whatsMyType(100);
const amIArray = whatsMyType([1,2,3,4,5]);

// También podemos tipar explícitamente argunmento del método
//const IamATypedStringERROR =  whatsMyType<string>(123); > ERROR!
const IamATypedString =  whatsMyType<string>("Hola mundo");


// Al tener los genéricos definidos ya accedemos a los métodos de cada tipo 
console.log(amIString.toUpperCase());
console.log(IamATypedString.toLowerCase());
console.log(amINumber * 10);
console.log(amIArray.join("-"));

