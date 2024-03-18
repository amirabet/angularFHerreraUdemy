export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Artur"
}

const passenger2: Passenger = {
    name: "Estefanía",
    children: ["Roc", "Vishnu", "Lola"]
}

// passanger.children?.length || 0 > Chequea primero si passanger.child es undefined
// en caso contrario le pasamos un valor 0
const printChildren = (passanger: Passenger) =>{
    const howManyChildren = passanger.children?.length || 0;
    console.log(passanger.name, howManyChildren);
}

// Forzamos para tener siempre que retornar número
// Con passanger.children!.length; le estamos diciendo a TS que siempre pasaremos children definido
// Pero lo acompañamos del if(!passenger1.children) para evitar el error
const returnChildrenNumber = (passanger: Passenger): number =>{

    if(!passenger1.children){
        console.log(passanger.name, 0);
        return 0;
    } 

    const howManyChildren = passanger.children!.length;
    console.log(passanger.name, howManyChildren);
    return howManyChildren;
}


printChildren(passenger1);
printChildren(passenger2);

returnChildrenNumber(passenger1);
