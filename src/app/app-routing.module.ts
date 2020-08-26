import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TranslationpageComponent } from './translationpage/translationpage.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

const routes: Routes = [
  { path: 'translations', component: TranslationpageComponent },
  { path: '', component: HomepageComponent },
  { path: 'dictionary/:word', component: DictionaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
