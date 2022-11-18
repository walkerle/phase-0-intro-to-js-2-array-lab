const cats = [
    "Milo",
    "Otis",
    "Garfield",
]

function destructivelyAppendCat(name) {
    cats.push(name);
    return;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return;
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}