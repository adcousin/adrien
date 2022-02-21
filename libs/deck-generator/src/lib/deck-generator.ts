export const CARDS_IN_DECK = 52;
export const CARDS_IN_DEAL = 2;
export const NBR_OF_PLAYERS = 2;

export function deckGenerator(): string {
  return 'deck-generator test to be done';
}

export interface Card {
  value: number;
  color: Color;
}

enum Color {
  DIAMONDS = 'DIAMONDS',
  HEARTS = 'HEARTS',
  CLUBS = 'CLUBS',
  SPADES = 'SPADES'
}

type Deck = Card[];

export function getDeck(): Deck {
  // Get max value of the cards in deck (52-cards or 32-cards deck)
  const values = (CARDS_IN_DECK / 4);
  // Create an empty deck
  const deck = [];
  // Loop on colors
  for (const color in Color) {
    // Subloop on values
      for (const value of [...Array(values).keys()]) {
      // Create one card
      const card:Card = {value: value, color: Color[color]};
      // Append the card to the deck
      deck.push(card);
    };
  };
  // Sort the deck by value then by color
  sortDeckByValue(deck);
  sortDeckByColor(deck);
  return deck;
}

export function sortDeckByValue(deck:Deck): Deck {
  deck.sort(function(a,b) {return a.value - b.value;});
  return deck;
}

export function sortDeckByColor(deck: Deck): Deck {
  deck.sort(function(a, b) {
    const nameA = a.color.toUpperCase();
    const nameB = b.color.toUpperCase();
    if (nameA < nameB) {return -1;}
    if (nameA > nameB) {return 1;}
    return 0;
  });
  return deck;
}

export function shuffleDeck(deck: Deck): Deck {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap via destructuring assignment
    [deck[i], deck[j]] = [deck[j], deck[i]];
    // Which is equivalent to
    // let t = array[i];
    // array[i] = array[j];
    // array[j] = t;
  }
  return deck;
}

export function dealDeck(deck: Deck, step: number): Deck[] {
  // Initialize players' decks
  const playerOneDeck: Deck = [];
  const playerTwoDeck: Deck = [];
  // Iterate over shuffled deck with a step corresponding to the number of cards given to a player at each turn
  for (let i = deck.length - 1; i >= 0; i-= step * 2) {
    // Deal step card(s) to the first player
    dealCards(deck, playerOneDeck, step);
    // Deal step card(s) to the second player
    dealCards(deck, playerTwoDeck, step);
    // Total 2 * step cards are distributed at the end of each loop
  }
  return [playerOneDeck, playerTwoDeck];
}

function dealCards(deck: Deck, playerDeck: Deck, step: number): Deck {
  // Based on the number of cards we deal at each turn, we take step cards from the deck and add them to a player's deck
  for (let j = 0; j < step; j++) {
    playerDeck.push(deck.pop());
  }
  return playerDeck;
}