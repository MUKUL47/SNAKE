var ground, snake,node
var sizeX = 40,
    sizeY = sizeX
direction = 'RIGHT'
var food = false
function setup(){
    frameRate(10)
    createCanvas(800,800);
    snake  = new Snake(10, 10)
    node   = new Array();
    ground = new Ground(sizeX,sizeY)
    initNodes()
    node[ground.getFoodPosition().foodX][ground.getFoodPosition().foodY].setRGB(173,255,47) 
}
function draw(){
    background(0);
    updateSnakeBody()
    ground.render(node)
    move(direction) 
    if( gameOver() && !food ) noLoop()  
    food = false
}
function initNodes(){
    for( var j = 0; j < sizeX; j++ ){
        node.push([])
    }
    for( var i = 0; i < sizeX; i++ ){
        for( var j = 0; j < sizeY; j++ ){
            node[i].push(new Node(i,j))
        }
    }     
}
function updateSnakeBody(){
    snake.getBody().forEach((s)=>{ node[s.x][s.y].setRGB(255,0,0) })
}
function move(direction) {
    var X = snake.getTail().x,
        Y = snake.getTail().y     
    var x, y
    switch(direction){        
        case 'RIGHT':                         
            x = X
            y = Y+1                 
            break

        case 'LEFT':
            x = X
            y = Y-1              
            break

        case 'UP':
            x = X-1
            y = Y                                         
            break

        case 'DOWN':
            x = X+1
            y = Y               
            break   
    }
    checkFoodFound(x,y)
    snake.pushHead(x,y)
    node[snake.getBody()[0].x][snake.getBody()[0].y].setRGB(0,0,0)
    snake.popTail()   
}
function checkFoodFound(x, y){
    food = true;
    if( node[x][y].getR() == 173 && node[x][y].getG() == 255 && node[x][y].getB() == 47 ){
        ground.setNewFoodPosition()
        snake.body.push({
            x : x,
            y : y,
            R : 0,
            G : 0,
            B : 0
        })
        node[ground.getFoodPosition().foodX][ground.getFoodPosition().foodY].setRGB(173,255,47)
    }
}
function keyPressed(){
    switch(keyCode){
        case RIGHT_ARROW:
            direction = 'RIGHT'          
            break
        case LEFT_ARROW:
            direction = 'LEFT'         
            break
        case UP_ARROW:
            direction = 'UP'           
            break
        case DOWN_ARROW:
            direction = 'DOWN'            
            break   
    }
}
function gameOver(){
    for( var i = 1; i < snake.body.length; i++ ){
        if( snake.body[i].x ==  snake.getBody()[0].x && snake.body[i].y ==  snake.getBody()[0].y ) return true
    }
    return false
}