import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q05BindingRefactorComponent } from './q05-binding-refactor.component';

describe('Q05BindingRefactorComponent', () => {
  let component: Q05BindingRefactorComponent;
  let fixture: ComponentFixture<Q05BindingRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q05BindingRefactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q05BindingRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
