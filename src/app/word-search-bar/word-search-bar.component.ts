import { Component, OnInit } from '@angular/core';
import { RecieveTranslationsService } from '../recieve-translations/recieve-translations.service';

@Component({
  selector: 'app-word-search-bar',
  templateUrl: './word-search-bar.component.html',
  styleUrls: ['./word-search-bar.component.scss']
})
export class WordSearchBarComponent implements OnInit {

  constructor(private transservice: RecieveTranslationsService) { }
  
  onChangeEvent(event: any){
    this.transservice.filter = event.target.value;
    this.transservice.resultsSeg.alb_to_eng = this.transservice.GetAlbToEng();
    this.transservice.resultsSeg.eng_to_alb = this.transservice.GetEngToAlb();
  }

  ngOnInit(): void {
  }
 
}
