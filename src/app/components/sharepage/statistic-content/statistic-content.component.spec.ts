import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticContentComponent } from './statistic-content.component';

describe('StatisticContentComponent', () => {
  let component: StatisticContentComponent;
  let fixture: ComponentFixture<StatisticContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisticContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
