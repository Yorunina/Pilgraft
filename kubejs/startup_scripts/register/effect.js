StartupEvents.registry('mob_effect', event => {
    event.create('kubejs:satiety')
        .beneficial()
        .effectTick((entity, amplifier) => {
            if (!entity instanceof $ServerPlayer || entity.level.isClientSide()) return
            /** @type {Internal.ServerPlayer} */
            let player = entity
            if (player.age % 60 != 0) return
            player.saturation += (amplifier + 1) * 0.5
            player.foodLevel += (amplifier + 1) * 0.5
        })
        .color('#e3e856')
})