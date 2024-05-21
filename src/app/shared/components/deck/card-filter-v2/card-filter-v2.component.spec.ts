import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilterV2Component } from './card-filter-v2.component';

describe('CardFilterV2Component', () => {
  let component: CardFilterV2Component;
  let fixture: ComponentFixture<CardFilterV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFilterV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFilterV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
