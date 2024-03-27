import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
 
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: "Krillin",
            power: 901
        },
        {
            id: uuid(),
            name: "Goku",
            power: 9001
        },
        {
            id: uuid(),
            name: "Vegeta",
            power: 8001
        }
    ];

    onAddCharacter( character: Character ): void {

        // const newCharacter: Character = {
        //     id: uuid(),
        //     name: character.name,
        //     power: character.power
        // }

        // Let's do the same with object spread!
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

        const newCharacter: Character = { id: uuid(), ...character };

        this.characters.push(newCharacter);
    }

    onDeleteCharacter( characterIndex: number ): void {
        this.characters.splice(characterIndex, 1);
    }

    onDeleteCharacterById( id: string | undefined ): void {
        if(id)
            this.characters = this.characters.filter( character => character.id !== id );
    }
}