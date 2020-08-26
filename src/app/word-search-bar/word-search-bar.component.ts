import { Component, OnInit } from '@angular/core';
import { RecieveTranslationsService } from '../recieve-translations/recieve-translations.service';
import { FormControl } from '@angular/forms';
import { tap, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-word-search-bar',
  templateUrl: './word-search-bar.component.html',
  styleUrls: ['./word-search-bar.component.scss']
})
export class WordSearchBarComponent implements OnInit {
  constructor(private transservice: RecieveTranslationsService) {}

  private _subs: Subscription[] = [];

  queryCtrl = new FormControl();

  ngOnInit(): void {
    const sub = this.queryCtrl.valueChanges
      .pipe(
        debounceTime(30),
        tap(value => {
          console.log('value changed to:', value);
          this._textChanged(value);
        })
      )
      .subscribe();

    this._subs.push(sub);
  }

  ngOnDestroy(): void {
    while (this._subs.length) {
      this._subs.pop().unsubscribe();
    }
  }

  private _textChanged(text: string) {
    this.transservice.filter = text;
    this.transservice.resultsSeg.alb_to_eng = this.transservice.GetAlbToEng();
    this.transservice.resultsSeg.eng_to_alb = this.transservice.GetEngToAlb();
  }
}
