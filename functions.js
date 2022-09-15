// Change Lootbox Function
function changeLootbox() {
    var tier = document.getElementById("type-of-lootbox").value;
    document.getElementById('lootbox-img').src = `images/${tier} lootbox closed.png`;
    document.getElementById("drops").innerHTML = "";
}

// On click
function openLootbox() {
    var tier = document.getElementById("type-of-lootbox").value;
    document.getElementById('lootbox-img').src = `images/${tier} lootbox open.png`;
    document.getElementById("drops").innerHTML = randomDrops();
}