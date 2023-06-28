import { Component, OnInit } from '@angular/core';
import { PokemonInfo } from 'src/app/shared/models/pokemonInfo';
import { PokeInfoService } from 'src/app/shared/services/poke-info.service';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component implements OnInit {
  name: string = "";
  pokemonList: PokemonInfo[] = [];
  currentPage: number = 0;
  pageSize: number = 20;

  constructor(private _pokeInfoService: PokeInfoService) { }

  ngOnInit(): void {
    this.loadPokemonPage();
  }

  previousPage(): void {
    if (!this.isFirstPage()) {
      this.currentPage--;
      this.loadPokemonPage();
    }
  }

  nextPage(): void {
    if (!this.isLastPage()) {
      this.currentPage++;
    } else {
      this.currentPage = 0; // Revenir à la première page
    }
    this.loadPokemonPage();
  }

  isFirstPage(): boolean {
    return this.currentPage === 0;
  }

  isLastPage(): boolean {
    const totalPokemonCount = this.pokemonList.length;
    const lastPage = Math.floor(totalPokemonCount / this.pageSize);
    return this.currentPage === lastPage;
  }

  loadPokemonPage(): void {
    const offset = this.currentPage * this.pageSize;
    this._pokeInfoService.getPokemonList(offset, this.pageSize).subscribe(
      (response: any) => {
        this.pokemonList = response.results;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getPokemonDetails() {
    this._pokeInfoService.getName(this.name)
      .subscribe((pokemonInfo: PokemonInfo) => {
        console.log(pokemonInfo);
      });
  }
}
