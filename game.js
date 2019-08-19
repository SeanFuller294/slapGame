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
    roganAttack()
    drawRogan()
  }
}

// function slap() {
//   if (player.health > 0 && joeRogan.health > 0) {
//     joeRogan.health -= player.attacks.slap.damage + player.attackMod
//     player.battleText = player.attacks.slap.description + " " + (player.attacks.slap.damage + player.attackMod)
//     joeRogan.hasBeenhit++
//     roganAttack()
//     drawRogan()
//   }
// }

// function punch() {
//   if (player.health > 0 && joeRogan.health > 0) {
//     joeRogan.health -= player.attacks.punch.damage + player.attackMod
//     player.battleText = player.attacks.punch.description + " " + (player.attacks.punch.damage + player.attackMod)
//     joeRogan.hasBeenhit++
//     roganAttack()
//     drawRogan()
//   }
// }

// function kick() {
//   if (player.health > 0 && joeRogan.health > 0) {
//     joeRogan.health -= player.attacks.kick.damage + player.attackMod
//     player.battleText = player.attacks.kick.description + " " + (player.attacks.kick.damage + player.attackMod)
//     joeRogan.hasBeenhit++
//     roganAttack()
//     drawRogan()
//   }
// }

function roganAttack() {
  let roganPunch = joeRogan.attacks.punch.damage
  let roganPDiscription = joeRogan.attacks.punch.description
  let roganKick = joeRogan.attacks.kick.damage
  let roganKDiscription = joeRogan.attacks.kick.description
  let roganSpinKick = joeRogan.attacks.spinningBackKick.damage
  let roganSpinKDiscription = joeRogan.attacks.spinningBackKick.description

  if (joeRogan.health > 0 && player.health > 0) {
    let rand = Math.floor(Math.random() * 1000) + 1
    if (rand < 541) {
      player.health -= roganPunch
      roganBattleTextElem.innerText = roganPDiscription + " " + roganPunch
    } else if (rand < 982) {
      player.health -= roganKick
      roganBattleTextElem.innerText = roganKDiscription + " " + roganKick
    } else {
      player.health -= roganSpinKick
      roganBattleTextElem.innerText = roganSpinKDiscription + " " + roganSpinKick
    }
    player.hasBeenhit++
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
    // joeRogan.hasBeenhit = 0;
  } else if (player.health <= 0) {
    player.health = 0
    alert("You Lose")

  }
}

function reset() {
  document.location.reload()
}

function wiggleit(spaceWiggled) {

}

function wiggle() {
  setTimeout(() => wiggleit(2), 1000)
}



drawRogan();


//make attack function ---CHECK!
//clean up rogan attack ---Check!
//put items in player inventory
//reset button ---make this better
//health bars
//wiggle pictures timer offset px settimeout
//function wiggle(){
//  setTimeout( () => wiggleit(2), 1000)
//  setTimeout( () => wiggleit(-2), 1000)
//}