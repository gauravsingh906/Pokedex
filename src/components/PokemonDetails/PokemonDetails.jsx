import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokemonDetails.css'
import usePokemonList from "../../hooks/UsePokemon";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({pokemonName}){
   const {id}=useParams();
   const[pokemon, pokemonListState]=usePokemonDetails(id, pokemonName);
  
   return (
    <div className="pokemon-details-wrapper">
         <img className="pokemon-details-image" src={pokemon.image}></img>
        <div className="pokemon-details-name"><span>{pokemon.name}</span></div>
       
        <div className="pokemon-details-name">Height: {pokemon.height}</div>
        <div className="pokemon-details-name">Weight: {pokemon.weight}</div>
        <div className="pokemon-details-types">
          
          {pokemon.types&&pokemon.types.map((t)=><div key={t}>{t}</div>)}

        </div>
       {pokemon.similarPokemons&& <div>
          more {pokemon.types[0]} type pokemon
          <ul>
    
            {pokemon.similarPokemons.map((p)=>
              <li key={p.pokemon.url}>{p.pokemon.name}</li>
            )} 


          </ul>
        </div>}
    </div>
   )
}
export default PokemonDetails;