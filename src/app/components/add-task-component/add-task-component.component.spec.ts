import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponentComponent } from './add-task-component.component';

describe('AddTaskComponentComponent', () => {
  let component: AddTaskComponentComponent;
  let fixture: ComponentFixture<AddTaskComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponentComponent]
    });
    fixture = TestBed.createComponent(AddTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
