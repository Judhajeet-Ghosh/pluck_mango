class Stone {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            density: 1.2,
            restitution: 0,
            friction: 1
        }

        this.body = Bodies.rectangle(x,y,radius,options)
        this.radius = radius;
       
        World.add(world,this.body)
        this.image = loadImage("image/stone.png")
    }
    display(){
    //var angle = this.body.angle
    push();
    // translate(this.body.position.x,this.body.position.y);
    // rotate(angle)

   image(this.image,150,500 ,30,30)
    pop();
    }
}