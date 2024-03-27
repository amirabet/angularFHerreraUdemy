import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    // el servicio es mejor que sea privado
    //constructor( public dbzService : DbzService ) {
    constructor( private dbzService : DbzService ) {
    }

    get characters(): Character[] {
        // En vez de devolver el objectgo direcot hacemos un spread para mandar una copia del objeto
        // evitando así que pueda ser manipulado desde fuera de la clase
        //return this.dbzService.characters;
        return [...this.dbzService.characters];
    }

    // Para los métodos hacemos un acceso público quellama al método del servicio
    onDeleteCharacterById( id: string): void {
        this.dbzService.onDeleteCharacterById( id );
    }

    onAddCharacter( character: Character): void {
        this.dbzService.onAddCharacter( character );
    }
    //
    // Moved to dbz.service.ts
    //
    // public characters: Character[] = [
    //     {
    //         name: "Krillin",
    //         power: 901
    //     },
    //     {
    //         name: "Goku",
    //         power: 9001
    //     },
    //     {
    //         name: "Vegeta",
    //         power: 8001
    //     }
    // ];

    // onNewCharacter( character: Character ): void {

    //     // debugger;
    //     // console.log('Main page' + character)
    //     // console.log(character)

    //     this.characters.unshift(character);
    //     //this.characters.push(character);

    // }

    // onDeleteCharacter( characterIndex: number ): void {
    //     this.characters.splice(characterIndex, 1);
    // }
}

