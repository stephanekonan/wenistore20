import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyOfConfidentialityComponent } from './policy-of-confidentiality.component';

describe('PolicyOfConfidentialityComponent', () => {
  let component: PolicyOfConfidentialityComponent;
  let fixture: ComponentFixture<PolicyOfConfidentialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyOfConfidentialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyOfConfidentialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
