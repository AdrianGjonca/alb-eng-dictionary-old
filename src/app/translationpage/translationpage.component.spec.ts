import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationpageComponent } from './translationpage.component';

describe('TranslationpageComponent', () => {
  let component: TranslationpageComponent;
  let fixture: ComponentFixture<TranslationpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TranslationpageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
