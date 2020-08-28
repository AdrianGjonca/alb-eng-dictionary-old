import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecieveDefinitionsService } from '../recieve-definitions/recieve-definitions.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  word: string;
  card1: string;
  card2: string;

  constructor(private _Activatedroute: ActivatedRoute, private _defService: RecieveDefinitionsService) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.word = params.get('word');
      this.onRouted();
    });
  }

  ngOnInit(): void {}

  onRouted(): void {
    let alb = this._defService.checkDataForAlbanian(this.word);
    let eng = this._defService.checkDataForEnglish(this.word);
    if (alb == null) alb = '"<u>' + this.word + '" does not have any registered definitions in Albanian. </u>';
    if (eng == null) eng = '"<u>' + this.word + '" does not have any registered definitions in English. </u>';

    this.card1 = alb;
    this.card2 = eng;
  }
}
