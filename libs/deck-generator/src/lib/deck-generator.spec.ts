import { getDeck, shuffleDeck, dealDeck } from './deck-generator';
import { CARDS_IN_DECK, CARDS_IN_DEAL, NBR_OF_PLAYERS } from './deck-generator';
import { sortDeckByValue, sortDeckByColor } from './deck-generator';



describe('getDeck', () => {
  it('should work', () => {
    const expectedDeck = [
      {value: 0, color: 'CLUBS'}
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
      ,{value: 0, color: 'SPADES'}
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
    ]
    // Checked on the standard deck
    expect(getDeck()).toEqual(expectedDeck);
  });
});

describe('shuffleDeck', () => {
  it('should work', () => {
    const deck = getDeck();
    const shuffledDeck = shuffleDeck(deck);
    const expectedLength = CARDS_IN_DECK;
    const shuffledDeckWithoutDuplicates = [...new Set(shuffledDeck)];
    // Length is deck length (32, 52...)
    expect(shuffledDeck.length).toEqual(expectedLength);
    // shuffledDeck == deck once sorted
    expect(sortDeckByColor(sortDeckByValue(shuffledDeck))).toEqual(deck);
    // No duplicates in shuffledDeck
    expect(shuffledDeck.length).toEqual(shuffledDeckWithoutDuplicates.length);
  })
})

describe('dealCards', () => {
  it('should work', () => {
    const deck = getDeck();
    const shuffledDeck = shuffleDeck(deck);
    const dealtDeck = dealDeck(shuffledDeck, CARDS_IN_DEAL);
    // dealtDeack is an Array with the size of the nbr of players
    expect(dealtDeck.length).toEqual(NBR_OF_PLAYERS);
    for (const playerDeck of dealtDeck) {
      // Each player deck to have the proper number of elements
      expect(playerDeck.length).toEqual(CARDS_IN_DECK / NBR_OF_PLAYERS);
    }
  })
})
