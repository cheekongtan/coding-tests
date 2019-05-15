let Player = require('./player.js');

describe('Creating a new player sucessfully where', () => {
    test('new player receives correct name', ()=> {
        const name = 'Stefan';
        let testPlayer = new Player(name);
        expect(testPlayer.getName()).toMatch(name)
    });

    test('new player has an id', ()=> {
        const name = 'Stefan';
        let testPlayer = new Player(name);
        expect(testPlayer.getId()).toBeDefined();
    });
});
