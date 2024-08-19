const teams = ['Cameroon Challengers', 'Burundi Bruisers', 'Rwanda Rampage']

const tournament = {
  title: 'King Pong Equetorial Championship',
  date: '3-15-2075',
  prize: {
    amount: 1000000,
    currency: 'coconuts'
  }
}

const cards = [
  {
    name: 'thorsten',
    teamName: 'Cameroon Challengers',
    wins: 8,
    matches: 12,
    rarity: 'rare',
    teamColor: 'Lime Green',
    value: 5.34,
    count: 1
  },
  {
    name: 'georgie',
    teamName: 'Rwanda Rampage',
    wins: 10,
    matches: 20,
    rarity: 'common',
    teamColor: 'Persimmon Pink',
    value: 2.17,
    count: 2
  }
]

// ⌨️ YOUR CODE HERE
console.log(teams[0], 'vs', teams[2])
console.log(tournament.title, tournament.prize.amount, tournament.prize.currency)

for (let i = 0; i < cards.length; i++) {
  let card = cards[i]
  console.log(card.name, card.wins / card.matches)
}

for (let i = 0; i < cards.length; i++) {
  let card = cards[i]
  if (card.count > 0) {
    console.log(card.name, 'match average is:', card.wins / card.matches)
  }
}

cards.forEach(card => { // show for each and cb function
  if (card.count > 0) {
    console.log(card.name, 'match average is:', card.wins / card.matches)
  }
})

let totalValue = 0
for (let i = 0; i < cards.length; i++) {
  const card = cards[i]
  totalValue += card.value * card.count
}
console.log('cards valued at: ', totalValue)

// these two functions will have multiple phases

function collectThrosten() {
  let card = cards.find(card => card.name == 'thorsten') //1, another example of a cb function
  card.count++ //1
  document.getElementById('thorsten-count').innerText = card.count // 2
  drawCollectionValue() //3
}

function collectGeorgie() {
  let card = cards.find(card => card.name == 'georgie')
  card.count++
  document.getElementById('georgie-count').innerText = card.count
  drawCollectionValue()
}

// go to html add place for colleciton value

//document.getElementById('cards-value').innerText = `$${totalValue}`// this will draw our collections starting value but wont update as we collect cards, so a new function needs to be created adding the functionality from line 57, and the dom manipulation from the functions
// ⬇️
function drawCollectionValue() {
  let total = 0
  cards.forEach(card => total += card.value * card.count)
  totalValue = total
  document.getElementById('cards-value').innerText = `$${totalValue.toFixed(2)}`
}

// Add third card?