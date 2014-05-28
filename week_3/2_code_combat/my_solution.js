// I worked on this challenge by myself the first couple of challenges, and then with Stephanie Chou the rest of them.
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 

//Rescue Mission
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
 

//Grab the mushroom
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();


//Drink me
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 

//Taunt the guards
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

	//Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.moveDown();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.say("Attack");
this.say("Attack");
this.say("Follow me.");
this.moveRight();
this.moveUp();
this.moveRight();


//It's a trap
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();
this.say("Attack!");
this.say("Attack!");
 

//Taunt
this.say("Follow me!");
this.say("Hey");
this.say("Over here!");
this.say("Follow me");
 

//Cowardly taunt
	// Run your soldier out where the ogres can hear you.
this.moveXY(46,22);
	// Say something!
this.say("Hello!");
	// Then run back behind the arrow towers for safety.
this.moveXY(71,12);


//Commanding Followers
	// Saying anything with "follow" in it will get nearby soldiers
	// to follow you
this.say("Follow me!");
this.moveXY(60,34);

	// Saying anything with "attack" will send nearby troops into
	// a battle mode.
this.say("Attack everything!");


//Mobile Artillery
this.moveXY(47,43);
this.attackXY(50,70);
this.moveXY(47,39);
this.attackXY(47,48);
this.attackXY(68,55);
this.moveXY(40,39);
this.attackXY(52,47);

// Reflection:
// What is this referring to? This refers to the object to which we are applying the method.
// What does the () do in JavaScript? Between them we list the arguments. Even if there are no arguments we need to use them,
// because without them JavaScript interprets the method as a property instead.
// What is the point of the semicolons? To separate each statement or command.


// Write your reflection here.

//The code combat was really fun. I found very difficult to write the pseudocode after each time we failed, correct it, and then 
//write the code that would work. I definitely need to pseudocode more. Instead of jumping at the code, I need to analyze what I 
//need to do, write the pseudocode, and then code. I really liked that is was a game and not only reading, and writing.
//I enjoyed doing this challenge with Stephanie, is definitely much better and funnier than doing it alone.
