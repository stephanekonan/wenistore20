import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModePaidComponent } from './mode-paid.component';

describe('ModePaidComponent', () => {
  let component: ModePaidComponent;
  let fixture: ComponentFixture<ModePaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModePaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModePaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
