class paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
    World.add(world, this.body);
    this.image=loadImage("paper.png")
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
   
      imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
      //rect(0,0, this.width, this.height);
      pop();
    }
  };
  














