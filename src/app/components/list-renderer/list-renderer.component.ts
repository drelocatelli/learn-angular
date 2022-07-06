import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-list-renderer',
  templateUrl: './list-renderer.component.html',
  styleUrls: ['./list-renderer.component.css'],
})
export class ListRendererComponent implements OnInit {
  animals: Animal[] = [
    { name: 'dog', sound: 'woof' },
    { name: 'cat', sound: 'meow' },
    { name: 'cow', sound: 'moo' },
    { name: 'oxen', sound: 'moo' },
  ];

  constructor(private listService: ListService) {}

  removeAnimal(animal: Animal) {
    console.log(this.animals.length);
    if (this.animals.length <= 1) return alert('impossivel remover');
    this.animals = this.listService.remove(this.animals, animal);
  }

  ngOnInit(): void {}
}
