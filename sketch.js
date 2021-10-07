var fighterjetImg;
var stone,stoneImg;
var bullet,bulletGroup;
var stone,stoneGroup;
var bg,bachground,bgImg;
var star,starImg;
var life=5
var score=0
var bulletSound
var blastsound;
var fighterjetblastsound;
var fighterjetblastImg;
var stoneblastImg
var star,starsound;
var gunfireImg;
var fj1Img,fj2Img,fj3Img,fj4Img,fj5Img,fjImg;
var scoreImg;
var gamestate="play"
var restartImmg;



function preload(){
    bgImg=loadImage("sbg1.jpg")
    fighterjetImg=loadImage("shooter2.png")
    stoneImg=loadImage("stone.png")
    starImg=loadImage("star.png")

    fj1Img=loadImage("fjs.png")
    fj2Img=loadImage("fjs.png")
    fj3Img=loadImage("fjs.png")
    fj4Img=loadImage("fjs.png")
    fj5Img=loadImage("fjs.png")
    scoreImg=loadImage("sc.png")
    gameoverImg=loadImage("gameOver2.png")
    restartImmg=loadImage("restart2.png")
    

    
    bulletSound=loadSound("bullet.mp3")
    fighterjetblastImg=loadImage("blast2.png")
    stoneblastsound=loadSound("blastsound.mp3")
    fighterjetblastsound=loadSound("fightersound.mp3")
    stoneblastImg=loadImage("blast2.png")
    gunfireImg=loadImage("gunfire98.png")
    starsound=loadSound("startouch.mp3")
    }
function setup(){

 createCanvas(900,580)
 background=createSprite(0,0,900,580)
 background.addImage(bgImg)
 background.scale=8 

    fighterjet=createSprite(450,400)
    fighterjet.addImage(fighterjetImg)
    fighterjet.scale=0.1
    fighterjet.debug=false
    fighterjet.setCollider("rectangle",0,0,1600,600)

    stoneGroup=new Group()
    starGroup=new Group()
    bulletGroup=new Group()
    stoneblastGroup=new Group()

    fighterjetblast=createSprite(450,400)
    fighterjetblast.addImage(fighterjetblastImg)
    fighterjetblast.scale=1
    fighterjetblast.visible=false

   stoneblast=createSprite(0,0)
   stoneblast.addImage(stoneblastImg)
   stoneblast.scale=1
   stoneblast.visible=false   

    fj1=createSprite(870,30)
    fj1.addImage(fj1Img)
    fj1.scale=0.9
    fj1.visible=false


    fj2=createSprite(830,30)
    fj2.addImage(fj2Img)
    fj2.scale=0.9
    fj2.visible=false

    fj3=createSprite(790,30)
    fj3.addImage(fj3Img)
    fj3.scale=0.9
    fj3.visible=false

    fj4=createSprite(750,30)
    fj4.addImage(fj4Img)
    fj4.scale=0.9
    fj4.visible=false

    fj5=createSprite(710,30)
    fj5.addImage(fj5Img)
    fj5.scale=0.9
    fj5.visible=false

    scoreboard=createSprite(820,100)
    scoreboard.addImage(scoreImg)
    scoreboard.scale=0.3

  
    gameover=createSprite(430,300)
    gameover.addImage(gameoverImg)
    gameover.scale=2
  
    restart=createSprite(450,200)
    restart.addImage(restartImmg)
    
}
  
      

   function draw(){
 
    if(gamestate=="play"){        

       restart.visible=false
        gameover.visible=false
        fighterjet.visible=true
    
    background.velocityY=6
 if(background.y > 700 ){
 background.y=background.height/2
    }
   
    if(keyDown('UP')){

    fighterjet.y-=4
    fighterjetblast.y-4} 

if(keyDown('DOWN')){
    fighterjet.y+=4
    fighterjetblast.y+=4}

if(keyDown('Left')){
    fighterjet.x-=4
    fighterjetblast.x-=4}

if(keyDown('Right')){
    fighterjet.x+=4
    fighterjetblast.x+=4}

    if(keyWentDown('space')){
        bullet=createSprite(fighterjet.x-1,fighterjet.y-65,7,5)
        bullet.velocityY=-10
        bulletGroup.add(bullet)
        bullet.addImage(gunfireImg)
        bullet.scale=0.5
        bulletSound.play() }   
        
        if(stoneGroup.isTouching(fighterjet)){
            for(i=0;i<stoneGroup.length;i++){
                if(stoneGroup[i].isTouching(fighterjet)){
                    
                    stoneblastsound.play()
                    fighterjetblast.visible=true
                     stoneGroup[i].destroy()
                           life=life-1 }  }  }
        
        if(stoneGroup.isTouching(bulletGroup)){
            for(i=0;i<stoneGroup.length;i++){
                if(stoneGroup[i].isTouching(bulletGroup)){
                    stoneblast.visible=true
                    stoneblastsound.play()
                    stoneGroup[i].destroy()
                    bulletGroup.destroyEach()
                    stoneGroup.destroyEach()
                    stone.destroy()
                    bullet.destroy()
                    stoneblast.visible=true
                    score++  }   }   }
                          
        stone1()
        star1()
        stoneblast1()
    
    if(starGroup.isTouching(fighterjet)){
        for(i=0;i<starGroup.length;i++){
            if(starGroup[i].isTouching(fighterjet)){
                starGroup[i].destroy()
                starsound.play()
                    star.destroy()
                    life= life+1  }  }   }
            
    
                    if(life==5){
                        fj1.visible=true
                        fj2.visible=true
                        fj3.visible=true
                        fj4.visible=true
                        fj5.visible=true
                    }
                    
                        if(life==4){
                            fj1.visible=true
                            fj2.visible=true
                            fj3.visible=true
                            fj4.visible=true
                            fj5.visible=false
                        }
                    
                        if(life==3){
                            fj1.visible=true
                            fj2.visible=true
                            fj3.visible=true
                            fj4.visible=false
                            fj5.visible=false
                            
                        }
                      
                        if(life==2){
                            fj1.visible=true
                            fj2.visible=true
                            fj3.visible=false
                            fj4.visible=false
                            fj5.visible=false
                        }
                    
                        if(life==1){
                            fj1.visible=true
                            fj2.visible=false
                            fj3.visible=false
                            fj4.visible=false
                            fj5.visible=false
                        }
                    
                        if(life==0){
                            fj1.visible=false
                            fj2.visible=false
                            fj3.visible=false
                            fj4.visible=false
                            fj5.visible=false
                         }
                         
                       
                            
                        }
                        
                    
                       
                        if(life==0){
                            gamestate="end"
                            if(gamestate=="end"){

                             //   textSize(50)
  //  fill("red")
   // text("Press (R) to  Restart",250,200 )
                               restart.visible=true
                                gameover.visible=true
                               
                                star.destroy()
                                stone.destroy()
                                fighterjet.visible=false
                               
                                    if(keyWentDown('R')){
                                    gamestate="play"
                                    reset() }   }  }


                              
    drawSprites()

    
       if(life==5){
        starGroup.visible=false
        starGroup.destroyEach()
        }

    textSize(48)
    fill("black")
    
    if(score<10){
        text(+score,810,118)

    }else {text(+score,790,118) }



    
                


    fighterjetblast.visible=false
    stoneblast.visible=false    
}

function stone1(){
    if(frameCount%50==0){
        stone=createSprite(random(200,600),random(5,10),20,20)
        stone.addImage(stoneImg)
        stone.velocityY=5
        stone.scale=0.3
        stone.lifetime=800
        stoneGroup.add(stone)
        stone.debug=false }  }

function stoneblast1(){
    if(frameCount%50==0){
        stoneblast=createSprite(random(200,600),random(5,10),20,20)
        stoneblast.addImage(stoneblastImg)
        stoneblast.velocityY=10
        stoneblast.lifetime=400
        stoneblastGroup.add(stoneblast)
        stoneblast.debug=false
        stoneblast.visible=false  }   }

function star1(){
    if(frameCount%300==0){
        star=createSprite(random(100,800),random(2,5),20,20)
        star.addImage(starImg)
        star.velocityY=15
        star.scale=0.09
        star.lifetime=400
        starGroup.add(star)
        star.debug=false  } }

function reset(){
    life=5
    gamestate="play"
    score=0
}


