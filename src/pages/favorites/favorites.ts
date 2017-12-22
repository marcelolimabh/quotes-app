import { QuoteService } from './../../services/quote.service';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';




@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {


  quotes: Quote[];


  constructor(private quoteService:QuoteService ) {
  }

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes();

  }



}
