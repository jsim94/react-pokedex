import { createHands } from "./helpers";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

const Pokegame = ({
  pokemon = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
}) => {
  const playerData = createHands(pokemon);
  const player1Cards = playerData.player1.cards;
  const player2Cards = playerData.player2.cards;

  // severe bug: players cards will swap hands while the card data is passed to the pokedex component. Console logging each playercards data in the Pokegame component will have different data when the same data is console logged in the pokedex component.

  const player1Score = player1Cards.reduce((i, val) => i + val.base_experience, 0);
  const player2Score = player2Cards.reduce((i, val) => i + val.base_experience, 0);

  console.log(player1Cards, player1Score);
  console.log(player2Cards, player2Score);

  const winner = player1Score > player2Score;

  return (
    <div className="Pokegame">
      <div>
        <h2>Player 1</h2>
        <Pokedex pokemon={player1Cards} isWinner={winner} />
      </div>
      <div>
        <h2>Player 2</h2>
        <Pokedex pokemon={player2Cards} isWinner={!winner} />
      </div>
    </div>
  );
};

export default Pokegame;
