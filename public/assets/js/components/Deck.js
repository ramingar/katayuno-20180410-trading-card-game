const Deck = function ({cards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8]} = {}) {

    const getDeck = () => cards;
    const setDeck = currentCards => cards = currentCards;
    const getCard    = (currentCards, index) => currentCards[index];
    const removeCard = (currentCards, index) => currentCards.filter((val, idx) => idx !== index);

    return Object.freeze({getDeck, setDeck, getCard, removeCard});
};

export default Deck;