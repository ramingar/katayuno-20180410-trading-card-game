import Deck from './Deck';
import {pipe} from 'ramda';

const Player = function ({hand = [], life = 30, mana = 0, deck = Deck()} = {}) {

    const getHand             = () => hand;
    const getLife             = () => life;
    const getManaSlot         = () => mana;
    const getDeck             = () => deck.getDeck();
    const getCardFromDeck     = (currentCards, index) => deck.getCard(currentCards, index);
    const getDeckLength       = currentDeck => currentDeck.length;
    const getDeckLastIndex    = deckCardsCount => deckCardsCount - 1;
    const extractCardFromDeck = (currentCards, index) => deck.removeCard(currentCards, index);
    const setDeck             = currentCards => deck.setDeck(currentCards);

    const getRandomFrom        = max => min => Math.floor(Math.random() * (max - min + 1) + min);
    const toLastIndexOfDeck    = pipe(getDeck, getDeckLength, getDeckLastIndex);
    const getRandomIndexInDeck = () => getRandomFrom(0)(toLastIndexOfDeck);

    const extractCard = (cards, cardIndex = getRandomIndexInDeck()) => {
        const card = getCardFromDeck(cards, cardIndex);
        const deck = extractCardFromDeck(cards, cardIndex);

        return {card, deck, cardIndex};
    };

    const addCardToHand = ({card, hand, ...rest}) => {
        hand.push(card);
        return {card, hand, ...rest};
    };

    const getState = () => Object.freeze({hand: getHand(), life: getLife(), mana: getManaSlot(), deck: getDeck()});

    return Object.freeze({getLife, getManaSlot, getDeck, getState, extractCard, setDeck, addCardToHand});
};

export default Player;