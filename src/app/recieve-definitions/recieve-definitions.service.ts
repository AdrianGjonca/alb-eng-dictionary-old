import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecieveDefinitionsService {
  constructor() {}

  public checkDataForEnglish(input: string): string {
    for (var x = 0; x < this.english_def.length; x++) {
      console.log(x);
      if (this.english_def[x][0] == input) {
        return this.english_def[x][1];
      }
    }
    return null;
  }
  public checkDataForAlbanian(input: string): string {
    for (var x = 0; x < this.english_def.length; x++) {
      if (this.albanian_def[x][0] == input) {
        return this.albanian_def[x][1];
      }
    }
    return null;
  }

  private albanian_def = [
    ['njereze', '<p>In English: people.</p><p>(plural)</p><p>An bipedal primate with a common ancestor with chimpanzees.</p>'],
    ['shendet', '<p>In English: health.</p><p>The well-functioning of our bodies.</p>'],
    [
      'qef',
      "<p>In English: fun.</p><p>A word that encompasses enjoyable activates.</p><p>Note: In Albanian you don't have fun, you <i>do fun</i>.</p>"
    ]
  ];
  1;
  private english_def = [
    ['person', '<p>In Albanian: njeri.</p><p>An bipedal primate with a common ancestor with chimpanzees.</p>'],
    ['health', '<p>In Albanian: shendet.</p><p>The well-functioning of our bodies.</p>'],
    [
      'fun',
      "<p>In English: fun.</p><p>A word that encompasses enjoyable activates.</p><p>Note: In Albanian you don't have fun, you <i>do fun</i>.</p>"
    ]
  ];
}
