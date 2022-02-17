export const CARDS_IN_DECK = 52;

export function deckGenerator(): string {
  return 'deck-generator';
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
  // For color in colors
  for (const color in Color) {
    // For value in values
      for (const value of [...Array(values).keys()]) {
      //[DEPRECATED] Get the color from Color object and assign to card_color
      /*
      let card_color: Color;
       switch (color) {
        case 'SPADES': card_color = Color.SPADES;break;
        case 'DIAMONDS': card_color = Color.DIAMONDS;break; 
        case 'CLUBS': card_color = Color.CLUBS;break; 
        case 'HEARTS': card_color = Color.HEARTS;break; 
      } 
      */
      // Create the Card
      const card:Card = {value: value, color: Color[color]};
      // Append the Deck
      deck.push(card);
    };
  };
  // Sort by value
  deck.sort(function(a,b) {return a.value - b.value;});
  // Sort by color 
  deck.sort(function(a, b) {
    const nameA = a.color.toUpperCase();
    const nameB = b.color.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return deck
}