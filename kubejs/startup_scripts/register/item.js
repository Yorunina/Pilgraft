const $BaitItem = Java.loadClass('com.teammetallurgy.aquaculture.item.BaitItem')

const $HookItem = Java.loadClass('com.teammetallurgy.aquaculture.item.HookItem')
const $HookBuilder = Java.loadClass('com.teammetallurgy.aquaculture.api.fishing.Hook$HookBuilder')

StartupEvents.registry('item', event => {
    event.createCustom('test_bait', () => {
        return new $BaitItem(3, 10)
    })

    event.createCustom('test_hook', () => {
        let hook = new $HookBuilder('test_hook')
            .setColor($ChatFormatting.DARK_GRAY)
            .setDoubleCatchChance(0.10)
            .build()
        return new $HookItem(hook)
    })
})