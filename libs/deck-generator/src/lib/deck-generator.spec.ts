import { deckGenerator, getDeck } from './deck-generator';

describe('getDeck', () => {
  it('should work', () => {
    const expectedDeck = [
      {value: 0, color: 'SPADES'}
      ,{value: 1, color: 'SPADES'}      
      ,{value: 2, color: 'SPADES'}
      ,{value: 3, color: 'SPADES'}
      ,{value: 4, color: 'SPADES'}
      ,{value: 5, color: 'SPADES'}
      ,{value: 6, color: 'SPADES'}
      ,{value: 7, color: 'SPADES'}
      ,{value: 8, color: 'SPADES'}
      ,{value: 9, color: 'SPADES'}
      ,{value: 10, color: 'SPADES'}
      ,{value: 11, color: 'SPADES'}
      ,{value: 12, color: 'SPADES'}
      ,{value: 0, color: 'DIAMONDS'}
      ,{value: 1, color: 'DIAMONDS'}      
      ,{value: 2, color: 'DIAMONDS'}
      ,{value: 3, color: 'DIAMONDS'}
      ,{value: 4, color: 'DIAMONDS'}
      ,{value: 5, color: 'DIAMONDS'}
      ,{value: 6, color: 'DIAMONDS'}
      ,{value: 7, color: 'DIAMONDS'}
      ,{value: 8, color: 'DIAMONDS'}
      ,{value: 9, color: 'DIAMONDS'}
      ,{value: 10, color: 'DIAMONDS'}
      ,{value: 11, color: 'DIAMONDS'}
      ,{value: 12, color: 'DIAMONDS'}
      ,{value: 0, color: 'HEARTS'}
      ,{value: 1, color: 'HEARTS'}      
      ,{value: 2, color: 'HEARTS'}
      ,{value: 3, color: 'HEARTS'}
      ,{value: 4, color: 'HEARTS'}
      ,{value: 5, color: 'HEARTS'}
      ,{value: 6, color: 'HEARTS'}
      ,{value: 7, color: 'HEARTS'}
      ,{value: 8, color: 'HEARTS'}
      ,{value: 9, color: 'HEARTS'}
      ,{value: 10, color: 'HEARTS'}
      ,{value: 11, color: 'HEARTS'}
      ,{value: 12, color: 'HEARTS'}
      ,{value: 0, color: 'CLUBS'}
      ,{value: 1, color: 'CLUBS'}      
      ,{value: 2, color: 'CLUBS'}
      ,{value: 3, color: 'CLUBS'}
      ,{value: 4, color: 'CLUBS'}
      ,{value: 5, color: 'CLUBS'}
      ,{value: 6, color: 'CLUBS'}
      ,{value: 7, color: 'CLUBS'}
      ,{value: 8, color: 'CLUBS'}
      ,{value: 9, color: 'CLUBS'}
      ,{value: 10, color: 'CLUBS'}
      ,{value: 11, color: 'CLUBS'}
      ,{value: 12, color: 'CLUBS'}
    ]
    expect(getDeck()).toEqual(expectedDeck);
  });
});
