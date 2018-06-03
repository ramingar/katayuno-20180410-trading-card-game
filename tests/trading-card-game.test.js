import test from 'tape';
import Player from '../public/assets/js/components/Player';
import Deck from '../public/assets/js/components/Deck';

test(`-------- Component: Testing player creation`, (assert) => {
    const messageLife      = `Returning his life`;
    const messageManaSlot  = `Returning his mana slot`;
    const messageDeck      = `Returning his entire deck`;
    const expectedLife     = 30;
    const expectedManaSlot = 0;
    const expectedDeck     = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];

    const player = Player();

    const actualLife     = player.getLife();
    const actualManaSlot = player.getManaSlot();
    const actualDeck     = player.getDeck();
    assert.equal(actualLife, expectedLife, messageLife);
    assert.equal(actualManaSlot, expectedManaSlot, messageManaSlot);
    assert.deepEquals(actualDeck, expectedDeck, messageDeck);

    assert.end();
});

test(`-------- Component: Testing player initial state`, (assert) => {
    const messageLife      = `Returning his life`;
    const messageManaSlot  = `Returning his mana slot`;
    const messageDeck      = `Returning his entire deck`;
    const expectedLife     = 30;
    const expectedManaSlot = 0;
    const expectedDeck     = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];

    const player = Player();

    const {life, mana, deck} = player.getState();
    assert.equal(life, expectedLife, messageLife);
    assert.equal(mana, expectedManaSlot, messageManaSlot);
    assert.deepEquals(deck, expectedDeck, messageDeck);

    assert.end();
});

test(`-------- Component: Testing we can select a card`, (assert) => {
    const messageCard  = `Select a card`;
    const randomIndex  = Math.floor(Math.random() * 20);
    const mockDeck     = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const expectedCard = mockDeck[randomIndex];

    const deck = Deck();

    const card = deck.getCard(mockDeck, randomIndex);
    assert.equal(card, expectedCard, messageCard);
    assert.end();
});

test(`-------- Component: Testing Deck can extract a card`, (assert) => {
    const messageCard        = `Extract a card`;
    const randomIndex        = 3;
    const mockDeck           = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const expectedCollection = [0, 0, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];

    const deck = Deck();

    const currentCardsCollection = deck.removeCard(mockDeck, randomIndex);
    assert.deepEqual(currentCardsCollection, expectedCollection, messageCard);
    assert.end();
});

test(`-------- Component: Testing random withdraw`, (assert) => {
    const messageNumberCards   = `Deck must have one card less in its collection after a random withdraw.`;
    const messageCardExtracted = `Testing resulting card...`;
    const cards                = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const deckMock             = Deck({cards});

    const player                  = Player({deckMock});
    const {cardIndex, deck, card} = player.extractCard(player.getDeck());
    const newCards                = cards.filter((val, idx) => idx !== cardIndex);
    player.setDeck(deck);

    const playerDeck = player.getDeck();
    assert.deepEqual(playerDeck, newCards, messageNumberCards);
    assert.deepEqual(card, cards[cardIndex], messageCardExtracted);
    assert.end();
});

test(`-------- Component: Testing first hand`, (assert) => {
    const messageNumberCards    = `Player must have three cards in his first hand.`;
    const expectedNumberOfCards = 3;

    const player = Player();

    const {card1} = player.extractCard(player.getDeck());
    let hand      = player.getState().hand;  // cambiar el hand para que no esté acoplado
    player.addCardToHand({card1, hand});

    const {card2} = player.extractCard(player.getDeck());
    player.addCardToHand({card2, hand});

    const {card3} = player.extractCard(player.getDeck());
    player.addCardToHand({card3, hand});

    const currentPlayerHand = player.getState().hand;
    assert.equal(currentPlayerHand.length, expectedNumberOfCards, messageNumberCards);
    assert.end();
});

/*
test(`-------- Component: Testing game state`, (assert) => {
    const messageTurn    = `Testing turn.`;
    const messagePlayers = `Testing players.`;
    const expectedTurn = 3;

    const player = GameController();


    const currentPlayerHand = player.getState().hand;
    assert.equal(currentPlayerHand.length, expectedNumberOfCards, messageNumberCards);
    assert.end();
});
*/

/*
test(`-------- Component: Testing player receives one mana slot each turn`, (assert) => {
    const messageNumberCards    = `Testing player `;
    const expectedNumberOfCards = 3;

    const player = Player();

    const currentPlayerHand = player.getState().hand;
    assert.equal(currentPlayerHand.length, expectedNumberOfCards, messageNumberCards);
    assert.end();
});
*/
