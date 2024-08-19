Getting Started with Web Applications
=====================================

<div align="center">
<img src="https://codeworks.blob.core.windows.net/public/assets/img/free-course.png" height="90" />
<img src="https://bcw.blob.core.windows.net/public/img/nav-logo.png" height="20" />
</div>

In this introduction students will become familiar with the basics of the three primary languages that are used to make Web Applications. These languages are `HTML`, `CSS`, and `JavaScript`. 

### Goals

For this challenge we will focus on familiarizing you with the basics of the code editor and required syntax for each of the languages specified above. 

We will also focus on showing you the Dev-Tools and testing process we can use to evaluate code within a project and the common practice within software development of `red`, `green`, `refactor` or test driven development.

### Setup 

There are a few files that have already been created and linked together for this assignment, they are your `index.html`, the `style.css` and the `script.js`. You will work across these three files to complete a series of tests/requirements as you set out to build this first application. Please look at them before getting started, there is some code in the files already.

To get started open up the `index.html` and uncomment the heading element then run the project and look at the devtools to see your hints and tests. 
> ℹ️ - the dev tools can be accessed by the wrench icon in the `Webview` tab

Keep working through the hints and tests to complete all of the requirements of the application. 

Good Luck!

> ℹ️ - There is a hidden `main.js` file which should not be modified or removed, this is where your hints and tests come from.  


## Requirements

### HTML
- Uncomment the `h3` heading that says 'Card Collection'
- Add your name to the `h3` heading
- Uncomment the `div`containing `img, h2, p` tags
- Create another *player card* for "Georgie" following the format of Thorsten's card
  - the heading should have Georgie
  - the img should link to Georegie's .png in the images folder
  - Under the heading lets put Georgie's team name, the `Rwanda Rampage`
  - for matches won 🏆 set `10` and for matches played 🏓 set it to `20`
  - the card should have a rarity ⭐ lets put `common`
  - don't forget to add the appropriate classes and id
### CSS
- Create a css rules targeting `h2` elements
  - change the font color to `whitesmoke`
  - change the font family to `Tahoma`
- Add the existing class `thorsten-style` to Thorsten's div
- Create a css rule called `georgie-style` using the same format of `thorsten-style`
  - this rules should change the font color, and border color to Georgie's color
  - apply this rule to Georgie's div
### JavaScript
- Create varible called `georgie` and set it's value to the number `12`, this number represents how many points georgie has
- Write an `if` statement that console logs `Thorsten Wins` if Thorsten has more points, `Georgie Wins` if Georgie does and `Tie` if they are equal
  - increase or dercrease the scores as needed to check your logic with the conditionals
- Create A variable called `thorstenCard` and set it's value to an object with the properties of the card in our html
  - name : 'Thorsten'
  - teamName: 'Cameroon Challengers'
  - wins: 8
  - matches: 15
  - rarity: 'rare'
  - teamColor: 'Lime Green'
- Do the same For Georgie's card, creating a new variable called `georgieCard`
  - name: 'Georgie'
  - teamName: 'Rwanda Rampage'
  - wins: 10
  - matches: 20
  - rarity: 'common'
  - teamColor: 'Persimmon Pink'
- Using the objects we just created, console log Thorsten's team color
- Using the objects we juts created, console log Georgie's match average (wins divided by matches)