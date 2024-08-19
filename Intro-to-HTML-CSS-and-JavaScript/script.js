let thorsten = 8

// YOUR JS CODE
let georgie = 10

thorsten += 2


if (georgie == thorsten) {
  console.log('Tie')
} else if (georgie > thorsten) {
  console.log('Georgie Wins')
} else {
  console.log('Thorsten Wins')
}

let thorstenCard = {
  name: 'Thorsten',
  teamName: 'Cameroon Challengers',
  wins: 8,
  matches: 15,
  rarity: 'rare',
  teamColor: 'Lime Green'
}

let georgieCard = {
  name: 'Georgie',
  teamName: 'Rwanda Rampage',
  wins: 10,
  matches: 20,
  rarity: 'common',
  teamColor: 'Persimmon Pink'
}

console.log("Thorsten's team color is", thorstenCard.teamColor)
console.log("Georgie's win average is", georgieCard.wins / georgieCard.matches)