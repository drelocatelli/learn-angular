import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-slot',
  templateUrl: './child-slot.component.html',
  styleUrls: ['./child-slot.component.css'],
  // template: `<div class="container"><ng-content></ng-content></div>`
})
export class ChildSlotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
