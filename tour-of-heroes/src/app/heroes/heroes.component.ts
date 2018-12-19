import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debug } from 'util';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
 
export class HeroesComponent implements OnInit {
 
  heroes: Hero[];
  selectedHero: Hero;
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  remove(hero: Hero): void {
    const index: number = this.heroes.indexOf(hero);
    if (index !== -1) {
      this.heroes.splice(index, 1);
  }   
  }

  filter1()
  {
    this.getHeroes();
    var listToSort = [11, 12, 13, 14, 15];

    this.heroes = this.heroes.filter(x =>  listToSort.includes(x.id));
  }

  filter2()
  {
    this.getHeroes();
    var listToSort = [16, 17, 18, 19, 20];

    this.heroes = this.heroes.filter(x =>  listToSort.includes(x.id));
  }

  public setHeroes(heroes: Hero[])
  {
    this.heroes = heroes;
  }

  public getCurentHeroes()
  {
    return this.heroes;
  }
}