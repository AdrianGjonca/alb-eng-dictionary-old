import { Injectable } from '@angular/core';
import { ResultsSegmentComponent } from '../results-segment/results-segment.component';


@Injectable({
  providedIn: 'root'
})
export class RecieveTranslationsService {
  public filter: string = "";

  public resultsSeg: ResultsSegmentComponent;

  private alb_to_eng = [
    ["njereze", "person"],["shendet","health"],["qef","fun"]
  ];

  private eng_to_alb = [
    ["person", "njereze"],["health","shendet"],["fun","qef"]
  ];

  private filterList(input: string[][]){
    if(this.filter.length==0){
      return input;
    }
    let output: string[][] = new Array();
    for(var x=0; x<input.length; x++){
      if(input[x][0].includes(this.filter)){
        output.push(input[x]);
      }
    }
    
    return output;
  }

  public GetAlbToEng() {
    return this.filterList(this.alb_to_eng);
  }
  public GetEngToAlb() {
    return this.filterList(this.eng_to_alb);
  }


  constructor() { } 
}
