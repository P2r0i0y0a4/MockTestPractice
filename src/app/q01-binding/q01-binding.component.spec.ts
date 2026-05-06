import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q01BindingComponent } from './q01-binding.component';

describe('Q01BindingComponent', () => {
  let component: Q01BindingComponent;
  let fixture: ComponentFixture<Q01BindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q01BindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q01BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
