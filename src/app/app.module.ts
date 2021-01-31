import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { GameButtonsComponent } from './components/game-buttons/game-buttons.component';
import { ScoreComponent } from './components/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    GameButtonsComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
