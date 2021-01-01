class Form{
    constructor(){
        this.title=createElement('h2')
        this.input=createInput("").attribute("placeHolder","name")
        this.button=createButton("play")
        this.button2=createButton("reset")
        this.greeting=createElement('h2')
        
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display(){
       
        this.title.html("car racing game")
        this.title.position(130,100);
       
        this.input.position(130,160);
        
        this.button.position(250,200);
        this.button2.position(500,100);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("welcome "+player.name)
            this.greeting.position(130,160)
        })
        this.button2.mousePressed(()=>{
            game.updateState(0)
            player.updateCount(0)
            clear()
            game.start()
        })
            
    }
}
