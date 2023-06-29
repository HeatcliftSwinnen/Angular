export interface PokemonInfo {
  next: string
  previous: string
  results : Pokemon[]
}

export interface Pokemon {
  name : string;
  url : string;
}

export interface PokemonDetails {
  name : string;
  id: number;
  sprites: PokemonSprite
  description: string;
  weight: number;
  height: number;
}
export interface PokemonSprite{
  front_default: string
  back_default: string
}
