# Web Game IV

This is an activity for FSWD Lesson 5.3.6- Callback Functions

Please refer to the Activity Guide in Canvas for directions.

1) Inspect the Starter Code
We have made one simple but important change to our code base since last working on this web game: we have split our code, putting each function in its own file.

The code in each file will run in the following order:

newImage.js
newItem.js
newInventory.js
move.js
index.js
As you re-familiarize yourself with the code for our game, answer the following questions:

What type of HTML element represents our character?
A div
A p
A document
<!-- An img -->

What style property (or properties) will we need to update to "move" the character?
x, y
position
display
<!-- left, bottom -->

2) Write a moveCharacter Function
When we are finished, the player should be able to move the character by pressing the arrow keys. In other words, when the user presses the up arrow, the character should move up. If the player then presses the right arrow, the character should switch directions and move right.

Since the direction of our character will change, we will need to track it with a variable:

It will also be helpful to keep track of the character's current position with the following variables:

Now we can think through the logic that would move the character image based on the current direction. For example, if the character is moving west, then x (the distance between the character and the left side of the screen) should decrease:

If the direction is north, what should change?
x should increase
<!-- y should increase -->
y should decrease
x should decrease

If the direction is east, what should change?
<!-- x should increase -->
y should increase
y should decrease
x should decrease

If the direction is south, what should change?
x should increase
y should increase
<!-- y should decrease -->
x should decrease

We will finish by using x and y to update the character's left and bottom properties. We are left with the following:

The only real problem with this logic is that it runs once (when the page loads and our character should be standing still). We need it to run repeatedly, so the character moves continuously when the direction is not null.

There is a function in JavaScript called setInterval that can help with this. The setInterval function takes a callback function as its first argument and a certain number of milliseconds as its second argument. It then calls the callback repeatedly, waiting the specified number of milliseconds between each call.

To use it, let's wrap the logic we want to run repeatedly in a function:

We then will pass that function to setInterval:

At this point, you should be able to move the character by changing the direction in your console. Open the console in your browser and run:

The character should move steadily from left to right.

Rather than defining moveCharacter and referencing it by name to pass it to setInterval, we could define the function inline similarly to how we have passed addEventListener callback functions:

This will run exactly the same as our previous logic. Feel free to use whichever approach you prefer. Just be careful not to call the function while passing it.

This will not work.

3) Change the Character's Direction with Arrow Keys
Now that we can move the character by setting the direction variable, let's use event listeners to change the direction whenever the user presses one of the arrow keys. There is a DOM event we can listen for named keydown, which will fire anytime the user presses a key:

Notice we are using another callback function here. The addEventListener receives the inline function we are passing, calls it whenever the event we specify fires, and passes in the e object as an argument.

Recall "e" is an object containing details about the event that fired.
Inside our callback function, we will need to check which key was pressed. We can do this using e.key. We will check e.key and, depending on its value, change the character's direction accordingly:

Before moving on, we will add one last line:

The keydown event fires multiple times as long as a user holds down a key. To make our logic simpler, we will use this line to skip any repeat events.

At this point, you should be able to open the browser, press any of the arrow keys, and see the character start to move across the screen. However, when you release the key, the character probably keeps moving.

We need one more event listener to stop the character when the user releases a key:

Now, the character should move with the arrow keys intuitively.

4) Refactoring Our Code
The code for using arrow keys to move an image is exciting, but it currently is written so it can affect only our character image. What if we decide later that the player can switch characters and control some other image with the arrow keys? We would need to duplicate these event listeners and the setInterval callback. That's not ideal, so let's refactor our code into the move function. This will allow us to use it on any image.

First, let's define another function inside of move and attach it to the object we return:

Next, copy the original logic from the index inside of moveWithArrowKeys. Note: We will need to replace character with element in a few places and stop hard-coding the element's starting position:

Delete this same logic from the index and instead use the withArrowKeys function:

The character should move just as before. Try using this logic with another image, like the tree:

By modifying just part of this line, we have completely changed the tree's behavior. Refactoring our code can give us the ability to change a lot of functionality with very little effort. Before moving forward, change the tree back to the way it was.

5) Responding to a Character's Direction Change
The last addition to our game is to modify the character's image when it changes direction so it appears to walk. In our assets folder, we already have several .gifs of our green character walking in different directions. To change the character's appearance, we just need to update its src attribute. We can do this conditionally based on the direction variable defined earlier:

There are two problems with this logic:

It will only run once (when the page loads and the character is standing still).
The direction is not in scope here.
We don't want this logic to run once when the page loads. We also don't want it to run constantly with setInterval. We want the logic to run when the character changes direction.

The character's direction doesn't change in this part of our code but rather inside of the move function. We don't want to change the element's src in move, because move could be targeting anything. For example, we wouldn't want our moving tree to change into a green character as soon as it starts moving left.

This is where it would be useful for move to call back to where the character is created, alerting this part of our code to the fact that the element has changed direction so it can change the character's src.

Let's start by wrapping our logic in a function and then passing that function to withArrowKeys:

Next, accept this function as a parameter inside of moveWithArrowKeys:

Then, call the callback where we change the direction variable:

Note: We have named this parameter "callback," but it is a parameter like any other. You can name it whatever you want. To test this concept, try using a more descriptive name, like "handleDirectionChange" or "onDirectionChange."
If you test your code and attempt to move your character at this point, you will probably see an error that looks like this:


This is because direction still isn't in scope where we define handleDirectionChange. However, direction is in scope where we call handleDirectionChange. Therefore, we can pass it as an argument:

We can also accept it as a parameter:


Now, you should be able to move the character using your arrow keys and see it change animations, appearing to walk.

6) Bonus
If you have time, try enhancing your game with the following deliverables:

Currently, if you make the tree moveable with arrow keys, you will probably see an error in the console warning that "callback is not a function." We aren't passing a callback, because we don't need to respond to the tree changing directions. Use an if statement inside of move to only call callback if it is passed.
Currently, a player can make the character walk past the edges of the screen. Add some if conditions to the setInterval callback to prevent this.
Currently, the character can walk under things, even when it appears it should be in front of them. Read the z-index documentation. (You can set this with JavaScript by changing element.style.zIndex and using it to make the character appear to be above the other images, only disappearing behind one when the character walks north far enough to be behind the image.)