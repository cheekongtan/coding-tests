//let match = require('./match.js');
let Match = require('./match.js');
let Player = require('./player.js');

let player1 = new Player('Dave');
let player2 = new Player('Tim');
console.log('player1',player1);
let playerMatch = new Match([player1, player2]);

//console.log('playerMatch',playerMatch);

/*
for(let i = 0; i < 6; i++){
    playerMatch.pointWonBy (player1.getId());
    playerMatch.pointWonBy (player1.getId());
    playerMatch.pointWonBy (player1.getId());

    playerMatch.pointWonBy (player2.getId());
    playerMatch.pointWonBy (player2.getId());
    playerMatch.pointWonBy (player2.getId());
}
playerMatch.showScore();
*/
playerMatch.pointWonBy(player2.getId());
playerMatch.pointWonBy(player2.getId());
playerMatch.pointWonBy(player2.getId());
playerMatch.pointWonBy(player2.getId());
playerMatch.pointWonBy(player2.getId());
playerMatch.pointWonBy(player2.getId());
playerMatch.showScore();

playerMatch.pointWonBy(player1.getId());
playerMatch.pointWonBy(player1.getId());
playerMatch.pointWonBy(player1.getId());
playerMatch.pointWonBy(player1.getId());
playerMatch.pointWonBy(player1.getId());
playerMatch.pointWonBy(player1.getId());
playerMatch.showScore();

playerMatch.pointWonBy(player2.getId());
playerMatch.pointWonBy(player2.getId());
playerMatch.showScore();

playerMatch.pointWonBy(player1.getId());
playerMatch.pointWonBy(player1.getId());
playerMatch.showScore();

playerMatch.pointWonBy(player1.getId());
playerMatch.showScore();

playerMatch.pointWonBy(player2.getId());
playerMatch.showScore();

playerMatch.pointWonBy(player2.getId());
playerMatch.showScore();

playerMatch.pointWonBy(player2.getId());
playerMatch.showScore();