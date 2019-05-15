let Player = require('./player.js');
let Match = require('./match.js');

const onError = (operation, alternative) => {
    try {
        return operation();
    } catch (e) {
        return alternative;
    }
}

test('Successfully create a match with players without errors', ()=> {
    let player1 = new Player('Stefan'),
        player2 = new Player('Ralph');
    expect(onError(() => new Match([player1, player2]), false)).not.toBeFalsy();
})