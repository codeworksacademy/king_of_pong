const tournament = {
  title: 'King Pong Equetorial Championship',
  location: 'Yaoundé Pong Stadium',
  date: '3-15-2075',
  rules: {
    bestOf: 5,
    pointsNeeded: 21,
    leadByTwo: true
  }
}

const players = [
  {
    name: 'Thorsten',
    teamName: 'Daring Durians',
    points: 8,
    wins: 3
  },
  {
    name: 'Georgie',
    teamName: 'Rambutan Rampage',
    points: 5,
    wins: 2
  },
  {
    name: 'Sprinkles',
    teamName: 'Rambutan Rampage',
    points: 4,
    wins: 4
  },
  {
    name: 'Yubi',
    teamName: 'Daring Durians',
    points: 3,
    wins: 2
  }
]

// ⌨️ YOUR CODE HERE

let points = 10

points += 12

for (let i = 0; i < points; i++) {
  if (i % 4 == 0) {
    console.log(i, 'swap server')
  } else {
    console.log(i)
  }
  if(i == 21){
    console.log('good MatCH')
  }
}

console.log(`${tournament.title}, first to ${tournament.rules.bestOf} matches`)

let rampagePoints = 0
let durianPoints = 0

for (let i = 0; i < players.length; i++) {
  const player = players[i]
  console.log(player.name, player.wins)
  if (player.teamName == 'Rambutan Rampage') {
    rampagePoints += player.points
  } else {
    durianPoints += player.points
  }
}

console.log('Daring Durians: '+ durianPoints)
console.log('Rambutan Rampage: '+ rampagePoints)
