import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;

  increaseCounter(): void {this.counter++;}
  decreaseCounter(): void {this.counter--;}
  changeCounter(amount: number): void {this.counter += amount;}
  resetCounter(): void {this.counter = 10;}
}
