// Los decoradores no se suelen usar a nivel alto, normalmente son para crear frameworks
// En Angular  ya están creados y normalmente  los usamos: service, module, component...

// Se trata de métodos vinculados a una clase o a alguna de sus partes que modifica / extiende su comporntamiento sin modificar su estructura.
// En el caso de la clase: toma al constructor como parámetro y actua sobre él, aunque sin modificr el tipo de la clase
// Se puede aplicar también a varios elementos de la clase: métodos, parámetros, propiedades...

// Construir el decorador usando any en el tipo del constructor (no recomendado, pero mas simple)
//function classDecorator(
//    constructor: any

// Construir el parámetro usando un genérico
// ...args:any[]  > Rest parameters > número indefinido de parámetros, siempre último parámetro del método, en forma de array
function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
)
{
    return class extends constructor {
        newproperty =  "New Property";
        hello = "override";
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = "Abc123";

    print(){
        console.log('Hola mundo!');
    }

}

// Definción de la clase
console.log(SuperClass);

// Instancia de la clase
const myClass = new SuperClass();
console.log(myClass);