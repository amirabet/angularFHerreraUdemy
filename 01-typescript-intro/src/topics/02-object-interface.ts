const SKILLS: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string [];
    hometown?: string;
}

const MAX_THUNDER: Character = {
    name: 'max Thunder',
    hp: 100,
    skills: ['Bash', 'Counter']
}

MAX_THUNDER.hometown = 'Santako';

console.table(MAX_THUNDER);


export{};