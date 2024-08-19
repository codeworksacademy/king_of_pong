JavaScript fundamentals and the DOM
=====================================

<div align="center">
<img src="https://codeworks.blob.core.windows.net/public/assets/img/free-course.png" height="90" />
<img src="https://bcw.blob.core.windows.net/public/img/nav-logo.png" height="20" />
</div>

While some people just collect cards for fun, others see it as an investment oppurtunity. Regardless of which category you fall into, it's still fun to see what your collection might be worth.


### Goals

For this challenge we will utilize more complex data structures to flesh out the card collecting app from before. We will access data from an array of objects and calculate a total for our collection interacting with the *Document Object Model* (DOM) to show that data to the page.

After that we will add some functionality to our app, so that users can collect more cards to the ones we already have using JavaScript functions.

### Setup 

There is much less to set up this timer around.  We have the same files as we did in the last lesson, but they have changed a little. Cards have a count and a value, the count now being represneted by a new element on each card on the page. This number doesn't currently match in the JavaScript data but don't worry we will fix this soon enough.

This time around most of the work we will do will be in the JavaScript so lets start there.


## Requirements

### JS Fundamentals
- Using the array of team names, log `Cameroon Challengers vs Rwanda Rampage`
- Using the the Tournament object
  - log the title of the tournament
  - log the total prize of the tournament
### JS Collections
- Using the array of player `cards`
  - log each players win average (wins / matches)
  - log the total value of all the cards
### JS interacting with the DOM
- Using the `h1` element with the id `cards-value`, inject the total value of the cards
- Add `thorsten-count` and `georgie-count` ids to the appropriate cards' `h4` elements in the HTML
  - We will use these in the next step
### JS Functions
- Write a function that increases the count of Thorsten cards
  - add an onclick to our Thorsten card that calls this function
  - inject the count into `thorsten-count` element
- Write a function that increases the count of Georgie cards
  - add an onclick to our Gerorgie card that calls this function
  - inject the count into `georgie-card` element
- Write a function that re-calculates the total value of our collection
  - this draw the new total value to the `cards-value` element
  - this should run whenever the value of our collection changes (when we add a card)
### Refactoring
  - Write one function that will increase the count of either card, depending on which was clicked
    - this function will need to have a `parameter`
    - change the HTML onclicks to call this new function, passing the appropriate `arguments`
### Functional CSS
  - Create a CSS class called `clickable`
    - This should change the cursor to `pointer`
    - Apply this class to both of the `player-card`s
  - Create a CSS :pseudo rule for the `clickable` class
    - Apply a transform, translating the Y position of the card upward
    - Apply a box shadow, giving the illusion of the card lifting
  - Modify the `clickable` class
    - add a transition for `all` so the card animates between the two states