const generateId = () => Math.random().toString(36).substr(2, 9);

class Player {
    constructor(name){
        this._id = generateId();
        this._name = name;
    }

    getName (){
        return this._name
    };

    getId(){
        return this._id;
    }
}


module.exports = Player;