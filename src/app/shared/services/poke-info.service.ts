import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInfo } from '../models/pokemonInfo';

@Injectable({
  providedIn: 'root'
})
export class PokeInfoService {

  private _urlBase: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private _httpClient: HttpClient) { }

  getName(name: string): Observable<PokemonInfo> {
    return this._httpClient.get<PokemonInfo>(`${this._urlBase}/${name.toLowerCase()}`);
  }

  getPokemonList(offset: number = 0, limit: number = 20): Observable<any> {
    const url = `${this._urlBase}?offset=${offset}&limit=${limit}`;
    return this._httpClient.get<any>(url);
  }
}
