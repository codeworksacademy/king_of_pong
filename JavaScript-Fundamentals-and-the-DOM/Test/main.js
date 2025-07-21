let tests = [
  {
    name: 'JS Arrays, Accessing With Indexs',
    message: 'Log team at index 0 vs team and index 2',
    passed: false,
    test() {
      if ((/Burundi Bruisers/ig).test(logBlock)) throw new Error("Oops, we put the Burundi Bruisers in, they are not the right team.")
      if ((/cammeroon|challengers|rwanda|rampage/g).test(logBlock)) throw new Error("We have some of the names right, but it looks like they weren't accessed using the data in the array")

      if (
        !(/Daring Durians.*(vs|VS).*Rambutan Rampage/g).test(logBlock) &&
        !(/Rambutan Rampage.*(vs|VS).*Daring Durians/g)
      ) throw new Error("We did not get the correct console log make sure to use [# of position] when accessing data in an array")

      this.passed = true
    }
  },
  {
    name: 'JS Objects, Accessing With Keys',
    message: 'Log the title and prize of the tournament',
    passed: false,
    test() {
      expectLog(/King Pong Equetorial Championship/g, 'We did not include the title of the tournament')
      if ((/undefined/g).test(logBlock)) throw new Error("Whoops, we logged undefinded. Be careful, the amount and type exist in another object called prize")
      expectLog(/1000000/g, "We did not include the amount of the prize, expected to see 1000000")
      expectLog(/coconuts/g, "We did not include the type of the prize, expected to see coconuts")

      this.passed = true
    }
  },
  {
    name: 'JS Collections, Looping over arrays with objects',
    message: "Log the win average of each player card",
    passed: false,
    test() {
      expectLog(/thorsten.*0.66/g, "We do not have Thorsten's win average")
      expectLog(/georgie.* 0.5/g, "We do not have Georgie's win average")
      this.passed = true
    }
  },
  {
    name: 'JS Collections, Adding up data with a loop',
    message: "Add up and log the total value of our card collection",
    passed: false,
    test() {
      if ((/7.51/g).test(logBlock)) throw new Error("We added the cards' value together but we did not consider how many of each card we have")
      if ((/3/g).test(logBlock)) throw new Error("We might have just added the count of the cards together we need to consider their value as part of the equation")
      expectLog(/9.68/g, "We don't have the total value of our collection")
      this.passed = true
    }
  },
  {
    name: 'JS DOM interactions, updating collection value',
    message: "Update the value of your collection on the DOM using JavaScript",
    passed: false,
    test() {
      let elm = document.querySelector('#cards-value')
      if (!elm) throw new Error("The id 'cards-value' is not present on the page, lets make sure it is on the <b> within the <h1>")
      let newValue = elm.innerText
      if (newValue == '$0.00') throw new Error("The inner text of the 'cards-value' element is still $0.00")
      this.passed = true
    },
    watcher() {
      watch('#cards-value', runTests)// run just this test? can it log only it's own results?
    }
  },
  {
    name: 'JS DOM interactions, updating Thorsten count',
    message: "Add a function to increase the count of Thorsten's card when you click on it.",
    passed: false,
    test() {
      let thorCountElm = document.querySelector('#thorsten-count')
      if (!thorCountElm) throw new Error("Thorten's counter does not have the appropriate id yet")
      if (thorCountElm.innerText <= 0) throw new Error("Thorsten's Count is set to 0 on the page, let's us JS to increase it when we click on him")
      this.passed = true
    },
    watcher() { watch('#thorsten-count', runTests) }
  },
  {
    name: 'JS DOM interactions, updating Georgie count',
    message: "Add a function to increase the count of Georgie's card when you click on it.",
    passed: false,
    test() {
      let georgCountElm = document.querySelector('#georgie-count')
      if (!georgCountElm) throw new Error("Georgie's counter does not have the appropriate id yet")
      if (georgCountElm.innerText <= 0) throw new Error("Georgie's Count is set to 0 on the page, let's use JS to increase it when we click on him")
      this.passed = true
    },
    watcher() { watch('#georgie-count', runTests) }
  }

]


// #region DONT_MODIFY



let stats = {
  failedTests: 0,
  passedTests: 0,
  totalTests: 0
}

// style Shortcut
function style(elm) {
  return getComputedStyle(elm)
}

function expectLog(rgx, message) {
  if (!rgx.test(logBlock)) {
    throw new Error(message)
  }
}

// OBSERVER
const watchList = []
function watch(target, test) {
  if (watchList.includes(target)) return
  const config = { attributes: true, childList: true, subtree: true };
  let observer = new MutationObserver(test)
  let elm = document.querySelector(target)
  if (!elm) { return }
  watchList.push(target)
  observer.observe(elm, config)
}

// INTERCEPTOR
window.log = []
let logBlock = '' // a join of the window log
let fn = window.console.log
window.console.log = function interceptor() {
  try {
    fn(...arguments)
    window.log = [...window.log, ...arguments]
    logBlock = window.log.map(l => l === undefined ? 'undefined' : l).join(' ')
  } catch (e) {
    console.error(e)
  }
}

function evaluateLog(tests, log, stats) {
  let failing = tests.filter(t => !t.passed)
  failing.forEach(t => {
    let comments = []
    try {
      if (t.watcher) t.watcher()
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
    passedTests: tests.filter(t => t.passed).length,
    totalTests: tests.length
  }
  if (stats.passedTests == stats.totalTests) return // exit run early if all tests passed

  evaluateLog(tests, log, stats)
  logTestStats(stats)

  if (stats.passedTests == stats.totalTests) {
    console.log('✅', 'ALL TESTS PASSED!!!')
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
    '🧪' + ':', stats.totalTests, '|',
    '✅' + ':', stats.passedTests, '|',
    '❌' + ':', stats.failedTests, '|')
}

// #endregion
