const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var boy;
var tree;
var ground;
var stone;
var slingshot;

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 490, 800, 20);

	tree = new Tree(580, 250, 400, 500);

	mango1 = new Mango(600, 100, 50);
	mango2 = new Mango(700, 180, 60);
	mango3 = new Mango(550, 130, 39);
	mango4 = new Mango(650, 80, 30);
	mango5 = new Mango(450, 160, 57);
	mango6 = new Mango(720, 230, 32);
	mango7 = new Mango(525, 250, 46);
	mango8 = new Mango(638, 210, 64);
	mango9 = new Mango(520, 150, 35);
	mango10 = new Mango(620, 160, 53);


	stone = new Stone(50, 330, 30);

	boy = new Boy(100, 410, 150, 300);

	slingshot = new slingShot(stone.body, {
		x: 50,
		y: 350
	})


}


function draw() {
	rectMode(CENTER);
	background("lightblue");

	// Engine.run(engine);
	Engine.update(engine);

	ground.display();

	boy.display();

	tree.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	stone.display();

	slingshot.display();

	detectollision(stone, mango1);
	detectollision(stone, mango2);
	detectollision(stone, mango3);
	detectollision(stone, mango4);
	detectollision(stone, mango5);
	detectollision(stone, mango6);
	detectollision(stone, mango7);
	detectollision(stone, mango8);
	detectollision(stone, mango9);
	detectollision(stone, mango10);

	drawSprites();

}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {
		x: mouseX,
		y: mouseY
	})
}

function mouseReleased() {
	slingshot.fly()
}

function detectollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}

}