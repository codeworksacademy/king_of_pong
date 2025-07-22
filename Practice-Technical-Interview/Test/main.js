let tests = [
  // HTML
  {
    name: 'HTML - The Doubles Heading',
    message: "Render to the screen in the largest heading the tournament match up",
    passed: false,
    test() {
      let h1 = document.querySelector('body h1')
      if (!h1) throw new Error('There is no h1 on the page')
      let title = (/doubles tournament/ig).test(h1?.innerText)
      if (!title) throw new Error("The heading is there but the correct text is not, check the instructions")
      this.passed = true
    }
  },
  {
    name: 'HTML - The Teams Element',
    message: 'The teams element is present and has three children',
    passed: false,
    test() {
      const teams = document.getElementById('teams')
      if (!teams) {
        throw new Error('The teams element is not present...')
      }
      let nested = teams.querySelectorAll('.team')
      if (nested.length != 2) {
        throw new Error('The teams element does not have two nested team elements')
      }
      if (!teams.querySelector('.versus')) {
        throw new Error('Missing the Versus Element')
      }
      this.passed = true
    }
  },
  {
    name: 'HTML - The Versus Element',
    message: 'The versus element is present between the two team elements',
    passed: false,
    test() {
      const teams = document.getElementById('teams')
      if (!teams) { return }
      if (teams.children.length != 3) {
        throw new Error('The teams element must have three child elements for this test.')
      }
      const expected = teams.children.item(1)
      const actual = teams.querySelector('.versus')

      if (!actual) {
        throw new Error('You are missing an element with the class versus')
      }

      if (expected != actual) {
        throw new Error('Your versus class element is not the 2nd child of the teams element')
      }

      this.passed = true
    }
  },
  {
    name: 'HTML - Each Team Element',
    message: 'Render the Team Elements correctly for each team',
    passed: false,
    test() {

      const teams = document.querySelectorAll('.team')

      if (teams.length != 2) {
        throw new Error('You need both team elements to complete this test.')
      }

      const teamsElem = document.getElementById('teams')
      const thorstenImg = teamsElem.querySelector('img[src*="images/Thorsten.png"]')
      const yubiImg = teamsElem.querySelector('img[src*="images/Yubi.png"]')
      const georgieImg = teamsElem.querySelector('img[src*="images/Georgie.png"]')
      const sprinklesImg = teamsElem.querySelector('img[src*="images/Sprinkles.png"]')

      if (!thorstenImg) throw new Error('We are missing the element for Thorsten')
      if (!yubiImg) throw new Error('We are missing the element for Yubi')
      if (!georgieImg) throw new Error('We are missing the element for Georgie')
      if (!sprinklesImg) throw new Error('We are missing the element for Sprinkles')

      this.passed = true
    }
  },
  // CSS
  {
    name: "CSS - Set the background",
    message: "The background should be set to the css variable",
    passed: false,
    test() {
      if (style(document.body).backgroundColor != 'rgb(20, 3, 48)') throw new Error("The body does not have the correct background color")

      this.passed = true
    },
  },
  {
    name: 'CSS - Apply the font Tahoma to the entire page',
    message: 'Change the All font on the page to Tahoma',
    passed: false,
    test() {
      if (style(document.body).fontFamily != 'Tahoma') {
        throw new Error("The font of the whole page should be set to 'Tahoma'")
      }
      this.passed = true
    }
  },
  {
    name: 'CSS - Changing the font color',
    message: 'Change the All font on the page to use the text color `--text',
    passed: false,
    test() {
      if (style(document.body).color != 'rgb(231, 225, 166)') {
        throw new Error("The font color of the body needs to be changed")
      }
      this.passed = true
    }
  },
  {
    name: 'CSS - Centering Text',
    message: 'Center the Doubles Tournament Heading',
    passed: false,
    test() {
      let h1 = document.querySelector('h1')
      if (style(h1).textAlign != 'center') throw new Error("The heading is there but the text is not centered. You could apply this from the style css")
      this.passed = true
    }
  },
  {
    name: 'CSS - Centering an Image',
    message: 'Center the versus image',
    passed: false,
    test() {
      let versus = document.querySelector('.versus')
      if (style(versus).textAlign != 'center') throw new Error("The versus image is there but it has not been centered. Images can be centered just like text")
      this.passed = true
    }
  },
  {
    name: 'CSS - Applying Borders',
    message: 'Change the border of the two team elements to use their `color` and the `double` style',
    passed: false,
    test() {
      const daring = document.querySelector('.daring-durians')
      const rampage = document.querySelector('.rambutan-rampage')

      if (!daring || !rampage) {
        return
      }

      const daringStyle = getComputedStyle(daring)
      const rampageStyle = getComputedStyle(rampage)

      if (daringStyle.borderColor != 'rgb(144, 255, 116)') {
        throw new Error('Daring Durians border color has not been set correctly')
      }

      if (rampageStyle.borderColor != 'rgb(255, 87, 137)') {
        throw new Error('Rambutan Rampage border color has not been set correctly')
      }

      if (daringStyle.borderStyle != 'double' || rampageStyle.borderStyle != 'double') {
        throw new Error('The border style for the teams has not been set to double correctly')
      }

      this.passed = true
    }
  },
  {
    name: 'CSS - Using Flex',
    message: 'Change the `display` type of the `team` element to `flex`',
    passed: false,
    test() {
      const team = document.querySelector('.team')
      if (!team) { return }
      if (style(team).display != 'flex') {
        throw new Error('The display type for the team class should be set to flex')
      }
      this.passed = true
    }
  },
  // JS
  {
    name: 'JS - Setting Variables',
    message: 'Log the variable points to the console',
    passed: false,
    test() {
      this.passed = log.includes(11)
    }
  },
  {
    name: 'JS - Incrementing a Variable',
    message: 'Modify the points variable and log it to the console.',
    passed: false,
    test() {
      this.passed = log.includes(21)
    }
  },
  {
    name: 'JS - Iterating through the numbers',
    message: 'Create a loop for all the numbers 1 - points',
    passed: false,
    test() {
      if (includesAll(log, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21])) {
      }
      this.passed = true
    }
  },
  {
    name: 'JS - Loop Modifications',
    message: 'Multiples of 4',
    passed: false,
    test() {
      if (!includesAll(log, ['swap server', 'swap server', 'swap server', 'swap server'])) {
        throw new Error('On multiples of 4 you will swap the server. Look into the modulus operator...')
      }
      this.passed = true
    }
  },
  {
    name: 'JS - The last number of the loop',
    message: 'Adding a message to the end of the loop',
    passed: false,
    test() {
      const found = log.find((i) => {
        return new RegExp(/good match/ig).test(i)
      })
      this.passed = found
    }
  },
  {
    name: 'JS - Accessing Object Properties',
    message: 'Log and concatenate the tournament details',
    passed: false,
    test() {
      let pass = log.includes('King Pong Equetorial Championship, first to 5 wins') ||
        log.includes('King Pong Equetorial Championship, first to 5 wins.') ||
        log.includes('King Pong Equetorial Championship first to 5 wins')
      if (!pass) {
        throw new Error('The log must include the string: [King Pong Equetorial Championship, first to 5 wins] ')
      }
      this.passed = true
    }
  },
  {
    name: 'JS - Iterating over an Array of Objects',
    message: 'Loop through each player in the `players` Array to log their `name` and `wins',
    passed: false,
    test() {
      if (!
        includesAll(log,
          ['Thorsten: 3', 'Georgie: 2', 'Sprinkles: 4', 'Yubi: 2']
        )
      ) {
        throw new Error('You need to log every player name and their wins')
      }
      this.passed = true
    }
  },
  {
    name: 'JS - Iterate and conditionally calculate',
    message: 'Calculate and Log the total of points for each team',
    passed: false,
    test() {
      if (!log.includes('Daring Durians: 11')) {
        throw new Error('The score for the Daring Durians has not been calculated')
      }
      if (!log.includes('Rambutan Rampage: 9')) {
        throw new Error('The score for the Rambutan Rampage has not been calculated')
      }
      this.passed = true
    }
  }
]


// #region DONT_MODIFY

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

// INTERCEPTOR
window.log = []
const queue = []
let initialLoad = false
let logBlock = '' // a join of the window log
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
  await getStyleSheet()
  evaluateLog(log, stats)
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
