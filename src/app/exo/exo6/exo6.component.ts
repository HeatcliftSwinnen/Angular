import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonDetails, PokemonInfo } from 'src/app/shared/models/pokemonInfo';
import { PokeInfoService } from 'src/app/shared/services/poke-info.service';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component implements OnInit {

  pokemonList: PokemonInfo = { next: '', previous: '', results: [] };
  selectedPokemon!: PokemonDetails

  constructor(private _pokeInfoService: PokeInfoService) { }

  ngOnInit(): void {
    this.loadPokemonPage();
  }

  previousPage(): void {
    if (this.pokemonList.previous !== null) {
      this._pokeInfoService.getPokemonList(this.pokemonList.previous).subscribe(value => this.pokemonList = value)
    }
  }

  nextPage(): void {
    if (this.pokemonList.next !== null) {
      this._pokeInfoService.getPokemonList(this.pokemonList.next).subscribe(value => this.pokemonList = value)
    }
  }
  loadPokemonPage(): void {
    this._pokeInfoService.getPokemonList().subscribe(value => this.pokemonList = value);
  }

  selectPokemon(url: string): void {
    this._pokeInfoService.getPokemonDetails(url).subscribe({
      next: (value: PokemonDetails) => {
        this.selectedPokemon = value;
      }

    });
  }
}
