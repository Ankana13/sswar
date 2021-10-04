class Game{
    constructor(){
   this.l = 0;
   this.h = 0;
    }
    start(){
       
            form = new Form();
            form.display();
          form.hide();
        
            
    }
       play(){
            form.hide();
            console.log(gameState);
        bg.visible = true;
        counter = counter+1;

     
            boy.visible = true;
            boy.velocityY = boy.velocityY+0.5;
            if(keyDown("space")){
              boy.velocityY = -15;
         
            }
           
            boy.collide(earth);
            boy.collide(pGroup);
            boy.debug = true;
            earth.visible = true;
            earth.debug = true;
            if(counter>230&& earth.scale>=0){
                //     earth.width = earth.width -2;
                //     earth.height = earth.height -2;
                earth.scale = earth.scale-0.01;
            }
              
        //   image(s_img,0,0,displayWidth,displayHeight)
        // background(s_img);
          if(frameCount%140 === 0){
                  var r = Math.round(random(0,1))
     var paltform = createSprite(windowWidth,random(300,displayHeight),250,150);
         paltform.velocityX = -3;
         paltform.scale = 1.2;
         paltform.lifetime = width/2;
         paltform.debug = true;
         paltform.setCollider('rectangle',-20,10,180,20);
         pGroup.add(paltform);
         if(r === 0){

                 paltform.addImage(p1);
         }
         if(r === 1){
                paltform.addImage(p2);
                paltform.setCollider('rectangle',60,80,150,20);
        }

       // var l = Math.round(random(0,1))
        var points = createSprite(windowWidth,paltform.y-50,250,150);
        points.velocityX = -3;
        points.scale = 0.2;
        points.lifetime = width/2;
              points.debug = true; 

        if(this.l%2 === 0){
                points.addImage(c2);
                points.scale =0.1;
                coinGroup.add(points);
        }
        if(this.l%2 !== 0){
                points.addImage(c1);
                starGroup.add(points);

        }
      this.l =this.l+1;
          }
          if(boy.isTouching(starGroup)){
                Score = Score+2;
                starGroup.destroyEach();
        }
        if(boy.isTouching(coinGroup)){
                Score = Score+1;
                coinGroup.destroyEach();
        }



        
   drawSprites();
   text(Score,500,50);
 

        }
        secondplay(){
        rocket.visible = true; 
     rocket.velocityY =2;
if(frameCount%150 === 0){
        var b = Math.round(random(0,4))
        var blocks = createSprite(windowWidth,random(50,displayHeight),250,150);
        blocks.velocityX = -3;
        blocks.scale = 1.2;
        blocks.lifetime = width/2;
        blocks.debug = true;
        blocks.setCollider('rectangle',20,10,180,20);
        if(b === 0){

               blocks.addImage(b1);
               blocks.scale = 0.5;
        }
        if(b === 1){
               blocks.addImage(b2);
               blocks.scale =1;
               blocks.setCollider('rectangle',10,5,50,80);
       }
       if(b === 2){
               blocks.addImage(b3);
               blocks.scale =1.5;
               blocks.setCollider('rectangle',10,5,50,50);
       }
       if(b === 3){
               blocks.addImage(b4);
               blocks.scale = 1.5;
               blocks.setCollider('rectangle',80,8,50,20);
       }
       if(b === 4){
               blocks.addImage(b5);
               blocks.scale =1.5;
               blocks.setCollider('rectangle',10,8,50,80);
       }

    //   var h = Math.round(random(0,1))
//        var sscore = createSprite(windowWidth,random(50,displayHeight),250,150);
//        sscore.velocityX = -3;
//        sscore.scale = 1.2;
//        sscore.lifetime = width/2;
//        sscore.debug = true;
      
//        if(this.h%2 !== 0){

//               sscore.addImage(scoin);
//              blocks.scale = 0.5;
//        }
       
//        if(this.h%2 !== 0){
//                sscore.addImage(scoin2);
//                sscore.scale = 0.2;
//        }
//        this.h = this.h+1;

}

      

        }
        
    
}