class Ball extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,50,50);
    this.image = loadImage("sprites/b.png");
    this.trajectory =[];
  }

 display(){
  var ball = this.body.position;
	  var angle = this.body.angle;		
      push()
	  translate(ball.x, ball.y);
	  rotate(angle);
	  rectMode(CENTER)
      //strokeWeight(4);
	  fill(255,0,255)
	  imageMode(CENTER);
	  image(this.image, 0,0,50, 50)
	  ellipse(0,0,this.r, this.r);
    pop()

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
     
    }

};