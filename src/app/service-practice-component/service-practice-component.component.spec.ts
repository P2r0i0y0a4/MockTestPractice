import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePracticeComponentComponent } from './service-practice-component.component';

describe('ServicePracticeComponentComponent', () => {
  let component: ServicePracticeComponentComponent;
  let fixture: ComponentFixture<ServicePracticeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePracticeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePracticeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
