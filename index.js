let basket = [];

function addFruit(fruit) {
    basket.push(fruit);
    console.log(`"${fruit}" was added to the basket.`);
}

function removeFruit(fruit) {
    let index = basket.indexOf(fruit);
    if (index !== -1) {
        basket.splice(index, 1);
        console.log(`\n ${fruit} removed from the basket.`);
    } else {
        console.log(`\n ${fruit} is not in the basket.`);
    }
}

function displayTotal() {
    console.log(`\n Total number of fruits in the basket: ${basket.length}`);
    console.log("\n The fruits in the basket are:");
    for (let i = 0; i < basket.length; i++) {
        console.log(`\t ${basket[i]}`);
    }
}


addFruit("Tree_tomato");
addFruit("Banana");
addFruit("Apple");
removeFruit('Banana');
displayTotal();