import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number  = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = "Artur Mirabet";
  }

  changeAge(): void {
    this.age = 43;
  }

  resetForm(): void {
    this.name = "ironman";
    this.age = 45;

    // Funciones de JS que quedan fuera del ciclo de vida de Angular, ojo!
    document.querySelectorAll('h1').forEach( element => {
        element.innerHTML = '<h1>Changed with JS overwrites {{ name }} prop</h1>'
      })
  }

  changeMethod(): void {
    // TODO: Implement this method
    throw 'Non implemented method'
  }
}
