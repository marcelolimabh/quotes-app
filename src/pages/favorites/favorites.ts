import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { QuoteService } from './../../services/quote.service';
import { Quote } from './../../data/quote.interface';
import { QuotePage } from './../quote/quote';




@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {


  quotes: Quote[];


  constructor(private quoteService:QuoteService, private modalCtrl: ModalController ) {
  }

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes();

  }

  onViewQuote(quote:Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
  }



}
