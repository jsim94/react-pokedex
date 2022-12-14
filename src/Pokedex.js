import "./Pokedex.css";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemon, isWinner }) => {
  const winner = isWinner ? <h2 className="Pokedex-winner">Winner!</h2> : undefined;

  return (
    <div className="Pokedex">
      <div className="Pokedex-container">
        {pokemon.map((i) => (
          <Pokecard id={i.id} name={i.name} type={i.type} baseExperience={i.base_experience} />
        ))}
      </div>
      {winner}
    </div>
  );
};

export default Pokedex;
