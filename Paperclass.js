class Paperclass{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

}
        Matter.Bodies.circle(150,50,40,options);
        World.add(world, this.body);
}
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
}
}