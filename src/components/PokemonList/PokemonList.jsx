import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/UsePokemon";
import { motion } from 'framer-motion';

function PokemonList() {
  const [pokemonListState, setPokemonListState] = usePokemonList(false); // Hook returns an array

  return (
    <div className="pokemon-list-wrapper">
      <h1>Pokemon List</h1>
      <div className="pokemon-wrapper">
        {pokemonListState.isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          pokemonListState.pokemonList.map(p => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            </motion.div>
          ))
        )}
      </div>
      <div className="controls">
        <button
          disabled={pokemonListState.prevUrl === null}
          onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.prevUrl })}
        >
          Prev
        </button>
        <button
          disabled={pokemonListState.nextUrl === null}
          onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.nextUrl })}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
