class Box{


    constructor(x,y,w,h){

        var options = {

            restitution : 0.4,
            friction : 0.0
                        
        }

        this.width = w;
        this.height = h;
        
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
        this.Visibility = 255;
    }

    display(){

        
        console.log(this.body.speed);
        if(this.body.speed <2){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
        
        
      }
    }
}
       



        
    


    
