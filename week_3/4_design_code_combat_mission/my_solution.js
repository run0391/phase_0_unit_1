// I worked [by myself, with:] on this challenge

// Your mission description:
// Tharin starts at the bottom left corner of a 5 by 5 grid.
// Mushrooms randomly generate on the grid, and Tharin has to collect three of these to increase his health and kill an ogre.
// Mushrooms will generate a message which indicates their location when they are generated.

// Pseudocode
//	SET count to 0
//	CREATE tharin javascript Object object
//		SET x location property to 1
//		SET y location property to 1 
//		INIT move right function
//			INCREMENT x location by 1
//		INIT move left function
//			DECREMENT x location by 1
//		INIT move up function
//			INCREMENT y location by 1
//		INIT move down function
//			DECREMENT y location by 1
//		SET tharin heatlh to 10
//	CREATE mushroom javascript Object object
//		SET x location property to random
//		SET y location property to random
//	WHILE count <= 10
//		OBTAIN user input
//		IF user input equals up,down,right,left
//			move tharin according to the input
//			print current tharinc coordinates
//			IF tharin coordinates are above 5,5 and below 1,1
//				INCREMENT or DECREMENT coordinate by 1
//				PRINT warning for user
//			IF tharin location = mushroom location
//				RESET muchroom location
//				PRINT congratulations
//				INCREASE tharin health by 10
//			IF tharin horizontal location or vertical location equals muchroom's vertical or horizontal location
//				PRINT user hint
//	IF tharin health >= 40 THEN 
//		PRINT end game message and count.

// Initial Code

var count = 0;

var tharin = {
	xLoc: 1,
	yLoc: 1,
	moveRight: function(){
		this.xLoc += 1;
	},
	moveLeft: function(){
		this.xLoc -= 1;
	},
	moveUp: function(){
		this.yLoc += 1;
	},
	moveDown: function(){
		this.yLoc -= 1;
	},
	hp: 10

};

var mushroom = {
	xLoc: Math.floor(Math.random()*5 + 1),
	yLoc: Math.floor(Math.random()*5 + 1)
};

while (count <= 10){
	var userAnswer = prompt("please enter right,left,up,down for tharin's movement");
	if (userAnswer == "up"){
		tharin.moveUp();
		if (tharin.yLoc > 5){
			tharin.yLoc -= 1;
			console.log("You can't move beyond the grid!");
		}
		console.log("Your current coordinates: [" + tharin.xLoc + "," + tharin.yLoc + "]");
	}
	else if(userAnswer == "down"){
		tharin.moveDown();
		if (tharin.yLoc < 1){
			tharin.yLoc += 1;
			console.log("You can't move beyond the grid!");
		}
		console.log("Your current coordinates: [" + tharin.xLoc + "," + tharin.yLoc + "]");
	}
	else if(userAnswer == "right"){
		tharin.moveRight();
		if (tharin.xLoc > 5){
			tharin.xLoc -= 1;
			console.log("You can't move beyond the grid!");
		}
		console.log("Your current coordinates: [" + tharin.xLoc + "," + tharin.yLoc + "]");
	}
	else if(userAnswer == "left"){
		tharin.moveLeft();
		if (tharin.xLoc < 1){
			tharin.xLoc += 1;
			console.log("You can't move beyond the grid!");
		}
		console.log("Your current coordinates: [" + tharin.xLoc + "," + tharin.yLoc + "]");
	}
	else {
		console.log("Please enter either right, left, up, or down");
		console.log("Your current coordinates: [" + tharin.xLoc + "," + tharin.yLoc + "]");
	}
	if (mushroom.xLoc == tharin.yLoc && mushroom.yLoc == tharin.yLoc){
		tharin.hp += 10;
		console.log("you've collected a mushroom!");
		mushroom.xLoc = Math.floor(Math.random()*5 + 1);
		mushroom.yLoc = Math.floor(Math.random()*5 + 1);
		console.log("New mushroom location : [" + mushroom.xLoc + "," + mushroom.yLoc + "]");
	}
	else if (mushroom.yLoc == tharin.yLoc){
		console.log("Try moving left or right!");
	}
	else if (mushroom.xLoc == tharin.xLoc){
		console.log("Try moving up or down!");
	}
	if(tharin.hp >= 40){
		console.log("Congratulations! u've collected 3 mushrooms in " + count + "turns!");
	}

	count += 1;
}


// Refactored Code

var count = 0;

var tharin = {
	xLoc: 1,
	yLoc: 1,
	moveRight: function(){
		this.xLoc += 1;
		count += 1;
	},
	moveLeft: function(){
		this.xLoc -= 1;
		count += 1;
	},
	moveUp: function(){
		this.yLoc += 1;
		count += 1;
	},
	moveDown: function(){
		this.yLoc -= 1;
		count += 1;
	}
};

var mushroom = {
	xLoc: Math.floor(Math.random()*5 + 1),
	yLoc: Math.floor(Math.random()*5 + 1),
	newMushroom: function(){
		this.xLoc= Math.floor(Math.random() * 5 + 1);
		this.yLoc= Math.floor(Math.random() * 5 + 1);
		console.log("New mushroom location : [" + mushroom.xLoc + "," + mushroom.yLoc + "]");
	}
};

while (count <= 10){
	var userAnswer = prompt("please enter right,left,up,down for tharin's movement");
	if (userAnswer == "up"){
		tharin.moveUp();
		if (tharin.yLoc > 5){
			tharin.yLoc -= 1;
			console.log("You can't move beyond the grid!");
		}
		console.log("Your current coordinates: [" + tharin.xLoc + "," + tharin.yLoc + "]");
	}
	else if(userAnswer == "down"){
		tharin.moveDown();
		if (tharin.yLoc < 1){
			tharin.yLoc += 1;
			console.log("You can't move beyond the grid!");
		}
		console.log("Your current coordinates: [" + tharin.xLoc + "," + tharin.yLoc + "]");
	}
	else if(userAnswer == "right"){
		tharin.moveRight();
		if (tharin.xLoc > 5){
			tharin.xLoc -= 1;
			console.log("You can't move beyond the grid!");
		}
		console.log("Your current coordinates: [" + tharin.xLoc + "," + tharin.yLoc + "]");
	}
	else if(userAnswer == "left"){
		tharin.moveLeft();
		if (tharin.xLoc < 1){
			tharin.xLoc += 1;
			console.log("You can't move beyond the grid!");
		}
		console.log("Your current coordinates: [" + tharin.xLoc + "," + tharin.yLoc + "]");
	}
	else if(userAnswer !== "up", "right", "down", "left"){
		console.log("Please enter either up, right, down, or left");
	}
	
}
if (mushroom.xLoc == tharin.yLoc && mushroom.yLoc == tharin.yLoc){
	tharin.hp += 10;
	console.log("you've collected a mushroom!");
	mushroom.newMushroom();
}
else if (mushroom.yLoc == tharin.yLoc){
	console.log("Try moving left or right!");
}
else if (mushroom.xLoc == tharin.xLoc){
	console.log("Try moving up or down!");
}
else if(tharin.hp >= 40){
	console.log("Congratulations! u've collected 3 mushrooms in " + count + "turns!");
}





// Reflection
// I'm still struggling to find out why my code doesn't work the way I inteded it to. I was struggling with this challenge during the past few days,
// but can't figure out what is wrong with it. I've came up with the objective of this game when pairing with someone, and found tackling this challenge to
// be more confusing when we were both being aggressive and adding more challenging objectives to it. I've tackled a similar problem a long time ago when 
// doing codeacademy tutorials making a snake game. I had to make arrays for x,y coordinates, but I wanted to try something different this time. However, 
// It seems like there is a problem with the if/else and while loop and I can't figure out what it really is. I've fiddled with the order of the if/else
// statement and while loop, but nothing seemed to work quite the way I wanted it to be. I thought I was 100% comfortable with if/else, but I realized 
// that I wasn't. It is still a valuable lesson I obtained, since I got to realize my vulnerabilities. 
// 
// 
// 
// 
// 
// 
// 
