StartupEvents.registry('item', event => {
    event.createCustom('test_bait', () => {
        return new $BaitItem(3, 10)
    })

    event.createCustom('test_hook', () => {
        let hookBuilder = new $HookBuilder(null)
            .setColor($ChatFormatting.DARK_GRAY)
            .setDoubleCatchChance(0.10)
            .build()
        return new $HookItem(hookBuilder)
    })

    event.createCustom('test_rod', () => {
        return new $AquaFishingRodItem($Tiers.IRON, new $Properties().defaultDurability(888))
    })

    event.createCustom('test_fish', () => {
        return new $FishItem($FishItem.LARGE_FISH_RAW)
    })
})