class Snake{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.body = [{            
            x : this.x,
            y : this.y,
            R : 0,
            G : 0,
            B : 0
        }]
    }
    getBody(){
        return this.body;
    }
    getHead(){
        return this.body[0];
    }
    getTail(){
        return this.body[this.body.length-1];
    }
    feedSnake(foodX, foodY){
        this.body.push({
            x : foodX,
            y : foodY,
            R : 0,
            G : 0,
            B : 0
        });
    }
    pushHead(X, Y){
        this.body.push({
            x : X,
            y : Y,
            R : 0,
            G : 0,
            B : 0
        })
    }
    popTail(){
        this.body.shift()
    }

}