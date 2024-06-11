
ServerEvents.revelation(event => {
    event.register('kubejs:ability/ore_view', revBuilder => {
        revBuilder
            .cloakBlockState('minecraft:coal_ore', 'minecraft:stone')
            .cloakBlockState('minecraft:deepslate_coal_ore', 'minecraft:deepslate')
            .cloakBlockState('minecraft:iron_ore', 'minecraft:stone')
            .cloakBlockState('minecraft:deepslate_iron_ore', 'minecraft:deepslate')
            .cloakBlockState('minecraft:copper_ore', 'minecraft:stone')
            .cloakBlockState('minecraft:deepslate_copper_ore', 'minecraft:deepslate')
            .cloakBlockState('minecraft:redstone_ore', 'minecraft:stone')
            .cloakBlockState('minecraft:deepslate_redstone_ore', 'minecraft:deepslate')
            .cloakBlockState('minecraft:emerald_ore', 'minecraft:stone')
            .cloakBlockState('minecraft:deepslate_emerald_ore', 'minecraft:deepslate')
            .cloakBlockState('minecraft:gold_ore', 'minecraft:stone')
            .cloakBlockState('minecraft:deepslate_gold_ore', 'minecraft:deepslate')
            .cloakBlockState('minecraft:lapis_ore', 'minecraft:stone')
            .cloakBlockState('minecraft:deepslate_lapis_ore', 'minecraft:deepslate')
            .cloakBlockState('minecraft:diamond_ore', 'minecraft:stone')
            .cloakBlockState('minecraft:deepslate_diamond_ore', 'minecraft:deepslate')
    })
})