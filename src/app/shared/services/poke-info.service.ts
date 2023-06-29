import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetails, PokemonInfo } from '../models/pokemonInfo';

@Injectable({
  providedIn: 'root'
})
export class PokeInfoService {

  private _urlBase: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private _httpClient: HttpClient) { }


  getPokemonList(url? : string): Observable<PokemonInfo> {
    if(url){
      return this._httpClient.get<PokemonInfo>(url);
    }
    return this._httpClient.get<PokemonInfo>(this._urlBase);
  }

  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this._httpClient.get<PokemonDetails>(url);
  }
}
