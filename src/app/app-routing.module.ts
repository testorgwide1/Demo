import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
		{ path: 'heroes', component: HeroesComponent } ,
		{ path: 'dashboard', component: DashboardComponent } ,
		{ path: 'detail/:id', component: HeroDetailComponent } ,
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' } //default route since path = ''
		];

@NgModule({

	//Initialize the router and start listening for URL changes.	
	// forRoot() supplies all needed providers/directives for routing
	//
	imports: [ RouterModule.forRoot(routes)	],
	exports: [ RouterModule	], 	// Bonus- not in tutorial.  Without this will get error "'router-outlet' is not a known element"
	declarations: []
})
export class AppRoutingModule { }
