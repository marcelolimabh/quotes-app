import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { QuoteService } from './../../services/quote.service';
import { Quote } from './../../data/quote.interface';
import { QuotePage } from './../quote/quote';
//import quotes from '../../data/quotes';
import { SettingsService } from './../../services/settings.service';





@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {


  quotes: Quote[];


  constructor(private quoteService: QuoteService, private modalCtrl: ModalController, private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();

  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    // = this.quoteService.getFavoriteQuotes();
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  isAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
