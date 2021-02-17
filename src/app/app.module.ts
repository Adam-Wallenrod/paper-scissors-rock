import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { GameButtonsComponent } from './components/game-buttons/game-buttons.component';
import { ScoreComponent } from './components/score/score.component';
import { RoundInfoComponent } from './components/round-info/round-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GameButtonsComponent,
    ScoreComponent,
    RoundInfoComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
