let roganPictureElem = document.getElementById("rogan-picture")
let person = prompt("Please enter your name here", "guy ")
let joeRogan = {
  name: "Joe Rogan ",
  health: 250,
  hasBeenhit: 0,
  attacks: {
    punch: 5,
    kick: 10,
    spinningBackKick: 300,
  }
}

let player = {
  name: person,
  health: 100,
  hasBeenhit: 0,
  attackMod: 0,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10
  }
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

function slap() {
  joeRogan.health -= player.attacks.slap + player.attackMod
  joeRogan.hasBeenhit++
  roganAttack()
  drawRogan()
}

function punch() {
  joeRogan.health -= player.attacks.punch + player.attackMod
  joeRogan.hasBeenhit++
  drawRogan()
}

function kick() {
  joeRogan.health -= player.attacks.kick + player.attackMod
  joeRogan.hasBeenhit++
  drawRogan()
}
function roganAttack() {
  let rand = Math.floor(Math.random() * 100) + 1
  if (rand < 50) {
    player.health -= joeRogan.attacks.punch
  } else if (rand < 90) {
    player.health -= joeRogan.attacks.kick
  } else {
    player.health -= joeRogan.attacks.spinningBackKick
  }
  player.hasBeenhit++
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
}

drawRogan();

function checkHealth() {
  if (joeRogan.health <= 0) {
    alert("Give up\nYou cannot defeat Joe Rogan")
    joeRogan.health = 250;
    // joeRogan.hasBeenhit = 0;
  } else if (player.health <= 0) {
    player.health = 0
    alert("Told you")

  }
}