function addNumbers(a: number,b: number): number{
    return a + b;
}

const addNumbersArrow = (a: number, b: number) =>{
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void
}

const HEAL_CHARACTER = (character: Character, amount: number) => {
    character.hp += amount;
}

const MAX_THUNDER: Character = {
    name: 'max Thunder',
    hp: 100,
    showHp() {
        console.log (`My hp is ${ this.hp }`)
    }
}

MAX_THUNDER.showHp()

HEAL_CHARACTER(MAX_THUNDER, 50)

MAX_THUNDER.showHp()

// const RESULT: number = addNumbers(1,2);
// const RESULT_ARROW: string = addNumbersArrow(1,2);
// const RESULT_MULTIPLY: number = multiply(5);

//console.log({RESULT , RESULT_ARROW, RESULT_MULTIPLY});



export{};