// Return a random interger between min (included) and max (included)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Change Lootbox Function
function changeLootbox() {
    var tier = document.getElementById("type-of-lootbox").value;
    document.getElementById('lootbox-img').src = `images/${tier} lootbox closed.png`;
    document.getElementById("drops").innerHTML = "";
}

// Open Lootbox Function
function openLootbox() {
    var tier = document.getElementById("type-of-lootbox").value;
    document.getElementById('lootbox-img').src = `images/${tier} lootbox open.png`;
    if (tier == "wooden") {
        document.getElementById("drops").innerHTML = randomDrops(0, 500, 0.82, 0.92, 0.97, 0.995);
    } else if (tier == "silver") {
        document.getElementById("drops").innerHTML = randomDrops(300, 1000, 0.64, 0.84, 0.94, 0.99);
    } else if (tier == "gold") {
        document.getElementById("drops").innerHTML = randomDrops(600, 3000, 0.28, 0.68, 0.88, 0.98);
    } else {
        document.getElementById("drops").innerHTML = randomDrops(1500, 5000, 0.16, 0.26, 0.36, 0.46);
    }
}

// Reset Lootbox Function
function resetLootbox() {
    var tier = document.getElementById("type-of-lootbox").value;
    document.getElementById('lootbox-img').src = `images/${tier} lootbox closed.png`;
    document.getElementById("drops").innerHTML = "";
}

// Random Drops
function randomDrops(goldMin, goldMax, commonChance, rareChance, epicChance, legendaryChance) {
    let goldAmount = randomInt(goldMin, goldMax);
    let randNum = Math.random();
    if (randNum < commonChance) {
        return "<br /> <br />" + goldAmount + " Gold <br />" + commonItems[randomInt(0, commonItems.length - 1)];
    } else if (randNum < rareChance) {
        return "<br /> <br />" + goldAmount + " Gold <br />" + rareItems[randomInt(0, rareItems.length - 1)];
    } else if (randNum < epicChance) {
        return "<br /> <br />" + goldAmount + " Gold <br />" + epicItems[randomInt(0, epicItems.length - 1)];
    } else if (randNum < legendaryChance) {
        return "<br /> <br />" + goldAmount + " Gold <br />" + legendaryItems[randomInt(0, legendaryItems.length - 1)];
    } else {
        return "<br /> <br />" + goldAmount + " Gold <br />" + mythicalItems[randomInt(0, mythicalItems.length - 1)];
    }

}