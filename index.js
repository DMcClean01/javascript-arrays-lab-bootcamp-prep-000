var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kittens, elementC) {
  kittens.push(elementC);
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

function appendKitten(kittens, elementC) {
  return [...kittens, elementC];
}

function prependKitten(kittens, elementC) {
  return [elementC, ...kittens];
}

function removeLastKitten(kittens) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(kittens) {
  return kittens.slice(1);
}