import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereToSlayComponent } from './here-to-slay.component';

describe('HereToSlayComponent', () => {
  let component: HereToSlayComponent;
  let fixture: ComponentFixture<HereToSlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HereToSlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HereToSlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
