// Clase en angular
export class Person{
    public name: string;
    public surname?: string;
    public adress: string;
    private ssnumber: string;

    constructor(name: string, adress: string, ssnumber: string) {
        this.name = name;
        this.adress = adress;
        this.ssnumber = ssnumber;
    }
}

// Estructura más común en TS / JS, con las propiedades en el constructor
// La inyección de dependencias se hace dentro del costructor
export class PersonJS{
    constructor(
        public name: string,
        private adress: string = "No adress",
        public surname?: string, //Optionals al final
    )
    {}
}

// Vamos a extender la clase Person
export class Hero extends Person{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    )
    {
        // super es el construcor del padre que extiende
        // super() Con este constructor vacío da error pero transpila
        super(realName, "Tiziana 22", "2222222222");
    }
}

// Otra alternativa a la extenisón de clases es la composición
// Ello ayuda a un código más manteible, evitando extender varios nieveles de clases
// Priorizar componsición sobre herencia
// Implementaremos la clase person dentro de la clase Hero2
// Con ello desvinculamos la dependencia entre clases y pasamos la clase Person como parámetro del constructor de Hero2
export class Hero2{
    //public person : Person; > Como propiedad de la clase

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        // Como parámetro del constructor
        public person: Person
    )
    {
        // Se inicia la propiedad en el constructor
        //this.person = new Person(realName, "Tiziana 22", "2222222222");
    }
}


const itsMe = new Person("Artur", "Vistalegre s/n", "0123456789");
const itsMe2 = new PersonJS("Fani", "Jaume Amat 7", "9876543210");
const itsHero = new Hero("RocketMan", 8, "Roc");
const itsHero2 = new Hero2("RocketMan", 8, "Roc", itsMe);

console.log(itsMe);
console.log(itsMe2);
console.log(itsHero);
console.log(itsHero2);

// Las porpiedades privadas estan presentes en JS pese a que TS nos indica el error.
//console.log(itsMe.ssnumber);