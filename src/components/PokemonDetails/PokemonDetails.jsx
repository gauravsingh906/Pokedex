import { useParams } from "react-router-dom";
import './PokemonDetails.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({ pokemonName }) {
  const { id } = useParams();
  const [pokemon, pokemonListState] = usePokemonDetails(id, pokemonName);

  return (
    <div className="pokemon-details-wrapper">
      <div className="pokemon-card">
        {pokemon.image && (
          <img className="pokemon-details-image" src={pokemon.image} alt={pokemon.name} />
        )}
        <div className="pokemon-info">
          <h1 className="pokemon-details-name">{pokemon.name}</h1>
          <div className="pokemon-details-stats">
            <div className="pokemon-details-height">Height: {pokemon.height}</div>
            <div className="pokemon-details-weight">Weight: {pokemon.weight}</div>
          </div>
          <div className="pokemon-details-types">
            {pokemon.types && pokemon.types.map((type, index) => (
              <div key={index} className="pokemon-type">{type}</div>
            ))}
          </div>
        </div>
      </div>

      {pokemon.similarPokemons && (
        <div className="similar-pokemon">
          <h2>More {pokemon.types[0]} type Pokémon:</h2>
          <ul>
            {pokemon.similarPokemons.map((p) => (
              <li key={p.pokemon.url}>{p.pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
