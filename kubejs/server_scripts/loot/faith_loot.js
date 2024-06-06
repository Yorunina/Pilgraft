// priority: 100
LootJS.modifiers(event => {
    event.addLootTableModifier('kubejs:faith_chest_loot')
    .apply(ctx => {
        /**@type {Internal.ServerPlayer} */
        let player = ctx.entity.player
    })
})
