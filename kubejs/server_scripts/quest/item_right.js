// priority: 100
ItemEvents.entityInteracted('minecraft:stick', event => {
    $StartDialog['loadDialog(net.minecraft.world.entity.player.Player,java.lang.String,net.minecraft.world.entity.Entity)'](event.player, 'questapi.example_dialog', event.target)
})


