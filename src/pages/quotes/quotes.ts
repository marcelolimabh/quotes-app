import { Component, OnInit } from '@angular/core';

import {  NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { Quote } from './../../data/quote.interface';
import { QuoteService } from '../../services/quote.service';




@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {




  quoteGroup: { category: string, quotes: Quote[], icon: string };


  //Usuar o Onit ao inves do ionViewDidLoad
  /**
   * no método Onit o sistema executa antes de renderizar a tela
   * já no ionViewDidLoad ele renderiza a tela primeiro e depois executa o método
   */
  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  constructor( private navParams: NavParams, private alertCtrl: AlertController, private quoteService: QuoteService ) {
  }

  //ionViewDidLoad(){

  //this.quoteGroup = this.navParams.data;
  //use the operator Elvis (?) in templte to no crash app in started
  // }

  onAddToFavorite(selectedQuote: Quote) {

    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure',
      message: 'Are you sure you want to add the quote?',
      buttons:[{
        text: 'Yes, go ahead',
        handler: () => {
          this.quoteService.addQuoteToFavorites(selectedQuote);
        }
      },
    {
      text: 'No, I changed my mind',
      role: 'cancel',
      handler: ()=>{
        console.log('Cancelled!');

      }

    }]
    });

    alert.present();

  }


}
