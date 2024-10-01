import { motion } from 'framer-motion';
import { useState } from 'react';
import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import Search from '../Search/Search';
function Pokedex() {
   const [searchTerm, setSearchTerm] = useState('');

   return (
      <motion.div
         className="pokedex-wrapper"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      >
         <Search updateSearchTerm={setSearchTerm} />
         {!searchTerm ? (
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.3 }}
            >
               <PokemonList />
            </motion.div>
         ) : (
            <motion.div
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.4 }}
            >
               <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
            </motion.div>
         )}
      </motion.div>
   );
}

export default Pokedex;
