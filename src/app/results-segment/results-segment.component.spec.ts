import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSegmentComponent } from './results-segment.component';

describe('ResultsSegmentComponent', () => {
  let component: ResultsSegmentComponent;
  let fixture: ComponentFixture<ResultsSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
