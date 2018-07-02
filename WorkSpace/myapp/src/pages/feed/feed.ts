import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo:"dario franca",
    data:"November 5, 1955",
    descricao:"bla bla que coisa legal.. olha só isso",
    likes:12,
    coments:4,
    time_comment:"11h ago"
  }
 
 
  public nome_usuario : string = "dario franca do código";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number):void{
   // alert(num1+num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10,99);
  }

}
