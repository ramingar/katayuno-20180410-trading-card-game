import test from 'tape';

/*
const Deck = function ({deck:}) {

};
*/

const Player = function ({life = 30, mana = 0, deck = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8]} = {}) {
    const INITIAL_LIFE      = life;
    const INITIAL_MANA_SLOT = mana;
    const INITIAL_DECK      = deck;

    const getLife = function () {
        return life;
    };

    const getManaSlot = function () {
        return mana;
    };

    const getDeck = function () {
        return deck;
    };

    const withdraw = function ({index}) {
        return deck[index];
    };

    const getState = function () {
        return Object.freeze({life: getLife(), mana: getManaSlot(), deck: getDeck()});
    };

    return Object.freeze({getLife, getManaSlot, getDeck, getState, withdraw});
};

// TESTS ------------------------------------------------------------

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
    assert.equal(expectedLife, actualLife, messageLife);
    assert.equal(expectedManaSlot, actualManaSlot, messageManaSlot);
    assert.deepEquals(expectedDeck, actualDeck, messageDeck);

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
    assert.equal(expectedLife, life, messageLife);
    assert.equal(expectedManaSlot, mana, messageManaSlot);
    assert.deepEquals(expectedDeck, deck, messageDeck);

    assert.end();
});

test(`-------- Component: Testing withdraw`, (assert) => {
    const messageCard  = `Withdraw a card`;
    const randomIndex  = Math.floor(Math.random() * 20);
    const mockDeck     = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const expectedCard = mockDeck[randomIndex];

    const player = Player({deck: mockDeck});

    const withdraw = player.withdraw({index: randomIndex});
    assert.equal(expectedCard, withdraw, messageCard);

    assert.end();
});
