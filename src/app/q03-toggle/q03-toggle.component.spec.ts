import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q03ToggleComponent } from './q03-toggle.component';

describe('Q03ToggleComponent', () => {
  let component: Q03ToggleComponent;
  let fixture: ComponentFixture<Q03ToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q03ToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q03ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
