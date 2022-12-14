function createHands(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return { player1: { cards: cards.slice(0, 4) }, player2: { cards: cards.slice(4, 8) } };
}

export { createHands };
