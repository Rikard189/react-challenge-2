import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export default function PokeCard() {
  const { name, sprites, video } = mockPokemonData;

  return (
    <div class="pokemonCard">
      <h1>{name}</h1>

      <img src={sprites.front_default} alt={`${name} front default`} />

      <img src={sprites.front_shiny} alt={`${name} front shiny`} />

      <a href={video}>{name} video</a>
    </div>
  );
}
