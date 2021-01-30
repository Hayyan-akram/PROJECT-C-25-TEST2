class Paper{

    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    this.image = loadImage("sprites/paper.png");
    }

    display(){
        var pos = this.body.position;
       
        
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }

}