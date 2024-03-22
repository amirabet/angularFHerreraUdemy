import { Component } from "@angular/core";

@Component({
    selector:'app-counter',
    template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="changeCounter(1)" class="btn btn-outline-primary">+1</button>
    <button (click)="resetCounter()" class="btn btn-outline-secondary mx-2">Reset</button>
    <button (click)="changeCounter(-1)" class="btn btn-outline-danger">-1</button>
    `
})

export class CounterComponent {
    public counter: number = 10;
    increaseCounter(): void {this.counter++;}
    decreaseCounter(): void {this.counter--;}
    changeCounter(amount: number): void {this.counter += amount;}
    resetCounter(): void {this.counter = 10;}
}