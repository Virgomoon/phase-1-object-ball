function gameObject() {
  return {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ["black", "white"],
      "players": {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        }, 
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 12,
          "blocks": 12,
          "slamDunks": 7
        },
        "Brook Lopez": {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 15
        },
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 8,
          "slamDunks": 5
        },
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 11,
          "slamDunks": 1
        }
      },
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": ["Turquoise", "Purple"],
      "players": {
        "Jeff Adrien": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 1,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 4,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10
        },
        "DeSagna Diop": {
          "number": 2,
          "shoe": 14,
          "points": 24,
          "rebounds": 12,
          "assists": 12,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5
        },
        "Ben Gordon": {
          "number": 8,
          "shoe": 15,
          "points": 33,
          "rebounds": 3,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0
        },
        "Brendan Haywood": {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals": 22,
          "blocks": 5,
          "slamDunks": 12
        }
      },
    }
  }
}

const game = gameObject()
const players = [game.home.players, game.away.players]
const away = game.away.players
const home = game.home.players
const everyPlayer = Object.assign({}, game.home.players, game.away.players)

function allPlayers(){
  const newArray = []
  const all = players.map(function(team){
    for (const player in team) {
      newArray.push({nameOfPlayer: player, ...team[player]})
    }
    return newArray
  })
  return all.flat()
}

//console.log(allPlayers())

function findPlayer(playerName) {
  return allPlayers().find(player => {
    return player.nameOfPlayer === playerName
  })
}
//console.log(findPlayer("Brook Lopez"))

console.log(findPlayer("Brook Lopez"))

function numPointsScored(playersName) {
  return findPlayer(playersName).points
}

//console.log(numPointsScored("DeSagna Diop"))

function shoeSize(playerName) {
  return findPlayer(playerName).shoe
}

//console.log(shoeSize("DeSagna Diop"))

function isHome(team){
  return team === homeTeam.teamName
}

const homeTeam = game.home
const awayTeam = game.away

//console.log(homeTeam.players)

function teamColors(teamName){
  if (teamName === homeTeam.teamName) {
    return homeTeam.colors
  }
  return awayTeam.colors
}

//console.log(teamColors("Brooklyn Nets"))
//console.log(teamColors("Charlotte Hornets"))

function teamNames() {
  const bothTeams = [game.home.teamName, game.away.teamName]

  return bothTeams
}

//console.log(teamNames())

function playerNumbers(teamName) {
  const result = []
  
  if(teamName === "Brooklyn Nets"){
    for (const item in home ) {
   result.push(home[item].number)
    }
  }else if (teamName === "Charlotte Hornets"){
    for (const item in away ) {
   result.push((away[item].number))
    }
  }
  return result
}

//console.log(playerNumbers("Brooklyn Nets"))
//console.log(playerNumbers("Charlotte Hornets"))

function playerStats(playerName) {
  for(const player in everyPlayer){
    if(player === playerName){
      return everyPlayer[playerName]
    }
  }
}

//console.log(playerStats("Mason Plumlee"))
//console.log(playerStats("Ben Gordon"))

function bigShoeRebounds() {
  let biggestShoe = {"shoe": 0, "name": ""}
  for (const player in everyPlayer){
    if(biggestShoe.shoe < everyPlayer[player].shoe){
      biggestShoe.shoe = everyPlayer[player].shoe
      biggestShoe.name = player
    }
  }
  return biggestShoe
}

//console.log(bigShoeRebounds())

function mostPointsScored(){
  let mostPoints = {"points": 0, "name": ""}
  for(const player in everyPlayer){
    if(mostPoints.points < everyPlayer[player].points) {
      mostPoints.points = everyPlayer[player].points
      mostPoints.name = player
    }
  }
  return mostPoints
}

//console.log(mostPointsScored())

function winningTeam() {
  let awayScore = []
  let homeScore = []
  for(const player in away){
    awayScore.push(away[player].points)
  }
  for(const player in home){
    homeScore.push(home[player].points)
  }
  const totalAway = awayScore.reduce(function(accumulator, element){
    return element + accumulator
  },0)
  const totalHome = homeScore.reduce(function(accumulator, element){
    return element + accumulator
  },0)

  if (totalAway > totalHome) {
    return "Charlotte Hornets Win!"
  }else {
    return "Brooklyn Nets Win!"
  }
}

//console.log(winningTeam())

function playerWithLongestName(){
  let longestName = ""
  for(const player in everyPlayer){
    if(longestName.length < player.length) {
      longestName = player
    }
  }
  return longestName
}

//console.log(playerWithLongestName())

function doesLongNameStealATon() {
  const longestName = {length: 0, player: '' }
  const mostSteals = {steals: 0, player: ''}
  for(const player of allPlayers()){
    if(player.nameOfPlayer.length > longestName.length) {
      longestName.length = player.nameOfPlayer.length
      longestName.player = player.nameOfPlayer
    }
    if(player.steals > mostSteals) {
      mostSteals.steals = player.steals
      mostSteals.player = player.nameOfPlayer
    
     }
  return longestName.player === mostSteals.player
}
}

//console.log(doesLongNameStealATon())
