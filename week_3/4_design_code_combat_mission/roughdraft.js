
// Objective: Fill up health and kill ogre. 
// Pseudocode 
//  1. SET horizontal & vertical grid as an array
//  2. ASSIGN both grid length to 5.   
//  3. INIT tharin as literal
//      SET tharin horizontal and literal value to 0,0
//      SET tharin size to 1 (max 30)
//      SET tharin speed to 1
//      SET tharin attack to 10
//  5. INIT mushrooms 
//      ASSIGN horizontal & vertical property to middle of grid 
//      SET sizeIncrease to 2

/*var horizontal = [];
horizontal.length = 5;

var vertical = [];
vertical.length = 5;*/


var tharin = {
    x: 0,
    y: 0,
    size: 1,
    speed: 1,
    attack: 10,
    
    moveUp: function(){
        this.y += 1;
    },
    
    moveDown: function(){
        this.y -= 1;
    },
    moveRight: function(){
        this.x += 1;
    },
    moveLeft: function(){
        this.x -= 1;
    }
};


var mushrooms = {
    x: 2,
    y: 2,
    sizeIncrease: function(){
        if (tharin.x,tharin.y == this.x,this.y){
            tharin.size += 2;
        }
    }
};

tharin.moveUp();
console.log(tharin.x);




