import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q07ParentComponent } from './q07-parent.component';

describe('Q07ParentComponent', () => {
  let component: Q07ParentComponent;
  let fixture: ComponentFixture<Q07ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q07ParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q07ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
