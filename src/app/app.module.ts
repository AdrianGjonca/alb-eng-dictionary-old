import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WordSearchBarComponent } from './word-search-bar/word-search-bar.component';
import { MatInputModule } from '@angular/material/input';
import { ResultsSegmentComponent } from './results-segment/results-segment.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslationpageComponent } from './translationpage/translationpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WordSearchBarComponent,
    ResultsSegmentComponent,
    TranslationpageComponent,
    HomepageComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
