var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kittens, elementC) {
  kittens.push("Felix");
  return kittens;
}

function destructivelyPrependKitten(kittens, elementC) {
  kittens.unshift("Breeze");
  return kittens;
}

function destructivelyRemoveLastKitten(kittens, elementC) {
  return kittens.pop('Garfield');
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift("Milo");
}

function appendKitten()

function prependKitten()

function removeLastKitten()

function removeFirstKitten()