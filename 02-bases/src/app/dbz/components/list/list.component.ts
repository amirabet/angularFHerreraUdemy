import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})

export class ListComponent { 

    // @Output()
    // public OnDeleteCharacter = new EventEmitter<number>(); // Shorthand!
    // //public OnDeleteCharacter: EventEmitter<number> = new EventEmitter();
    
    @Output()
    public OnDeleteCharacterById = new EventEmitter<string>();
    
    // @Input('NombrAlternativo')
    @Input()
    public characterList: Character[] = [
        { name: "Trunks", power:10 }
    ]

    // onDeleteCharacter(characterIndex: number):void {
    //     this.OnDeleteCharacter.emit(characterIndex);
    // }

    onDeleteCharacterById(characterId: string | undefined):void {
        if(characterId)
            this.OnDeleteCharacterById.emit(characterId);
    }
}
