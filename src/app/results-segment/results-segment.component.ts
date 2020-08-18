import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-segment',
  templateUrl: './results-segment.component.html',
  styleUrls: ['./results-segment.component.scss']
})
export class ResultsSegmentComponent implements OnInit {

  alb_to_eng = [
    ["njereze", "person"],["shendet","health"],["qef","fun"]
  ];

  eng_to_alb = [
    ["person", "njereze"],["health","shendet"],["fun","qef"]
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
