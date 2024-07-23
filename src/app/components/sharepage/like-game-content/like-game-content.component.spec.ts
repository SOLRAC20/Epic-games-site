import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeGameContentComponent } from './like-game-content.component';

describe('LikeGameContentComponent', () => {
  let component: LikeGameContentComponent;
  let fixture: ComponentFixture<LikeGameContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeGameContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikeGameContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
