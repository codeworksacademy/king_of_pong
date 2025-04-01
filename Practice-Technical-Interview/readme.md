The Doubles Tournament
======================

![doubles-mock](https://course.codeworksacademy.com/web-foundations/unit-02/pong-doubles.png)

In this course you will be attempting to recreate the mock in the image above. The videos up to this point have taken a direct walkthrough approach, however in this challenge we are going to give you some instructions and tasks and let you see how far you can get. 

> If you don't hit the mock perfectly don't fret. This is all about learning and there will be a solutions video where we will walk you through everything in the picture above.

Be sure to use the instructions here and the developer tools tasks and hints. Remember to have fun and as always good luck!

### Goals

Students will perform the following to demonstrate their knowledge of HTML/CSS and JavaScript

1. **HTML - Placing the Content**
  - Render to the page in the largest heading `Doubles Tournament`
  - Add an element with the id `teams` to the page.
    - Nested within the `teams` element you will add three additional elements *take these one at a time*.
    - Add an element with the classes `team`, and `daring-durians`
    - Add an element with the class `versus` and add the versus image to this element  
    - Add an element with the classes `team`, and `rambutan-rampage`    
  - Inside of each of the team elements you will need to render the team name in *italics*
  - Render an image element for `Thorsten` and `Yubi` from the images folder for team `Daring Durians`
  - Render an image element for `Georgie` and `Sprinkles` from the images folder for team `Rambutan Rampage`
2. **CSS - Styling the Page**
  - Apply the following styles
    - Change the page background to use the variable `--page-bg`
    - Change the All font on the page to `Tahoma`
    - Change the All font on the page to use the text color `--text`
    - Center the Doubles Tournament Heading 
    - Center the versus image 
    - Change the border of the two team elements to use their `color` and the `double` style
    - Change the `display` type of the `team` element to `flex`
      - You can play with the alignment and justify to get the right look here...
3. **Creating and using variables**
  - Create a variable called `points` and set the value to `11`
  - Increment the value of `points` by 10 and log it to the console
4. **Creating and using Loops**
  - Loop through the numbers 1 to the value of `points`
  - Modify the loop to now include `'swap servers'` when the number is a multiple of `4` ( 🧩 use % )
  - When the number reaches 21 log `'Good Match'`
5. **Accessing properties on an object**
  - Using the tournament Object, log `'<Name of tournament'>, first to <best of matches number> wins.` replacing the < > with the appropriate data
6. **Working with an array of objects**
  - Loop through each item in the `players` logging their `name` and `wins` in this format `name: wins`
  - Calculate and Log the total of points for each team with their name. The output must be logged to match the following format
    - `Team Name: 0`
