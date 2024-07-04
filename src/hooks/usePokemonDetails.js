import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./UsePokemon";

function usePokemonDetails(id, pokemonName){
    const [pokemon, setPokemon]=useState({});
    async function downloadPokemon(){
        try{
            let response;
            if(pokemonName){
                 response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            }
            else{
                 response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            }
        //   console.log("response individual pokemon", response.data)
          const pokemonOfSameType=await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types?response.data.types[0].type.name:""}`)
         console.log("similarType",pokemonOfSameType);
          setPokemon({
             name:response.data.name,
             height: response.data.height,
             weight: response.data.weight,
             image:response.data.sprites.other.dream_world.front_default,
             types: response.data.types.map((t)=>t.type.name),
             similarPokemons: pokemonOfSameType.data.pokemon.slice(0,5)
    
          })
          
        
        }
        catch(error){
            console.log("something error")
        }
        
    
    }
    useEffect(()=>{
  downloadPokemon()
      console.log("pokemon Details ", pokemon)
     
     }
    , []
    );
    return [pokemon];
}

export default usePokemonDetails;