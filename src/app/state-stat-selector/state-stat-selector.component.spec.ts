import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateStatSelectorComponent } from './state-stat-selector.component';

describe('StateStatSelectorComponent', () => {
  let component: StateStatSelectorComponent;
  let fixture: ComponentFixture<StateStatSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateStatSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateStatSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
