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
    document.getElementById("drops").innerHTML = randomDrops(0, 500);
}

// Reset Lootbox Function
function resetLootbox() {
    var tier = document.getElementById("type-of-lootbox").value;
    document.getElementById('lootbox-img').src = `images/${tier} lootbox closed.png`;
    document.getElementById("drops").innerHTML = "";
}

// Random Drops
function randomDrops(goldMin, goldMax, commonChance, rareChance, epicChance, legendaryChance, mythicalChance) {
    let goldAmount = randomInt(goldMin, goldMax);
    return "+" + goldAmount + " Gold";
}