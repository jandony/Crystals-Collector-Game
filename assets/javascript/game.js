// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
// Here's how the app works:

// There will be four crystals displayed as buttons on the page.
// Each crystal should have a random hidden value between 1 - 12.

// The player will be shown a random number at the start of the game.
// The random number shown at the start of the game should be between 19 - 120.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ------------------------------------------------------------------

// Option 1 Game design notes

// create variables to track
var wins = 0;
var losses = 0;
var goal = Math.floor(Math.random() * 500);
var score = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

// Create a function to start/reset the game
    function reset(){
        // update wins on the page
        wins = 0;
        // update losses on the page
        losses = 0;
        // create a new random number
        goal = Math.floor(Math.random() * 500)
        // update this on the page
        $("#goal").text(goal);
        // create new values for each crystal
        crystal1 = Math.floor(Math.random() * 100);
        crystal2 = Math.floor(Math.random() * 100);
        crystal3 = Math.floor(Math.random() * 100);
        crystal4 = Math.floor(Math.random() * 100);

        console.log("crysal1: " + crystal1);
        console.log("crysal2: " + crystal2);
        console.log("crysal3: " + crystal3);
        console.log("crysal4: " + crystal4);
        // reset score to 0
        score = 0;
        // update score on the page
        $("score").text(goal);
    }

// Create a function to test win/lose
    function test() {
        if (score === goal) {
            win++;
            $("#score").text("You Win!");
            // call reset function
            reset();
        }
        if (score > goal) {
            losses++;
            $("#score").text("You Suck!");
            // call reset function
            reset();
        }
    }

// The Game starts here with a start of a game reset function
    reset();

    // Create a click event for crystal 1
        $("#crystal-1").on("click", function (){
            // Grab the value of crystal that was clicked on
            console.log(crystal1);
            // Add that to the player's score
            $("#score").text(score + crystal1);
            
            // Call test function
            test();
        });
