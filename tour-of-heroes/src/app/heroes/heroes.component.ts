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
    var itemsToSlice = [];

    this.heroes.forEach((item) => 
    { 
      if(!listToSort.includes(item.id))
      {
        var index = this.heroes.indexOf(item);
        if (index > -1) {
          itemsToSlice.push(item);
        } 
      }
    })

    itemsToSlice.forEach((item) =>
    {
      this.heroes = this.heroes.filter(function( obj ) {
      return obj.name !== item.name;
    });
    })
  }

  filter2()
  {
    this.getHeroes();
    var listToSort = [16, 17, 18, 19, 20];
    var itemsToSlice = [];

    this.heroes.forEach((item) => 
    { 
      if(!listToSort.includes(item.id))
      {
        var index = this.heroes.indexOf(item);
        if (index > -1) {
          itemsToSlice.push(item);
        } 
      }
    })

    itemsToSlice.forEach((item) =>
    {
      this.heroes = this.heroes.filter(function( obj ) {
      return obj.name !== item.name;
    });
    })
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