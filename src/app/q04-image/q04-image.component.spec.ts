import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q04ImageComponent } from './q04-image.component';

describe('Q04ImageComponent', () => {
  let component: Q04ImageComponent;
  let fixture: ComponentFixture<Q04ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q04ImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q04ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
