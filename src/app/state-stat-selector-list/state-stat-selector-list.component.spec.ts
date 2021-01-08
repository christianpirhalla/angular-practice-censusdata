import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateStatSelectorListComponent } from './state-stat-selector-list.component';

describe('StateStatSelectorListComponent', () => {
  let component: StateStatSelectorListComponent;
  let fixture: ComponentFixture<StateStatSelectorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateStatSelectorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateStatSelectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
