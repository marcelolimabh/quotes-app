import { Quote } from './../data/quote.interface';
import { Injectable } from "@angular/core";


@Injectable()
export class QuoteService {

  private favoriteQuotes: Quote[] =[];

  addQuoteToFavorites(quote: Quote){
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote: Quote){
    const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
        return quote.id === quoteElement.id;
    });

    this.favoriteQuotes.splice(position,1);
  }

  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote){
    return this.favoriteQuotes.find((quoteEl: Quote) =>{
      return quoteEl.id == quote.id;
    });
  }
}
