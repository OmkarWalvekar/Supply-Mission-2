class Box{
    constructor(x,y,width,height){
        var opts_body = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,opts_body);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display()
    {
        

       
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        
      
    }
}