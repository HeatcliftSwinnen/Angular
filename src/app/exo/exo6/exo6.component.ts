import { Component } from '@angular/core';
import { PokemonInfo} from 'src/app/shared/models/pokemonInfo';
import { PokeInfoService } from 'src/app/shared/services/poke-info.service';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component {
  name : string =""

  constructor(private _pokeInfoService : PokeInfoService){}

}
