import { Component, computed, signal } from '@angular/core';

const name = signal('Bl4ckP4r4d3');

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10);
  // SENIAL COMPUTADA de SOLO LECTURA
  public squareCounter = computed( (): number => this.counter() * this.counter());

  constructor() {
    console.log(name());
    
  }

  increaseBy( value: number ) {
    this.counter.update( current => current + value )
  }

}
