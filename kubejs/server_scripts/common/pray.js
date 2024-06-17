// priority: 100
NetworkEvents.dataReceived(global.NET_PRAY_KEY, event => {
    /**@type {Internal.ServerPlayer} */
    let player = event.player
    if (!player instanceof $ServerPlayer) return
    player.triggerAnimation('kubejs:bow', 1, 'linear', true, false)
})