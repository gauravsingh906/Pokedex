import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";


  //   const [pokemonList, setPokemonList]= useState([]);
  //   const [isLoading, setIsLoading]=useState(true);

  //  const [pokedexUrl, setPokedexUrl]= useState("https://pokeapi.co/api/v2/pokemon");
  //  const [nextUrl, setNextUrl]=useState("");
  //  const [prevUrl, setPrevUrl]=useState("");
  // use  object of single useState to handle multiple usestate
function usePokemonList(type){
    const [pokemonListState, setPokemonListState]=useState({
        pokemonList:[],
        isLoading:true,
        pokedexUrl:`https://pokeapi.co/api/v2/pokemon`,
        nextUrl:"",
        prevUrl:""
     })

     async function downloadPokemons(){
        // setIsLoading(true);
        setPokemonListState({...pokemonListState, isLoading:true});
           
        const response = await axios.get(pokemonListState.pokedexUrl);  // this downloads a list of 20 pokemon URLs
        
        const pokemonResults = response.data.results;  // we get an array of pokemon from the result
        console.log("response ise", response.data.pokemon)  
        console.log(response.data, "next Url")
        console.log(pokemonListState)
        // setNextUrl(response.data.next);
        setPokemonListState((state)=>({
          ...state, 
          nextUrl:response.data.next, 
          prevUrl: 
          response.data.previous}))
          // setPrevUrl(response.data.previous);
     // iterating over the array of pokemon and using their URLs to create an array of promises
         
        const pokemonResultPromise = pokemonResults.map((pokemon) => 
            axios.get(pokemon.url));
          // using Promise.all to wait for all the promises to resolve
          const pokemonData = await Promise.all(pokemonResultPromise);
          console.log(pokemonData);
    
          // now iterate on the data of each pokemon and extract id, name, image, types
          const pokeListResult = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
              id: pokemon.id,
              name: pokemon.name,
              image: pokemon.sprites.other.dream_world.front_default,
              types: pokemon.types,
            };
          });
          console.log(pokeListResult);
          setPokemonListState((state)=>(
            {...state,
               pokemonList:pokeListResult,
                isLoading:false}))
        // setPokemonList(pokeListResult);
        //   setIsLoading(false);
        }
      
        useEffect(() => {
        downloadPokemons();
      }, [pokemonListState.pokedexUrl]);
  
    
    //   return {pokemonListState, setPokemonListState};  we also return in object but in built in hook it's array
      return [pokemonListState, setPokemonListState];    //return as array in hooks type
    
}

export default usePokemonList;