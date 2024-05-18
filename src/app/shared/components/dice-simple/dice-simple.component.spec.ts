import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceSimpleComponent } from './dice-simple.component';

describe('DiceSimpleComponent', () => {
  let component: DiceSimpleComponent;
  let fixture: ComponentFixture<DiceSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceSimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiceSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
