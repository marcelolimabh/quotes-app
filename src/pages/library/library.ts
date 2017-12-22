import { Component, OnInit } from '@angular/core';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';
import { Quote } from './../../data/quote.interface';



@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotesPage = QuotesPage;

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  ngOnInit(): void {

    this.quoteCollection = quotes;
  }



}
