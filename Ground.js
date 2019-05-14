class Ground{
    constructor(width, height){
        this.width  = width
        this.height = height 
        this.foodX = Math.floor(random(40)) 
        this.foodY = Math.floor(random(40))
    }
    setNewFoodPosition(){
        this.foodX = Math.floor(random(5,40),random(40))
        this.foodY = Math.floor(random(5,40),random(40))
        print(this.foodX+","+this.foodY)
    }
    getFoodPosition(){
        return {foodX : this.foodX, foodY : this.foodY}
    }
    render(Nodes){
        for( var i = 0; i < this.width; i++){
            for( var j = 0; j < this.height; j++){ 
                fill(Nodes[i][j].getR(),Nodes[i][j].getG(),Nodes[i][j].getB());
                rect(j*20,i*20,20,20);
            }
        }
    }
}