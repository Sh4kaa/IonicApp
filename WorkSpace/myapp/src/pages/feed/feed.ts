import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "dario franca",
    data: "November 5, 1955",
    descricao: "bla bla que coisa legal.. olha só isso",
    likes: 12,
    coments: 4,
    time_comment: "11h ago"
  }
  public lista_filmes = new Array<any>(); // objeto do tipo javascript
  public page = 1;


  public nome_usuario: string = "dario franca do código";
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
  ) {

  }
  // popup de caregamento da página
  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    // alert(num1+num2);
  }
  // refresh de página
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();

  }
  // o que vai carregar a página
  ionViewDidEnter() { // "ionViewDidEnter" sempre que entrar na pagina carega a lista de filmes
    this.carregarFilmes();
  }

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
  }
  //infiniti scroll
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
    
  }

  carregarFilmes(newpage: boolean = false) {
    this.abreCarregando();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any)
        const objeto_retorno = JSON.parse(response._body) // body retorna page
        if (newpage) {
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          console.log(this.page);
          console.log(this.lista_filmes);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = objeto_retorno.results // já faz com que seja carregada a lista de filmes, pq results na documentação é a lista de filmes no json
        }



        this.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);


        this.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }

    )
  }

}
