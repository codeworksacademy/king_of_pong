let tests = [
  {
    name: 'HTML Basic Check',
    message: 'Add an H1 Element to the page with your name as the text',
    passed: false,
    test() {
      let h1 = document.querySelector('h1')
      if (!h1) { return }
      if (!h1.innerText) {
        throw new Error('Good Job! you have an H1 but you need to add some text inside of it...')
      }
      this.passed = true
    }
  },
  {
    name: 'Connecting CSS',
    message: 'Create and link a stylesheet to change the color of body\'s background of the page to bisque',
    passed: false,
    test() {
      let bodyStyle = getComputedStyle(document.body)
      let link = document.querySelector('link[href="style.css"]')

      if (!link) {
        throw new Error('You need to add a reference to the external stylesheet named "style.css", use a link element with the rel and href attributes')
      }

      if (bodyStyle.backgroundColor != 'rgb(255, 228, 196)') {
        throw new Error('The body\'s background has not been set to the color bisque')
      }

      this.passed = true
    }
  },
  {
    name: 'The JavaScript Console',
    message: 'Connect to the app.js file and add a message that will print to the console, the string "success"',
    passed: false,
    test() {
      let script = document.querySelector('script[src="app.js"]')

      if (!script) {
        throw new Error('You need to add a reference to the external javascript file named "app.js", use a script element with the src attribute')
      }

      this.passed = log.includes('success')
    }
  }
]



// #region DONT_MODIFY

let stats = {
  failedTests: 0,
  passedTests: 0,
  totalTests: 0
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

function runTests() {
  stats = {
    failedTests: 0,
    passedTests: 0,
    totalTests: tests.length
  }

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
