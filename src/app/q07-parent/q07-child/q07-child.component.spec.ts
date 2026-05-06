import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q07ChildComponent } from './q07-child.component';

describe('Q07ChildComponent', () => {
  let component: Q07ChildComponent;
  let fixture: ComponentFixture<Q07ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q07ChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q07ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
