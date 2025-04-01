let tests = [
  //  HTML TESTS
  {
    name: 'HTML Fundamentals, Headings',
    message: 'Render the middle sized heading element to the page with your name and the text: "Card Collection"',
    passed: false,
    test() {
      let h3 = document.querySelector('h3')
      this.passed = (/card collection/ig).test(h3?.innerText || '')
      if (this.passed) { return }

      let headings = document.querySelectorAll('body+h1, body+h2, body+h6, body+h4, body+h5')
      if (headings.length) {
        throw new Error(`Good Job! you got a ${headings[0].nodeName}, but we are looking for the middle sized heading... change the heading number to 3`)
      }
    }
  },
  {
    name: 'HTML Fundamentals, Thorsten Card',
    message: 'Render a player card to the screen with elements for the players image, name, team and stats',
    passed: false,
    test() {
      let card = document.querySelector('#thorsten')
      const img = (/<img.*src ?="images\/ThorstenCard.png"/g).test(card?.innerHTML || '')
      const name = (/<h2.*>.*(T|t)horsten.*<\/h2>/g).test(card?.innerHTML || '')
      const team = (/Cameroon Challengers/ig).test(card?.innerHTML || '')
      const stats = (/🏆\s*8\s*|\s*🏓\s*15/ig).test(card?.innerHTML || '')
      const rarity = (/⭐\s*rare/ig).test(card?.innerHTML || '')
      this.passed = img && name && team && stats && rarity
      if (this.passed) { return }

      if (!card) throw new Error("Thorsten's card could not be found!")
      if (!img) throw new Error("The img is not correct. the src path may not be correct")
      if (!name) throw new Error("The name is not correct. Make sure it's in an h2 tag")
      if (!team) throw new Error("The team is not correct. It Should be 'Cameroon Challengers'")
      if (!stats) throw new Error("The stats are not correct. Thorsten should have 🏆8 and 🏓15 with a '|' in the middle")
      if (!rarity) throw new Error("The rarity is not correct. it should be ⭐ rare")
    }
  },
  {
    name: 'HTML Fundamentals, Georgie Card',
    message: 'Render a player card to the screen with elements for the players image, name, team and stats',
    passed: false,
    test() {
      let card = document.querySelector('#georgie')
      if (!card) throw new Error("We are still missing the Georgie card, don't forget to give it the id of 'georgie'")
      if (!card.classList.contains('player-card')) throw new Error("Georgie's card is missing the class 'player-card'")
      const img = (/<img.*src= ?"images\/GeorgieCard.png"/g).test(card?.innerHTML || '')
      const name = (/<h2.*>.*(G|g)eorgie.*<\/h2>/g).test(card?.innerHTML || '')
      const team = (/Rwanda Rampage/ig).test(card?.innerHTML || '')
      const stats = (/🏆.*10.*|.*🏓.*20/ig).test(card?.innerHTML || '')
      const rarity = (/⭐.*common/ig).test(card?.innerHTML || '')
      this.passed = img && name && team && stats && rarity
      if (this.passed) { return }

      if (!img) throw new Error("The img is not correct. the src path may not be correct")
      if (!name) throw new Error("The name is not correct. Make sure it's in an h2 tag")
      if (!team) throw new Error("The team is not correct. It Should be 'Rwanda Rampage'")
      if (!stats) throw new Error("The stats are not correct. Georgie should have 🏆10 and 🏓20 with a '|' in the middle")
      if (!rarity) throw new Error("The rarity is not correct. it should be ⭐ common")
    }
  },
  // CSS TESTS
  {
    name: 'CSS Element Selectors',
    message: "Create a CSS rule that targets h2 elements and sets the font to 'whitesmoke' and the font family to 'Tahoma'",
    passed: false,
    test() {
      const h2s = document.querySelectorAll('h2')
      let color = true; let family = true
      h2s.forEach(h => {
        if (style(h).color != 'rgb(245, 245, 245)') color = false
        if (!(/Tahoma/g).test(style(h)['font-family'])) family = false
      })
      if (!color) throw new Error("The color of the font is not correct, the color of the font should be 'whitesmoke'")
      if (!family) throw new Error("The font family is not correct, the font family should be Tahoma, and Tahoma first")

      this.passed = true
    }
  },
  {
    name: "CSS Classes, Thorsten's style",
    message: "Apply the existing css class thorsten-style to Thorsten's div",
    passed: false,
    test() {
      const card = document.querySelector('.player-card.thorsten-style')
      if (!card) throw new Error("Thorsten's card is missing the '.thorsten-style' class. It might be on the wrong element or it is misspelled")
      if (style(card).color != 'rgb(144, 255, 116)') throw new Error("The font color of Thorsten's card is not correct, make sure you are changing the font color to the correct color.")
      if (style(card).borderColor != 'rgb(144, 255, 116)') throw new Error("The color of the border is not correct, make sure you are setting it to '#90ff74'")
      this.passed = true
    }
  },
  {
    name: "CSS Classes, Georgie's style",
    message: "Create and apply the georgie-style class",
    passed: false,
    test() {
      const card = document.querySelector('.player-card.georgie-style')
      if (!card) throw new Error("Georgie's card is missing the '.georgie-style' class. It might be on the wrong element or it is misspelled")
      if (style(card).color != 'rgb(255, 87, 137)') throw new Error("The font color of Thorsten's card is not correct, make sure you are changing the font color to '#ff5789'")
      if (style(card).borderColor != 'rgb(255, 87, 137)') throw new Error("The color of the border is not correct, make sure you are setting it to '#ff5789'")
      this.passed = true
    }
  },
  {
    name: "JS Conditionals, Logging a winner",
    message: "Write an if statement that console logs the winner or tie appropriately",
    passed: false,
    test() {
      let log = window.log.join('')
      if (!(/tie|thorsten.*win(s|'s)|georgie.*win(s|'s)/ig).test(log)) {
        throw new Error("You don't have to console log them all but console the victor or tie if their points are equal")
      }
      this.passed = true
    }
  },
  {
    name: "JS Objects, Thorsten's team color",
    message: "using the created thorstenCard, log Thorstens team color",
    passed: false,
    test() {
      let log = window.log.join('')
      if (!(/Lime Green/ig).test(log)) throw new Error("Have not logged Thorsten's team color. The way you are accessing properties on the object might not be right")
      if (!(/thorsten.*Lime Green/ig).test(log)) {
        throw new Error("The correct Color is logged, but not who it belongs to. try adding thorstens name along with the log so whe know who it belongs to")
      }
      this.passed = true
    }
  },
  {
    name: "JS Objects, Georgie's average",
    message: "using the created georgieCard, log Georgies Win Average (wins divided by match total)",
    passed: false,
    test() {
      let log = window.log.join('')
      if (!(/0.5|50%/ig).test(log)) throw new Error("The log is does not contain Georgies win average")
      if (!(/georgie.*(0.5|50%)/ig).test(log)) throw new Error("The log contains average matches but not georgie, lets log it with Georgies name so we know who it belongs to")

      this.passed = true
    }
  }
]

// console.log(getComputedStyle(card)?.fontFamily)

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


// INTERCEPTOR
window.log = []
let fn = window.console.log
window.console.log = function interceptor() {
  try {
    fn(...arguments)
    window.log = [...window.log, ...arguments]
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
