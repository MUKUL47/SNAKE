class Node{
    constructor(x, y){
        this.x = x
        this.y = y
        this.R = 0
        this.G = 0
        this.B = 0
    }
    setRGB(R, G, B){
        this.R = R
        this.G = G
        this.B = B
    }
    getR(){ return this.R }
    getG(){ return this.G }
    getB(){ return this.B }
}