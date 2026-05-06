import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q06LifecycleComponent } from './q06-lifecycle.component';

describe('Q06LifecycleComponent', () => {
  let component: Q06LifecycleComponent;
  let fixture: ComponentFixture<Q06LifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q06LifecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q06LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
