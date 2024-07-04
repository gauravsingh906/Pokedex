
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/UsePokemon";


  function PokemonList(){
    

    // const pokemonListState, setPokemonListState}=usePokemonList();    return as a object

    const [pokemonListState, setPokemonListState]=usePokemonList( false);   //hook return as a array
     
    return (<div className="pokemon-list-wrapper">
      <h1>Pokemon List</h1>
       <div className="pokemon-wrapper">
       {pokemonListState.isLoading?'loading......':
       pokemonListState.pokemonList.map
       ((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
       }
       </div>
       <div className="controls">
        <button disabled={pokemonListState.prevUrl==null} 
         onClick={() => setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.prevUrl})}
         >Prev</button>
        <button  disabled={pokemonListState.nextUrl==null} 
         onClick={() =>setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.nextUrl})}
         >Next</button>
       </div>

    </div>)

}
export default PokemonList;