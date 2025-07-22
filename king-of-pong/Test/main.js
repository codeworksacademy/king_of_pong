let tests = [
  {
    name: 'HTML CSS, Tournament Headline',
    message: 'Add the title header',
    passed: false,
    test() {
      let titleElm = document.querySelector('h1')
      if (!titleElm) return;
      if (titleElm.id !== 'title') fail("The h1 is on page but it is missing the correct id.")
      if (!(/king pong equatorial championship/ig).test(titleElm.innerText)) fail("The inner text of the headline is not correct")

      this.passed = true
    }
  },
  {
    name: 'HTML CSS, Position the Scoreboard',
    message: 'Position the score cards in the scoreboard evenly',
    passed: false,
    test() {
      let boardElm = document.querySelector('.scoreboard')
      if (!boardElm) fail("Uh oh, looks like our scoreboard element went missing, do not alter the section tag with the 'scoreboard' class")
      let boardStyle = style(boardElm)
      if (boardStyle.display != 'flex') fail("We want to make sure the display type of the scoreboard is flex")
      if (boardStyle.justifyContent == 'normal') fail("The scoreboard is the correct display type but the score cards are not spaced out evenly on the x axis")
      if (boardStyle.justifyContent == 'space-around') fail("Space around is close, but not quite what we are looking for.")
      if (boardStyle.justifyContent != 'space-evenly') fail(`the score cards are not evenly spaced, they are ${boardStyle.justifyContent}`)

      this.passed = true
    }
  },
  {
    name: 'HTML CSS, Team Colors',
    message: "Color the teams score cards appropriately.",
    passed: false,
    test() {
      let cards = document.querySelectorAll('.score-card')
      let duriansCard = cards[0]
      let rampageCard = cards[1]
      let dStyles = style(duriansCard)
      let rStyles = style(rampageCard)
      if (duriansCard.classList.length < 2 && rampageCard.classList.length < 2) return
      if (duriansCard.classList.length < 2) fail("Durian's score card is missing your new class, don't forget to add it.")
      if (rampageCard.classList.length < 2) fail("Rampage's score card is missing your new class, don't foreget to add it.")
      if (dStyles.backgroundColor !== 'rgb(144, 255, 116)') fail("The Durian's color is the not the correct color, their color is defined in the :root of the CSS file.")
      if (rStyles.backgroundColor !== 'rgb(255, 87, 137)') fail("The Rampage's color is the not the correct color, their color is defined in the :root of the CSS file.")

      this.passed = true
    }
  },
  {
    name: 'JS Functions, Yubi Scores',
    message: "Create functions for each player, to increase and log that player's points",
    passed: false,
    test() {
      let yubi = document.querySelector('#yubi')
      if (!yubi) fail("Uh oh, our element for yubi went missing, don't change the id on yubi's image")
      console.log('🤖 clicking...')
      click(yubi)
      if (!(/yubi(.(?!thorsten|georgie|spirnkles|yubi))*1/ig).test(logBlock)) fail("the player's score was not logged correctly after being clicked, make sure their name AND point number are logged.")
      click(yubi)
      if (!(/yubi(.(?!thorsten|georgie|spirnkles|yubi))*2/ig).test(logBlock)) fail("the player's score was not logged correctly after being clicked, make sure their name AND point number are logged.")

      this.passed = true
    }
  },
  {
    name: 'JS Functions, Georgie Scores',
    message: "Create functions for each player, to increase and log that player's points",
    passed: false,
    test() {
      let georgie = document.querySelector('#georgie')
      if (!georgie) fail("Uh oh, our element for georgie went missing, don't change the id on georgie's image")

      console.log('🤖 clicking...')
      click(georgie)
      if (!(/georgie(.(?!thorsten|georgie|spirnkles|yubi))*1/ig).test(logBlock)) fail("the player's score was not logged correctly after being clicked, make sure their name AND point number are logged.")
      click(georgie)
      if (!(/georgie(.(?!thorsten|georgie|spirnkles|yubi))*2/ig).test(logBlock)) fail("the player's score was not logged correctly after being clicked, make sure their name AND point number are logged.")

      this.passed = true
    }
  },
  {
    name: 'JS Functions, Thorsten Scores',
    message: "Create functions for each player, to increase and log that player's points",
    passed: false,
    test() {
      let thorsten = document.querySelector('#thorsten')
      if (!thorsten) fail("Uh oh, our element for thorsten went missing, don't change the id on thorsten's image")
      console.log('🤖 clicking...')
      click(thorsten)
      if (!(/thorsten(.(?!thorsten|georgie|spirnkles|yubi))*1/ig).test(logBlock)) fail("the player's score was not logged correctly after being clicked, make sure their name AND point number are logged.")
      click(thorsten)
      if (!(/thorsten(.(?!thorsten|georgie|spirnkles|yubi))*2/ig).test(logBlock)) fail("the player's score was not logged correctly after being clicked, make sure their name AND point number are logged.")

      this.passed = true
    }
  },
  {
    name: 'JS Functions, Sprinkles Scores',
    message: "Create functions for each player, to increase and log that player's points",
    passed: false,
    test() {
      let sprinkles = document.querySelector('#sprinkles')
      if (!sprinkles) fail("Uh oh, our element for sprinkles went missing, don't change the id on sprinkles' image")
      console.log('🤖 clicking...')
      click(sprinkles)
      if (!(/sprinkles(.(?!thorsten|georgie|spirnkles|yubi))*1/ig).test(logBlock)) fail("the player's score was not logged correctly after being clicked, make sure their name AND point number are logged.")
      click(sprinkles)
      if (!(/sprinkles(.(?!thorsten|georgie|spirnkles|yubi))*2/ig).test(logBlock)) fail("the player's score was not logged correctly after being clicked, make sure their name AND point number are logged.")
      click(sprinkles)
      if (!(/sprinkles(.(?!thorsten|georgie|spirnkles|yubi))*3/ig).test(logBlock)) fail("the player's score was not logged correctly after being clicked, make sure their name AND point number are logged.")

      this.passed = true
    }
  },
  {
    name: 'Updating the DOM, Team Scores',
    message: "Update the the score cards for each team, when a player scores a point",
    passed: false,
    test() {
      let durianCard = document.querySelector('#durians-score')
      let rampageCard = document.querySelector("#rampage-score")
      if (!durianCard || !rampageCard) fail("Oh oh, looks like the score elements are gone. Don't modify the id's of the div's in the score cards")
      if (durianCard.innerText != 4) fail("The Durians score is not displaying correctly, make sure to update the scores each time a player scores a point")
      if (rampageCard.innerText != 5) fail("The Rampage score is not displaying correctly, make sure to update the scores each time a player scores a point")
      console.log('🤖 clicking...')
      click('#thorsten')
      click('#thorsten')
      click('#yubi')
      click('#georgie')
      click('#thorsten')
      click('#sprinkles')
      if (durianCard.innerText != 8) fail(`The Durians score is not displaying correctly, their current score should be 8 but was ${durianCard.innerText} instead`)
      if (rampageCard.innerText != 7) fail(`The Rampage score is not displaying correctly, their current score should be 8 but was ${rampageCard.innerText} instead`)

      this.passed = true
    }
  },
  {
    name: "Updating the DOM, Deciding a Winner",
    message: "Once a team reaches 21 points, swap the title with [TEAMNAME] have WON!",
    passed: false,
    test() {
      let titleElm = document.querySelector("#title")
      if (!titleElm) return
      if (!(/king pong equatorial championship/ig).test(titleElm.innerText)) fail("the title did not start with the correct message. It must start with 'King Pong Equetorial Championship'")
      console.log('🤖 clicking...')
      click('#thorsten')
      click('#thorsten')
      click('#yubi')
      click('#georgie')
      click('#thorsten')
      click('#sprinkles')
      click('#thorsten')
      click('#thorsten')
      click('#sprinkles')
      click('#thorsten')
      click('#yubi')
      click('#georgie')
      click('#thorsten')
      click('#sprinkles')
      click('#sprinkles')
      click('#georgie')
      click('#thorsten')
      click('#thorsten')
      click('#georgie')
      click('#sprinkles')
      click('#georgie')
      click('#georgie')
      click('#sprinkles')
      click('#thorsten')
      click('#georgie')
      click('#sprinkles')
      if (!(/rambutan rampage have won/ig).test(titleElm.innerText)) fail("The title did not change once Rambutan Rampage reached 21 points. Make sure to announce the winner on the page!")

      this.passed = true
    }
  }

]

// #region DONT_MODIFY

function click(elm) {
  if (typeof elm == 'string') {
    elm = document.querySelector(elm)
  }
  if (!elm) throw new Error(`could not click ${elm}`)
  elm.click()
}

// Short Cut Fail
function fail(message) {
  throw new Error(message)
}

let stats = {
  failedTests: 0,
  passedTests: 0,
  totalTests: 0
}

// easy everychecker
function includesAll(arr, target) {
  return target.every(v => arr.includes(v))
}

// style Shortcut
let styleSheet = null
async function getStyleSheet() {
  let res = await fetch('/style.css')
  let raw = await res.text()
  let arr = raw.split(/}\n|\/\n/g)
  let css = arr.filter(l => l != '').map(l => l.trim())
  styleSheet = {
    root: '',
    elements: [],
    classes: [],
    ids: []
  }
  css.forEach(style => {
    if (style.startsWith(':root')) {
      styleSheet.root = style
    } else if (style.startsWith('.')) {
      styleSheet.classes.push(style)
    } else if (style.startsWith('#')) {
      styleSheet.ids.push(style)
    } else if (!style.startsWith('/')) {
      styleSheet.elements.push(style)
    }
  })
}
function style(elm) {
  return getComputedStyle(elm)
}

function expectLog(rgx, message) {
  if (!rgx.test(logBlock)) {
    throw new Error(message)
  }
}

window.log = []
const queue = []
let initialLoad = false
let logBlock = window.log.map(l => l === undefined ? 'undefined' : l).join(' ') // a join of the window log
// INTERCEPTOR
function setupInterceptor(){
let fn = console.log
console.log = function interceptor() {
  try {
    queue.push(arguments)
    window.log = [...window.log, ...arguments]
    fn( ...arguments)
    logBlock = window.log.map(l => l === undefined ? 'undefined' : l).join(' ')

  } catch (e) {
    console.error(e)
  }
}
}


function evaluateLog(log, stats) {
  tests.forEach(t => {
    let comments = []
    try {
      t.passed = false
      t.test()
    } catch (e) {
      comments.push(e.message)
    }
    finally {
      t.passed ? stats.passedTests++ : stats.failedTests++
      if (t.passed) {
        return logPass(t.name)
      }
      console.group('❌', t.name)
      logInput(t.message)
      comments.forEach(c => logWarn(c))
      console.groupEnd()
    }
  })

}

async function runTests() {
  stats = {
    failedTests: 0,
    passedTests: 0,
    totalTests: tests.length
  }
  setupInterceptor()

  await getStyleSheet()
  evaluateLog(window.log, stats)
  logTestStats(stats)

  if (stats.passedTests == stats.totalTests) {
    console.log('✅', 'ALL TESTS PASSED!!!')
  }
  // CONSOLE LOGING THE QUEUE
  if(queue.length){
    queue.forEach(m => console.log(...m))
  }
}

async function start() {
  setTimeout(runTests, 500)

}

start()

function logInput() { console.table('🧪', ...arguments) }
function logFail() { console.table('❌', ...arguments) }
function logPass() { console.table('✅', ...arguments) }
function logWarn() { console.table('💭', ...arguments) }



function logTestStats(stats) {
  console.table(
    '\n-------------------------------\n',
    '🧪', ':', stats.totalTests,
    '✅', ':', stats.passedTests,
    '❌', ':', stats.failedTests)
}

// #endregion
