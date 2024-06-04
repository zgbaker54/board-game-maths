import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCameraComponent } from './card-camera.component';

describe('CardCameraComponent', () => {
  let component: CardCameraComponent;
  let fixture: ComponentFixture<CardCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCameraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
