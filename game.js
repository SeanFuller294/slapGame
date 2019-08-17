let playerBattleTextElem = document.getElementById("playerBattleText")
let roganBattleTextElem = document.getElementById("roganBattleText")
let roganPictureElem = document.getElementById("rogan-picture")
let person = prompt("Please enter your name here", "Dave")
let joeRogan = {
  name: "Joe Rogan ",
  health: 250,
  hasBeenhit: 0,
  attacks: {
    punch: {
      damage: 1,
      description: "Punch "
    },
    kick: {
      damage: 5,
      description: "Kick "
    },
    spinningBackKick: {
      damage: 300,
      description: "Spinning Back Kick "
    }
  }
}

let player = {
  name: person + " ",
  health: 100,
  hasBeenhit: 0,
  attackMod: 0,
  attacks: {
    slap: {
      damage: 1,
      description: "Slap "
    },
    punch: {
      damage: 5,
      description: "Punch "
    },
    kick: {
      damage: 10,
      description: "Kick "
    }
  },
  battleText: ""
}

let items = {
  brassKnuckles: {
    name: "Brass Knuckles",
    modifier: 5,
    description: "Thunk "
  },
  baton: {
    name: "Baton",
    modifier: 10,
    description: "Shunt "
  },
  bat: {
    name: "Bat",
    modifier: 20,
    description: "Thwap "
  }
}

function equipItem(itemString) {
  switch (itemString) {
    case "brassKnuckles": player.attackMod = items.brassKnuckles.modifier
      player.battleTextElem = items.brassKnuckles.description
      break;
    case "baton": player.attackMod = items.baton.modifier
      player.battleTextElem = items.baton.description
      break;
    case "bat": player.attackMod = items.bat.modifier
      player.battleTextElem = items.bat.description
  }
}

function slap() {
  if (player.health > 0 && joeRogan.health > 0) {
    joeRogan.health -= player.attacks.slap.damage + player.attackMod
    player.battleText = "Slap " + (player.attacks.slap.damage + player.attackMod)
    joeRogan.hasBeenhit++
    roganAttack()
    drawRogan()
  }
}

function punch() {
  if (player.health > 0 && joeRogan.health > 0) {
    joeRogan.health -= player.attacks.punch.damage + player.attackMod
    player.battleText = "Punch " + (player.attacks.punch.damage + player.attackMod)
    joeRogan.hasBeenhit++
    roganAttack()
    drawRogan()
  }
}

function kick() {
  if (player.health > 0 && joeRogan.health > 0) {
    joeRogan.health -= player.attacks.kick.damage + player.attackMod
    player.battleText = "Kick " + (player.attacks.kick.damage + player.attackMod)
    joeRogan.hasBeenhit++
    roganAttack()
    drawRogan()
  }
}
function roganAttack() {
  if (joeRogan.health > 0 && player.health > 0) {
    let rand = Math.floor(Math.random() * 1000) + 1
    if (rand < 540) {
      player.health -= joeRogan.attacks.punch.damage
      roganBattleTextElem.innerText = `${joeRogan.attacks.punch.description + joeRogan.attacks.punch.damage}`
    } else if (rand < 980) {
      player.health -= joeRogan.attacks.kick.damage
      roganBattleTextElem.innerText = `${joeRogan.attacks.kick.description + joeRogan.attacks.kick.damage}`
    } else {
      player.health -= joeRogan.attacks.spinningBackKick.damage
      roganBattleTextElem.innerText = `${joeRogan.attacks.spinningBackKick.description + joeRogan.attacks.spinningBackKick.damage}`
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




drawRogan();