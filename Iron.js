class Iron {
	constructor(x, y) {
	  var options = {
		'restitution': 0.8,
		'friction': 3,
		'density': 30,
	  };
	  this.body = Bodies.rectangle(x, y, 50,50, options);
	  this.width = 150;
	  this.height = 60;
	  World.add(world, this.body);
	};
	display(){
	  var pos = this.body.position;
	  
	  push();
	  translate(pos.x, pos.y);
	  strokeWeight(5);
	  stroke('red')
	  fill('white')
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	};
  };