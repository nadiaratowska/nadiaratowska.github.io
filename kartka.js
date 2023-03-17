

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// add a piece of text at position (120, 80)

loadSprite("kartka","zawieja.png")
loadSprite("balwan", "balwan.png")

loadSound("muzyka","cichanoc.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

const sanie = add([
    sprite("balwan"),
    pos(50,450)
])

let wprawo = true

onUpdate(()=>{
    
    if(wprawo && sanie.pos.x<1000)

    {
        sanie.pos.x=sanie.pos.x+1
    }

    else if(wprawo && sanie.pos.x==1000)

    {
        
        wprawo = false 
        
    }

    else if(!wprawo && sanie.pos.x>0)
    {
      
        sanie.pos.x=sanie.pos.x-1

    }

    else

    {
        
        wprawo = true
    
    }
})

onKeyPress("space", ()=>{
    play("muzyka")})

