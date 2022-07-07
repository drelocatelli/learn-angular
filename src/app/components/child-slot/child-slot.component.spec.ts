import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSlotComponent } from './child-slot.component';

describe('ChildSlotComponent', () => {
  let component: ChildSlotComponent;
  let fixture: ComponentFixture<ChildSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
