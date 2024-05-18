import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenWondersComponent } from './seven-wonders.component';

describe('SevenWondersComponent', () => {
  let component: SevenWondersComponent;
  let fixture: ComponentFixture<SevenWondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenWondersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevenWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
