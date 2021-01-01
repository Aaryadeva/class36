var gameState=0;
var database,playerCount,form,player,game,allPlayers;

function setup(){
    createCanvas(500,500);
    //the game database is the database of firebase
    database=firebase.database()
    game=new Game()
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
}

