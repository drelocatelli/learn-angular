import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name = 'Andressa';
  hobbies = ['Correr', 'Jogar', 'Aprender'];

  arrayToString(array: string[]): string {
    return array.join(', ');
  }

  constructor() {}

  ngOnInit(): void {}
}
