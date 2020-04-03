import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInternsComponent } from './add-interns.component';

describe('AddInternsComponent', () => {
  let component: AddInternsComponent;
  let fixture: ComponentFixture<AddInternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
