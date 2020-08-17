var ball;
var database,position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballref = database.ref('ball/position');
    ballref.on("value",readPosition);
}

function draw(){
    background("white");
    if (position !== undefined) {
        
    if(keyDown("a")){
        changePosition(-1,0);
    }
    else if(keyDown("d")){
        changePosition(1,0);
    }
    else if(keyDown("w")){
        changePosition(0,-1);
    }
    else if(keyDown("s")){
        changePosition(0,+1);
    }
    drawSprites();
}
}
function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x + x,'y':position.y + y
    });
}
