WorldgenEvents.remove((event) => {
    event.removeOres(ores => {
        ores.blocks = ['minecraft:copper_ore', 'minecraft:deepslate_coal_ore', 'minecraft:redstone_ore', 'minecraft:deepslate_emerald_ore', 'minecraft:nether_quartz_ore', 'minecraft:deepslate_gold_ore', 'minecraft:emerald_ore', 'minecraft:lapis_ore', 'minecraft:deepslate_lapis_ore', 'minecraft:diamond_ore', 'minecraft:deepslate_diamond_ore', 'minecraft:coal_ore', 'minecraft:iron_ore', 'minecraft:deepslate_iron_ore', 'minecraft:deepslate_copper_ore', 'minecraft:gold_ore', 'minecraft:deepslate_redstone_ore', 'minecraft:nether_gold_ore']
    });
});