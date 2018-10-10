/*
USE ARROW KEYS TO NAVIGATE THE SNAKE 
In checkGameOver if(2) is not working needs correction
*/
boolean firstMove=true,foundFood=false,firstFood=true,firstSnake=false;;

boolean Continue=true;
int hi=75,hj=75,foodi,foodj,prevMove=0;;
ArrayList<String> HI = new ArrayList<String>();
ArrayList<String> HJ = new ArrayList<String>();
int time;
int wait = 2000;
void setup() {
  size(150, 150); 
  stroke(255);     
  frameRate(60); 
  time = millis();
}

void draw() { 
  //if(HI.size()<6){
  //frameRate(60); 
  //}else{frameRate(1); }
  background(0);
      Iterate();
      
}

void moveSnake(){
moveBody();
//will check if head hits the food with the difference <= the food coordinates
if(abs(hi-foodi)<=10 && abs(hj-foodj)<=10 ){
HI.add(hi+"");
HJ.add(hj+"");
firstFood=true;
putFood();
}


}
void putFood(){
//put the new food coordinates ! = all the snake body fragments coordinates
while(firstFood){
foodi=(int)random(2,140);
foodj=(int)random(2,140);
if(!HI.contains(foodi) || !HJ.contains(foodj) ){break;}
}
firstFood=false;
ellipse(foodi, foodj, 8, 8);
}

void showSnake(){
//print the snake body fragments from the arrayList
for(int i=0;i<HI.size();i++){
if(i==HI.size()-1){fill(204, 102, 0);}
rect(Integer.parseInt(HI.get(i)+""),Integer.parseInt(HJ.get(i)+""),8,8);

}
}
void checkGameOver(){
//print(HI.get(HI.size()-1));
//if(1) to check if the head hits the wall of the screen/dimensions
if(Integer.parseInt(HI.get(HI.size()-1)+"")>=140 || 
   Integer.parseInt(HI.get(HI.size()-1)+"")<=0 ||
   Integer.parseInt(HJ.get(HJ.size()-1)+"")>=140 ||
   Integer.parseInt(HJ.get(HJ.size()-1)+"")<=0 )
{
  print("GAMEOVER!!");text("GAME OVER!!", 40, 75); 
  print("\nSCORE : "+(HI.size()-1));
  noLoop();
}
//if(2) the head hits the body fragments(arrayList) of the snake 
for(int i=0;i<HI.size()-1;i++){
if(HI.get(0)==hi+"" && HJ.get(0)==hj+""){
  print("GAMEOVER!!");text("GAME OVER!!", 40, 75); 
  print("\nSCORE : "+(HI.size()-1));
  noLoop();
}
}

}
void moveBody(){
//(inLoop()) move the coordinates of the head with respect to the keyCode

putFood();
if(HI.size()!=0){
checkGameOver();
HI.remove(0);
HJ.remove(0);

}
if(firstMove){prevMove=keyCode; firstMove=false;}

//doesnt allow head to move to back direction only 90deg left or right

if(keyCode == RIGHT && prevMove!=LEFT){hi+=1;prevMove=keyCode;}
else if(prevMove!=LEFT){hi+=1;}

if(keyCode == LEFT  && prevMove!=RIGHT){hi-=1;prevMove=keyCode;}
else if(prevMove!=RIGHT){hi-=1;}

if(keyCode == DOWN  && prevMove!=UP){hj+=1;prevMove=keyCode;}
else if(prevMove!=UP){hj+=1;}

if(keyCode == UP    && prevMove!=DOWN){hj-=1;prevMove=keyCode;}
else if(prevMove!=DOWN){hj-=1;}



HI.add(hi+"");  HJ.add(hj+"");
showSnake();
strokeWeight(4);
}

void Iterate(){
  //show the first head of the snake at start of the game denoted by a rectangle
putFirstHead();      
      moveSnake();
      text("Score : "+(HI.size()-1), 12, 12); 
}
void putFirstHead(){
  //show the food denoted by a cirlce
  if(!firstSnake){
  hi=(int)random(1,140);
  hj=(int)random(1,140);
 
  firstSnake=true;  
} rect(hi,hj,8,8);
}
