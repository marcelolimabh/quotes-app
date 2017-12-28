import { TabsPage } from './../pages/tabs/tabs';
import { QuotePage } from './../pages/quote/quote';
import { LibraryPage } from './../pages/library/library';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { FavoritesPage } from '../pages/favorites/favorites';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuoteService } from '../services/quote.service';
import { SettingsService } from '../services/settings.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LibraryPage,
    SettingsPage,
    QuotesPage,
    QuotePage,
    FavoritesPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LibraryPage,
    SettingsPage,
    QuotesPage,
    QuotePage,
    FavoritesPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuoteService,
    SettingsService
  ]
})
export class AppModule {}
