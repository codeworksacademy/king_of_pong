King of Pong
=====================================

<div align="center">
<img src="https://codeworks.blob.core.windows.net/public/assets/img/free-course.png" height="90" />
<img src="https://bcw.blob.core.windows.net/public/img/nav-logo.png" height="20" />
</div>

Welcome to the King Pong Equatorial Championship. Fans from all around the globe are watching online to witness this major event. Before the match starts however there are some problems with the system used to track the points for the teams. That's where you come in!


### Goals

Using the concepts from the technical prep lesson, finish up the King of Pong app with the required features and functionality by adding to the existing HTML, CSS, and JavaScript. There is some base code here that you should familiarize yourself with before you begin.


When you are ready, make sure the webview and console are open and start working through the requirements. Don't forget that each requirement will have tests that go along with it, that you will want to use to validate that the app fulfills the requirements.


## Requirements

We want to make sure the display for all the fans online looks appropriate. In addition, each team has requested their score cards are themed to their team's color.
> Something to note. The tests will click your elements for you. If you see "🤖", that means the tests are performing an automated action on your page.

### HTML CSS
- In the header, Add `King Pong Equatorial Championship` using the largest head tag.
    - Give it an `id` attribute with the value of `title`
- In CSS, using the `.scoreboard` rule
  - Change the display type to flex
  - space the score cards to have *even* space around them.
- In CSS, Create two new class rules, and add them to the appropriate `.score-card` divs in the header
  - One for Daring Durians, changing their score card's background to their team color
  - One for the Rambutan Rampage, changing their score card's background to their team color

Great now the display of the tournament is complete, we can move on to the functionality.

### JS Functions and HTML Events
- Create a scoring function for each player that will do the following
  - Adds 1 to the `points` property of the appropriate player object from the `players` array
  - Console logs that player's name and current `points`
  - add the HTML event attribute that will call each function once clicked to the appropriate `<img/>` tags
  - 💭 those player objects are in an array, so you will need to target their position in the array before you access their points

### Updating the DOM with JS
- Write a function to update the score cards
  - has two variables to store each team's points
  - Itterates over the players array
  - adding a players points to the appropriate team variable
  - updates the HTML score cards inner text with the appropriate scores
  - get's called anytime a player's score increases

Nice work! We are almost ready to start the tournament, the last thing we need to do is; Change the title on the page when one team reaches the score threshold of `21` announcing the winner of thise years tournament!

### Updating the DOM with Conditional
- Either add to your update function or write a new function that does the following
  - checks each teams accumulative score to see if either have reached 21 points
  - when 21 is reached by a team, changes the `<h1 id="title">` text to `[NAME OF TEAM] have WON!`

Great Job! Now the tournament can begin. Feel free to add any additional functionality you see fit, some idea's you could work with

### Extra goals
- Make sure only one team can win
  - either by disabling the scoreing of points when a winner is chosen or make sure the title only displays the winner one time.
- Extended play
  - A common rule, is that one team actaully has to not only reach 21 points, but also be leading by 2 points to win.
- Best of 5
  - Tournaments often use a "best of" match system, so a team will actually have to win multiple games to win.
  - Each team will need a variable to track the number of matches won.
  - Once a team wins a match we will have to reset each players score to 0.
  - Alter our win condition to watch for the number of matches instead of the number of points.
- Next Gen Graphics
  - Add some animations through CSS, so the players don't look so static.