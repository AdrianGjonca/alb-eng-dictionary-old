import { Component, OnInit } from '@angular/core';
import { RecieveTranslationsService } from '../recieve-translations/recieve-translations.service';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-results-segment',
  templateUrl: './results-segment.component.html',
  styleUrls: ['./results-segment.component.scss']
})
export class ResultsSegmentComponent implements OnInit {

  alb_to_eng: string[][];

  eng_to_alb = [[]];
  constructor(private transservice: RecieveTranslationsService) {
    transservice.resultsSeg = this;
  }

  ngOnInit(): void {
    this.alb_to_eng = this.transservice.GetAlbToEng();
    this.eng_to_alb = this.transservice.GetEngToAlb();
  }

}
