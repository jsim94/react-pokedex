import "./Pokecard.css";

const Pokecard = ({ id, name, type, baseExperience }) => {
  return (
    <div className="Pokecard">
      <h4>{name}</h4>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <p>Type: {type}</p>
      <p>EXP: {baseExperience}</p>
    </div>
  );
};

export default Pokecard;
