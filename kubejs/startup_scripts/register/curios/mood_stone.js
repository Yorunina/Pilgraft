StartupEvents.registry('minecraft:item', event => {
    event.create('lava_mood_stone')
        .texture('kubejs:item/curios/lava_mood_stone')
        .maxStackSize(1)
        .tag('curios:mood')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true)
        )
})
