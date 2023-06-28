import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInfo } from '../models/pokemonInfo';

@Injectable({
  providedIn: 'root'
})
export class PokeInfoService {

  private _urlName : string = "https://pokeapi.co"


  constructor(private _httpClient: HttpClient) { }


  getName(name:string):Observable<PokemonInfo>{
    return this._httpClient.get<PokemonInfo>(this._urlName+`?name=${name}`)
  }
}
