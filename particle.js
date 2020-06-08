class Part {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 10;
      this.height = 10;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      ellipse(pos.x,pos.y,this.width,this.height);
      this.color= color(random(0,255),random(0,255),random(0,255));
     pop();
    }
  };