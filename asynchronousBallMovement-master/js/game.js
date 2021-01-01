class Game{
    constructor(){

    }
    getState(){
        var gameStateref=database.ref("gameState")
        gameStateref.on("value",function(data){
            gameState=data.val()
        })
    }
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }
   async start(){
        if(gameState===0){
            player=new Player()
            var playerCountref=await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
                player.getCount();
            }

            
            
            form=new Form()
            form.display()
        }
    }
    play(){
        form.hide();
        textSize(30)
        text("GAME START",200,200)
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
           var displayPosition=130
           displayPosition+=20
           //for(var p=0;p<allPlayer.length;p++)
           for(var p in allPlayers){
               if(p==="player"+player.index){
                   fill("red")
               }
               else{
                   fill("black")
               }
           }
           textSize(20)
           text(allPlayers[p].name+":"+allPlayers[p].distance,120,displayPosition)

        }
        if(keyIsDown (UP_ARROW)&&player.index!==null){
            player.distance+=5
            player.update()
        }
    }
   
}
