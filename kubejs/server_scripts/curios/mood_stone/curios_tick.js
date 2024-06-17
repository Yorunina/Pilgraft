/**
 * 归乡心石
 * 每前往N个生态群系，锁定一次生成宝箱的稀有度
 * 但是只有最后3个生态群系影响宝箱特殊战利品的类型
 * 宝箱的物品 = 常规战利品（受锁定的稀有度影响） + 特殊战利品（受类型和各种条件影响）
 * @param {Internal.ItemStack} item 
 * @param {Internal.SlotContext} slotContext 
 */
global.WayHomeStoneTick = (item, slotContext) => {
    let player = slotContext.entity()
    if (player.age % 20 != 0) return
    if (!player.isPlayer()) return
    updateWayHomeStoneTick(slotContext)
}

/**
 * @param {Internal.ItemStack} itemFrom 
 * @param {Internal.SlotContext} slotContext 
 * @param {Internal.ItemStack} itemTo 
 */
global.WayHomeStoneOnEquip = (itemFrom, slotContext, itemTo) => {
    let player = slotContext.entity()
    if (!player.isPlayer()) return
    initPlayerCompound(player)
    initWayHomeStoneBar(player)
}


/**
 * @param {Internal.ItemStack} itemFrom 
 * @param {Internal.SlotContext} slotContext 
 * @param {Internal.ItemStack} itemTo 
 */
global.WayHomeStoneOnUnequip = (itemFrom, slotContext, itemTo) => {
    let player = slotContext.entity()
    if (!player.isPlayer()) return
    disableWayHomeStoneBar(player)
}


/**
 * @param {Internal.ServerPlayer} player 
 * @returns 
 */
function initWayHomeStoneBar(player) {
    let moodStoneData = player.persistentData.getCompound(MoodStoneDataKey)
    if (!moodStoneData) return
    let wayHomeStoneData = moodStoneData.getCompound(WayHomeStoneDataKey)
    if (!wayHomeStoneData) return
    /**@type {string[]} */
    let biomeList = wayHomeStoneData.getList(BiomeListDataKey)
    if (!biomeList) return
    // 获取玩家归家渴望属性作为造访上界
    let wayHomeLongingAttr = player.getAttribute('kubejs:way_home_longing')
    let barPercent = Math.min(biomeList.length / wayHomeLongingAttr, 1)
    // 是否可见
    let visible = true
    // 展示当前造访生态群系和造访下限，只有满足造访上限才能激活
    player.paint({
        wayHomeLongingBackGround: {
            type: 'rectangle',
            x: 11,
            y: '-$screenH/2+49',
            w: 22,
            h: 101,
            alignX: 'left',
            alignY: 'bottom',
            texture: 'kubejs:textures/gui/mood_stone/way_home_background.png',
            visible: visible
        },
        wayHomeLongingOverlay: {
            type: 'rectangle',
            x: 11,
            y: '-$screenH/2+49',
            v0: 1 - barPercent,
            v1: 1,
            w: 11,
            h: 101 * barPercent,
            alignX: 'left',
            alignY: 'bottom',
            texture: 'kubejs:textures/gui/mood_stone/way_home_overlay.png',
            visible: visible
        }
    })
}


/**
 * @param {Internal.ServerPlayer} player 
 * @returns 
 */
function disableWayHomeStoneBar(player) {
    // 是否可见
    let visible = false
    player.paint({
        wayHomeLongingBackGround: {
            visible: visible
        },
        wayHomeLongingOverlay: {
            visible: visible
        }
    })
}

/**
 * @param {Internal.ServerPlayer} player 
 * @returns 
 */
function initPlayerCompound(player) {
    let moodStoneData = player.persistentData.getCompound(MoodStoneDataKey)
    if (!moodStoneData) moodStoneData = player.persistentData.put(MoodStoneDataKey, {})
    let wayHomeStoneData = moodStoneData.getCompound(WayHomeStoneDataKey)
    if (!wayHomeStoneData) wayHomeStoneData = moodStoneData.put(WayHomeStoneDataKey, {})
    let biomeList = wayHomeStoneData.getList(BiomeListDataKey)
    if (!biomeList) wayHomeStoneData = wayHomeStoneData.put(BiomeListDataKey, [])
}
