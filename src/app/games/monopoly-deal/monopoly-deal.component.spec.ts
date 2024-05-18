import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonopolyDealComponent } from './monopoly-deal.component';

describe('MonopolyDealComponent', () => {
  let component: MonopolyDealComponent;
  let fixture: ComponentFixture<MonopolyDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonopolyDealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonopolyDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
