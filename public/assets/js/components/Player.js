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

export default Player;