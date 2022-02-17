export function deckGenerator(): string {
  return 'deck-generator';
}

export interface Card {
  value: number;
  color: Color;
}

enum Color {
  SPADES = 'SPADES',
  HEARTS = 'HEARTS',
  DIAMONDS = 'DIAMONDS',
  CLUBS = 'CLUBS'
}

type Deck = Card[]

export function getDeck(): Deck {
  // for value in 1-13
  // for color in ..
  return [{
    value: 2, color: Color.SPADES
  }]
}