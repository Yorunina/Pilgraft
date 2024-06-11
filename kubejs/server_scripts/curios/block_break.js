BlockEvents.broken(event => {
    let player = event.player
    if (!player instanceof $ServerPlayer) return
    let curiosList = getEquippedCuriosByPriority(player)
    curiosList.forEach(curios => {
        let extraContext = new CuriosExtraContext().setCurios(curios)
        let itemIdStr = curios.id.toString()
        if (curiosBlockBrokenStrategies[itemIdStr]) {
            curiosBlockBrokenStrategies[itemIdStr](event, extraContext)
        }
    })
})


/**
 * 方块破坏策略
 * @constant
 * @type {Object<string,function(Internal.BlockBrokenEventJS, CuriosExtraContext):void>}
 */
const curiosBlockBrokenStrategies = {
    'kubejs:lava_mood_stone': function (event, ecxt) {

    },
}