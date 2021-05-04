const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,iron,rubber;
sand1,sand2,sand3,sand4,sand5;
sand6,sand7,sand8,sand9,sand10;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(700,310,100,100);
    iron = new Iron(310,340);
    rubber = new Rubber (900,460,60);

    sand1 = new Sand1(500,450,10);
    sand2 = new Sand2(520,450,10);
    sand3 = new Sand3(525,450,10);
    sand4 = new Sand4(530,450,10);
    sand5 = new Sand5(535,450,10);
    sand6 = new Sand6(540,450,10);
    sand7 = new Sand7 (545,450,10);
    sand8 = new Sand8(550,450,10);
    sand9 = new Sand9 (555,450,10);
    sand10 = new Sand10(560,450,10);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
 
}