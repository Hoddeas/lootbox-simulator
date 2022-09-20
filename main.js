// Lootbox Simulator

// Tier Variable
var tier = document.getElementById("type-of-lootbox").value;

// Item Arrays
var commonItems = ["Leather Boots (Common)", "Leather Chestplate (Common)", "Leather Leggings (Common)", "Wooden Sword (Common)", "Starter Bow (Common)"];
var rareItems = ["Iron Katana (Rare)", "Iron Bodyplate (Common)", "Hunter's Bow (Rare)", "Beserker's Axe (Rare)", "Ogre Hide Boots (Rare)", "Iron Leggings (Rare)"];
var epicItems = ["Mythril Leggings (Epic)", "Adamtium Bow (Epic)", "11 Element Greatsword (Epic)", "Adaptanium Boots (Epic)", "Tungsten Chestplate (Epic)"];
var legendaryItems = ["Dragonslayer Bow (Legendary)", "Reaper's Grimly Scythe (Legendary)", "Star-forged Indestructium Spear (Legendary)", "Wyvern-hide Boots (Legendary)", "Basilisk Scale Chestplate (Legendary)", "Gorgon's Obsidian Leggings (Legendary)"];
var mythicalItems = ["Hades' Ghastly Bow (Mythical)", "Haphaestus' Golden Leggings (Mythical)", "God Slaying Sword (Mythical)", "Hades' Swift Sandals (Mythical)", "Ares' Crested Chestplate (Mythical)"];

// If Reset Lootbox is Clicked
document.getElementById("reset").addEventListener("click", resetLootbox);


