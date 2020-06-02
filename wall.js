class Wall {
    constructor(x,y,width,height,angle){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x=x
        this.y=y
        this.width = width
        this.height = height
        Matter.Body.setAngle(this.body, angle);
      
        this.body = Bodies.rectangle(x, y, width, height, options, angle);
        World.add(world, this.body);
    }

}
