import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q02CounterComponent } from './q02-counter.component';

describe('Q02CounterComponent', () => {
  let component: Q02CounterComponent;
  let fixture: ComponentFixture<Q02CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q02CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q02CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
