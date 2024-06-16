StartupEvents.registry('minecraft:item', event => {
    event.create('way_home')
        .texture('kubejs:item/curios/way_home')
        .maxStackSize(1)
        .tag('curios:mood')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
            .curioTick((item, slotContext) => {
                if (slotContext.entity().level.isClientSide()) return
                global.WayHomeStoneTick(item, slotContext)
            })
            .onEquip((itemFrom, slotContext, itemTo) => {
                if (slotContext.entity().level.isClientSide()) return
                global.WayHomeStoneOnEquip(itemFrom, slotContext, itemTo)
            })
            .onUnequip((itemFrom, slotContext, itemTo) => {
                if (slotContext.entity().level.isClientSide()) return
                global.WayHomeStoneOnUnequip(itemFrom, slotContext, itemTo)
            })
        )
})
