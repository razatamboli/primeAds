import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HordingCardsComponent } from './hording-cards.component';

describe('HordingCardsComponent', () => {
  let component: HordingCardsComponent;
  let fixture: ComponentFixture<HordingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HordingCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HordingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
