import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//**NB: Order matters, must import observable assets before app components 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES	 } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

	private heroesUrl = 'api/heroes';  // URL to web api

	  constructor(private http: HttpClient,
				private messageService : MessageService) { }
	  
	  
	      
	  getHeroes(): Observable<Hero[]> {
		this.messageService.add('Heroservice fetching heroes');
	
		//return of (HEROES); //uses "of()" function in RxJS
		
		//uses HttpClient.get, which returns Observable (which is still RxJS)
		return this.http.get<Hero[]>(this.heroesUrl)
			.pipe(catchError(this.handleError('getHeroes', []))
			); 
	  }
	  
	  getHero(id: number): Observable<Hero> {
		  this.messageService.add(`HeroService: fetched hero id=${id}`);
		  
		  return of(HEROES.find(hero => hero.id === id));
	  }
	  
	  private log(message: string) {
		this.messageService.add('HeroService: ' + message);
	  }
	  
	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	 
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	 
	    // TODO: better job of transforming error for user consumption
	    this.log(`${operation} failed: ${error.message}`);
	 
	    // Let the app keep running by returning an empty result.
	        return of(result as T);
	      };
	    }
  

}
