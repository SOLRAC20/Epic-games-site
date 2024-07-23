import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseContentComponent } from './release-content.component';

describe('ReleaseContentComponent', () => {
  let component: ReleaseContentComponent;
  let fixture: ComponentFixture<ReleaseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleaseContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReleaseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
