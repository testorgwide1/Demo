import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service'; 	  //Bonus- not in tutorial



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
 })
export class HeroesComponent implements OnInit {
	
	heroes : Hero[];
	
	selectedHero: Hero;
	
	//ng injects HeroService into heroService, MessageService into messageService
	constructor(private heroService: HeroService, private messageService: MessageService) { }

	ngOnInit() {
		this.getHeroes();
	}
	
	getHeroes(): void {
		//Synchronous call
		//this.heroes = this.heroService.getHeroes();

		//Asynchrounous call
		// Observable.subscribe(): "...passes the emitted array to the callback, 
		//								which sets the component's heroes property."
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}
	
/*	
	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	  
	  //Bonus- not in tutorial
	  this.messageService.add('Selected hero '+hero.name+'('+hero.id+')' );
	}  
*/	
	

}
