class Mango{

        constructor(x,y,r)
        {
            var options={
                isStatic: true,
                restitution: 0.1,
                friction:1,
                
            }
            this.x=x;
            this.y=y;
            this.r=r;
            this.body = Bodies.circle(this.x, this.y,this.r, options);
            
            
            this.image=loadImage("Plucking mangoes/mango.png")
            World.add(world,this.body)

        }
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0+12,this.r*2,this.r*2);
            pop();
          }
}