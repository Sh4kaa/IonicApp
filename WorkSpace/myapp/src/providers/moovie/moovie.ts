import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
  getLatestMovies(page = 1) {
    return this.http.get( this.baseApiPath + `/movie/now_playing?page=${page}&api_key=17bdc4010e227c1eebd421e14d233524`);
  }

  getMovietDetails(filmeid) {
    return this.http.get( this.baseApiPath + `/movie/${filmeid}?api_key=17bdc4010e227c1eebd421e14d233524`);
  }

}
