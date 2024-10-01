import "./Pokemon.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function Pokemon({ name, image, id }) {
  return (
    <motion.div
      className="pokemon"
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down when tapped
      transition={{ duration: 0.2 }} // Smooth transition
    >
      <Link to={`/pokemon/${id}`} className="pokemon-link">
        <div className="pokemon-name">{name}</div>
        <img className="pokemon-img" src={image} alt={name} />
      </Link>
    </motion.div>
  );
}

export default Pokemon;
