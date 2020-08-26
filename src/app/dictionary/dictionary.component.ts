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
  description: string;
  constructor(private _Activatedroute: ActivatedRoute, private _defService: RecieveDefinitionsService) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.word = params.get('word');
      this.onRouted();
    });
  }

  ngOnInit(): void {}

  onRouted(): void {}
}
