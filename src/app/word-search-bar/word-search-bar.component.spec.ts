import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchBarComponent } from './word-search-bar.component';

describe('WordSearchBarComponent', () => {
  let component: WordSearchBarComponent;
  let fixture: ComponentFixture<WordSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
