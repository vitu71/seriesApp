import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Movie } from '../interfaces/Movie.interface';
import { Header } from '../interfaces/Header.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ControllerAppService {
  urlGeneralSearch: string = "https://api.tvmaze.com/search/shows?q=";
  urlGenders: string = "http://api.tvmaze.com/shows?genre=";
  urlShowDetail: string ="https://api.tvmaze.com/shows/"
  _listOfMovies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  _showDetail$: BehaviorSubject<Movie> = new BehaviorSubject<any>([]);
  _headerData$: BehaviorSubject<Header> = new BehaviorSubject<Header>({ title: '' });

  constructor(private httpClient: HttpClient) { }

  fetchListByGender(selectedGenre:string) {
   this.resetBehaviourList();
    this.httpClient.get<any[]>(this.urlGenders+selectedGenre).subscribe(shows => { 
     shows = shows.filter(show => show.genres.find((genre: string) => genre === selectedGenre));
      this._listOfMovies$.next(shows);
    });
    
  }
  fetchListByGeneralSearch(name: string) {
   this.resetBehaviourList();
    this.httpClient.get<any[]>(this.urlGeneralSearch+name).subscribe(movies => { 
      const foundShows:Movie[] = movies.map((element) => element.show );
      this._listOfMovies$.next(foundShows) });
  }
  fetchShowDetail(showSelected:number):void {
    this.httpClient.get<Movie>(this.urlShowDetail+showSelected).subscribe(show => { this._showDetail$.next(show) });
  }
  resetBehaviourList(){
   this._listOfMovies$ = new BehaviorSubject<Movie[]>([]);
  }
  sortList(){
     return this._listOfMovies$.pipe(
      map(shows => 
        shows.sort((showA,showB)=> showB.rating.average - showA.rating.average ))
        );
  }
  //Añadí el any para que funcionara la libreria de paginación
  get showsByGender(): Observable<Movie[] | any> {
    return this._listOfMovies$.asObservable();
  }
  get showDetail(): Observable<Movie> {
   return this._showDetail$.asObservable();
  }
  getHeaderTitle() {
    return this._headerData$.asObservable();
  }
  setTitle(title: string) {
    let headerTitle: Header = { title: ''};
    if (title) {
      headerTitle.title = title;
      this._headerData$.next(headerTitle);
    }
  }

}
