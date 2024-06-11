StartupEvents.registry('minecraft:item', event => {
    event.create('golden_ring')
        .texture('kubejs:item/golden_ring')
        .maxStackSize(1)
        .tag('curios:ring')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true))
})

