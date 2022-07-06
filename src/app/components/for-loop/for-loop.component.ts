import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css'],
})
export class ForLoopComponent implements OnInit {
  animals: Animal[] = [
    { name: 'dog', sound: 'woof' },
    { name: 'cat', sound: 'meow' },
    { name: 'cow', sound: 'moo' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
