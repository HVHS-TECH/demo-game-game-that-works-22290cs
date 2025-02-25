/*********************************************************/
//Game that works
//written by Charlea S.M.
/*********************************************************/

/*********************************************************/
//setup()
/*********************************************************/
const GAMEWIDTH = 500;
const GAMEHEIGHT = 500;
const MOVEMENTSPEED = 5;

function setup(){
    console.log("setup: ");
    cnv = new Canvas(GAMEWIDTH, GAMEHEIGHT);
    player = new sprite(10,10,10,10,'d');
    player.color = ('black');
    coins = new Group(coin);
}

/*********************************************************/
//draw()
/*********************************************************/
function draw(){
    background('blue');
    controls();
    coins.collides(player, );
    if(random(1,1000)>20){
        //create new coin
    }
    console.log(coins.length);
    for(i=0; i<coins.length; i++){
        console.log(coins[i].x);
    }
}
/*********************************************************/
//score()
/*********************************************************/
function score(){

}
/*********************************************************/
//checkCoinTime()
/*********************************************************/
function checkCoinTime(){

}
/*********************************************************/
//controls()
/*********************************************************/
function controls(){
    if (kb.pressing('left')) {
        // Set sprite's velocity to the left
        player.vel.x = -2;
    }

    else if (kb.pressing ('right')) {
        // Set sprite's velocity to the right
        player.vel.x = 2;
    };
    
    if (kb.released('left')) {
        // Set sprite's velocity to zero
        player.vel.x = 0;
    }
    else if (kb.released('right')) {
        // Set sprite's velocity to zero
        player.vel.x = 0;
    }
    if (kb.pressing('up')) {
        // Set sprite's velocity to the left
        player.vel.y = -2;
    }

    else if (kb.pressing ('down')) {
        // Set sprite's velocity to the right
        player.vel.y = 2;
    };
    
    if (kb.released('up')) {
        // Set sprite's velocity to zero
        player.vel.y = 0;
    }
    else if (kb.released('down')) {
        // Set sprite's velocity to zero
        player.vel.y = 0;
    }
}
/*********************************************************/
//END OF APP
/*********************************************************/