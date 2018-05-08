import test from 'tape';

const Player = function () {
    const INITIAL_LIFE      = 30;
    const INITIAL_MANA_SLOT = 0;

    const getLife = function () {
        return INITIAL_LIFE;
    };

    const getManaSlot = function () {
        return INITIAL_MANA_SLOT;
    };

    return Object.freeze({getLife, getManaSlot});
};

// TESTS ------------------------------------------------------------

test(`-------- Component: Testing player creation`, (assert) => {
    const messageLife      = `Returning his life`;
    const messageManaSlot  = `Returning his mana slot`;
    const expectedLife     = 30;
    const expectedManaSlot = 0;

    const player = Player();

    const actualLife     = player.getLife();
    const actualManaSlot = player.getManaSlot();
    assert.equal(expectedLife, actualLife, messageLife);
    assert.equal(expectedManaSlot, actualManaSlot, messageManaSlot);

    assert.end();
});
