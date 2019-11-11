import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //a hero property
  @Input() hero: Hero;

  //save the values in private fields 
  constructor(
    // holds informationabout the route
    private route: ActivatedRoute,
    //gets hero data from the remote server, use it to get hero-to-display
    private heroService: HeroService,
    //interacting with the browser(navigate)
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    //route.snapshot-->static image of the route information, paraMap--> dictionary of route parameter values
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  // go one step back in history of the browser
  goBack(): void {
    this.location.back();
  }

  //persists hero name changes using the hero service updateHero() method and then navigates back to the previous view
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}