import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

//decorator function, specifies metadata for the component
@Component({
  //component CSS selector
  selector: 'app-heroes',
  //location component template file
  templateUrl: './heroes.component.html',
  //location component private CSS styles
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //definition of heroes
  heroes: Hero[];
  //name it
  selectedHero: Hero;

  //add a hero
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // removes a hero
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  //defines a private heroService property and identifies it as a HeroService injection site
  constructor(private heroService: HeroService) { }

  //lifecylce hook, calls after creating component
  ngOnInit() {
    this.getHeroes();
  }

  //gives back the heroes from the service
  getHeroes(): void {
    this.heroService.getHeroes()
      //assign clicked hero
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
