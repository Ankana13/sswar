class Form{
    constructor(){
        this.button = createButton('Start');
        this.title = createElement('h2');
        this.button2 = createButton('How To Play');
       this.button3 = createButton('Human in Space');
       this.button4 = createButton('rocket in space');
    }
    hide(){
       
        this.button.hide();
        this.title.hide();
       this.button2.hide();
       this.button3.hide();
       this.button4.hide();
     
    }
    display(){
        if(gameState === 0){

        
        this.title.html("SpaceWars");
        this.title.position(windowWidth/2-200,windowHeight/8);
        this.title.style('font-size','80px');
        this.title.style('color','pink');

      
        this.button.position(windowWidth/2-100,windowHeight/2);
        this.button.style('width','200px');
        this.button.style('height','50px');
        this.button.style('background','yellow');

        this.button2.position(windowWidth/2-(-250),windowHeight/2+200);
        this.button2.style('width','150px');
        this.button2.style('height','30px');

        this.button2.style('background',' green');
        }
     if(gameState === 1){

        
        
        this.button3.position(windowWidth/2+100,windowHeight/2);
         this.button3.style('width','200px');
         this.button3.style('height','50px');
         
        this.button3.hide();

        this.button4.position(windowWidth/2+150,windowHeight/2);
        this.button4.style('width','200px');
        this.button4.style('height','50px');
        this.button4.hide();
     }
         this.button2.mousePressed(()=>{
           
          
           
            this.button3.hide();
            this.button4.hide();
        })
        this.button.mousePressed(()=>{
           gameState = 1;
            this.button.hide();
          this.title.hide();
          this.button2.hide();
          this.button3.position(windowWidth/2+50,windowHeight/2-50);
          this.button3.style('width','250px');
          this.button3.style('height','50px');
          this.button3.style('background','skyblue');
          this.button3.show();
      //  button3.display();
        
        this.button4.position(windowWidth/2-280,windowHeight/2-50);
        this.button4.style('width','250px');
        this.button4.style('height','50px');
        this.button4.style('background','skyblue');
        this.button4.show();
      button4.display();

            gameState = 2;
            console.log('n');
       })
       this.button3.mousePressed(()=>{
        this.button.hide();
        this.title.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        gameState = 2;
       })
       this.button4.mousePressed(()=>{
           gameState = 3;
           this.button.hide();
           this.title.hide();
           this.button2.hide();
           this.button3.hide();
           this.button4.hide();
       })
    }
    
}