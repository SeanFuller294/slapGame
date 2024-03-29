let playerBattleTextElem = document.getElementById("playerBattleText")
let roganBattleTextElem = document.getElementById("roganBattleText")
let roganPictureElem = document.getElementById("rogan-picture")
let person = prompt("Please enter your name here", "Dave")
let joeRogan = {
  name: "Joe Rogan",
  health: 250,
  hasBeenhit: 0,
  attacks: {
    punch: {
      damage: 1,
      description: "Punch"
    },
    kick: {
      damage: 5,
      description: "Kick"
    },
    spinningBackKick: {
      damage: 300,
      description: "Spinning Back Kick"
    }
  }
}

let player = {
  name: person,
  health: 100,
  hasBeenhit: 0,
  attackMod: 0,
  attacks: {
    slap: {
      damage: 1,
      description: "Slap"
    },
    punch: {
      damage: 5,
      description: "Punch"
    },
    kick: {
      damage: 10,
      description: "Kick"
    }
  },
  battleText: ""
}

let items = {
  brassKnuckles: {
    name: "Brass Knuckles",
    modifier: 5,
    description: "Thunk"
  },
  baton: {
    name: "Baton",
    modifier: 10,
    description: "Shunt"
  },
  bat: {
    name: "Bat",
    modifier: 20,
    description: "Thwap"
  }
}

function equipItem(itemString) {
  switch (itemString) {
    case "brassKnuckles": player.attackMod = items.brassKnuckles.modifier
      break;
    case "baton": player.attackMod = items.baton.modifier
      break;
    case "bat": player.attackMod = items.bat.modifier
  }
}

function attack(attackChosen) {
  let playerAttack = player.attacks[attackChosen].damage + player.attackMod
  let attackDescription = player.attacks[attackChosen].description + " " + (player.attacks[attackChosen].damage + player.attackMod)
  if (player.health > 0 && joeRogan.health > 0) {
    joeRogan.health -= playerAttack
    player.battleText = attackDescription
    joeRogan.hasBeenhit++
    drawRogan()
    setTimeout(() => roganAttack(), 1000)
    wiggle("rogan")
    roganBattleTextElem.innerText = ""
  }
}

function roganAttack() {
  let roganPunch = joeRogan.attacks.punch.damage
  let roganPDiscription = joeRogan.attacks.punch.description
  let roganKick = joeRogan.attacks.kick.damage
  let roganKDiscription = joeRogan.attacks.kick.description
  let roganSpinKick = joeRogan.attacks.spinningBackKick.damage
  let roganSpinKDiscription = joeRogan.attacks.spinningBackKick.description
  let roganAttack;
  let roganDescription;
  if (joeRogan.health > 0 && player.health > 0) {
    let rand = Math.floor(Math.random() * 1000) + 1
    if (rand < 541) {
      roganAttack = roganPunch
      roganDescription = roganPDiscription
    } else if (rand < 982) {
      roganAttack = roganKick
      roganDescription = roganKDiscription
    } else {
      roganAttack = roganSpinKick
      roganDescription = roganSpinKDiscription
    }
    player.health -= roganAttack
    roganBattleTextElem.innerText = roganDescription + " " + roganAttack
    player.hasBeenhit++
    drawRogan()
    wiggle("player")
    playerBattleTextElem.innerText = ""
  }
}

function drawRogan() {
  let targetHealthElem = document.getElementById("targetHealth")
  let targetNameElem = document.getElementById("targetName")
  let targetHitsElem = document.getElementById("targetHits")
  let playerHealthElem = document.getElementById("playerHealth")
  let playerNameElem = document.getElementById("playerName")
  let playerHitsElem = document.getElementById("playerHits")
  checkHealth()
  targetNameElem.innerText = joeRogan.name
  targetHitsElem.innerText = `${joeRogan.hasBeenhit}`
  targetHealthElem.innerText = `${joeRogan.health}`
  playerNameElem.innerText = player.name
  playerHitsElem.innerText = `${player.hasBeenhit}`
  playerHealthElem.innerText = `${player.health}`
  playerBattleTextElem.innerText = `${player.battleText}`
}

function checkHealth() {
  if (joeRogan.health <= 0) {
    alert("You Win")
    joeRogan.health = 0;
  } else if (player.health <= 0) {
    player.health = 0
    alert("You Lose")
  }
}

function reset() {
  joeRogan.health = 250
  joeRogan.hasBeenhit = 0
  player.health = 100
  player.hasBeenhit = 0
  player.attackMod = 0
  drawRogan()
  playerBattleTextElem.innerText = ""
  roganBattleTextElem.innerText = ""
}

function roganWiggle(spaceWiggled) {
  let roganPictureElem = document.getElementById("roganPicture")
  roganPictureElem.style.left = `${spaceWiggled}px`
}

function playerWiggle(spaceWiggled) {
  let playerPictureElem = document.getElementById("playerPicture")
  playerPictureElem.style.left = `${spaceWiggled}px`
}

function wiggle(target) {
  if (target == "rogan") {
    setTimeout(() => roganWiggle(2), 100)
    setTimeout(() => roganWiggle(-2), 200)
    setTimeout(() => roganWiggle(2), 300)
    setTimeout(() => roganWiggle(-2), 400)
    setTimeout(() => roganWiggle(2), 500)
    setTimeout(() => roganWiggle(-2), 600)
    setTimeout(() => roganWiggle(2), 700)
    setTimeout(() => roganWiggle(-2), 800)
    setTimeout(() => roganWiggle(2), 900)
    setTimeout(() => roganWiggle(-2), 1000)
  } else {
    setTimeout(() => playerWiggle(2), 100)
    setTimeout(() => playerWiggle(-2), 200)
    setTimeout(() => playerWiggle(2), 300)
    setTimeout(() => playerWiggle(-2), 400)
    setTimeout(() => playerWiggle(2), 500)
    setTimeout(() => playerWiggle(-2), 600)
    setTimeout(() => playerWiggle(2), 700)
    setTimeout(() => playerWiggle(-2), 800)
    setTimeout(() => playerWiggle(2), 900)
    setTimeout(() => playerWiggle(-2), 1000)
  }
}

drawRogan();
//put items in player inventory
//reset button ---make this better
//health bars
