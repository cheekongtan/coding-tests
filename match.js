const points = [
    {
        value: 1,
        label: '0'
    },
    {
        value: 2,
        label: '15'
    },
    {
        value: 3,
        label: '30'
    },
    {
        value: 4,
        label: '40'
    },
    {
        value: 4,
        label: 'Advantage'
    },
    {
        value: 5,
        label: 'Game'
    }
]


class Match {

    constructor(players){
        this._playersById = {};
        this._allPlayersId = [];
        this._isTieBreak = false;
        this._isSetWon = false;

        players.map(player => {
            let id = player.getId();
            let contestant = {
                id: id,
                name: player.getName(),
                score: 0,
                point: {...points[0]}
            }

            this._playersById[id] = contestant;
            this._allPlayersId.push(id);
        });
    }

    pointWonBy(id) {
        if(!this._isSetWon){
            if(!this._isTieBreak){
                this._addPointRegularRules(id);
                this._hasTieBreak();
            } else {
                this._addPointTieBreakRules(id);
            }
        }

        this._hasWinSet(id);
    }

    showScore() {
        const   player1 = this._playersById[this._allPlayersId[0]],
                player2 = this._playersById[this._allPlayersId[1]],
                DUECE = 'Duece',
                ADVANTAGE = 'Advantage';
        const   player1score = player1.score,
                player2score = player2.score,
                player1PointValue = player1.point.value,
                player2PointValue = player2.point.value,
                player1PointLabel = player1.point.label,
                player2PointLabel = player2.point.label;

        let playerScores = player1score + '-' + player2score;

        let pointNotification =  ', ';
        if(player1PointValue === 4 && player2PointValue === 3){
            pointNotification += ADVANTAGE + ' by ' + player1.name;
        } else if (player1PointValue === 3 && player2PointValue === 4){
            pointNotification += ADVANTAGE + ' by ' + player2.name;
        } else if (player1PointValue === 3 && player2PointValue === 3) {
            pointNotification += DUECE;
        } else if (player1PointValue > 0 || player2PointValue > 0){
            pointNotification += player1PointLabel + '-' + player2PointLabel;
        } else {
            pointNotification = '';
        }

        console.log(playerScores + pointNotification);
    }

    _hasTieBreak() {
        const   player1 = this._playersById[this._allPlayersId[0]],
                player2 = this._playersById[this._allPlayersId[1]];

        if(player1.score === 6 && player2.score === 6){
            this._isTieBreak = true;
            player1.point = {value: 0, label: '0'};
            player2.point = {value: 0, label: '0'};
        }
    }

    _hasWinSet(id){
        const oponentId = this._allPlayersId.find((element) => id != element);
        let opponent = this._playersById[oponentId],
            winningPlayer = this._playersById[id];
        const scoreDiff = Math.abs(opponent.score - winningPlayer.score);

        if(!this._isTieBreak){
            if(winningPlayer.score === 6 && scoreDiff >= 2){
                console.log(winningPlayer.name + ' has won the set');
                this._isSetWon = true;
            }
        } else {
            if(winningPlayer.score === 7){
                console.log(winningPlayer.name + ' has won the set');
                this._isSetWon = true;
            }
        }
    }

    _addPointRegularRules(id) {
        const oponentId = this._allPlayersId.find((element) => id != element);
        let opponent = this._playersById[oponentId],
            winningPlayer = this._playersById[id];
        const nextPoint = this._getNextPoint(winningPlayer.point);

        if(opponent.point.value === 4 && nextPoint.value === opponent.point.value ){
            opponent.point = {...points[2]};
            winningPlayer.point = {...points[2]};
        } else if(nextPoint.value >= 4 && (nextPoint.value - opponent.point.value) >= 2) {
            opponent.point = {...points[0]};
            winningPlayer.point = {...points[0]};
            winningPlayer.score ++; 
        } else {
            winningPlayer.point = nextPoint;
        }
    }

    _addPointTieBreakRules(id) {
        const oponentId = this._allPlayersId.find((element) => id != element);
        let opponent = this._playersById[oponentId],
            winningPlayer = this._playersById[id];
            winningPlayer.point.value++;
            winningPlayer.point.label =  winningPlayer.point.value.toString();
            
            if(winningPlayer.point.value >= 7 && Math.abs(winningPlayer.point.value - opponent.point.value) >= 2){
                winningPlayer.score ++;
                winningPlayer.point.value = 0;
                winningPlayer.point.label = winningPlayer.point.value.toString();
                opponent.point.value = 0;
                opponent.point.label = opponent.point.value.toString();
            }
    }

    _getNextPoint(currentPoint) {
        let result = {...currentPoint};
    
        for(let point of points){
            const value = point.value;
            if(result.value < value){
                result = {...point};
                break;
            }
    
        }
        return result;
    }
}

module.exports = Match;