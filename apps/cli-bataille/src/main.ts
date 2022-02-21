import {deckGenerator, getDeck, shuffleDeck, dealDeck} from '@adrien/deck-generator'
import {CARDS_IN_DEAL} from '@adrien/deck-generator'

console.log(deckGenerator());
const deck = getDeck();
const shuffledDeck = shuffleDeck(deck)
const dealtDeck = dealDeck(shuffledDeck, CARDS_IN_DEAL);
// console.log("Deck from getDeck()\n",deck);
// console.log("Deck from shuffleDeck()\n",);
console.log("Decks of each two players\n", dealtDeck);